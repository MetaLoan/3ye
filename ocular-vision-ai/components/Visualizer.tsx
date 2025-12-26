
import React, { useRef, useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import { EyeEffectType } from '../types';

interface VisualizerProps {
  effect: EyeEffectType;
  isAnalyzing?: boolean;
}

export interface VisualizerHandle {
  getFrame: () => string | null;
}

const Visualizer = forwardRef<VisualizerHandle, VisualizerProps>(({ effect, isAnalyzing = false }, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadingStatus, setLoadingStatus] = useState<string>("WAITING_FOR_LIBS");
  const [error, setError] = useState<string | null>(null);

  const lastHandResults = useRef<any>(null);
  const lastFaceResults = useRef<any>(null);
  const requestRef = useRef<number>(null);

  const LEFT_IRIS_CENTER = 468;
  const RIGHT_IRIS_CENTER = 473;
  const LEFT_IRIS_RIM = [469, 470, 471, 472];
  const RIGHT_IRIS_RIM = [474, 475, 476, 477];

  useImperativeHandle(ref, () => ({
    getFrame: () => {
      if (!canvasRef.current) return null;
      return canvasRef.current.toDataURL('image/jpeg', 0.8).split(',')[1];
    }
  }));

  useEffect(() => {
    let faceMesh: any = null;
    let hands: any = null;
    let stream: MediaStream | null = null;
    let isActive = true;

    // Helper to wait for global variables to be defined (MediaPipe scripts)
    const waitForLibs = async (maxRetries = 20): Promise<boolean> => {
      for (let i = 0; i < maxRetries; i++) {
        const fm = (window as any).FaceMesh;
        const h = (window as any).Hands;
        if (fm && h) return true;
        await new Promise(r => setTimeout(r, 500));
        setLoadingStatus(`WAITING_FOR_RESOURCES (${i + 1}/${maxRetries})`);
      }
      return false;
    };

    const init = async () => {
      try {
        const libsReady = await waitForLibs();
        if (!libsReady) {
          throw new Error("MEDIAPIPE_LIBS_NOT_FOUND");
        }

        setLoadingStatus("LINKING_CAMERA");
        const constraints = {
          video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: 'user' },
          audio: false
        };
        
        try {
          stream = await navigator.mediaDevices.getUserMedia(constraints);
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            await videoRef.current.play();
          }
        } catch (camErr) {
          console.error("Camera error:", camErr);
          throw new Error("CAMERA_ACCESS_DENIED");
        }

        const FaceMesh = (window as any).FaceMesh;
        const Hands = (window as any).Hands;

        // --- 1. Load FaceMesh ---
        setLoadingStatus("LOADING_FACE_CORE");
        faceMesh = new FaceMesh({
          locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
        });
        faceMesh.setOptions({
          maxNumFaces: 1,
          refineLandmarks: true,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5
        });
        faceMesh.onResults((results: any) => {
          lastFaceResults.current = results;
          if (loadingStatus !== "READY") setLoadingStatus("READY");
        });

        // --- 2. Load Hands ---
        setLoadingStatus("LOADING_NEURAL_LIMBS");
        hands = new Hands({
          locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
        });
        hands.setOptions({
          maxNumHands: 2,
          modelComplexity: 1,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5
        });
        hands.onResults((results: any) => {
          lastHandResults.current = results;
        });

        // Warm up models
        setLoadingStatus("SYNCHRONIZING_FLUX");
        if (videoRef.current && videoRef.current.readyState >= 2) {
          await faceMesh.send({ image: videoRef.current });
          await hands.send({ image: videoRef.current });
        }

        // --- 3. Processing Loop ---
        const process = async () => {
          if (!isActive || !videoRef.current || videoRef.current.paused) {
            requestRef.current = requestAnimationFrame(process);
            return;
          }

          try {
            // Sequential await to prevent "Aborted" error caused by shared Module in older MediaPipe
            await faceMesh.send({ image: videoRef.current });
            await hands.send({ image: videoRef.current });
            render();
          } catch (e: any) {
            console.error("Frame processing error:", e);
            if (e?.message?.includes('Aborted') || e?.message?.includes('arguments_')) {
               console.warn("Module conflict detected, attempting graceful recovery...");
               // In case of Aborted error, we often must reload as Emscripten state is corrupted
               window.location.reload();
            }
          }
          requestRef.current = requestAnimationFrame(process);
        };

        requestRef.current = requestAnimationFrame(process);

      } catch (err: any) {
        console.error("Initialization sequence failed:", err);
        if (err.message === "MEDIAPIPE_LIBS_NOT_FOUND") {
          setError("核心组件加载超时。请检查网络连接或刷新页面。");
        } else if (err.message === "CAMERA_ACCESS_DENIED") {
          setError("无法访问摄像头。请确保权限已开启且未被其他应用占用。");
        } else {
          setError("系统初始化异常: " + err.message);
        }
      }
    };

    const render = () => {
      if (!canvasRef.current || !videoRef.current || !isActive) return;
      const ctx = canvasRef.current.getContext('2d', { alpha: false });
      if (!ctx) return;

      const cw = canvasRef.current.width;
      const ch = canvasRef.current.height;

      ctx.save();
      ctx.clearRect(0, 0, cw, ch);
      
      // Mirror video frame
      ctx.drawImage(videoRef.current, 0, 0, cw, ch);

      // Draw Face
      if (lastFaceResults.current?.multiFaceLandmarks?.length > 0) {
        const landmarks = lastFaceResults.current.multiFaceLandmarks[0];
        if (isAnalyzing) drawGlitchOverlay(ctx);
        drawEyeWithEffect(ctx, landmarks, LEFT_IRIS_CENTER, LEFT_IRIS_RIM, effect);
        drawEyeWithEffect(ctx, landmarks, RIGHT_IRIS_CENTER, RIGHT_IRIS_RIM, effect);
      }

      // Draw Hands
      if (lastHandResults.current?.multiHandLandmarks) {
        lastHandResults.current.multiHandLandmarks.forEach((hl: any, idx: number) => {
          const label = lastHandResults.current.multiHandedness?.[idx]?.label || "Hand";
          drawHandSkeleton(ctx, hl, label);
        });
      }
      ctx.restore();
    };

    init();

    return () => {
      isActive = false;
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (stream) stream.getTracks().forEach(t => t.stop());
      if (faceMesh) try { faceMesh.close(); } catch(e){}
      if (hands) try { hands.close(); } catch(e){}
    };
  }, [effect, isAnalyzing]);

  // --- Rendering Helpers ---

  const drawHandSkeleton = (ctx: CanvasRenderingContext2D, landmarks: any[], label: string) => {
    const cw = canvasRef.current!.width;
    const ch = canvasRef.current!.height;
    const connections = [
      [0,1],[1,2],[2,3],[3,4], [0,5],[5,6],[6,7],[7,8], 
      [0,9],[9,10],[10,11],[11,12], [0,13],[13,14],[14,15],[15,16],
      [0,17],[17,18],[18,19],[19,20], [5,9],[9,13],[13,17]
    ];
    ctx.save();
    ctx.strokeStyle = label === 'Left' ? '#00f2ff' : '#f472b6';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 15;
    ctx.shadowColor = ctx.strokeStyle;
    connections.forEach(([i, j]) => {
      ctx.beginPath();
      ctx.moveTo(landmarks[i].x * cw, landmarks[i].y * ch);
      ctx.lineTo(landmarks[j].x * cw, landmarks[j].y * ch);
      ctx.stroke();
    });
    landmarks.forEach((p, idx) => {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(p.x * cw, p.y * ch, idx === 0 ? 6 : 3, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();
  };

  const drawGlitchOverlay = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = `rgba(168, 85, 247, ${Math.random() * 0.15})`;
    ctx.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
  };

  const drawEyeWithEffect = (ctx: CanvasRenderingContext2D, landmarks: any[], centerIdx: number, rimIdxs: number[], effectType: EyeEffectType) => {
    const center = landmarks[centerIdx];
    if (!center) return;
    const cw = canvasRef.current!.width;
    const ch = canvasRef.current!.height;
    const x = center.x * cw;
    const y = center.y * ch;
    const p1 = landmarks[rimIdxs[0]];
    const radius = Math.sqrt(Math.pow((p1.x - center.x) * cw, 2) + Math.pow((p1.y - center.y) * ch, 2));

    ctx.save();
    if (isAnalyzing) {
      drawSharingan(ctx, x, y, radius, true);
    } else {
      switch (effectType) {
        case EyeEffectType.CYBER_RINGS: drawCyberRings(ctx, x, y, radius); break;
        case EyeEffectType.NEON_GLOW: drawNeonGlow(ctx, x, y, radius); break;
        case EyeEffectType.VOID_EATER: drawVoidEater(ctx, x, y, radius); break;
        case EyeEffectType.SHARINGAN: drawSharingan(ctx, x, y, radius, false); break;
        case EyeEffectType.GALAXY: drawGalaxy(ctx, x, y, radius); break;
        case EyeEffectType.SCANNER: drawScanner(ctx, x, y, radius); break;
        case EyeEffectType.CHRONOS: drawChronos(ctx, x, y, radius); break;
        case EyeEffectType.DRAGON: drawDragonEye(ctx, x, y, radius); break;
      }
    }
    ctx.restore();
  };

  const drawScanner = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
    const time = Date.now();
    const scanY = y + (Math.sin(time / 400) * r * 4);
    ctx.strokeStyle = '#22c55e';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#22c55e';
    ctx.beginPath();
    ctx.moveTo(x - r * 5, scanY);
    ctx.lineTo(x + r * 5, scanY);
    ctx.stroke();
  };

  const drawSharingan = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number, isRapid: boolean) => {
    const time = Date.now();
    const angleOffset = (time / (isRapid ? 200 : 1200)) % (Math.PI * 2);
    ctx.fillStyle = isRapid ? '#ff0000' : '#cc0000';
    ctx.beginPath(); ctx.arc(x, y, r * 1.2, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'black';
    ctx.beginPath(); ctx.arc(x, y, r * 0.4, 0, Math.PI * 2); ctx.fill();
    for (let i = 0; i < 3; i++) {
      const angle = angleOffset + (i * Math.PI * 2 / 3);
      ctx.save();
      ctx.translate(x + Math.cos(angle) * r * 0.8, y + Math.sin(angle) * r * 0.8);
      ctx.rotate(angle + Math.PI / 1.5);
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.bezierCurveTo(r*0.25, -r*0.1, r*0.35, r*0.35, 0, r*0.15); ctx.fill();
      ctx.restore();
    }
  };

  const drawCyberRings = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
    const time = Date.now() / 800;
    ctx.strokeStyle = '#00f2ff';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(x, y, r * 2.2, time * 2.5, time * 2.5 + Math.PI * 0.7); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, r * 2.6, -time * 1.5, -time * 1.5 + Math.PI * 0.5); ctx.stroke();
  };

  const drawNeonGlow = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
    const g = ctx.createRadialGradient(x, y, r * 0.2, x, y, r * 3.5);
    g.addColorStop(0, 'rgba(0, 255, 255, 0.8)');
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, r * 4, 0, Math.PI * 2); ctx.fill();
  };

  const drawVoidEater = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
    ctx.fillStyle = 'black';
    ctx.beginPath(); ctx.arc(x, y, r * 1.4, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 2;
    for (let i = 0; i < 12; i++) {
        const angle = (Date.now() / 500) + (i * Math.PI / 6);
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(angle) * r * 0.8, y + Math.sin(angle) * r * 0.8);
        ctx.lineTo(x + Math.cos(angle) * r * 2.8, y + Math.sin(angle) * r * 2.8);
        ctx.stroke();
    }
  };

  const drawGalaxy = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r * 1.8);
    g.addColorStop(0, '#ffffff');
    g.addColorStop(0.4, '#6366f1');
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, r * 1.8, 0, Math.PI * 2); ctx.fill();
  };

  const drawChronos = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
    ctx.strokeStyle = '#fbbf24';
    ctx.beginPath(); ctx.arc(x, y, r * 3, 0, Math.PI * 2); ctx.stroke();
    const a = (Date.now() / 800) % (Math.PI * 2);
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * r * 2.6, y + Math.sin(a) * r * 2.6); ctx.stroke();
  };

  const drawDragonEye = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
    const g = ctx.createRadialGradient(x, y, r * 0.1, x, y, r * 1.3);
    g.addColorStop(0, '#ffcc00');
    g.addColorStop(1, '#ff4400');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, r * 1.3, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'black';
    ctx.beginPath(); ctx.ellipse(x, y, r * 0.25, r * 1.1, 0, 0, Math.PI * 2); ctx.fill();
  };

  const isReady = loadingStatus === "READY";

  return (
    <div className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center">
      <video ref={videoRef} className="hidden" playsInline muted autoPlay />
      <canvas ref={canvasRef} width={1280} height={720} className="max-w-full max-h-full object-contain" />
      
      {!isReady && !error && (
        <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center gap-6 z-20">
          <div className="relative w-24 h-24">
             <div className="absolute inset-0 border-4 border-blue-600/10 rounded-full"></div>
             <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
             <div className="absolute inset-4 border-2 border-purple-500/20 rounded-full"></div>
             <div className="absolute inset-4 border-2 border-purple-500 border-b-transparent rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
          </div>
          <div className="text-center space-y-2 px-6">
            <p className="text-blue-400 font-mono text-xs tracking-[0.3em] animate-pulse">{loadingStatus}...</p>
            <p className="text-slate-500 text-[9px] uppercase tracking-widest font-bold">Synchronizing Neural Channels & Ocular Flux</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-8 text-center z-30">
          <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-white mb-2 tracking-tight uppercase">Terminal Error</h3>
          <p className="text-slate-400 text-xs max-w-xs mb-8 leading-relaxed tracking-wider font-medium">{error}</p>
          <button onClick={() => window.location.reload()} className="px-10 py-4 bg-white text-black hover:bg-slate-200 rounded-2xl text-[10px] font-black tracking-[0.2em] transition-all uppercase active:scale-95 shadow-xl shadow-white/5">
            Reset System Link
          </button>
        </div>
      )}
    </div>
  );
});

export default Visualizer;
