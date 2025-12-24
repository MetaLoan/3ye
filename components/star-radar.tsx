"use client"

import { useState } from "react"
import { InkRevealText } from "./ink-reveal-text"

const dimensions = [
  { name: "Passion", value: 75, angle: 0 },
  { name: "Love", value: 60, angle: 72 },
  { name: "Wealth", value: 85, angle: 144 },
  { name: "Intellect", value: 70, angle: 216 },
  { name: "Spirit", value: 90, angle: 288 },
]

// 星座图标路径 (简化版)
const ZODIAC_ICONS: Record<string, string> = {
  Aries: "M-4-2c0-2 2-4 4-4s4 2 4 4m-8 0v6m8-6v6", // ♈
  Taurus: "M0 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8M-4-4c0-2 2-4 4-4s4 2 4 4", // ♉
  Gemini: "M-3-4v8M3-4v8M-4-4h8M-4 4h8", // ♊
  Cancer: "M-4-2a3 3 0 1 1 6 0 3 3 0 0 1-6 0M4 2a3 3 0 1 1-6 0 3 3 0 0 1 6 0", // ♋
  Leo: "M-4 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0M0 2c0-4 4-4 4 0s-4 4-4 4", // ♌
  Virgo: "M-4-4v6a2 2 0 0 0 4 0v-6a2 2 0 0 0 4 0v6l2 2", // ♍
  Libra: "M-4 2h8M-4 4h8M-4-1a4 4 0 0 1 8 0", // ♎
  Scorpio: "M-4-4v6a2 2 0 0 0 4 0v-6a2 2 0 0 0 4 0v6l2-2l2 2", // ♏
  Sagittarius: "M-4 4l8-8M0-4h4v4M-2 2l4-4", // ♐
  Capricorn: "M-4-4v8l4-4v4c0 2 2 4 4 4", // ♑
  Aquarius: "M-4-2l2 2 2-2 2 2 2-2M-4 2l2 2 2-2 2 2 2-2", // ♒
  Pisces: "M-4-4a4 4 0 0 1 0 8M4-4a4 4 0 0 0 0 8M-4 0h8", // ♓
}

// 行星图标路径 (简化版)
const PLANET_ICONS: Record<string, string> = {
  Sun: "M0 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6M0 0.5h.1", // ☉
  Moon: "M-2-4a5 5 0 1 0 0 8 4 4 0 1 1 0-8", // ☽
  Mercury: "M0 4v-4m-3 0h6M0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4M-3-7a3 3 0 0 1 6 0", // ☿
  Venus: "M0 5v-3m-2 1h4M0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6", // ♀
  Mars: "M-1 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6M2-2l3-3M2-5h3v3", // ♂
  Jupiter: "M-2-4v8M-2 0h5M2-4l-4 4", // ♃
  Saturn: "M-2-4v8M-2 0c4 0 4 4 0 4M-2-2h4", // ♄
}

const zodiacSigns = [
  { name: "Aries", angle: 0 },
  { name: "Taurus", angle: 30 },
  { name: "Gemini", angle: 60 },
  { name: "Cancer", angle: 90 },
  { name: "Leo", angle: 120 },
  { name: "Virgo", angle: 150 },
  { name: "Libra", angle: 180 },
  { name: "Scorpio", angle: 210 },
  { name: "Sagittarius", angle: 240 },
  { name: "Capricorn", angle: 270 },
  { name: "Aquarius", angle: 300 },
  { name: "Pisces", angle: 330 },
]

const planets = [
  { name: "Sun", angle: 45, radius: 0.7 },
  { name: "Moon", angle: 120, radius: 0.75 },
  { name: "Mercury", angle: 60, radius: 0.5 },
  { name: "Venus", angle: 95, radius: 0.6 },
  { name: "Mars", angle: 280, radius: 0.65 },
  { name: "Jupiter", angle: 200, radius: 0.55 },
  { name: "Saturn", angle: 320, radius: 0.8 },
]

const aspects = [
  { from: 0, to: 1, type: "trine" },
  { from: 0, to: 4, type: "square" },
  { from: 1, to: 3, type: "sextile" },
  { from: 2, to: 5, type: "opposition" },
]

type ViewMode = "simple" | "pro"

