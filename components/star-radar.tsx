"use client"

import { InkRevealText } from "./ink-reveal-text"

const dimensions = [
  { name: "Passion", value: 75, angle: 0 },
  { name: "Love", value: 60, angle: 72 },
  { name: "Wealth", value: 85, angle: 144 },
  { name: "Intellect", value: 70, angle: 216 },
  { name: "Spirit", value: 90, angle: 288 },
]

export function StarRadar() {
  const size = 240
  const center = size / 2
  const maxRadius = size / 2 - 40

  const polarToCartesian = (angle: number, radius: number) => {
    const rad = ((angle - 90) * Math.PI) / 180
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    }
  }

  const dataPoints = dimensions.map((d) => polarToCartesian(d.angle, (d.value / 100) * maxRadius))

  const pathData = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z"

  return (
    <div className="w-full">
      <div className="mb-6">
        <InkRevealText text="Stellar Energy Radar" className="text-sm font-light opacity-60 mb-2" />
        <p className="text-xs opacity-40">
          <InkRevealText text="Five dimensions of your cosmic energy field" />
        </p>
      </div>

      <div className="border hairline border-foreground rounded p-6">
        <svg width={size} height={size} className="mx-auto">
          {/* Background rings */}
          {[0.25, 0.5, 0.75, 1].map((scale) => (
            <polygon
              key={scale}
              points={dimensions
                .map((d) => {
                  const p = polarToCartesian(d.angle, maxRadius * scale)
                  return `${p.x},${p.y}`
                })
                .join(" ")}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.1"
            />
          ))}

          {/* Axis lines */}
          {dimensions.map((d) => {
            const endpoint = polarToCartesian(d.angle, maxRadius)
            return (
              <line
                key={d.name}
                x1={center}
                y1={center}
                x2={endpoint.x}
                y2={endpoint.y}
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.2"
              />
            )
          })}

          {/* Data area */}
          <path d={pathData} fill="url(#radar-gradient)" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />

          {/* Data points */}
          {dataPoints.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="2" fill="currentColor" />
          ))}

          {/* Labels */}
          {dimensions.map((d) => {
            const labelPos = polarToCartesian(d.angle, maxRadius + 20)
            return (
              <text
                key={d.name}
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[10px] fill-current"
              >
                {d.name}
              </text>
            )
          })}

          <defs>
            <linearGradient id="radar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0C3FC" />
              <stop offset="100%" stopColor="#8EC5FC" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Current alerts */}
      <div className="mt-6 space-y-3">
        <div className="flex items-start gap-3 text-xs">
          <span className="opacity-40 shrink-0">Alert</span>
          <span className="font-light leading-relaxed">
            <InkRevealText text="Mercury retrograde affecting Intellect dimension until Feb 3" />
          </span>
        </div>
        <div className="flex items-start gap-3 text-xs">
          <span className="opacity-40 shrink-0">Peak</span>
          <span className="font-light leading-relaxed">
            <InkRevealText text="Spirit energy at highest point this month - ideal for manifestation" />
          </span>
        </div>
      </div>
    </div>
  )
}
