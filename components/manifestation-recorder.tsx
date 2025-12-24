"use client"

import { useState } from "react"
import { InkRevealText } from "./ink-reveal-text"

export function ManifestationRecorder() {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [hasRecording, setHasRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const startRecording = () => {
    setIsRecording(true)
    setRecordingTime(0)
    // Simulate recording timer
    const timer = setInterval(() => {
      setRecordingTime((prev) => prev + 1)
    }, 1000)

    // Auto-stop after 30 seconds
    setTimeout(() => {
      clearInterval(timer)
      stopRecording()
    }, 30000)
  }

  const stopRecording = () => {
    setIsRecording(false)
    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false)
      setHasRecording(true)
    }, 2000)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-light mb-2 tracking-tight">
          <InkRevealText text="Audio Manifestation" />
        </h2>
        <p className="text-xs opacity-40 leading-relaxed">
          <InkRevealText text="Record your desires. AI will transmute your voice into a personalized healing frequency." />
        </p>
      </div>

      {/* Recorder Interface */}
      <div className="border hairline border-foreground rounded p-8">
        {!hasRecording ? (
          <div className="text-center space-y-8">
            {/* Visual feedback */}
            <div className="relative w-32 h-32 mx-auto">
              {isRecording ? (
                <>
                  {/* Pulsing rings during recording */}
                  <div className="absolute inset-0 border hairline border-foreground rounded-full animate-ping opacity-30" />
                  <div className="absolute inset-0 border hairline border-foreground rounded-full animate-ping opacity-20 animation-delay-500" />
                  <div className="absolute inset-0 border hairline border-foreground rounded-full flex items-center justify-center">
                    <span className="text-2xl font-mono">{formatTime(recordingTime)}</span>
                  </div>
                </>
              ) : isProcessing ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="holographic-animate w-20 h-20 rounded-full opacity-60" />
                  <span className="absolute text-sm">
                    <InkRevealText text="Processing..." />
                  </span>
                </div>
              ) : (
                <div className="absolute inset-0 border hairline border-foreground rounded-full opacity-20" />
              )}
            </div>

            {/* Control button */}
            {!isProcessing && (
              <button
                onMouseDown={startRecording}
                onMouseUp={stopRecording}
                onTouchStart={startRecording}
                onTouchEnd={stopRecording}
                className="px-8 py-4 border hairline border-foreground rounded hover:bg-foreground hover:text-background transition-colors text-sm font-light"
              >
                {isRecording ? "Release to complete" : "Hold to record"}
              </button>
            )}

            <p className="text-xs opacity-20">{isRecording ? "Speak your intention clearly" : "Maximum 30 seconds"}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Recorded audio visualization */}
            <div className="text-center space-y-4">
              <InkRevealText text="Your Manifestation Audio" className="text-base font-light" />

              {/* Fluid waveform */}
              <div className="h-24 flex items-center justify-center gap-1">
                {Array.from({ length: 40 }).map((_, i) => {
                  const height = Math.abs(Math.sin(i * 0.5)) * 60 + 20
                  return (
                    <div
                      key={i}
                      className="w-1 holographic rounded-full opacity-40"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  )
                })}
              </div>

              <p className="text-xs opacity-40">
                <InkRevealText text="432Hz base frequency with divine reverb applied" />
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button className="flex-1 border hairline border-foreground rounded py-3 text-sm font-light hover:bg-foreground hover:text-background transition-colors">
                Play
              </button>
              <button className="flex-1 border hairline border-foreground rounded py-3 text-sm font-light hover:bg-muted transition-colors">
                Save
              </button>
              <button
                onClick={() => setHasRecording(false)}
                className="flex-1 border hairline border-foreground rounded py-3 text-sm font-light hover:bg-muted transition-colors"
              >
                Re-record
              </button>
            </div>

            {/* Upgrade prompt */}
            <div className="border-t hairline border-foreground pt-6 text-center">
              <p className="text-xs opacity-40 mb-3">
                <InkRevealText text="Free users: 1 recording per day" />
              </p>
              <button className="px-6 py-2 border hairline border-foreground rounded text-xs hover:bg-foreground hover:text-background transition-colors">
                Upgrade for unlimited
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