export function StarRadar() {
  const [viewMode, setViewMode] = useState<ViewMode>("simple")
  
  const size = 300
  const center = size / 2
  const maxRadius = size / 2 - 40

  const polarToCartesian = (angle: number, radius: number) => {
    const rad = ((angle - 90) * Math.PI) / 180
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    }
  }

  // 简约版数据
  const dataPoints = dimensions.map((d) => polarToCartesian(d.angle, (d.value / 100) * maxRadius))
  const pathData = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z"

  // 专业版行星位置
  const planetPositions = planets.map((p) => ({
    ...p,
    ...polarToCartesian(p.angle, maxRadius * p.radius),
  }))

  return (
    <div className="w-full">
      <div className="border hairline border-foreground rounded p-6 bg-background/30 backdrop-blur-sm">
        {/* 简约版星盘 */}
        {viewMode === "simple" && (
          <svg width={size} height={size} className="mx-auto overflow-visible">
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
            <path d={pathData} fill="url(#radar-gradient)" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" />

            {/* Data points */}
            {dataPoints.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="1.5" fill="currentColor" />
            ))}

            {/* Labels */}
            {dimensions.map((d) => {
              const labelPos = polarToCartesian(d.angle, maxRadius + 28)
              return (
                <text
                  key={d.name}
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-[9px] uppercase tracking-wider fill-current font-light opacity-60"
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
        )}

        {/* 专业版星盘 */}
        {viewMode === "pro" && (
          <svg width={size} height={size} className="mx-auto overflow-visible">
            <defs>
              <linearGradient id="pro-bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.03" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            {/* 外圈装饰 */}
            <circle cx={center} cy={center} r={maxRadius + 12} fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
            
            {/* 刻度圈 */}
            {Array.from({ length: 72 }).map((_, i) => {
              const angle = i * 5
              const isMajor = i % 6 === 0
              const p1 = polarToCartesian(angle, maxRadius + (isMajor ? 8 : 4))
              const p2 = polarToCartesian(angle, maxRadius)
              return (
                <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="currentColor" strokeWidth="0.5" opacity={isMajor ? 0.3 : 0.1} />
              )
            })}

            {/* 黄道带背景 */}
            <circle
              cx={center}
              cy={center}
              r={maxRadius}
              fill="url(#pro-bg-gradient)"
              stroke="currentColor"
              strokeWidth="0.8"
              opacity="0.4"
            />

            {/* 12宫位分割 */}
            {zodiacSigns.map((sign) => {
              const outer = polarToCartesian(sign.angle, maxRadius)
              const inner = polarToCartesian(sign.angle, maxRadius * 0.25)
              return (
                <line
                  key={sign.name}
                  x1={inner.x}
                  y1={inner.y}
                  x2={outer.x}
                  y2={outer.y}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.15"
                />
              )
            })}

            {/* 内层装饰轨道 */}
            {[0.35, 0.55, 0.75].map((scale) => (
              <circle
                key={scale}
                cx={center}
                cy={center}
                r={maxRadius * scale}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.08"
                strokeDasharray="1 6"
              />
            ))}

            {/* 相位关系连线 */}
            {aspects.map((aspect, i) => {
              const from = planetPositions[aspect.from]
              const to = planetPositions[aspect.to]
              const color = aspect.type === "square" ? "#FF6B6B" : 
                           aspect.type === "opposition" ? "#FFE66D" : 
                           aspect.type === "trine" ? "#96E6A1" : "#8EC5FC"
              return (
                <line
                  key={i}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={color}
                  strokeWidth="0.8"
                  opacity="0.25"
                />
              )
            })}

            {/* 星座图标 */}
            {zodiacSigns.map((sign) => {
              const pos = polarToCartesian(sign.angle + 15, maxRadius * 0.88)
              return (
                <g key={sign.name} transform={`translate(${pos.x},${pos.y}) scale(0.8)`} className="opacity-40">
                  <path d={ZODIAC_ICONS[sign.name]} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </g>
              )
            })}

            {/* 行星图标 */}
            {planetPositions.map((planet) => (
              <g key={planet.name} transform={`translate(${planet.x},${planet.y})`}>
                <circle r="10" fill="var(--background)" stroke="currentColor" strokeWidth="0.5" opacity="0.9" />
                <g scale="0.7">
                  <path d={PLANET_ICONS[planet.name]} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-80" />
                </g>
                {/* 行星名称悬停提示 (模拟) */}
                <circle r="10" fill="transparent" className="cursor-help group">
                  <title>{planet.name}</title>
                </circle>
              </g>
            ))}

            {/* 核心原点 */}
            <circle cx={center} cy={center} r="2" fill="currentColor" opacity="0.4" />
          </svg>
        )}

        {/* 专业版图例 */}
        {viewMode === "pro" && (
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[8px] uppercase tracking-widest opacity-40 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-[1px] bg-[#96E6A1]" /> Trine
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-[1px] bg-[#FF6B6B]" /> Square
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-[1px] bg-[#8EC5FC]" /> Sextile
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-[1px] bg-[#FFE66D]" /> Opposition
            </span>
          </div>
        )}

        {/* 切换指示器 - 极简线条 */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setViewMode("simple")}
            className={`h-0.5 rounded-full transition-all duration-500 ${
              viewMode === "simple" ? "w-8 bg-foreground opacity-100" : "w-4 bg-foreground/20 opacity-40 hover:opacity-60"
            }`}
          />
          <button
            onClick={() => setViewMode("pro")}
            className={`h-0.5 rounded-full transition-all duration-500 ${
              viewMode === "pro" ? "w-8 bg-foreground opacity-100" : "w-4 bg-foreground/20 opacity-40 hover:opacity-60"
            }`}
          />
        </div>
      </div>

      {/* Current alerts */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-4 text-xs group">
          <span className="text-[8px] uppercase tracking-widest px-2 py-1 rounded-sm bg-foreground/5 text-foreground shrink-0">Alert</span>
          <span className="font-light leading-relaxed text-foreground">
            <InkRevealText text="Mercury retrograde affecting Intellect dimension until Feb 3" />
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs group">
          <span className="text-[8px] uppercase tracking-widest px-2 py-1 rounded-sm bg-foreground/5 text-foreground shrink-0">Peak</span>
          <span className="font-light leading-relaxed text-foreground">
            <InkRevealText text="Spirit energy at highest point this month - ideal for manifestation" />
          </span>
        </div>
      </div>
    </div>
  )
}
