"use client"

import { useEffect, useRef, useState } from "react"
import { CalendarDays, Droplets, Sparkles, User, UserRound, Camera, RefreshCw, CheckCircle2, Scan } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { BottomNav } from "@/components/bottom-nav"
import { InkRevealText } from "@/components/ink-reveal-text"
import { OracleInteractiveEye } from "@/components/oracle-interactive-eye"
import { SolarSystem } from "@/components/solar-system"
import { cn } from "@/lib/utils"

// 自定义十二星座线性图标组件
const ZodiacIcons = {
  Aries: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 21c0-4.5 0-9 0-9m0 0c0-3 2-5 5-5s5 2 5 5m-10 0c0-3-2-5-5-5s-5 2-5 5" />
    </svg>
  ),
  Taurus: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="14" r="6" />
      <path d="M5 4c1 4 3 6 7 6s6-2 7-6" />
    </svg>
  ),
  Gemini: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2m10-16a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2M4 4h16M4 20h16" />
    </svg>
  ),
  Cancer: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="16" cy="7" r="3" />
      <circle cx="8" cy="17" r="3" />
      <path d="M19 10c-3 0-6 2-7 5m-7-3c3 0 6-2 7-5" />
    </svg>
  ),
  Leo: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6" cy="17" r="3" />
      <path d="M8.5 15c1-3 4-5 7-3s3 5 0 8m0-13c2 0 4 2 4 4s-2 4-4 4" />
    </svg>
  ),
  Virgo: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 4v12a3 3 0 0 0 6 0V4m0 12a3 3 0 0 0 6 0V4m0 12c0 2 1 4 3 4" />
      <path d="M11 4h1m-7 0h1" />
    </svg>
  ),
  Libra: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 20h14M5 16h14m-7-4c-3 0-5-2-5-5h10c0 3-2 5-5 5z" />
    </svg>
  ),
  Scorpio: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 4v10a2 2 0 0 0 4 0V4m0 10a2 2 0 0 0 4 0V4m0 10a2 2 0 0 0 4 0m0 0c0 2 1 3 3 3" />
      <path d="M17 17l2 2m-2 0l2-2" />
    </svg>
  ),
  Sagittarius: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 20L20 4m0 0h-7m7 0v7M7 13l4 4" />
    </svg>
  ),
  Capricorn: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 5l4 14 4-8c1-2 4-2 4 0s-2 6-2 8 2 2 4 0" />
    </svg>
  ),
  Aquarius: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 10l3-3 4 4 3-3 4 4 2-2M4 17l3-3 4 4 3-3 4 4 2-2" />
    </svg>
  ),
  Pisces: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 12c5 0 8-3 8-8m0 16c0-5 3-8 8-8M12 4v16m-8 0c0-5 3-8 8-8m0 0c5 0 8 3 8 8" />
    </svg>
  ),
}

// 通用 Material Symbol 图标组件
const MaterialIcon = ({ name, className = "" }: { name: string; className?: string }) => (
  <span 
    className={cn("material-symbols-outlined", className)}
    style={{ 
      fontSize: '32px',
      color: 'inherit',
      fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24"
    }}
  >
    {name}
  </span>
)

// 自定义眼纹线性图标
const EyeIcons = {
  Closed: (props: any) => <MaterialIcon name="visibility_off" {...props} />,
  Open: (props: any) => <MaterialIcon name="visibility" {...props} />,
}

const BirthdayIcon = (props: any) => <MaterialIcon name="calendar_today" {...props} />
const NameIcon = (props: any) => <MaterialIcon name="person" {...props} />
const GenderIconDefault = (props: any) => <MaterialIcon name="person_2" {...props} />
const BloodIcon = (props: any) => <MaterialIcon name="water_drop" {...props} />

type PortalId = "subjectA" | "subjectB"
type FieldKey = "name" | "birthday" | "birthtime" | "soul" | "gender" | "blood"

type NodeConfig = {
  label: string
  field: FieldKey
  icon: any
}

// 星座数据
const zodiacSigns = [
  { name: "Capricorn", icon: ZodiacIcons.Capricorn, start: [1, 1], end: [1, 19] },
  { name: "Aquarius", icon: ZodiacIcons.Aquarius, start: [1, 20], end: [2, 18] },
  { name: "Pisces", icon: ZodiacIcons.Pisces, start: [2, 19], end: [3, 20] },
  { name: "Aries", icon: ZodiacIcons.Aries, start: [3, 21], end: [4, 19] },
  { name: "Taurus", icon: ZodiacIcons.Taurus, start: [4, 20], end: [5, 20] },
  { name: "Gemini", icon: ZodiacIcons.Gemini, start: [5, 21], end: [6, 20] },
  { name: "Cancer", icon: ZodiacIcons.Cancer, start: [6, 21], end: [7, 22] },
  { name: "Leo", icon: ZodiacIcons.Leo, start: [7, 23], end: [8, 22] },
  { name: "Virgo", icon: ZodiacIcons.Virgo, start: [8, 23], end: [9, 22] },
  { name: "Libra", icon: ZodiacIcons.Libra, start: [9, 23], end: [10, 22] },
  { name: "Scorpio", icon: ZodiacIcons.Scorpio, start: [10, 23], end: [11, 21] },
  { name: "Sagittarius", icon: ZodiacIcons.Sagittarius, start: [11, 22], end: [12, 21] },
  { name: "Capricorn", icon: ZodiacIcons.Capricorn, start: [12, 22], end: [12, 31] },
]

function getZodiacFromBirthday(birthday: string): { name: string; icon: any } | null {
  if (!birthday) return null
  const date = new Date(birthday)
  if (isNaN(date.getTime())) return null
  
  const month = date.getMonth() + 1
  const day = date.getDate()
  
  for (const sign of zodiacSigns) {
    const [startMonth, startDay] = sign.start
    const [endMonth, endDay] = sign.end
    
    if (startMonth === endMonth) {
      if (month === startMonth && day >= startDay && day <= endDay) {
        return { name: sign.name, icon: sign.icon }
      }
    } else {
      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
        return { name: sign.name, icon: sign.icon }
      }
    }
  }
  return null
}

const fieldMeta: Record<
  FieldKey,
  {
    label: string
    description: string
    type: "text" | "date" | "time" | "select" | "eye"
    placeholder?: string
    options?: string[]
  }
> = {
  name: { label: "Name", description: "The vessel of identity, carved into the cosmic ledger", type: "text", placeholder: "Enter a name" },
  birthday: { label: "Birthday", description: "The moment your soul descended into this realm", type: "date" },
  birthtime: { label: "Birth Time", description: "The precise alignment of celestial bodies", type: "time", placeholder: "Optional" },
  soul: { label: "Soul", description: "The invisible thread that binds your essence", type: "eye", placeholder: "Capture the soul imprint" },
  gender: { label: "Gender", description: "The energy polarity of your mortal form", type: "select", options: ["Female", "Male", "Non-binary"] },
  blood: { label: "Blood Type", description: "The ancient code flowing through your veins", type: "select", options: ["A", "B", "AB", "O"] },
}

const portalNodes: Record<PortalId, NodeConfig[]> = {
  subjectA: [
    { label: "Name", field: "name", icon: NameIcon },
    { label: "Gender", field: "gender", icon: GenderIconDefault },
    { label: "Birthday", field: "birthday", icon: BirthdayIcon },
    { label: "Soul", field: "soul", icon: EyeIcons.Closed },
    { label: "Blood", field: "blood", icon: BloodIcon },
  ],
  subjectB: [
    { label: "Name", field: "name", icon: NameIcon },
    { label: "Gender", field: "gender", icon: GenderIconDefault },
    { label: "Birthday", field: "birthday", icon: BirthdayIcon },
    { label: "Soul", field: "soul", icon: EyeIcons.Closed },
    { label: "Blood", field: "blood", icon: BloodIcon },
  ],
}

