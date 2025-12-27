"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface InkRevealTextProps {
  text: string
  className?: string
  staggerDelay?: number
  delay?: number
}

export function InkRevealText({ text, className, staggerDelay = 50, delay = 0 }: InkRevealTextProps) {
  const [revealedCount, setRevealedCount] = useState(0)
  const [shouldStart, setShouldStart] = useState(delay === 0)

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => setShouldStart(true), delay)
      return () => clearTimeout(timer)
    }
  }, [delay])

  useEffect(() => {
    if (shouldStart && revealedCount < text.length) {
      const timer = setTimeout(() => {
        setRevealedCount((prev) => prev + 1)
      }, staggerDelay)
      return () => clearTimeout(timer)
    }
  }, [shouldStart, revealedCount, text.length, staggerDelay])

  return (
    <span className={cn("inline-block", className)}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={cn("inline-block", i < revealedCount && "ink-reveal")}
          style={{
            opacity: i < revealedCount ? 1 : 0,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}
