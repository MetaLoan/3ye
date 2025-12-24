"use client"

import { useMemo, useState, useEffect } from "react"

interface DataPoint {
  hour: number
  value: number
}

interface DestinyChartProps {
  mode: "today" | "life"
  showChart?: boolean
  selectedHour: number | null
  onSelectHour: (hour: number | null) => void
}

const generateData = (seed: number) => {
  return Array.from({ length: 13 }, (_, i) => {
    const hour = i * 2
    const value = 40 + 
      Math.sin(hour * 0.5 + seed) * 20 + 
      Math.cos(hour * 0.3) * 15 + 
      (Math.sin(hour * 0.8) * 10)
    return { hour, value }
  })
}

export function DestinyChart({ mode, showChart = true, selectedHour, onSelectHour }: DestinyChartProps) {
  const maxValue = 100
  const width = 300
  const height = 150
  
  // 获取当前真实时间
  const [now, setNow] = useState(() => new Date())
  
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  
  // 当前小时（向下取整到最近的偶数小时）
  const currentHour = Math.floor(now.getHours() / 2) * 2
  const nextHour = currentHour + 2 // 下一个即将到来的时间点
  
  // 计算倒计时
  const countdown = useMemo(() => {
    const nextTime = new Date(now)
    nextTime.setHours(nextHour, 0, 0, 0)
    
    const diff = nextTime.getTime() - now.getTime()
    if (diff <= 0) return "00:00:00"
    
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }, [now, nextHour])

  const data = useMemo(() => generateData(mode === "today" ? 1 : 2), [mode])

  const { pastPathData, futurePathData, areaPathData, points } = useMemo(() => {
    if (!data.length) return { pastPathData: "", futurePathData: "", areaPathData: "", points: [] }
    
    const pts = data.map((d) => ({
      x: (d.hour / 24) * width,
      y: height - (d.value / maxValue) * height,
      hour: d.hour,
      value: d.value
    }))

    const pastPts = pts.filter(p => p.hour <= currentHour)
    const futurePts = pts.filter(p => p.hour >= currentHour)

    const createSmoothPath = (p: typeof pts) => {
      if (p.length < 2) return ""
      let d = `M ${p[0].x} ${p[0].y}`
      for (let i = 0; i < p.length - 1; i++) {
        const p0 = p[i]
        const p1 = p[i + 1]
        const cp1x = p0.x + (p1.x - p0.x) / 3
        const cp2x = p1.x - (p1.x - p0.x) / 3
        d += ` C ${cp1x} ${p0.y}, ${cp2x} ${p1.y}, ${p1.x} ${p1.y}`
      }
      return d
    }

    let areaD = ""
    if (pastPts.length >= 2) {
      areaD = `M ${pastPts[0].x} ${height}`
      areaD += ` L ${pastPts[0].x} ${pastPts[0].y}`
      const curve = createSmoothPath(pastPts).replace("M", "L")
      areaD += curve
      areaD += ` L ${pastPts[pastPts.length - 1].x} ${height} Z`
    }
    
    return { 
      pastPathData: createSmoothPath(pastPts), 
      futurePathData: createSmoothPath(futurePts),
      areaPathData: areaD,
      points: pts
    }
  }, [data, width, height, maxValue, currentHour])

  const gradientStops = useMemo(() => {
    const pastData = data.filter(d => d.hour <= currentHour)
    return pastData.map((d, i) => {
      const offset = (d.hour / 24) * 100
      let color = "var(--holographic-mid-1)"
      if (d.value < 45) color = "var(--holographic-start)"
      if (d.value > 65) color = "var(--holographic-end)"
      return { offset: `${offset}%`, color }
    })
  }, [data, currentHour])

  return (
    <div className="w-full select-none">
      <div className={`relative border-[0.5px] border-foreground rounded-sm p-8 transition-all duration-1000 ease-in-out bg-background/50 ${
        !showChart ? "blur-md grayscale opacity-20 scale-[0.98]" : "blur-0 grayscale-0 opacity-100 scale-100"
      }`}>
        <div className="relative" style={{ height }}>
          {/* SVG for paths only */}
          <svg 
            width="100%" 
            height="100%" 
            viewBox={`0 0 ${width} ${height}`} 
            preserveAspectRatio="none"
            className="absolute inset-0 overflow-visible"
          >
            <defs>
              <linearGradient id="holographic-dynamic-horizontal" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={width} y2="0">
                {gradientStops.map((stop, i) => (
                  <stop key={i} offset={stop.offset} stopColor={stop.color} stopOpacity="0.25" />
                ))}
                {gradientStops.length > 0 && (
                  <stop offset={gradientStops[gradientStops.length - 1].offset} stopColor={gradientStops[gradientStops.length - 1].color} stopOpacity="0" />
                )}
              </linearGradient>
            </defs>

            {/* Grid */}
            {[25, 50, 75].map((val) => (
              <line key={val} x1="0" y1={height - (val / maxValue) * height} x2={width} y2={height - (val / maxValue) * height} stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.05" />
            ))}

            {showChart && (
              <>
                <path d={areaPathData} fill="url(#holographic-dynamic-horizontal)" className="animate-fade-in" />
                <path d={pastPathData} fill="none" stroke="currentColor" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
                <path d={futurePathData} fill="none" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
              </>
            )}
          </svg>

          {/* HTML Overlay for dots to ensure 1:1 perfect circles and smooth pulsing */}
          {showChart && points.map((p, i) => {
            const isPast = p.hour < currentHour
            const isCurrent = p.hour === currentHour
            const isNext = p.hour === nextHour
            const isSelected = selectedHour === p.hour
            const isClickable = isPast || isCurrent || isNext
            
            return (
              <div key={i} className="absolute" style={{ 
                left: `${(p.hour / 24) * 100}%`, 
                top: `${100 - (p.value / maxValue) * 100}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: isSelected ? 30 : (isNext ? 25 : 20),
              }}>
                {/* 倒计时气泡标签 - 跟随下一个时间点 */}
                {isNext && mode === "today" && (
                  <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap animate-fade-in" style={{ bottom: 'calc(100% + 20px)' }}>
                    <div className="relative bg-foreground text-background px-3 py-1.5 rounded-md shadow-sm flex items-center justify-center">
                      <span className="text-[10px] font-mono tracking-wider text-center">
                        {countdown}
                      </span>
                      {/* 气泡箭头 */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-foreground" />
                    </div>
                  </div>
                )}
                
                <button
                  onClick={() => isClickable && onSelectHour(isSelected ? null : p.hour)}
                  disabled={!isClickable}
                  className="flex items-center justify-center pointer-events-auto group relative"
                  style={{ 
                    cursor: isClickable ? 'pointer' : 'default'
                  }}
                >
                  {isCurrent && !isSelected && (
                    <div className="absolute w-6 h-6 rounded-full bg-foreground/10 sonar-pulse" />
                  )}
                  
                  {/* Hover ring */}
                  {isClickable && !isSelected && (
                    <div className="absolute w-4 h-4 rounded-full border-[0.5px] border-foreground/0 group-hover:border-foreground/20 transition-all" />
                  )}
                  
                  {/* Selected outer ring */}
                  {isSelected && (
                    <div className="absolute w-5 h-5 rounded-full border-[2px] border-foreground animate-fade-in" />
                  )}
                  
                  {/* Dot */}
                  <div className={`
                    rounded-full border-[1px] border-background transition-all duration-300
                    ${isSelected ? "w-2.5 h-2.5 bg-foreground scale-110" : isCurrent ? "w-2 h-2 bg-foreground" : "w-1.5 h-1.5"}
                    ${isPast || isCurrent ? "bg-foreground" : isNext ? "bg-foreground/30 border-foreground/10" : "bg-foreground/10 border-foreground/5"}
                    ${isClickable && !isSelected ? "group-hover:scale-125" : ""}
                  `} />
                </button>
              </div>
            )
          })}
        </div>

        <div className="flex justify-between mt-6 border-t-[0.5px] border-foreground/5 pt-3">
          {data.filter((_, i) => i % 2 === 0).map((d) => (
            <span key={d.hour} className="text-[8px] font-mono text-foreground tracking-tighter">
              {d.hour.toString().padStart(2, "0")}:00
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes sonar {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .sonar-pulse {
          animation: sonar 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  )
}
