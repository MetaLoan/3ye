"use client"

import { useState, useEffect } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { InkRevealText } from "@/components/ink-reveal-text"
import { DestinyChart } from "@/components/destiny-chart"
import { DestinyTimeline } from "@/components/destiny-timeline"
import { StarRadar } from "@/components/star-radar"

type DestinyMode = "today" | "life"

export default function DestinyPage() {
  const [destinyMode, setDestinyMode] = useState<DestinyMode>("today")
  const [cardRevealed, setCardRevealed] = useState(false)
  
  // 计算下一个即将到来的时间点作为默认选中
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  
  const currentHour = Math.floor(now.getHours() / 2) * 2
  const nextHour = currentHour + 2
  const [selectedHour, setSelectedHour] = useState<number | null>(null)
  
  // 初始化时设置默认选中为即将到来的点
  useEffect(() => {
    if (selectedHour === null) {
      const currentHour = Math.floor(now.getHours() / 2) * 2
      const nextHour = currentHour + 2
      setSelectedHour(nextHour)
    }
  }, [now, selectedHour])

  return (
    <main className="min-h-screen bg-background pb-20">
      <div className="p-6 pt-12 max-w-screen-sm mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-light mb-2">
            <InkRevealText text="Destiny Trending" />
          </h1>
          <p className="text-sm opacity-60 font-light">
            <InkRevealText text="Your today's fortune curve and life fortune curve" />
          </p>
        </div>

        {/* Today Trending / Life Trending TAB */}
        <div className="flex gap-0 border hairline border-foreground mb-8">
          <button
            onClick={() => setDestinyMode("today")}
            className={`flex-1 py-3 text-xs font-light border-r hairline border-foreground transition-colors ${
              destinyMode === "today" ? "bg-foreground text-background" : "hover:bg-muted"
            }`}
          >
            Today Trending
          </button>
          <button
            onClick={() => setDestinyMode("life")}
            className={`flex-1 py-3 text-xs font-light transition-colors ${
              destinyMode === "life" ? "bg-foreground text-background" : "hover:bg-muted"
            }`}
          >
            Life Trending
          </button>
        </div>

        {/* Destiny Chart Section */}
        <div className="relative mb-6">
          <div className="space-y-8">
            <DestinyChart 
              mode={destinyMode} 
              showChart={cardRevealed || destinyMode === "life"}
              selectedHour={selectedHour}
              onSelectHour={setSelectedHour}
              onCardSelect={() => setCardRevealed(true)}
            />
            
            {/* Timeline content - reveals after chart */}
            <div 
              className="overflow-hidden"
              style={{
                maxHeight: (cardRevealed || destinyMode === "life") ? '500px' : '0px',
                opacity: (cardRevealed || destinyMode === "life") ? 1 : 0,
                transform: (cardRevealed || destinyMode === "life") ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'max-height 0.6s ease-out, opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s'
              }}
            >
              <DestinyTimeline 
                selectedHour={selectedHour}
                onSelectHour={setSelectedHour}
              />
            </div>
          </div>

        </div>

        {/* Stars Section - 放在曲线下方，随时间轴展开自然下移 */}
        <div 
          className="mt-6"
          style={{
            transition: 'transform 0.6s ease-out, margin-top 0.6s ease-out'
          }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-light mb-2">
              <InkRevealText text="Stars" />
            </h1>
            <p className="text-sm opacity-60 font-light">
              <InkRevealText text="Your celestial alignment and cosmic energy" />
            </p>
          </div>
          <StarRadar />
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
