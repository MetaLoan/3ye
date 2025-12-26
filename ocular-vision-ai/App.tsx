
import React, { useState, useRef } from 'react';
import { EyeEffectType, GeminiAura } from './types';
import Visualizer, { VisualizerHandle } from './components/Visualizer';
import ControlPanel from './components/ControlPanel';
import { analyzeAura } from './services/geminiService';

const App: React.FC = () => {
  const [effect, setEffect] = useState<EyeEffectType>(EyeEffectType.SCANNER);
  const [isCapturing, setIsCapturing] = useState(false);
  const [aura, setAura] = useState<GeminiAura | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showUI, setShowUI] = useState(true);
  const visualizerRef = useRef<VisualizerHandle>(null);

  const handleStart = () => setIsCapturing(true);
  
  const handleAnalyze = async () => {
    if (!visualizerRef.current) return;
    
    setIsAnalyzing(true);
    const frame = visualizerRef.current.getFrame();
    
    if (frame) {
      const analysis = await analyzeAura(frame);
      setAura(analysis);
    } else {
      // Fallback
      setAura({
        title: "Undefined Essence",
        color: "#ffffff",
        description: "The link was momentarily unstable, reflecting a transient soul state."
      });
    }
    
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-15%] right-[-15%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-white/5 rounded-full scale-[1.5] pointer-events-none"></div>
      </div>

      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-slate-950/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-white/10">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-[0.15em] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              OCULAR VISION AI
            </h1>
            <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase -mt-1">Neural Tracking System v3.1</p>
          </div>
        </div>
        <button 
          onClick={() => setShowUI(!showUI)}
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition-all text-[10px] font-bold uppercase tracking-[0.2em]"
        >
          <span className={`w-1.5 h-1.5 rounded-full ${showUI ? 'bg-green-500' : 'bg-slate-600'}`}></span>
          {showUI ? 'UI_ONLINE' : 'UI_OFFLINE'}
        </button>
      </header>

      <main className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-stretch justify-center mt-20">
        
        {/* Main Viewport */}
        <div className="flex-1 w-full flex flex-col gap-6">
          <div className="relative aspect-video rounded-3xl border border-white/10 bg-black/40 shadow-2xl overflow-hidden backdrop-blur-sm">
            {!isCapturing ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-12 text-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border border-blue-500/20 animate-[ping_3s_infinite]"></div>
                  <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-dashed border-blue-500/50 animate-[spin_15s_linear_infinite] flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-blue-400/80 animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl font-black mb-4 tracking-tighter">ESTABLISH LINK</h2>
                  <p className="text-slate-400 max-w-sm mx-auto text-sm leading-relaxed">
                    Connect your ocular data stream to the neural cloud. Real-time iris tracking and Gemini-powered aura analysis will commence.
                  </p>
                </div>
                <button 
                  onClick={handleStart}
                  className="group relative px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black tracking-widest shadow-2xl shadow-blue-900/40 transition-all active:scale-95 flex items-center gap-3"
                >
                   <div className="absolute -inset-1 bg-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  INITIALIZE NEURAL FEED
                </button>
              </div>
            ) : (
              <Visualizer ref={visualizerRef} effect={effect} isAnalyzing={isAnalyzing} />
            )}

            {/* In-view HUD */}
            {isCapturing && showUI && (
              <div className="absolute top-6 left-6 flex flex-col gap-3 pointer-events-none">
                <div className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-mono flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${isAnalyzing ? 'bg-purple-500 animate-ping' : 'bg-green-500 animate-pulse'}`}></span>
                  <span className="text-slate-300 uppercase tracking-widest font-bold">
                    {isAnalyzing ? 'AURA_SCAN_IN_PROGRESS' : 'EYE_TRACKING: 60FPS_LOCKED'}
                  </span>
                </div>
                {!isAnalyzing && (
                  <div className="flex gap-2">
                    <div className="h-1 w-12 bg-blue-500/30 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 w-2/3 animate-[shimmer_2s_infinite]"></div>
                    </div>
                    <div className="h-1 w-8 bg-blue-500/30 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 w-1/3 animate-[shimmer_2s_infinite_delay-200]"></div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Aura Results */}
          {aura && showUI && !isAnalyzing && (
            <div className="relative group bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 animate-in slide-in-from-bottom-8 fade-in duration-700 overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none -translate-y-1/2 translate-x-1/2 rounded-full blur-[80px]"
                style={{ backgroundColor: aura.color }}
              ></div>
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center border-2 rotate-3" 
                  style={{ borderColor: `${aura.color}40`, backgroundColor: `${aura.color}10`, boxShadow: `0 0 30px ${aura.color}20` }}
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: aura.color }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black mb-1">Deciphered Ocular Aura</p>
                  <h3 className="text-3xl font-black mb-2 tracking-tight" style={{ color: aura.color }}>{aura.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed italic max-w-2xl font-medium select-none">
                    "{aura.description}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Controls */}
        {showUI && (
          <aside className="w-full lg:w-96 flex flex-col gap-6 animate-in slide-in-from-right-8 fade-in duration-700">
            <ControlPanel 
              currentEffect={effect} 
              onEffectChange={setEffect} 
              onAnalyze={handleAnalyze} 
              isAnalyzing={isAnalyzing}
              isActive={isCapturing}
            />
            
            <div className="p-8 bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-[2rem]">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">System Logs</h4>
                <div className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-[9px] font-mono">LIVE_FEED</div>
              </div>
              <div className="space-y-4 font-mono text-[11px]">
                <div className="flex justify-between items-center group">
                  <span className="text-slate-500 group-hover:text-slate-300 transition-colors uppercase">Vision Kernel</span>
                  <span className="text-blue-400 font-bold">FaceMesh_v4.2</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-slate-500 group-hover:text-slate-300 transition-colors uppercase">Points of Interest</span>
                  <span className="text-blue-400 font-bold">478_IRIS_ENABLED</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-slate-500 group-hover:text-slate-300 transition-colors uppercase">Neural Latency</span>
                  <span className="text-blue-400 font-bold">12ms_STABLE</span>
                </div>
                <div className="pt-4">
                  <div className="w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full w-[92%] animate-[shimmer_3s_infinite]"></div>
                  </div>
                  <p className="text-[9px] text-right mt-2 text-slate-600 font-bold uppercase tracking-widest">Memory Efficiency: 92%</p>
                </div>
              </div>
            </div>
          </aside>
        )}
      </main>

      {/* Footer Info */}
      <footer className="mt-16 text-slate-700 text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-4">
        <span>Ocular Intelligence</span>
        <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
        <span>Neural Rendering</span>
        <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
        <span>Gemini 3 Enhanced</span>
      </footer>
    </div>
  );
};

export default App;
