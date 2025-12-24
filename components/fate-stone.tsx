"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { InkRevealText } from "./ink-reveal-text"

const oracles = [
  { result: "YES", message: "The path ahead glows with certainty" },
  { result: "NO", message: "Resistance is the universe's protection" },
  { result: "WAIT", message: "Timing is the hidden dimension of fate" },
  { result: "SILENCE", message: "The silence is the answer" },
  { result: "RELEASE", message: "Let go of what you cannot control" },
]

export function FateStone() {
  const [isHolding, setIsHolding] = useState(false)
  const [progress, setProgress] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [oracle, setOracle] = useState(oracles[0])
  const [showChoice, setShowChoice] = useState(false)
  const holdTimerRef = useRef<NodeJS.Timeout>()
  const progressTimerRef = useRef<NodeJS.Timeout>()
  const router = useRouter()

  const startHold = () => {
    if (revealed) return

    setIsHolding(true)
    setProgress(0)

    // Simulate progressive vibration intensity
    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimerRef.current)
          return 100
        }
        return prev + 2
      })
    }, 30)

    // Release after 1.5 seconds
    holdTimerRef.current = setTimeout(() => {
      releaseStone()
    }, 1500)
  }

  const releaseStone = () => {
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current)
    if (progressTimerRef.current) clearInterval(progressTimerRef.current)

    if (progress >= 100) {
      // Generate oracle result
      const randomOracle = oracles[Math.floor(Math.random() * oracles.length)]
      setOracle(randomOracle)
      setRevealed(true)

      // Show choice buttons after brief delay
      setTimeout(() => {
        setShowChoice(true)
      }, 1500)
    }

    setIsHolding(false)
    setProgress(0)
  }

  const makeChoice = (choice: "follow" | "rebel") => {
    // Trigger butterfly effect animation and navigate to Life view
    router.push("/?view=life&effect=true")
  }

  useEffect(() => {
    return () => {
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current)
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      {/* Stone */}
      <div className="relative mb-16">
        {/* Outer glow ring during hold */}
        {isHolding && (
          <div
            className="absolute inset-0 -m-8 rounded-full holographic-glow transition-opacity duration-300"
            style={{
              opacity: progress / 100,
              transform: `scale(${1 + progress / 200})`,
            }}
          />
        )}

        {/* Main stone */}
        <button
          onMouseDown={startHold}
          onMouseUp={releaseStone}
          onMouseLeave={releaseStone}
          onTouchStart={startHold}
          onTouchEnd={releaseStone}
          className={`relative w-64 h-64 rounded-full border hairline border-foreground bg-foreground transition-transform duration-300 ${
            isHolding ? "scale-95" : "scale-100 hover:scale-105"
          } ${revealed ? "opacity-50" : "opacity-100"}`}
          disabled={revealed}
        >
          {/* Inner reflection circles */}
          <div className="absolute inset-8 border hairline border-background rounded-full opacity-30" />
          <div className="absolute inset-16 border hairline border-background rounded-full opacity-20" />

          {/* Progress indicator during hold */}
          {isHolding && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-background text-2xl font-light">{Math.floor(progress)}%</div>
            </div>
          )}
        </button>

        {/* Energy pulse rings */}
        {isHolding && (
          <>
            <div
              className="absolute inset-0 -m-12 rounded-full border hairline border-foreground opacity-30"
              style={{
                animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
            />
            <div
              className="absolute inset-0 -m-16 rounded-full border hairline border-foreground opacity-20"
              style={{
                animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) 0.3s infinite",
              }}
            />
          </>
        )}
      </div>

      {/* Oracle result */}
      {revealed && (
        <div className="text-center space-y-6 mb-12">
          <div className="text-6xl font-light tracking-wider">
            <InkRevealText text={oracle.result} />
          </div>
          <div className="text-sm opacity-60 max-w-xs mx-auto leading-relaxed">
            <InkRevealText text={oracle.message} />
          </div>
        </div>
      )}

      {/* Choice buttons */}
      {showChoice && (
        <div className="flex gap-4 w-full max-w-sm px-6">
          <button
            onClick={() => makeChoice("follow")}
            className="flex-1 border hairline border-foreground rounded py-4 text-sm font-light hover:bg-foreground hover:text-background transition-all ink-reveal"
          >
            I will follow
          </button>
          <button
            onClick={() => makeChoice("rebel")}
            className="flex-1 border hairline border-foreground rounded py-4 text-sm font-light hover:bg-foreground hover:text-background transition-all ink-reveal-delay-1"
          >
            No Way
          </button>
        </div>
      )}

      {/* Instruction text */}
      {!revealed && (
        <div className="text-center mt-8">
          <p className="text-xs opacity-40 tracking-widest uppercase">
            <InkRevealText text="Hold to seek guidance" />
          </p>
          <p className="text-xs opacity-20 mt-2">3 times remaining today</p>
        </div>
      )}
    </div>
  )
}
