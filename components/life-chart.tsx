"use client"

import { InkRevealText } from "./ink-reveal-text"

interface LifePoint {
  month: string
  value: number
  type: "actual" | "follow" | "rebel"
}

const lifeData: LifePoint[] = [
  { month: "Jan", value: 65, type: "actual" },
  { month: "Feb", value: 70, type: "actual" },
  { month: "Mar", value: 68, type: "actual" },
  { month: "Apr", value: 75, type: "follow" },
  { month: "May", value: 78, type: "follow" },
  { month: "Jun", value: 82, type: "follow" },
]

export function LifeChart() {
  const maxValue = 100
  const chartHeight = 200

  return (
    <div className="w-full">
      <div className="mb-6">
        <InkRevealText text="Life Trajectory" className="text-sm font-light opacity-60 mb-2" />
        <p className="text-xs opacity-40 leading-relaxed">
          <InkRevealText text="Your choices shape the path ahead. Each decision creates a new branch in your timeline." />
        </p>
      </div>

      <div className="relative border hairline border-foreground rounded p-6" style={{ height: chartHeight + 60 }}>
        {/* Chart area */}
        <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
          {/* Grid lines */}
          {[25, 50, 75].map((val) => (
            <line
              key={val}
              x1="0"
              y1={200 - (val / maxValue) * 200}
              x2="300"
              y2={200 - (val / maxValue) * 200}
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.1"
            />
          ))}

          {/* Main line path */}
          <path
            d={lifeData
              .map((point, i) => {
                const x = (i / (lifeData.length - 1)) * 300
                const y = 200 - (point.value / maxValue) * 200
                return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`
              })
              .join(" ")}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />

          {/* Data points */}
          {lifeData.map((point, i) => {
            const x = (i / (lifeData.length - 1)) * 300
            const y = 200 - (point.value / maxValue) * 200
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="3" fill="currentColor" />
                {point.type === "follow" && (
                  <circle cx={x} cy={y} r="6" fill="none" stroke="url(#holographic-gradient)" strokeWidth="1" />
                )}
              </g>
            )
          })}

          {/* Gradient definition */}
          <defs>
            <linearGradient id="holographic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0C3FC" />
              <stop offset="50%" stopColor="#8EC5FC" />
              <stop offset="100%" stopColor="#96E6A1" />
            </linearGradient>
          </defs>
        </svg>

        {/* X-axis labels */}
        <div className="flex justify-between mt-2 px-2">
          {lifeData.map((point, i) => (
            <span key={i} className="text-[8px] opacity-40">
              {point.month}
            </span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-[0.5px] bg-foreground" />
          <span className="opacity-60">Current path</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border hairline rounded-full holographic opacity-60" />
          <span className="opacity-60">Following guidance</span>
        </div>
      </div>

      {/* Pro CTA */}
      <div className="mt-8 border hairline border-foreground rounded p-6 text-center">
        <InkRevealText text="Unlock 3-month forecast" className="text-sm font-light mb-2" />
        <p className="text-xs opacity-40 mb-4">See the full butterfly effect of your choices</p>
        <button className="px-6 py-2 border hairline border-foreground rounded hover:bg-foreground hover:text-background transition-colors text-xs">
          Upgrade to Pro
        </button>
      </div>
    </div>
  )
}
