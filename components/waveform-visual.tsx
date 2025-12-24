"use client"

import { useEffect, useState } from "react"

interface WaveformVisualProps {
  compatibility: number
  person1?: string
  person2?: string
}

export function WaveformVisual({ compatibility, person1 = "You", person2 = "Them" }: WaveformVisualProps) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const points = 60
  const waves = Array.from({ length: points }).map((_, i) => {
    // Wave 1 (person 1)
    const y1 = Math.sin(i * 0.15) * 30 + 50

    // Wave 2 (person 2) - offset based on compatibility
    const phase = ((100 - compatibility) / 100) * Math.PI
    const y2 = Math.sin(i * 0.15 + phase) * 30 + 150

    // Calculate overlap/resonance
    const distance = Math.abs(y1 - y2)
    const isResonant = distance < 20

    return { y1, y2, isResonant }
  })

  const resonancePercentage = (waves.filter((w) => w.isResonant).length / waves.length) * 100

  return (
    <div className="border hairline border-foreground rounded p-6">
      {/* Waveform SVG */}
      <svg className="w-full mb-6" viewBox="0 0 300 200" style={{ height: "200px" }}>
        {/* Wave 1 */}
        <path
          d={waves.map((w, i) => `${i === 0 ? "M" : "L"} ${(i / points) * 300} ${w.y1}`).join(" ")}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity={animate ? 1 : 0}
          style={{ transition: "opacity 0.8s" }}
        />

        {/* Wave 2 */}
        <path
          d={waves.map((w, i) => `${i === 0 ? "M" : "L"} ${(i / points) * 300} ${w.y2}`).join(" ")}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity={animate ? 1 : 0}
          style={{ transition: "opacity 0.8s 0.2s" }}
        />

        {/* Resonance points */}
        {waves.map((w, i) => {
          if (!w.isResonant) return null
          const x = (i / points) * 300
          const y = (w.y1 + w.y2) / 2
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="2"
              className="holographic"
              opacity={animate ? 0.6 : 0}
              style={{ transition: `opacity 0.5s ${0.4 + i * 0.01}s` }}
            />
          )
        })}
      </svg>

      {/* Legend */}
      <div className="flex justify-between items-center mb-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-8 h-[1px] bg-foreground" />
          <span className="opacity-60">{person1}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-[1px] bg-foreground" />
          <span className="opacity-60">{person2}</span>
        </div>
      </div>

      {/* Compatibility score */}
      <div className="text-center space-y-4">
        <div className="text-6xl font-light tracking-wider">
          {animate && <span className="ink-reveal">{compatibility.toFixed(1)}%</span>}
        </div>
        <div className="text-sm opacity-60">
          {animate && (
            <span className="ink-reveal-delay-1">
              {compatibility >= 80
                ? "Highly resonant frequencies"
                : compatibility >= 60
                  ? "Complementary energies"
                  : "Conflicting vibrations"}
            </span>
          )}
        </div>

        {/* Resonance indicator */}
        <div className="pt-4 border-t hairline border-foreground">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="opacity-40">Resonance</span>
            <span className="opacity-60">{resonancePercentage.toFixed(0)}% overlap</span>
          </div>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full holographic transition-all duration-1000"
              style={{ width: animate ? `${resonancePercentage}%` : "0%" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
