"use client"

import { useState } from "react"
import { InkRevealText } from "./ink-reveal-text"

interface AudioPlayerProps {
  title: string
  subtitle: string
  frequency: string
  duration: string
}

export function AudioPlayer({ title, subtitle, frequency, duration }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // In production, this would control actual audio playback
  }

  return (
    <div className="border hairline border-foreground rounded p-6 hover:bg-muted transition-colors cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-base font-light mb-1">
            <InkRevealText text={title} />
          </h3>
          <p className="text-xs opacity-40">
            <InkRevealText text={subtitle} />
          </p>
        </div>

        <button
          onClick={togglePlay}
          className="w-10 h-10 border hairline border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors shrink-0"
        >
          {isPlaying ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <rect width="4" height="12" />
              <rect x="8" width="4" height="12" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <polygon points="0,0 0,12 12,6" />
            </svg>
          )}
        </button>
      </div>

      {/* Waveform visualization */}
      <div className="flex items-center gap-[2px] h-12 mb-4">
        {Array.from({ length: 60 }).map((_, i) => {
          const height = Math.sin(i * 0.3) * 20 + 25
          const isActive = isPlaying && i < progress
          return (
            <div
              key={i}
              className={`flex-1 rounded-full transition-all ${
                isActive ? "bg-foreground opacity-100" : "bg-foreground opacity-20"
              }`}
              style={{ height: `${height}%` }}
            />
          )
        })}
      </div>

      {/* Info row */}
      <div className="flex items-center justify-between text-xs opacity-40">
        <span>{frequency}</span>
        <span>{duration}</span>
      </div>
    </div>
  )
}
