"use client"

import { useEffect, useRef, useState } from "react"
import { CalendarDays, Droplets, Infinity, Sparkles, User, UserRound, Camera, RefreshCw, CheckCircle2, Scan } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { BottomNav } from "@/components/bottom-nav"
import { InkRevealText } from "@/components/ink-reveal-text"
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
  const radius = 32
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

function EyeScanner({ onCapture }: { onCapture: (code: string) => void }) {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const startCamera = async () => {
    try {
      const s = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 640 } } 
      })
      setStream(s)
      if (videoRef.current) {
        videoRef.current.srcObject = s
      }
      setHasPermission(true)
    } catch (err) {
      console.error("Camera access denied:", err)
      setHasPermission(false)
    }
  }

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
      setStream(null)
    }
  }

  const handleScan = () => {
    setIsScanning(true)
    // 模拟扫描过程
    setTimeout(() => {
      const soulCode = `EYE-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
      onCapture(soulCode)
      setIsScanning(false)
      stopCamera()
    }, 2500)
  }

  useEffect(() => {
    return () => stopCamera()
  }, [])

  if (hasPermission === false) {
    return (
      <div className="flex flex-col items-center justify-center p-8 border hairline border-foreground/20 bg-foreground/5 text-center">
        <Camera className="w-8 h-8 mb-3 opacity-20" />
        <p className="text-xs text-foreground font-normal">Camera access is required to capture eye imprint</p>
        <button 
          onClick={startCamera}
          className="mt-4 px-4 py-2 text-[10px]  tracking-widest border hairline border-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          Enable Camera
        </button>
      </div>
    )
  }

  if (!stream) {
    return (
      <button 
        onClick={startCamera}
        className="w-full aspect-square flex flex-col items-center justify-center border hairline border-foreground/20 bg-foreground/[0.02] hover:bg-foreground/[0.05] transition-all group"
      >
        <div className="relative mb-4">
          <Scan className="w-10 h-10 opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="absolute inset-0 border border-foreground/20 scale-150 rounded-full animate-pulse" />
        </div>
        <span className="text-[10px]  tracking-[0.2em] text-foreground font-normal">Initiate Eye Resonance</span>
      </button>
    )
  }

  return (
    <div className="relative aspect-square overflow-hidden border hairline border-foreground bg-black">
      <video 
        ref={videoRef} 
        autoPlay 
        playsInline 
        className="w-full h-full object-cover grayscale opacity-80"
      />
      
      {/* 扫描 UI 叠加层 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 中心圆圈 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 border hairline border-foreground/40 rounded-full" />
          <div className="absolute w-56 h-56 border border-dashed border-foreground/20 rounded-full animate-[spinSlow_20s_linear_infinite]" />
        </div>
        
        {/* 扫描线 */}
        {isScanning && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-1 bg-foreground/30 blur-sm animate-[scanLine_2.5s_ease-in-out_infinite]" />
          </div>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-6 flex justify-center px-6">
        <button
          onClick={handleScan}
          disabled={isScanning}
          className={cn(
            "px-6 py-2.5 bg-background text-foreground border hairline border-foreground text-[10px]  tracking-[0.2em] transition-all",
            isScanning ? "opacity-50 cursor-not-allowed" : "hover:bg-foreground hover:text-background"
          )}
        >
          {isScanning ? "Resonating..." : "Capture Imprint"}
        </button>
      </div>

      <button 
        onClick={stopCamera}
        className="absolute top-4 right-4 p-2 bg-background/50 backdrop-blur rounded-full hover:bg-background transition-colors"
      >
        <RefreshCw className="w-4 h-4" />
      </button>
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
            "flex items-center justify-center w-[72px] h-[72px] rounded-full border border-foreground bg-background shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-colors",
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
            <div className="w-2.5 h-2.5 bg-background border border-foreground/20 rounded-full animate-in fade-in zoom-in duration-500" />
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
        <div
          className={cn(
            "relative rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer bg-background/70 border border-foreground/15 backdrop-blur",
            collapsed ? "opacity-70 scale-95 w-[100px] h-[100px] md:w-[120px] md:h-[120px]" : "opacity-100 scale-100 w-[320px] h-[320px] md:w-[380px] md:h-[380px]",
            "shadow-[0_20px_80px_rgba(0,0,0,0.12)]",
            collapsed ? "animate-[spinSlow_18s_linear_infinite]" : "",
          )}
        >
          {/* 谐振时的随机彩虹渐变外发光 */}
          {isResonating && (
            <div 
              className="absolute -inset-12 rounded-full blur-3xl opacity-80 z-[-1]"
              style={{
                background: 'conic-gradient(from 0deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #ff00ff, #ff0000)',
                animation: `spinSlow ${id === 'subjectA' ? '1.5s' : '2.1s'} linear infinite ${id === 'subjectA' ? '' : 'reverse'}`,
                transform: `rotate(${id === 'subjectA' ? '45deg' : '210deg'})`
              }}
            />
          )}
          <svg viewBox="0 0 100 100" className="absolute inset-0 text-foreground/25">
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth={0.5} strokeDasharray="2 4" />
            <polygon
              points={starPoints}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.3}
              strokeLinecap="round"
              strokeLinejoin="round"
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

          <div className="absolute inset-0 rounded-full bg-foreground/5 blur-3xl opacity-40 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}

export default function ConnectPage() {
  const [activePortal, setActivePortal] = useState<PortalId | "none">("subjectA")
  const [isResonating, setIsResonating] = useState(false)
  const [portalValues, setPortalValues] = useState<Record<PortalId, Record<FieldKey, string>>>({
    subjectA: { ...emptyFields },
    subjectB: { ...emptyFields },
  })
  const [editing, setEditing] = useState<{ portal: PortalId; field: FieldKey } | null>(null)
  const [draftValue, setDraftValue] = useState("")
  const [draftTimeValue, setDraftTimeValue] = useState("")

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
    if (isResonating) return
    
    setIsResonating(true)
    setActivePortal("none") // 这里设为 none 其实在 PortalRing 逻辑里是不折叠的意思
    
    // 我们需要一个让两者都折叠的状态
    // 修改 PortalRing 的逻辑或者在这里设一个特殊值
    // 既然 PortalRing 判断 collapsed 是 activePortal !== id && activePortal !== "none"
    // 那我们设一个既不是 id 也不是 "none" 的值即可，比如 "resonance"
    setActivePortal("resonance" as any)
    
    // 6秒后结束谐振 (2s 放大 + 2s 维持 + 2s 缩小)
    setTimeout(() => {
      setIsResonating(false)
      setActivePortal("subjectA") // 恢复默认状态
    }, 6000)
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
      className="relative h-screen bg-background text-foreground overflow-hidden"
      onClick={() => {
        if (!isResonating && !editing) {
          setActivePortal("none")
        }
      }}
    >
      <div className={cn(
        "relative z-50 px-6 pt-12 max-w-screen-lg mx-auto transition-all duration-700",
        isResonating ? "opacity-0 invisible" : "opacity-100 visible"
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

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <section 
          className={cn(
            "pointer-events-auto relative flex flex-col items-center transition-all duration-[2000ms] ease-in-out",
            isResonating ? "" : "gap-10"
          )}
          style={{
            gap: isResonating ? "-20px" : "40px",
            animation: isResonating ? "sectionOrbit 6s ease-in-out forwards" : ""
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

          <div className="relative flex items-center justify-center w-full py-1">
            <div className={cn(
              "absolute w-[200vw] h-px bg-gradient-to-r from-transparent via-foreground/40 to-transparent transition-opacity duration-500",
              isResonating ? "opacity-0" : "opacity-100"
            )} />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleResonance()
              }}
              className={cn(
                "relative flex items-center justify-center w-16 h-16 rounded-full border border-foreground bg-background transition-all duration-[2000ms] ease-in-out",
                isResonating ? "shadow-[0_0_60px_rgba(0,0,0,0.3)]" : "hover:scale-105"
              )}
              style={{
                animation: isResonating ? "resonanceCycle 6s ease-in-out forwards" : ""
              }}
            >
              <div className="absolute inset-0 rounded-full border border-foreground/20 animate-[pulseHalo_3s_ease-in-out_infinite]" />
              <div className="absolute inset-2 rounded-full border border-foreground/15 animate-[spinSlow_12s_linear_infinite]" />
              <Infinity className="h-6 w-6" />
            </button>
          </div>

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
        </section>
      </div>

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
                className="w-full border hairline border-foreground px-4 py-3 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
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
                  <div className="flex items-center justify-between p-4 border hairline border-foreground bg-foreground/[0.02]">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-foreground" />
                      <span className="text-sm font-mono tracking-wider text-foreground"> {draftValue}</span>
                    </div>
                    <button 
                      onClick={() => setDraftValue("")}
                      className="text-[10px]  tracking-widest text-foreground hover:opacity-70 transition-opacity"
                    >
                      Rescan
                    </button>
                  </div>
                ) : (
                  <EyeScanner onCapture={(code) => setDraftValue(code)} />
                )}
                <p className="text-[10px] text-center text-foreground font-normal tracking-[0.1em]">
                  Align your eye within the resonance circle
                </p>
              </div>
            )}

            {fieldMeta[editing.field].type !== "select" && (
              <div className="flex justify-end gap-2 mt-4">
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
          16.6% {
            /* 前1秒等待收纳 */
            transform: rotate(0deg);
          }
          100% {
            /* 剩余5秒内轨道绕行 (设为 200% 速度) */
            transform: rotate(2160deg); /* 6圈 */
          }
        }
      `}</style>
    </main>
  )
}
