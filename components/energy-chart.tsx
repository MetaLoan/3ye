"use client"

import { InkRevealText } from "./ink-reveal-text"

interface DataPoint {
  time: string
  open: number
  high: number
  low: number
  close: number
  positive: boolean
}

const sampleData: DataPoint[] = [
  { time: "06:00", open: 60, high: 75, low: 58, close: 70, positive: true },
  { time: "09:00", open: 70, high: 78, low: 65, close: 65, positive: false },
  { time: "12:00", open: 65, high: 85, low: 63, close: 82, positive: true },
  { time: "15:00", open: 82, high: 90, low: 75, close: 88, positive: true },
  { time: "18:00", open: 88, high: 95, low: 80, close: 85, positive: false },
  { time: "21:00", open: 85, high: 92, low: 82, close: 90, positive: true },
]

export function EnergyChart() {
  const maxValue = 100
  const chartHeight = 256

  return (
    <div className="w-full">
      <div className="mb-4">
        <InkRevealText text="Today's Energy Flow" className="text-sm font-light opacity-60" />
      </div>

      <div className="relative border hairline border-foreground rounded p-4" style={{ height: chartHeight + 40 }}>
        {/* Y-axis reference lines */}
        <div className="absolute inset-0 p-4">
          {[25, 50, 75].map((val) => (
            <div
              key={val}
              className="absolute left-0 right-0 border-t hairline border-foreground opacity-10"
              style={{ bottom: `${(val / maxValue) * chartHeight + 20}px` }}
            />
          ))}
        </div>

        {/* Candlesticks */}
        <div className="relative h-full flex items-end justify-around px-4 pb-6">
          {sampleData.map((point, i) => {
            const bodyTop = Math.max(point.open, point.close)
            const bodyBottom = Math.min(point.open, point.close)
            const bodyHeight = Math.max(bodyTop - bodyBottom, 2)

            return (
              <div key={i} className="flex flex-col items-center gap-1 flex-1">
                {/* Candlestick */}
                <div className="relative w-8" style={{ height: chartHeight }}>
                  {/* Wick (High-Low line) */}
                  <div
                    className="absolute left-1/2 w-[0.5px] bg-foreground -translate-x-1/2"
                    style={{
                      bottom: `${(point.low / maxValue) * chartHeight}px`,
                      height: `${((point.high - point.low) / maxValue) * chartHeight}px`,
                    }}
                  />

                  {/* Body */}
                  <div
                    className={`absolute left-0 right-0 border hairline border-foreground rounded-sm ${
                      point.positive ? "holographic" : "bg-background"
                    }`}
                    style={{
                      bottom: `${(bodyBottom / maxValue) * chartHeight}px`,
                      height: `${(bodyHeight / maxValue) * chartHeight}px`,
                    }}
                  />
                </div>

                {/* Time label */}
                <span className="text-[8px] opacity-40 mt-1">{point.time}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Key moments */}
      <div className="mt-6 space-y-2">
        <div className="flex items-center gap-3 text-xs">
          <span className="opacity-40">14:00</span>
          <span className="font-light">Peak energy for important decisions</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="opacity-40">20:00</span>
          <span className="font-light">Avoid emotional confrontations</span>
        </div>
      </div>
    </div>
  )
}
