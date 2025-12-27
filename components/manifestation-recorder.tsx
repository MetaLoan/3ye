"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { InkRevealText } from "./ink-reveal-text"

interface Recording {
  id: string
  title: string
  frequency: string
  duration: string
  description: string
  createdAt: string
  playCount: number
}

// 模拟已录制的内容
const initialRecordings: Recording[] = [
  {
    id: "1",
    title: "Morning Intention",
    frequency: "432Hz + Voice",
    duration: "0:23",
    description: "I am abundant, healthy, and aligned with my highest purpose. Every cell in my body vibrates with positive energy.",
    createdAt: "Today, 8:30 AM",
    playCount: 4, // 4档能量
  },
  {
    id: "2",
    title: "Sleep Affirmation",
    frequency: "528Hz + Voice",
    duration: "0:18",
    description: "I release all tension and worry. My mind is calm, my body is relaxed, and I drift into peaceful, restorative sleep.",
    createdAt: "Yesterday, 10:45 PM",
    playCount: 2, // 2档能量
  },
]

// 单个录音项组件
function RecordingItem({
  recording,
  onDelete,
  onPlayComplete,
}: {
  recording: Recording
  onDelete: (id: string) => void
  onPlayComplete: (id: string) => void
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null)

  // 解析时长为秒数
  const totalSeconds = useMemo(() => {
    const parts = recording.duration.split(":")
    if (parts.length === 2) {
      return parseInt(parts[0]) * 60 + parseInt(parts[1])
    }
    return 0
  }, [recording.duration])

  // 计算剩余时长
  const remainingTime = useMemo(() => {
    const remaining = Math.ceil(totalSeconds * (1 - progress / 100))
    const mins = Math.floor(remaining / 60)
    const secs = remaining % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }, [totalSeconds, progress])

  useEffect(() => {
    if (isPlaying) {
      progressTimerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false)
            // 播放完成，触发回调
            onPlayComplete(recording.id)
            return 0
          }
          return prev + 0.5
        })
      }, 100)
    } else {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current)
        progressTimerRef.current = null
      }
    }

    return () => {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current)
      }
    }
  }, [isPlaying, onPlayComplete, recording.id])

  const handleRowClick = () => {
    setIsExpanded((prev) => !prev)
  }

  const handlePlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsExpanded(true)
    setIsPlaying((prev) => !prev)
  }

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onDelete(recording.id)
  }

  const totalBars = 32

  return (
    <div
      className="border hairline border-foreground bg-background hover:bg-muted transition-colors cursor-pointer select-none"
      onClick={handleRowClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleRowClick()
        }
      }}
    >
      {/* 单行布局 */}
      <div className="flex items-center gap-3 p-4">
        {/* 标题 + 频率 + 能量指示器 */}
        <div className="shrink-0 w-32 sm:w-40 overflow-hidden">
          <div className="text-sm font-normal whitespace-nowrap overflow-hidden">
            <span className="inline-block hover:animate-marquee">{recording.title}</span>
          </div>
          <div className="text-xs font-light whitespace-nowrap overflow-hidden">
            <span className="inline-block hover:animate-marquee">{recording.frequency}</span>
          </div>
          {/* 能量强度指示器 - 连续长条 */}
          <div className="w-20 h-1 mt-2 bg-foreground/10 overflow-hidden">
            <div
              className="h-full holographic holographic-animate transition-all duration-500 ease-out"
              style={{
                width: `${Math.min(recording.playCount, 5) * 20}%`,
                animationDelay: `${Math.random() * -5}s`, // 随机动画延迟
              }}
              suppressHydrationWarning
            />
          </div>
        </div>

        {/* 中间区域：时长/波形 动画切换 */}
        <div className="flex-1 min-w-0 relative h-4 overflow-hidden">
          {/* 时长标签 - 默认居中，播放时滑出到右边 */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
            style={{
              transform: isPlaying ? "translateX(100%)" : "translateX(0)",
              opacity: isPlaying ? 0 : 1,
            }}
          >
            <span className="flex items-center gap-1.5 text-xs">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {recording.duration}
            </span>
          </div>

          {/* 波形图 - 默认在左边隐藏，播放时滑入 */}
          <div
            className="absolute inset-0 flex items-center gap-[1px] transition-all duration-500 ease-out"
            style={{
              transform: isPlaying ? "translateX(0)" : "translateX(-100%)",
              opacity: isPlaying ? 1 : 0,
            }}
          >
            {Array.from({ length: totalBars }).map((_, i) => {
              const height = Math.sin(i * 0.4) * 35 + 55
              const barProgress = (i / totalBars) * 100
              const isActive = barProgress < progress

              return (
                <div
                  key={i}
                  className={`flex-1 rounded-full transition-all duration-150 ${
                    isActive
                      ? "holographic holographic-animate"
                      : "bg-foreground opacity-20"
                  }`}
                  style={{ height: `${height}%` }}
                  suppressHydrationWarning
                />
              )
            })}
          </div>
        </div>

        {/* 剩余时长 - 播放时显示 */}
        <div
          className="shrink-0 text-xs font-mono tabular-nums transition-all duration-500 ease-out overflow-hidden"
          style={{
            width: isPlaying ? "40px" : "0px",
            opacity: isPlaying ? 1 : 0,
            marginLeft: isPlaying ? "0" : "-12px",
          }}
        >
          {remainingTime}
        </div>

        {/* 播放按钮 */}
        <button
          onClick={handlePlayClick}
          aria-label={isPlaying ? "Pause" : "Play"}
          className={`w-8 h-8 border hairline border-foreground flex items-center justify-center transition-all shrink-0 ${
            isPlaying
              ? "holographic holographic-animate text-black"
              : "bg-foreground text-background hover:opacity-80"
          }`}
        >
          {isPlaying ? (
            <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
              <rect width="4" height="12" />
              <rect x="8" width="4" height="12" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
              <polygon points="0,0 0,12 12,6" />
            </svg>
          )}
        </button>
      </div>

      {/* 展开详情 */}
      <div
        className="grid transition-all duration-300 ease-out"
        style={{
          gridTemplateRows: isExpanded ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 pt-2">
            <p className="text-xs opacity-50 font-light leading-relaxed">
              "{recording.description}"
            </p>
            {/* 删除按钮 */}
            <div className="mt-3 flex justify-end">
              <button
                onClick={handleDeleteClick}
                className="text-xs font-light flex items-center gap-1 opacity-30 hover:opacity-60 transition-opacity"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z" />
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type RecorderState = "idle" | "recording" | "recorded" | "generating" | "naming"
type InputMode = "none" | "voice" | "text"

// 神秘的生成状态文案
const generatingMessages = [
  "Reading your desires...",
  "Infusing cosmic energy...",
  "Aligning frequencies...",
  "Channeling intentions...",
  "Transmuting vibrations...",
  "Manifesting reality...",
]

export function ManifestationRecorder() {
  const [recordings, setRecordings] = useState<Recording[]>(initialRecordings)
  const [recorderState, setRecorderState] = useState<RecorderState>("idle")
  const [inputMode, setInputMode] = useState<InputMode>("none")
  const [recordingTime, setRecordingTime] = useState(0)
  const [recordedDuration, setRecordedDuration] = useState(0)
  const [audioName, setAudioName] = useState("")
  const [textInput, setTextInput] = useState("")
  const [isTextPanelOpen, setIsTextPanelOpen] = useState(false)
  const [generatingMessageIndex, setGeneratingMessageIndex] = useState(0)

  const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const autoStopTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const generatingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const generatingMessageIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const startRecording = () => {
    if (recorderState !== "idle") return

    setRecorderState("recording")
    setInputMode("voice")
    setRecordingTime(0.1) // 从0.1开始，确保立即显示第一个波形条
    setIsTextPanelOpen(false)

    if (recordingIntervalRef.current) clearInterval(recordingIntervalRef.current)
    if (autoStopTimeoutRef.current) clearTimeout(autoStopTimeoutRef.current)

    recordingIntervalRef.current = setInterval(() => {
      setRecordingTime((prev) => prev + 1)
    }, 1000)

    autoStopTimeoutRef.current = setTimeout(() => {
      stopRecording()
    }, 30000)
  }

  const stopRecording = () => {
    if (recorderState !== "recording") return

    setRecordedDuration(Math.floor(recordingTime)) // 向下取整，去掉初始的0.1
    setRecorderState("recorded")

    if (recordingIntervalRef.current) {
      clearInterval(recordingIntervalRef.current)
      recordingIntervalRef.current = null
    }
    if (autoStopTimeoutRef.current) {
      clearTimeout(autoStopTimeoutRef.current)
      autoStopTimeoutRef.current = null
    }
  }

  const cancelRecording = () => {
    setRecorderState("idle")
    setRecordingTime(0)
    setRecordedDuration(0)
    setInputMode("none")
    setIsTextPanelOpen(false)
  }

  const handleTextSubmit = () => {
    if (!textInput.trim() || recorderState === "recording" || recorderState === "generating") return

    const sanitized = textInput.trim()
    const estimatedDuration = Math.min(30, Math.max(10, Math.round(sanitized.split(/\s+/).length * 0.9)))

    setRecordedDuration(estimatedDuration)
    setRecordingTime(estimatedDuration)
    setInputMode("text")
    setAudioName(sanitized.slice(0, 40))
    setTextInput("")
    setIsTextPanelOpen(false)
    setRecorderState("recorded")
  }

  const startGenerating = () => {
    setRecordedDuration((prev) => prev || 12)
    setRecorderState("generating")
    setGeneratingMessageIndex(0)

    // 清理之前的定时器
    if (generatingTimeoutRef.current) clearTimeout(generatingTimeoutRef.current)
    if (generatingMessageIntervalRef.current) clearInterval(generatingMessageIntervalRef.current)

    // 切换到下一条文案的函数
    const switchMessage = () => {
      setGeneratingMessageIndex((prev) => {
        const nextIndex = prev + 1
        if (nextIndex < generatingMessages.length) {
          // 随机5-10秒后切换到下一条
          const delay = Math.random() * 5000 + 5000 // 5000-10000ms
          generatingMessageIntervalRef.current = setTimeout(switchMessage, delay)
        }
        return nextIndex % generatingMessages.length
      })
    }

    // 开始第一次切换（5-10秒后）
    const firstDelay = Math.random() * 5000 + 5000
    generatingMessageIntervalRef.current = setTimeout(switchMessage, firstDelay)

    // 模拟生成过程（总共约30-40秒，显示4-5条文案）
    generatingTimeoutRef.current = setTimeout(() => {
      if (generatingMessageIntervalRef.current) {
        clearTimeout(generatingMessageIntervalRef.current)
        generatingMessageIntervalRef.current = null
      }
      setRecorderState("naming")
      setAudioName((prev) => prev || `Manifestation ${recordings.length + 1}`)
      // 聚焦输入框
      setTimeout(() => inputRef.current?.focus(), 100)
    }, 35000) // 35秒生成时间
  }

  const saveRecording = () => {
    if (!audioName.trim()) return

    const newRecording: Recording = {
      id: Date.now().toString(),
      title: audioName.trim(),
      frequency: "432Hz + Voice",
      duration: formatTime(recordedDuration),
      description: "Your personal manifestation audio has been transmuted into a healing frequency aligned with your intention.",
      createdAt: "Just now",
      playCount: 0,
    }
    setRecordings((prev) => [newRecording, ...prev])
    
    // 重置状态
    setRecorderState("idle")
    setRecordingTime(0)
    setRecordedDuration(0)
    setAudioName("")
  }

  const cancelSave = () => {
    setRecorderState("idle")
    setRecordingTime(0)
    setRecordedDuration(0)
    setAudioName("")
  }

  const deleteRecording = (id: string) => {
    setRecordings((prev) => prev.filter((r) => r.id !== id))
  }

  const handleRecordingPlayComplete = (id: string) => {
    setRecordings((prev) =>
      prev.map((r) => (r.id === id ? { ...r, playCount: Math.min(r.playCount + 1, 5) } : r))
    )
  }

  const formatTime = (seconds: number) => {
    const totalSecs = Math.floor(seconds) // 先取整
    const mins = Math.floor(totalSecs / 60)
    const secs = totalSecs % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  useEffect(() => {
    return () => {
      if (recordingIntervalRef.current) clearInterval(recordingIntervalRef.current)
      if (autoStopTimeoutRef.current) clearTimeout(autoStopTimeoutRef.current)
      if (generatingTimeoutRef.current) clearTimeout(generatingTimeoutRef.current)
      if (generatingMessageIntervalRef.current) clearInterval(generatingMessageIntervalRef.current)
    }
  }, [])

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-lg font-light mb-2 tracking-tight">
          <InkRevealText text="Audio Manifestation" />
        </h2>
        <p className="text-xs opacity-40 leading-relaxed font-light">
          <InkRevealText text="Record your desires. AI will transmute your voice into a personalized healing frequency." />
        </p>
      </div>

      {/* 录音区域 */}
      <div className="border hairline border-foreground bg-background overflow-hidden relative">
        {/* 录音状态：idle 或 recording */}
        <div
          className="grid transition-all duration-500 ease-out"
          style={{
            gridTemplateRows: recorderState === "idle" || recorderState === "recording" ? "1fr" : "0fr",
          }}
        >
          <div className="overflow-hidden">
            <div
              className={`p-4 flex items-center gap-3 cursor-pointer select-none transition-all duration-300 ${
                recorderState === "recording" ? "bg-muted" : "hover:bg-muted"
              }`}
            >
              {/* 左侧：标题说明 */}
              <div className="shrink-0 w-32 sm:w-40 overflow-hidden">
                <div className="text-sm font-normal whitespace-nowrap overflow-hidden">
                  <span className="inline-block">Input Your Need</span>
                </div>
                <div className="text-[11px] opacity-50 font-light whitespace-nowrap overflow-hidden mt-1">
                  <span className="inline-block">Hold mic or type to create audio</span>
                </div>
              </div>

              {/* 中间：提示文字（idle）或红色波形（recording）*/}
              <div className="flex-1 min-w-0 relative h-4">
                {/* 提示文字 - idle 时显示 */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{ 
                    opacity: recorderState === "idle" ? 1 : 0,
                    transform: recorderState === "idle" ? "translateX(0)" : "translateX(-20px)",
                  }}
                >
                  <span className="text-xs opacity-40 font-light whitespace-nowrap">Hold mic to record (max 30s)</span>
                </div>

                {/* 红色波形 - 从麦克风位置向左生长 */}
                {recorderState === "recording" && (
                  <div className="absolute right-0 top-0 h-4 flex items-center justify-end gap-[1px]">
                    {Array.from({ length: 36 }).map((_, i) => {
                      const progress = (recordingTime / 30) * 100
                      // 反转逻辑：i=0 在最左边，应该最后显示；i=35 在最右边，应该最先显示
                      const barProgress = (i / 36) * 100
                      const isVisible = barProgress <= progress
                      
                      return (
                        <div
                          key={i}
                          className="w-[4px] rounded-full bg-red-500 transition-all duration-200"
                          style={{
                            height: `${Math.sin((35 - i) * 0.4) * 30 + 60}%`,
                            opacity: isVisible ? 1 : 0,
                            transform: `scaleY(${isVisible ? 1 : 0})`,
                            animationName: isVisible ? "pulse" : "none",
                            animationDuration: isVisible ? "0.8s" : undefined,
                            animationTimingFunction: isVisible ? "ease-in-out" : undefined,
                            animationIterationCount: isVisible ? "infinite" : undefined,
                            animationDelay: `${(35 - i) * 25}ms`,
                          }}
                          suppressHydrationWarning
                        />
                      )
                    })}
                  </div>
                )}
              </div>

              {/* 右侧：操作按钮组 */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (recorderState === "recording" || recorderState === "generating") return
                    setIsTextPanelOpen((prev) => !prev)
                    setInputMode("text")
                  }}
                  className="w-8 h-8 border hairline border-foreground flex items-center justify-center shrink-0 transition-all duration-300 bg-background hover:bg-muted"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onMouseDown={startRecording}
                  onMouseUp={stopRecording}
                  onMouseLeave={() => recorderState === "recording" && stopRecording()}
                  onTouchStart={startRecording}
                  onTouchEnd={stopRecording}
                  onTouchCancel={stopRecording}
                  className={`w-8 h-8 border hairline border-foreground flex items-center justify-center shrink-0 transition-all duration-300 ${
                    recorderState === "recording" ? "bg-red-500 text-white" : "bg-foreground text-background"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 文本输入面板 */}
        <div
          className="grid transition-all duration-400 ease-out border-t hairline border-foreground/20"
          style={{
            gridTemplateRows: isTextPanelOpen && recorderState === "idle" ? "1fr" : "0fr",
          }}
        >
          <div className="overflow-hidden">
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <label className="text-xs opacity-60 font-light">Describe your need</label>
                <span className="text-[11px] opacity-40 font-light">We will voice it for you</span>
              </div>
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="e.g. I want a calm focus soundtrack for deep work"
                className="w-full min-h-[80px] px-3 py-2 border hairline border-foreground bg-transparent text-sm font-light focus:outline-none focus:bg-muted transition-colors"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleTextSubmit}
                  disabled={!textInput.trim()}
                  className={`flex-1 py-2 text-sm font-light border hairline border-foreground transition-all duration-200 ${
                    textInput.trim()
                      ? "bg-foreground text-background hover:opacity-80"
                      : "opacity-40 cursor-not-allowed"
                  }`}
                >
                  Generate from text
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsTextPanelOpen(false)
                    setInputMode("none")
                    setTextInput("")
                  }}
                  className="px-4 py-2 text-sm font-light border hairline border-foreground hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 录音完成：显示绿点、文字和按钮 */}
        <div
          className="grid transition-all duration-500 ease-out"
          style={{
            gridTemplateRows: recorderState === "recorded" ? "1fr" : "0fr",
          }}
        >
          <div className="overflow-hidden">
            <div className="p-4 relative">
              {/* 绿点和文字 */}
              <div className="flex items-center gap-3 mb-4 relative">
                {/* 绿色小圆点 - 从右侧波形位置变换而来 */}
                <div
                  className="w-3 h-3 rounded-full bg-green-500 transition-all duration-700 ease-out"
                  style={{
                    transform: recorderState === "recorded" ? "scale(1)" : "scale(0)",
                    opacity: recorderState === "recorded" ? 1 : 0,
                  }}
                />
                <span
                  className="text-sm font-light transition-all duration-500 delay-200"
                  style={{
                    opacity: recorderState === "recorded" ? 1 : 0,
                    transform: recorderState === "recorded" ? "translateX(0)" : "translateX(-10px)",
                  }}
                >
                  {inputMode === "text" ? "Text captured" : "Recording complete"} · {formatTime(recordedDuration)}
                </span>
              </div>

              {/* 按钮 */}
              <div
                className="flex gap-3 transition-all duration-500 delay-300"
                style={{
                  opacity: recorderState === "recorded" ? 1 : 0,
                  transform: recorderState === "recorded" ? "translateY(0)" : "translateY(10px)",
                }}
              >
                <button
                  onClick={startGenerating}
                  className="flex-1 py-3 border hairline border-foreground bg-foreground text-background text-sm font-light hover:opacity-80 transition-all duration-200"
                >
                  Generate Audio
                </button>
                <button
                  onClick={cancelRecording}
                  className="px-6 py-3 border hairline border-foreground text-sm font-light hover:bg-muted transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 生成中：镭射彩色流动按钮 */}
        <div
          className="grid transition-all duration-300 ease-out"
          style={{
            gridTemplateRows: recorderState === "generating" ? "1fr" : "0fr",
          }}
        >
          <div className="overflow-hidden">
            <div
              className="p-4 transition-opacity duration-300"
              style={{ opacity: recorderState === "generating" ? 1 : 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full holographic holographic-animate" />
                <span className="text-sm font-light">Transmuting your voice...</span>
              </div>
              <button
                disabled
                className="w-full py-3 text-sm font-light holographic holographic-animate text-black cursor-wait"
              >
                {generatingMessages[generatingMessageIndex]}
              </button>
            </div>
          </div>
        </div>

        {/* 命名对话框 */}
        <div
          className="grid transition-all duration-300 ease-out"
          style={{
            gridTemplateRows: recorderState === "naming" ? "1fr" : "0fr",
          }}
        >
          <div className="overflow-hidden">
            <div
              className="p-4 transition-opacity duration-300"
              style={{ opacity: recorderState === "naming" ? 1 : 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm font-light">Audio generated · {formatTime(recordedDuration)}</span>
              </div>
              <div className="mb-4">
                <label className="text-xs opacity-60 font-light block mb-2">Name your manifestation</label>
                <input
                  ref={inputRef}
                  type="text"
                  value={audioName}
                  onChange={(e) => setAudioName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveRecording()}
                  placeholder="e.g. Morning Intention"
                  className="w-full px-4 py-3 border hairline border-foreground bg-transparent text-sm font-light focus:outline-none focus:bg-muted transition-colors"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={saveRecording}
                  disabled={!audioName.trim()}
                  className={`flex-1 py-3 border hairline border-foreground text-sm font-light transition-all duration-200 ${
                    audioName.trim()
                      ? "bg-foreground text-background hover:opacity-80"
                      : "opacity-30 cursor-not-allowed"
                  }`}
                >
                  Save
                </button>
                <button
                  onClick={cancelSave}
                  className="px-6 py-3 border hairline border-foreground text-sm font-light hover:bg-muted transition-all duration-200"
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 录音列表 */}
      <div className="space-y-3">
        {recordings.map((recording) => (
          <RecordingItem
            key={recording.id}
            recording={recording}
            onDelete={deleteRecording}
            onPlayComplete={handleRecordingPlayComplete}
          />
        ))}
      </div>

      {recordings.length === 0 && (
        <div className="text-center py-8 opacity-40">
          <p className="text-xs font-light">No recordings yet. Hold the button above to create your first manifestation audio.</p>
        </div>
      )}
    </div>
  )
}
