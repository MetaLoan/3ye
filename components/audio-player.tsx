"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { InkRevealText } from "./ink-reveal-text"

interface AudioPlayerProps {
  title: string
  subtitle: string
  frequency: string
  duration: string
  description?: string
  playCount?: number
  onPlayComplete?: () => void
}

export function AudioPlayer({ 
  title, 
  subtitle, 
  frequency, 
  duration, 
  description,
  playCount = 0,
  onPlayComplete
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null)

  // 解析时长为秒数
  const totalSeconds = useMemo(() => {
    const parts = duration.split(":")
    if (parts.length === 2) {
      return parseInt(parts[0]) * 60 + parseInt(parts[1])
    }
    return 0
  }, [duration])

  // 计算剩余时长
  const remainingTime = useMemo(() => {
    const remaining = Math.ceil(totalSeconds * (1 - progress / 100))
    const mins = Math.floor(remaining / 60)
    const secs = remaining % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }, [totalSeconds, progress])

  // 模拟播放进度
  useEffect(() => {
    if (isPlaying) {
      progressTimerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false)
            // 播放完成，触发回调
            if (onPlayComplete) {
              onPlayComplete()
            }
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
  }, [isPlaying, onPlayComplete])

  const togglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

  const handleRowClick = () => {
    setIsExpanded((prev) => !prev)
  }

  const handlePlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsExpanded(true)
    togglePlay()
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
        {/* 标题 + 频率副标题 + 能量指示器 */}
        <div className="shrink-0 w-32 sm:w-40 overflow-hidden">
          <div className="text-sm font-normal whitespace-nowrap overflow-hidden">
            <span className="inline-block hover:animate-marquee">
              <InkRevealText text={title} />
            </span>
          </div>
          <div className="text-xs font-light whitespace-nowrap overflow-hidden">
            <span className="inline-block hover:animate-marquee">{frequency}</span>
          </div>
          {/* 能量强度指示器 - 连续长条 */}
          <div className="w-20 h-1 mt-2 bg-foreground/10 overflow-hidden">
            <div
              className="h-full holographic holographic-animate transition-all duration-500 ease-out"
              style={{
                width: `${Math.min(playCount, 5) * 20}%`,
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
              {duration}
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

      {/* 展开状态：音频效用说明 */}
      <div
        className="grid transition-all duration-300 ease-out"
        style={{
          gridTemplateRows: isExpanded ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 pt-2">
            <p className="text-xs opacity-50 font-light leading-relaxed">
              {description || subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