const ringPositions = Array.from({ length: 5 }, (_, index) => {
  const angleDeg = -90 + index * (360 / 5)
  const angleRad = (angleDeg * Math.PI) / 180
  const radius = 32  // Portal slot positions around the ring
  const x = 50 + radius * Math.cos(angleRad)
  const y = 50 + radius * Math.sin(angleRad)
  return {
    top: `${y}%`,
    left: `${x}%`,
    x,
    y,
  }
})

const emptyFields: Record<FieldKey, string> = {
  name: "",
  birthday: "",
  birthtime: "",
  soul: "",
  gender: "",
  blood: "",
}

type PortalRingProps = {
  id: PortalId
  label: string
  codename: string
  invert?: boolean
  activePortal: PortalId
  onActivate: (portal: PortalId) => void
  values: Record<FieldKey, string>
  onSelectField: (portal: PortalId, field: FieldKey) => void
  isResonating: boolean
}

function EyeScanner({ onCapture }: { onCapture: (code: string, image: string) => void }) {
  const [isStarted, setIsStarted] = useState(false)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [loadingStatus, setLoadingStatus] = useState<string>("IDLE")
  const [eyePositions, setEyePositions] = useState<{ left: { x: number, y: number }, right: { x: number, y: number } } | null>(null)
  const [capturePhase, setCapturePhase] = useState<number>(-1) // -1=waiting, 0-4=ritual phrases, 5=captured
  const capturePhaseRef = useRef<number>(-1)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const [capturedEyePositions, setCapturedEyePositions] = useState<{ left: { x: number, y: number }, right: { x: number, y: number } } | null>(null)
  const [soulCode, setSoulCode] = useState<string | null>(null)
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const faceMeshRef = useRef<any>(null)
  const requestRef = useRef<number | null>(null)
  const isActiveRef = useRef(false)
  const eyeDetectedRef = useRef(false)

  // Mystical ritual phrases
  const ritualPhrases = [
    "Gazing through the portal of your soul...",
    "Reading the ancient patterns within your iris...",
    "Decoding the celestial imprint of your essence...",
    "Channeling the ethereal frequencies of your being...",
    "Capturing the infinite depth of your inner cosmos..."
  ]

  const waitingMessage = "Awaiting your gaze... Please let me see both eyes looking into the lens."

  // MediaPipe landmark indices
  const LEFT_IRIS_CENTER = 468
  const RIGHT_IRIS_CENTER = 473

  // Keep ref in sync with state for use in callbacks
  useEffect(() => {
    capturePhaseRef.current = capturePhase
  }, [capturePhase])

  // Phase progression effect - runs when phase changes and eyes are detected
  useEffect(() => {
    // Only progress if eyes are detected and we're in ritual phase (0-4)
    if (!eyeDetectedRef.current || capturePhase < 0 || capturePhase >= ritualPhrases.length || capturedImage) {
      return
    }

    const timer = setTimeout(() => {
      // Double check eyes are still detected
      if (eyeDetectedRef.current) {
        const nextPhase = capturePhase + 1
        if (nextPhase < ritualPhrases.length) {
          setCapturePhase(nextPhase)
        } else {
          // All phrases done - perform capture
          performCapture()
        }
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [capturePhase, capturedImage])

  // Wait for MediaPipe libs
  const waitForLibs = async (maxRetries = 30): Promise<boolean> => {
    for (let i = 0; i < maxRetries; i++) {
      const fm = (window as any).FaceMesh
      if (fm) return true
      await new Promise(r => setTimeout(r, 300))
      setLoadingStatus(`Initializing vision core (${i + 1}/${maxRetries})`)
    }
    return false
  }

  // Load MediaPipe scripts dynamically
  const loadMediaPipeScript = () => {
    return new Promise<void>((resolve, reject) => {
      if ((window as any).FaceMesh) {
        resolve()
        return
      }
      
      const cameraScript = document.createElement('script')
      cameraScript.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js'
      cameraScript.crossOrigin = 'anonymous'
      document.head.appendChild(cameraScript)
      
      const drawingScript = document.createElement('script')
      drawingScript.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js'
      drawingScript.crossOrigin = 'anonymous'
      document.head.appendChild(drawingScript)
      
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js'
      script.crossOrigin = 'anonymous'
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Failed to load MediaPipe'))
      document.head.appendChild(script)
    })
  }

  const performCapture = () => {
    if (!videoRef.current) return
    
    const video = videoRef.current
    const vw = video.videoWidth
    const vh = video.videoHeight
    
    // Use eye positions if available, otherwise capture center area
    let minX = 0, maxX = vw, minY = 0, maxY = vh
    
    if (eyePositions && eyePositions.left && eyePositions.right) {
      // Eye positions are stored as percentages (0-100), convert to pixels
      // Note: positions are already in video coordinate space (not mirrored)
      const leftEyeX = (eyePositions.left.x / 100) * vw
      const leftEyeY = (eyePositions.left.y / 100) * vh
      const rightEyeX = (eyePositions.right.x / 100) * vw
      const rightEyeY = (eyePositions.right.y / 100) * vh
      
      // Calculate bounding box around both eyes with padding
      const paddingX = vw * 0.15  // 15% horizontal padding
      const paddingY = vh * 0.08  // 8% vertical padding
      
      minX = Math.max(0, Math.min(leftEyeX, rightEyeX) - paddingX)
      maxX = Math.min(vw, Math.max(leftEyeX, rightEyeX) + paddingX)
      minY = Math.max(0, Math.min(leftEyeY, rightEyeY) - paddingY)
      maxY = Math.min(vh, Math.max(leftEyeY, rightEyeY) + paddingY)
    } else {
      // Fallback: capture center portion of the video
      const centerX = vw / 2
      const centerY = vh / 2
      const cropW = vw * 0.6
      const cropH = vh * 0.3
      minX = centerX - cropW / 2
      maxX = centerX + cropW / 2
      minY = centerY - cropH / 2
      maxY = centerY + cropH / 2
    }
    
    const cropWidth = Math.round(maxX - minX)
    const cropHeight = Math.round(maxY - minY)
    
    // Create a temporary canvas to crop the eye area from the raw video (no overlay)
    const tempCanvas = document.createElement('canvas')
    tempCanvas.width = cropWidth
    tempCanvas.height = cropHeight
    const tempCtx = tempCanvas.getContext('2d')
    
    if (tempCtx) {
      // Mirror the image horizontally (like the preview) and crop
      tempCtx.translate(cropWidth, 0)
      tempCtx.scale(-1, 1)
      
      // Draw only the eye region from the original video
      tempCtx.drawImage(
        video,
        Math.round(minX), Math.round(minY), cropWidth, cropHeight,  // source crop
        0, 0, cropWidth, cropHeight                                   // destination
      )
      
      // Get the cropped eye image
      const croppedImageData = tempCanvas.toDataURL('image/jpeg', 0.95)
      setCapturedImage(croppedImageData)
      
      // Generate soul code from image hash
      const hash = croppedImageData.length.toString(16).toUpperCase().slice(-8)
      const code = `SOUL-${hash}-${Date.now().toString(36).toUpperCase().slice(-4)}`
      setSoulCode(code)
      
      // Directly save and close - no intermediate "Saving..." screen
      onCapture(code, croppedImageData)
      stopCamera()
    }
  }

  const startCamera = async () => {
    setIsStarted(true)
    setLoadingStatus("Loading vision components...")
    
    try {
      await loadMediaPipeScript()
      
      const libsReady = await waitForLibs()
      if (!libsReady) {
        throw new Error("MEDIAPIPE_LIBS_NOT_FOUND")
      }

      setLoadingStatus("Connecting to camera...")
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 480 } },
        audio: false
      })
      streamRef.current = stream
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }
      
      setHasPermission(true)
      
      setLoadingStatus("Initializing neural network...")
      const FaceMesh = (window as any).FaceMesh
      const faceMesh = new FaceMesh({
        locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
      })
      
      faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      })
      
      faceMesh.onResults((results: any) => {
        if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
          const landmarks = results.multiFaceLandmarks[0]
          const leftEye = landmarks[LEFT_IRIS_CENTER]
          const rightEye = landmarks[RIGHT_IRIS_CENTER]
          
          if (leftEye && rightEye) {
            const newPositions = {
              left: { x: leftEye.x * 100, y: leftEye.y * 100 },
              right: { x: rightEye.x * 100, y: rightEye.y * 100 }
            }
            setEyePositions(newPositions)
            
            // Start ritual if not already started and not captured
            if (!eyeDetectedRef.current && capturePhase < 0 && !capturedImage) {
              eyeDetectedRef.current = true
              setCapturePhase(0) // Start ritual
            } else {
              eyeDetectedRef.current = true
            }
          } else {
            handleEyesLost()
          }
        } else {
          handleEyesLost()
        }
        
        renderFrame(results)
        
        if (loadingStatus !== "READY") {
          setLoadingStatus("READY")
        }
      })
      
      faceMeshRef.current = faceMesh
      isActiveRef.current = true
      
      const processFrame = async () => {
        if (!isActiveRef.current || !videoRef.current || videoRef.current.paused) {
          requestRef.current = requestAnimationFrame(processFrame)
          return
        }
        
        try {
          await faceMeshRef.current.send({ image: videoRef.current })
        } catch (e) {
          console.error("Frame processing error:", e)
        }
        
        requestRef.current = requestAnimationFrame(processFrame)
      }
      
      requestRef.current = requestAnimationFrame(processFrame)
      
    } catch (err) {
      console.error("Camera/MediaPipe initialization failed:", err)
      setHasPermission(false)
      if (err instanceof DOMException && err.name === 'NotAllowedError') {
        alert("Camera permission denied. Please enable it in your browser settings and refresh.")
      }
    }
  }

  const handleEyesLost = () => {
    setEyePositions(null)
    eyeDetectedRef.current = false
    // Reset ritual if in progress
    if (capturePhase >= 0 && capturePhase < ritualPhrases.length) {
      setCapturePhase(-1)
    }
  }
  
  const renderFrame = (results: any) => {
    if (!canvasRef.current || !videoRef.current) return
    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return
    
    const cw = canvasRef.current.width
    const ch = canvasRef.current.height
    
    // Clear canvas
    ctx.clearRect(0, 0, cw, ch)
    
    // Layer 1: Draw blurred and darkened background
    ctx.save()
    ctx.filter = 'blur(15px) brightness(0.3)'
    ctx.scale(-1, 1)
    ctx.drawImage(videoRef.current, -cw, 0, cw, ch)
    ctx.restore()
    
    // Layer 2: Draw clear image only in eye areas (if detected)
    if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
      const landmarks = results.multiFaceLandmarks[0]
      const leftEye = landmarks[LEFT_IRIS_CENTER]
      const rightEye = landmarks[RIGHT_IRIS_CENTER]
      
      if (leftEye && rightEye) {
        ctx.save()
        
        // Create clipping path for both eyes
        ctx.beginPath()
        
        // Left eye ellipse (mirror X coordinate)
        const leftX = cw - (leftEye.x * cw)
        const leftY = leftEye.y * ch
        ctx.ellipse(leftX, leftY, 50, 35, 0, 0, Math.PI * 2)
        
        // Right eye ellipse (mirror X coordinate)
        const rightX = cw - (rightEye.x * cw)
        const rightY = rightEye.y * ch
        ctx.ellipse(rightX, rightY, 50, 35, 0, 0, Math.PI * 2)
        
        ctx.clip()
        
        // Draw clear video in clipped area
        ctx.filter = 'none'
        ctx.scale(-1, 1)
        ctx.drawImage(videoRef.current, -cw, 0, cw, ch)
        
        ctx.restore()
        
        // Draw eye progress ring effects on top
        const currentPhase = capturePhaseRef.current
        const progress = currentPhase >= 0 ? (currentPhase + 1) / ritualPhrases.length : 0
        drawEyeProgressRing(ctx, leftEye, cw, ch, progress)
        drawEyeProgressRing(ctx, rightEye, cw, ch, progress)
      }
    }
  }
  
  const drawEyeProgressRing = (ctx: CanvasRenderingContext2D, eyeCenter: any, cw: number, ch: number, progress: number) => {
    if (!eyeCenter) return
    
    const x = cw - (eyeCenter.x * cw)
    const y = eyeCenter.y * ch
    const r = 17  // Reduced to 1/3 of original (50 -> 17)
    const lineWidth = 3  // Reduced proportionally
    const time = Date.now()
    const segments = 5 // 5 segments for 5 ritual phrases
    const gapAngle = 0.08 // Gap between segments in radians
    const segmentAngle = (Math.PI * 2 - gapAngle * segments) / segments
    const startOffset = -Math.PI / 2 // Start from top
    
    ctx.save()
    
    // Draw each segment
    for (let i = 0; i < segments; i++) {
      const segmentStart = startOffset + i * (segmentAngle + gapAngle)
      const segmentEnd = segmentStart + segmentAngle
      const isLit = (i + 1) / segments <= progress
      const isCurrentSegment = i === Math.floor(progress * segments) && progress < 1
      
      ctx.beginPath()
      ctx.arc(x, y, r, segmentStart, segmentEnd)
      ctx.lineCap = 'round'
      ctx.lineWidth = lineWidth
      
      if (isLit) {
        // Lit segment - bright neon gradient
        const gradient = ctx.createLinearGradient(
          x + Math.cos(segmentStart) * r,
          y + Math.sin(segmentStart) * r,
          x + Math.cos(segmentEnd) * r,
          y + Math.sin(segmentEnd) * r
        )
        gradient.addColorStop(0, '#00ff88')
        gradient.addColorStop(1, '#00ffff')
        
        ctx.strokeStyle = gradient
        ctx.shadowBlur = 10
        ctx.shadowColor = '#00ffff'
        ctx.stroke()
        
        // Extra glow pass
        ctx.shadowBlur = 40
        ctx.shadowColor = '#00ff88'
        ctx.globalAlpha = 0.4
        ctx.stroke()
        ctx.globalAlpha = 1
      } else if (isCurrentSegment) {
        // Currently filling segment - animated partial fill
        const segmentProgress = (progress * segments) % 1
        const partialEnd = segmentStart + segmentAngle * segmentProgress
        
        // Draw unfilled background first
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.15)'
        ctx.shadowBlur = 0
        ctx.stroke()
        
        // Draw partial fill
        ctx.beginPath()
        ctx.arc(x, y, r, segmentStart, partialEnd)
        ctx.strokeStyle = '#00ffff'
        ctx.shadowBlur = 8
        ctx.shadowColor = '#00ffff'
        ctx.stroke()
      } else {
        // Unlit segment - dim
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.15)'
        ctx.shadowBlur = 0
        ctx.stroke()
      }
      
      ctx.shadowBlur = 0
    }
    
    // Outer decorative ring
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.25)'
    ctx.lineWidth = 1
    ctx.shadowBlur = 8
    ctx.shadowColor = '#00ffff'
    ctx.beginPath()
    ctx.arc(x, y, r + 5, 0, Math.PI * 2)
    ctx.stroke()
    
    // Inner ring
    ctx.beginPath()
    ctx.arc(x, y, r - 5, 0, Math.PI * 2)
    ctx.stroke()
    
    // Rotating scanner effect
    ctx.shadowBlur = 15
    ctx.shadowColor = '#00ffff'
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)'
    ctx.lineWidth = 2
    const scanAngle = (time / 600) % (Math.PI * 2)
    ctx.beginPath()
    ctx.moveTo(x + Math.cos(scanAngle) * (r - 20), y + Math.sin(scanAngle) * (r - 20))
    ctx.lineTo(x + Math.cos(scanAngle) * (r + 20), y + Math.sin(scanAngle) * (r + 20))
    ctx.stroke()
    
    // Center pulsing core
    const pulseScale = 1 + Math.sin(time / 250) * 0.4
    ctx.shadowBlur = 12
    ctx.shadowColor = progress >= 1 ? '#00ff88' : '#00ffff'
    ctx.fillStyle = progress >= 1 ? '#00ff88' : '#00ffff'
    ctx.beginPath()
    ctx.arc(x, y, 2 * pulseScale, 0, Math.PI * 2)
    ctx.fill()
    
    // Progress text
    ctx.shadowBlur = 15
    ctx.font = 'bold 12px monospace'
    ctx.textAlign = 'center'
    if (progress < 1) {
      ctx.fillStyle = '#00ffff'
      ctx.shadowColor = '#00ffff'
      ctx.fillText(`${Math.round(progress * 100)}%`, x, y + r + 30)
    } else {
      ctx.fillStyle = '#00ff88'
      ctx.shadowColor = '#00ff88'
      ctx.fillText('CAPTURED', x, y + r + 30)
    }
    
    ctx.restore()
  }

  const stopCamera = () => {
    isActiveRef.current = false
    if (requestRef.current) cancelAnimationFrame(requestRef.current)
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    if (faceMeshRef.current) {
      try { faceMeshRef.current.close() } catch(e) {}
      faceMeshRef.current = null
    }
    setIsStarted(false)
    setEyePositions(null)
    setLoadingStatus("IDLE")
    setCapturePhase(-1)
    setCapturedImage(null)
    setCapturedEyePositions(null)
    setSoulCode(null)
    eyeDetectedRef.current = false
  }

  useEffect(() => {
    return () => stopCamera()
  }, [])

  if (hasPermission === false) {
    return (
      <div className="flex flex-col items-center justify-center p-8 border hairline border-foreground/20 bg-foreground/5 text-center">
        <Camera className="w-8 h-8 mb-3 opacity-20" />
        <p className="text-xs text-foreground font-normal">Camera access is required to capture your soul imprint</p>
        <button 
          onClick={startCamera}
          className="mt-4 px-4 py-2 text-[10px] tracking-widest border hairline border-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          Enable Camera
        </button>
      </div>
    )
  }

  if (!isStarted) {
    return (
      <button 
        onClick={startCamera}
        className="w-full aspect-square flex flex-col items-center justify-center border hairline border-foreground/20 bg-foreground/[0.02] hover:bg-foreground/[0.05] transition-all group"
      >
        <div className="relative mb-4">
          <Scan className="w-10 h-10 opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="absolute inset-0 border border-foreground/20 scale-150 rounded-full animate-pulse" />
        </div>
        <span className="text-[10px] tracking-[0.2em] text-foreground font-normal">Initiate Soul Resonance</span>
      </button>
    )
  }

  const isReady = loadingStatus === "READY"

  // Show captured image briefly before auto-confirm
  if (capturedImage && capturePhase === 5) {
    // Calculate eye positions for display (mirror X because canvas was mirrored)
    const leftEyeX = capturedEyePositions ? (100 - capturedEyePositions.left.x) : 35
    const leftEyeY = capturedEyePositions ? capturedEyePositions.left.y : 45
    const rightEyeX = capturedEyePositions ? (100 - capturedEyePositions.right.x) : 65
    const rightEyeY = capturedEyePositions ? capturedEyePositions.right.y : 45
    
    return (
      <div className="relative aspect-square overflow-hidden border hairline border-foreground bg-black">
        {/* SVG definitions for masks */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="eyesClipPath" clipPathUnits="objectBoundingBox">
              <ellipse cx={leftEyeX / 100} cy={leftEyeY / 100} rx="0.12" ry="0.08" />
              <ellipse cx={rightEyeX / 100} cy={rightEyeY / 100} rx="0.12" ry="0.08" />
            </clipPath>
          </defs>
        </svg>
        
        {/* Layer 1: Blurred and darkened full image */}
        <img 
          src={capturedImage} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'blur(20px) brightness(0.25)',
            transform: 'scale(1.1)'
          }}
        />
        
        {/* Layer 2: Clear image clipped to eye areas only */}
        <img 
          src={capturedImage} 
          alt="Eyes revealed" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            clipPath: 'url(#eyesClipPath)'
          }}
        />
        
        {/* Glow rings around eyes */}
        <div 
          className="absolute border border-[#00ffff]/50 rounded-[50%]"
          style={{
            left: `${leftEyeX}%`,
            top: `${leftEyeY}%`,
            width: '24%',
            height: '16%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 40px 10px rgba(0,255,255,0.2), inset 0 0 30px rgba(0,255,255,0.1)'
          }}
        />
        <div 
          className="absolute border border-[#00ffff]/50 rounded-[50%]"
          style={{
            left: `${rightEyeX}%`,
            top: `${rightEyeY}%`,
            width: '24%',
            height: '16%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 40px 10px rgba(0,255,255,0.2), inset 0 0 30px rgba(0,255,255,0.1)'
          }}
        />
        
        {/* Vignette overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)'
          }}
        />
        
        {/* Success message - no buttons, auto-confirms */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-center px-6 animate-pulse">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#00ffff]/80 mb-2">Soul Imprint Captured</p>
            <p className="text-[#00ffff] font-mono text-sm tracking-wider mb-4">{soulCode}</p>
            <p className="text-[10px] text-white/40">Saving...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-square overflow-hidden border hairline border-foreground bg-black">
      <video 
        ref={videoRef} 
        className="hidden"
        playsInline 
        muted
        autoPlay
      />
      <canvas 
        ref={canvasRef} 
        width={480} 
        height={480} 
        className="w-full h-full object-cover"
      />
      
      {/* Loading state */}
      {!isReady && (
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center gap-4 z-20">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-2 border-foreground/10 rounded-full"></div>
            <div className="absolute inset-0 border-2 border-foreground border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-foreground/60 font-mono text-[10px] tracking-widest animate-pulse">{loadingStatus}</p>
        </div>
      )}
      
      {/* Ritual text overlay */}
      {isReady && (
        <div className="absolute inset-0 pointer-events-none flex flex-col">
          {/* Status indicator */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${eyePositions ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`}></span>
            <span className="text-[9px] text-white/60 font-mono uppercase tracking-widest">
              {eyePositions ? 'IRIS_LOCKED' : 'SEARCHING'}
            </span>
          </div>
          
          {/* Ritual phrase or waiting message */}
          <div className="flex-1 flex items-end justify-center pb-16 px-6">
            <div className="text-center max-w-xs">
              {eyePositions && capturePhase >= 0 && capturePhase < ritualPhrases.length ? (
                <p 
                  key={capturePhase}
                  className="text-white/90 text-sm font-light italic leading-relaxed animate-fade-in"
                >
                  {ritualPhrases[capturePhase]}
                </p>
              ) : !eyePositions ? (
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  {waitingMessage}
                </p>
              ) : null}
              
              {/* Progress indicator */}
              {eyePositions && capturePhase >= 0 && capturePhase < ritualPhrases.length && (
                <div className="flex justify-center gap-1.5 mt-4">
                  {ritualPhrases.map((_, idx) => (
                    <div 
                      key={idx}
                      className={cn(
                        "w-1.5 h-1.5 rounded-full transition-all duration-500",
                        idx <= capturePhase ? "bg-white" : "bg-white/20"
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {isReady && (
        <button 
          onClick={stopCamera}
          className="absolute top-4 right-4 p-2 bg-background/50 backdrop-blur rounded-full hover:bg-background transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}

function formatFieldDisplay(field: FieldKey, value: string, fallback: string, birthtime?: string) {
  if (!value) return fallback
  if (field === "birthday") {
    const parsed = new Date(value)
    const dateStr = Number.isNaN(parsed.getTime()) ? value : parsed.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    if (birthtime) {
      return `${dateStr} ${birthtime}`
    }
    return dateStr
  }
  if (field === "blood") return value.toUpperCase()
  if (field === "soul" && value.startsWith("EYE-")) return "Eye Imprint Captured"
  if (value.length > 14) return `${value.slice(0, 12)}…`
  return value
}

function OrbitalNode({
  node,
  collapsed,
  value,
  birthtime,
  birthday,
  onSelect,
  position,
}: {
  node: NodeConfig
  collapsed: boolean
  value: string
  birthtime?: string
  birthday?: string
  onSelect: (field: FieldKey) => void
  position: { top: string; left: string }
}) {
  // 处理图标逻辑
  let Icon = node.icon as any
  
  if (node.field === "birthday" && value) {
    // 如果是 birthday 字段且有值，显示星座图标
    const zodiac = getZodiacFromBirthday(value)
    if (zodiac) Icon = zodiac.icon
  } else if (node.field === "gender" && value) {
    // 如果是 gender 字段且有值，显示性别图标 (Material Symbols)
    if (value === "Female") Icon = (props: any) => <MaterialIcon name="female" {...props} />
    else if (value === "Male") Icon = (props: any) => <MaterialIcon name="male" {...props} />
    else if (value === "Non-binary") Icon = (props: any) => <MaterialIcon name="transgender" {...props} />
  } else if (node.field === "soul" && value && value.startsWith("EYE-")) {
    // 如果是 soul 字段且捕获了眼纹，显示睁眼图标
    Icon = EyeIcons.Open
  }

  const filled = Boolean(value)
  const display = formatFieldDisplay(node.field, value, node.label, birthtime)

  return (
    <div
      className="absolute transition-all duration-500 ease-out"
      style={{
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* 展开状态的按钮节点 */}
      <button
        type="button"
        onClick={() => onSelect(node.field)}
        className={cn(
          "flex flex-col items-center text-[10px]  tracking-[0.18em] transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-foreground/60",
          collapsed ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100",
        )}
        aria-label={display}
      >
        <div
          className={cn(
            "flex items-center justify-center w-[72px] h-[72px] rounded-full border border-foreground bg-background shadow-[0_0_5px_rgba(0,0,0,0.06)] transition-colors",
            filled ? "bg-foreground text-background" : "hover:bg-foreground hover:text-background",
          )}
        >
          <Icon className="h-8 w-8" />
        </div>
        <span className="absolute top-full mt-2 text-[11px] tracking-[0.06em] text-foreground  font-normal whitespace-nowrap">
          {display}
        </span>
      </button>

      {/* 折叠状态下的圆球提示 */}
      {collapsed && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {filled ? (
            <div className="w-2.5 h-2.5 bg-foreground rounded-full animate-in fade-in zoom-in duration-500" />
          ) : (
            <div className="w-2.5 h-2.5 bg-background border border-foreground rounded-full animate-in fade-in zoom-in duration-500" />
          )}
        </div>
      )}
    </div>
  )
}

function PortalRing({ id, label, codename, invert, activePortal, onActivate, values, onSelectField, isResonating }: PortalRingProps) {
  const isActive = activePortal === id
  const collapsed = !isActive

  const handleActivate = () => onActivate(id)
  const connectorPoints = ringPositions.map((point) => `${point.x},${point.y}`).join(" ")
  const starOrder = [0, 2, 4, 1, 3]
  const starPoints = starOrder.map((index) => `${ringPositions[index].x},${ringPositions[index].y}`).join(" ")

  return (
    <div className="relative flex flex-col items-center">
      <div
        role="button"
        tabIndex={0}
        aria-label={label}
        aria-description={codename}
        aria-pressed={isActive}
        onClick={(e) => {
          e.stopPropagation()
          handleActivate()
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            handleActivate()
          }
        }}
        className="relative flex items-center justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-foreground/60"
      >
        {/* 谐振时的随机彩虹渐变外发光 - 移到法阵盘外部底部 */}
        <div 
          className={cn(
            "absolute rounded-full z-[-1] transition-opacity duration-500",
            collapsed ? "-inset-1" : "-inset-2",
            isResonating ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          style={{
            background: 'conic-gradient(from 0deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #ff00ff, #ff0000)',
            animation: isResonating ? `
              spinSlow ${id === 'subjectA' ? '1.5s' : '2.1s'} linear infinite ${id === 'subjectA' ? '' : 'reverse'},
              glowSync 6s ease-in-out forwards
            ` : "none",
            transform: `rotate(${id === 'subjectA' ? '45deg' : '210deg'})`
          }}
        />

        <div
          className={cn(
            "relative rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer bg-white border border-foreground",
            collapsed ? "opacity-100 scale-95 w-[100px] h-[100px] md:w-[120px] md:h-[120px]" : "opacity-100 scale-100 w-[320px] h-[320px] md:w-[380px] md:h-[380px]",
            "shadow-[0_0_5px_rgba(0,0,0,0.12)]",
            collapsed ? "animate-[spinSlow_18s_linear_infinite]" : "",
          )}
        >
          <svg viewBox="0 0 100 100" className={cn("absolute inset-0 transition-colors duration-700", collapsed ? "text-foreground" : "text-foreground/30")}>
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth={0.5} strokeDasharray="2 4" />
            <polygon
              points={starPoints}
              fill="none"
              stroke="currentColor"
              strokeWidth={collapsed ? 0.5 : 0.3}
              strokeDasharray={collapsed ? "none" : "1 2"}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-700"
            />
          </svg>

          {portalNodes[id].map((node, index) => (
            <OrbitalNode
              key={`${id}-${node.label}`}
              node={node}
              collapsed={collapsed}
              value={values[node.field]}
              birthtime={node.field === "birthday" ? values.birthtime : undefined}
              birthday={values.birthday}
              position={ringPositions[index]}
              onSelect={(field) => onSelectField(id, field)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// 玄学描述段落组件 - 实现整段墨迹揭示效果
function InkRevealParagraph({ children, delay = 0, autoScroll = false, enableAutoScroll = true, onReveal }: { children: React.ReactNode, delay?: number, autoScroll?: boolean, enableAutoScroll?: boolean, onReveal?: () => void }) {
  const [revealed, setRevealed] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (revealed && autoScroll && enableAutoScroll && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "end" })
    }
  }, [revealed, autoScroll, enableAutoScroll])

  useEffect(() => {
    if (revealed && onReveal) {
      onReveal()
    }
  }, [revealed, onReveal])

  return (
    <div 
      ref={ref}
      className={cn(
        "transition-all duration-1000",
        revealed ? "ink-reveal opacity-100" : "opacity-0 translate-y-2"
      )}
    >
      {children}
    </div>
  )
}

export default function ConnectPage() {
  const [activePortal, setActivePortal] = useState<PortalId | "none">("none")
  const [isResonating, setIsResonating] = useState(false)
  const [isDoorOpening, setIsDoorOpening] = useState(false)
  const outerSphereRef = useRef<HTMLButtonElement | null>(null)
  const [movingSphere, setMovingSphere] = useState<null | { left: number; top: number; deltaY: number }>(null)
  const [movingSphereGo, setMovingSphereGo] = useState(false)
  const [contentManualScroll, setContentManualScroll] = useState(false)
  const contentScrollRef = useRef<HTMLDivElement | null>(null)
  const [portalValues, setPortalValues] = useState<Record<PortalId, Record<FieldKey, string>>>({
    subjectA: { ...emptyFields },
    subjectB: { ...emptyFields },
  })
  const [editing, setEditing] = useState<{ portal: PortalId; field: FieldKey } | null>(null)
  const [draftValue, setDraftValue] = useState("")
  const [draftTimeValue, setDraftTimeValue] = useState("")
  const [capturedSoulImage, setCapturedSoulImage] = useState<string | null>(null)

  useEffect(() => {
    if (editing) {
      setDraftValue(portalValues[editing.portal][editing.field] || "")
      // 如果编辑的是 birthday，同时加载 birthtime
      if (editing.field === "birthday") {
        setDraftTimeValue(portalValues[editing.portal].birthtime || "")
      }
    } else {
      setDraftValue("")
      setDraftTimeValue("")
    }
  }, [editing, portalValues])

  const handleSelectField = (portal: PortalId, field: FieldKey) => {
    if (isResonating) return
    setActivePortal(portal)
    setEditing({ portal, field })
  }

  const handleResonance = () => {
    if (isResonating || isDoorOpening) return
    
    setIsResonating(true)
    setActivePortal("resonance" as any)
    
    // 1. 6秒后结束旋转，先恢复到初始折叠状态
    setTimeout(() => {
      setIsResonating(false)
      setActivePortal("none") // 恢复到两个法阵折叠的状态
      
      // 2. 等待 1.5 秒让法阵完全回到原位，中心线重新出现
      setTimeout(() => {
        // Capture current on-screen position of the outer sphere, then animate a fixed clone to top=30px.
        const rect = outerSphereRef.current?.getBoundingClientRect()
        if (rect) {
          setMovingSphere({
            left: rect.left,
            top: rect.top,
            deltaY: 30 - rect.top, // final top edge = 30px
          })
          setMovingSphereGo(false)
          requestAnimationFrame(() => setMovingSphereGo(true))
        } else {
          setMovingSphere(null)
          setMovingSphereGo(false)
        }
        setContentManualScroll(false)
        setIsDoorOpening(true)
        
        // 3. 开门动画持续 3 秒
        setTimeout(() => {
          // 这里可以添加后续逻辑
        }, 3000)
      }, 1500)
    }, 6000)
  }
  
  const handleCloseDoor = () => {
    setIsDoorOpening(false)
    setMovingSphere(null)
    setMovingSphereGo(false)
    setContentManualScroll(false)
    setActivePortal("none")
  }

  const handleSave = (valueOverride?: string) => {
    if (!editing) return
    const nextValue = valueOverride ?? draftValue
    setPortalValues((prev) => {
      const updated = { ...prev[editing.portal], [editing.field]: nextValue }
      // 如果保存的是 birthday，同时保存 birthtime
      if (editing.field === "birthday") {
        updated.birthtime = draftTimeValue
      }
      return {
        ...prev,
        [editing.portal]: updated,
      }
    })
    setEditing(null)
  }

  return (
    <main 
      className={cn(
        "relative min-h-screen bg-background text-foreground flex flex-col",
        isDoorOpening ? "overflow-hidden" : "overflow-x-hidden"
      )}
      onClick={() => {
        if (!isResonating && !editing) {
          setActivePortal("none")
        }
      }}
    >
      <div className={cn(
        "relative px-6 pt-12 pb-4 max-w-screen-lg mx-auto shrink-0 w-full",
        (isResonating || isDoorOpening) ? "opacity-0 invisible transition-all duration-700" : "opacity-100 visible transition-opacity duration-700",
        (editing || isDoorOpening) ? "z-20" : "z-50"
      )}>
        <div className="mb-0">
          <h1 className="text-4xl font-light mb-2">
            <InkRevealText text="Connect" />
          </h1>
          <p className="text-sm opacity-60 font-light">
            <InkRevealText text="Magnetic field resonance" />
          </p>
        </div>
      </div>

      <div className={cn(
        "flex-1 relative flex items-center justify-center pointer-events-none w-full py-20",
        isDoorOpening ? "overflow-visible z-[60]" : "z-20"
      )}>
        {/* 用于视觉居中的参考占位符，高度与顶部标题区域一致，以抵消其对中心点的影响 */}
        <div className="absolute top-0 h-[116px] w-full pointer-events-none" />
        
        <section 
          className={cn(
            "relative flex flex-col items-center gap-10",
            isDoorOpening ? "pointer-events-none overflow-visible" : "pointer-events-auto transition-all duration-[2000ms] ease-in-out"
          )}
          style={{
            marginTop: activePortal === "none" || (activePortal as any) === "resonance" || isDoorOpening ? "-116px" : "0px"
          }}
        >
          {/* 上方法阵 - 单独旋转/向上移动 */}
          <div 
            className="relative z-30 will-change-transform"
            style={{
              animation: isResonating ? "portalOrbit 6s ease-in-out forwards" : "none",
              transformOrigin: "center calc(100% + 40px)",
              transform: isDoorOpening ? "translateY(-150vh)" : "translateY(0)",
              transition: isDoorOpening ? "transform 2s ease-in-out" : "none"
            }}
          >
            <PortalRing
              id="subjectA"
              label="Subject A"
              codename="North Node"
              activePortal={activePortal as any}
              onActivate={setActivePortal}
              values={portalValues.subjectA}
              onSelectField={handleSelectField}
              isResonating={isResonating}
            />
          </div>

            {/* 中心区域 - 不旋转 */}
          <div className="relative flex items-center justify-center w-full py-1">
            {/* 中线 - 常态下的细线 */}
            <div 
              className={cn(
                "absolute left-1/2 -translate-x-1/2 w-[200vw] h-px bg-foreground transition-opacity duration-500",
                isResonating || isDoorOpening ? "opacity-0" : "opacity-100"
              )}
            />
            
            {/* 外部球体（原始）- 开门时隐藏，避免任何布局/滚动影响动画 */}
            <button
              type="button"
              ref={outerSphereRef}
              onClick={(e) => {
                e.stopPropagation()
                if (isDoorOpening) {
                  handleCloseDoor()
                } else {
                  handleResonance()
                }
              }}
              className={cn(
                "relative flex items-center justify-center w-16 h-16 rounded-full border bg-background z-50 will-change-[transform,opacity]",
                isDoorOpening ? "border-white opacity-0 pointer-events-none" : "border-foreground opacity-100",
                isResonating ? "shadow-[0_0_5px_rgba(0,0,0,0.1)]" : ""
              )}
              style={{
                transform: "translateY(0)",
                opacity: isDoorOpening ? 0 : 1,
                transition: "opacity 0.2s ease-in-out"
              }}
            >
              {/* 内环 - 黑色背景 */}
              <div className="absolute inset-[6px] rounded-full bg-foreground flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 rounded-full border border-white/10 animate-[pulseHalo_3s_ease-in-out_infinite]" />
                <div className="absolute inset-1 rounded-full border border-white/5 animate-[spinSlow_12s_linear_infinite]" />
                
                {/* 动态眼睛 - 在黑色内环显示为白色 */}
                <OracleInteractiveEye 
                  direction={
                    activePortal === "subjectA" ? "up" : 
                    activePortal === "subjectB" ? "down" : 
                    "center"
                  } 
                  className="w-9 h-9" 
                  inverted={true}
                />
              </div>
            </button>
          </div>

          {/* 下方法阵 - 单独旋转/向下移动 */}
          <div 
            className="relative z-30 will-change-transform"
            style={{
              animation: isResonating ? "portalOrbit 6s ease-in-out forwards" : "none",
              transformOrigin: "center calc(0% - 40px)",
              transform: isDoorOpening ? "translateY(150vh)" : "translateY(0)",
              transition: isDoorOpening ? "transform 2s ease-in-out" : "none"
            }}
          >
            <PortalRing
              id="subjectB"
              label="Subject B"
              codename="South Node"
              invert
              activePortal={activePortal as any}
              onActivate={setActivePortal}
              values={portalValues.subjectB}
              onSelectField={handleSelectField}
              isResonating={isResonating}
            />
          </div>
        </section>
      </div>

      {/* Backdrop blur overlay when editing - covers everything except bottom nav */}
      {editing && (
        <div 
          className="fixed inset-x-0 top-0 bottom-20 z-30 backdrop-blur-md bg-background/50"
          onClick={() => setEditing(null)}
        />
      )}

      {/* 开门后的全屏黑色背景 - 使用 clip-path 从中心展开，不影响其他元素渲染 */}
      <div 
        className={cn(
          "fixed inset-0 z-[55] bg-black transition-all duration-[1500ms] ease-in-out will-change-[clip-path,opacity] flex flex-col items-center",
          isDoorOpening ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        style={{
          clipPath: isDoorOpening ? 'inset(0% 0% 0% 0%)' : 'inset(50% 0% 50% 0%)'
        }}
      >
        <SolarSystem active={isDoorOpening} />

        {/* 结果内容层 - 仅正文滚动（顶部球体/标题不滚动） */}
        {isDoorOpening && (
          <div
            className="absolute inset-0 z-10 pointer-events-auto flex flex-col items-center"
            style={{
              animation: "fade-in-simple 0.1s ease-out 1.9s forwards",
              opacity: 0,
            }}
          >
            {/* 顶部固定区：为外部球体（克隆）预留空间 + 标题（不随正文滚动） */}
            <div className="w-full max-w-2xl px-8 text-center shrink-0 pt-[114px] pb-6">
              <h2 className="text-xl md:text-2xl font-light text-white tracking-[0.3em] uppercase whitespace-nowrap">
                <InkRevealText text="Celestial Synchrony" delay={2100} />
              </h2>
            </div>

            {/* 正文滚动区 */}
            <div
              className="flex-1 w-full max-w-2xl px-8 overflow-y-auto hide-scrollbar"
              ref={contentScrollRef}
              onPointerDown={() => setContentManualScroll(true)} // 仅用户主动交互时禁用自动滚动，避免程序滚动误判
            >
              <div className="text-sm md:text-base text-white font-light leading-[1.8] text-justify space-y-8 pb-48">
                <InkRevealParagraph delay={2600} autoScroll enableAutoScroll={!contentManualScroll}>
                  <p>
                    In the vast architecture of the cosmos, two distinct spectral signatures have intersected at a precise temporal junction. This intersection is not merely a chance encounter within the physical realm, but a profound alignment of vibrational states that have traveled through multiple dimensions of consciousness to reach this singular moment of unified clarity. The harmonic convergence observed between Subject A and Subject B suggests a deeper connection that transcends conventional biological or psychological explanations, pointing toward an ancient resonance that precedes individual existence.
                  </p>
                </InkRevealParagraph>

                <InkRevealParagraph delay={3600} autoScroll enableAutoScroll={!contentManualScroll}>
                  <p>
                    The data streams flowing from the ocular imprint analysis reveal a complex tapestry of shared archetypal patterns. Every micro‑vibration in the iris structure acts as a biological record of cosmic history, and when these records synchronize, they create a resonant frequency measurable across the quantum field. This alignment indicates a high probability of spiritual entanglement, where the experiences of one soul are mirrored and amplified by the other, forming a feedback loop of conscious evolution that propels both entities toward a higher state of awareness.
                  </p>
                </InkRevealParagraph>

                <InkRevealParagraph delay={4600} autoScroll enableAutoScroll={!contentManualScroll}>
                  <p>
                    As we examine the deeper metadata of this resonance, the alignment extends beyond personality traits or shared interests. It reaches into the core of the auric field, where the fundamental energy polarities of North and South nodes settle into a rare equilibrium. This balance provides a stable foundation for shared purpose, allowing the combined charge of both participants to pass through dissonant frequencies of the mundane world with minimal loss. The resulting resonance is both protective and expansive, shielding the collective consciousness while opening doors to creative and spiritual exploration.
                  </p>
                </InkRevealParagraph>

                <InkRevealParagraph delay={5600} autoScroll enableAutoScroll={!contentManualScroll}>
                  <p>
                    Temporal analysis of your charts aligned with the ocular capture suggests a narrow celestial window. In this window, the barrier between the subconscious and the universal mind thins, enabling direct transfer of intuitive knowledge and emotional understanding. This state—often described in older mystical frameworks as a “threshold moment”—reduces egoic boundaries and increases the signal‑to‑noise ratio of meaning. In practice, this makes small gestures feel charged with significance, and silence becomes a medium for unspoken agreement rather than distance.
                  </p>
                </InkRevealParagraph>

                <InkRevealParagraph delay={6600} autoScroll enableAutoScroll={!contentManualScroll}>
                  <p>
                    In tangible terms, the resonance manifests as an effortless rhythm in communication, synchronous decision‑making, and a sense of mutual support that arrives before it is requested. When challenges arise, the combined field acts as a stabilizer: it slows reactive spirals and sharpens clarity, offering both calm and momentum. This is not the absence of friction, but the presence of an underlying alignment that converts friction into forward motion. Such a bond invites both individuals to step into a shared trajectory, weaving a destiny that feels both authored and discovered.
                  </p>
                </InkRevealParagraph>

                <InkRevealParagraph
                  delay={7600}
                  autoScroll
                  enableAutoScroll={!contentManualScroll}
                  onReveal={() => {
                    if (contentScrollRef.current) {
                      contentScrollRef.current.scrollTo({
                        top: contentScrollRef.current.scrollHeight,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  <p>
                    The final synthesis—from the geometry of the iris to the cadence of your timelines—suggests that this connection is not incidental. It functions as a beacon inside the larger harmony of the system: a point where two streams meet, exchange, and continue with greater coherence. If you nurture it with honesty, time, and attention, the resonance will remain a living instrument: responsive, evolving, and capable of guiding you through uncertainty without diminishing either self. Let it be deliberate. Let it be kind. Let it be real.
                  </p>
                </InkRevealParagraph>
              </div>
            </div>
          </div>
        )}

        {/* 底部渐变遮挡 - 避免文字生硬消失 */}
        {isDoorOpening && (
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20" />
        )}
      </div>

      {/* 旋转/调试时的提示文案：依次出现、底部显示、纯黑不透明 */}
      {isResonating && !isDoorOpening && (
        <div className="pointer-events-none fixed inset-0 z-[70] flex items-end justify-center pb-10">
          <div className="text-center text-black text-xs font-black space-y-2">
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              Calibrating Soul Resonance Frequency...
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "1000ms" }}>
              Generating Results...
            </div>
          </div>
        </div>
      )}

      {/* 外部球体（克隆）- 用 fixed + 纯像素 transform，彻底避免 vh / 布局抖动 */}
      {isDoorOpening && movingSphere && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            handleCloseDoor()
          }}
          className="fixed z-[60] w-16 h-16 rounded-full border border-white bg-background will-change-transform"
          style={{
            left: `${movingSphere.left}px`,
            top: `${movingSphere.top}px`,
            transform: movingSphereGo ? `translateY(${movingSphere.deltaY}px)` : "translateY(0)",
            transition: "transform 2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="absolute inset-[6px] rounded-full bg-foreground flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 rounded-full border border-white/10 animate-[pulseHalo_3s_ease-in-out_infinite]" />
            <div className="absolute inset-1 rounded-full border border-white/5 animate-[spinSlow_12s_linear_infinite]" />
            <OracleInteractiveEye direction="center" className="w-9 h-9" inverted={true} />
          </div>
        </button>
      )}

      {editing ? (
        <div 
          className="fixed left-1/2 -translate-x-1/2 bottom-24 w-[92%] max-w-md z-40"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="border hairline border-foreground/50 bg-background/95 backdrop-blur shadow-[0_24px_80px_rgba(0,0,0,0.18)] p-5">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <p className="text-sm tracking-wide text-foreground font-normal">
                  {fieldMeta[editing.field].label}
                </p>
                <p className="text-xs text-foreground mt-1 italic font-normal">
                  {fieldMeta[editing.field].description}
                </p>
              </div>
              <button
                type="button"
                className="text-xs text-foreground font-normal hover:opacity-70 shrink-0"
                onClick={() => setEditing(null)}
              >
                Close
              </button>
            </div>

            {fieldMeta[editing.field].type === "text" && (
              <input
                type="text"
                value={draftValue}
                onChange={(event) => setDraftValue(event.target.value)}
                placeholder={fieldMeta[editing.field].placeholder}
                className="w-full border hairline border-foreground px-4 py-3 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-foreground placeholder:font-light placeholder:text-foreground/40"
              />
            )}

            {fieldMeta[editing.field].type === "date" && (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center border hairline border-foreground">
                  <span className="px-3 text-xs text-foreground font-normal shrink-0">Date</span>
                  <input
                    type="date"
                    value={draftValue}
                    onChange={(event) => setDraftValue(event.target.value)}
                    lang="en-US"
                    className="flex-1 px-2 py-2.5 text-sm bg-transparent font-normal focus:outline-none [&::-webkit-datetime-edit]:text-foreground [&::-webkit-calendar-picker-indicator]:opacity-60"
                  />
                </div>
                <div className="flex items-center border hairline border-foreground">
                  <span className="px-3 text-xs text-foreground font-normal shrink-0">Time</span>
                  <input
                    type="time"
                    value={draftTimeValue}
                    onChange={(event) => setDraftTimeValue(event.target.value)}
                    className="flex-1 px-2 py-2.5 text-sm bg-transparent font-normal focus:outline-none [&::-webkit-datetime-edit]:text-foreground [&::-webkit-calendar-picker-indicator]:opacity-60"
                  />
                </div>
              </div>
            )}

            {fieldMeta[editing.field].type === "select" && (
              <div className="flex flex-wrap gap-2">
                {fieldMeta[editing.field].options?.map((option) => {
                  const isActive = portalValues[editing.portal][editing.field] === option
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSave(option)}
                      className={cn(
                        "px-4 py-2 text-sm border hairline font-normal transition-colors",
                        isActive ? "bg-foreground text-background" : "bg-background text-foreground hover:bg-foreground hover:text-background",
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            )}

            {fieldMeta[editing.field].type === "eye" && (
              <div className="flex flex-col gap-4">
                {draftValue ? (
                  <div className="flex flex-col">
                    {/* Captured eye image */}
                    {capturedSoulImage && (
                      <>
                        {/* Eye display area - cropped eye close-up */}
                        <div className="relative overflow-hidden border hairline border-foreground">
                          <img 
                            src={capturedSoulImage} 
                            alt="Eye capture" 
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        {/* Soul code centered below image */}
                        <div className="flex items-center justify-center gap-2 py-4">
                          <CheckCircle2 className="w-4 h-4 text-foreground" />
                          <span className="text-sm font-mono tracking-wider text-foreground">{draftValue}</span>
                        </div>
                      </>
                    )}
                    {!capturedSoulImage && (
                      <div className="flex items-center justify-center gap-2 py-4">
                        <CheckCircle2 className="w-5 h-5 text-foreground" />
                        <span className="text-sm font-mono tracking-wider text-foreground">{draftValue}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <EyeScanner onCapture={(code, image) => {
                    setDraftValue(code)
                    setCapturedSoulImage(image)
                  }} />
                )}
              </div>
            )}

            {fieldMeta[editing.field].type !== "select" && (
              <div className="flex justify-between items-center mt-4">
                {/* Rescan button on the left - only show for eye type when captured */}
                {fieldMeta[editing.field].type === "eye" && draftValue ? (
                  <button 
                    onClick={() => {
                      setDraftValue("")
                      setCapturedSoulImage(null)
                    }}
                    className="text-[10px] tracking-widest text-foreground/60 hover:text-foreground transition-colors"
                  >
                    Rescan
                  </button>
                ) : (
                  <div></div>
                )}
                {/* Cancel and Save buttons on the right */}
                <div className="flex gap-2">
                <button
                  type="button"
                  className="px-4 py-2 text-sm border hairline border-foreground/40 font-normal text-foreground hover:bg-foreground hover:text-background transition-colors"
                  onClick={() => setEditing(null)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm border hairline border-foreground font-normal bg-foreground text-background hover:bg-background hover:text-foreground transition-colors"
                  onClick={() => handleSave()}
                >
                  Save
                </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}

      <div 
        className={cn(
          "transition-opacity duration-700",
          isResonating ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <BottomNav />
      </div>

      {/* 纯白共鸣遮罩 */}
      <div 
        className={cn(
          "fixed inset-0 z-10 pointer-events-none transition-opacity duration-1000",
          isResonating ? "opacity-95" : "opacity-0"
        )}
        style={{
          background: "white",
          backdropFilter: "blur(20px)"
        }}
      />

      <style jsx global>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulseHalo {
          0% {
            transform: scale(0.98);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(0.98);
            opacity: 0.5;
          }
        }

        @keyframes drift {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(3deg) scale(1.02);
          }
          100% {
            transform: rotate(0deg) scale(1);
          }
        }

        @keyframes scanLine {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @keyframes rainbowGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes resonanceCycle {
          0% {
            transform: rotate(0deg);
          }
          16.6% {
            /* 1秒内原地慢转 */
            transform: rotate(36deg);
          }
          100% {
            /* 剩余5秒内快速旋转 (设为 100% 基准速度) */
            transform: rotate(1116deg); /* 36 + 1080 (3圈) */
          }
        }
        @keyframes sectionOrbit {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(2160deg); /* 6圈 */
          }
        }

        @keyframes portalOrbit {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(2160deg); /* 6圈 */
          }
        }

        @keyframes counterOrbit {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-2160deg);
          }
        }

        @keyframes fade-in-simple {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes glowSync {
          0%, 100% { 
            opacity: 0; 
            filter: blur(2px);
          }
          50% { 
            opacity: 0.9; 
            filter: blur(12px);
          }
        }
      `}</style>
    </main>
  )
}
