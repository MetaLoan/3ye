"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { InkRevealText } from "@/components/ink-reveal-text"
import { TarotCard } from "@/components/tarot-card"
import { DestinyChart } from "@/components/destiny-chart"
import { DestinyTimeline } from "@/components/destiny-timeline"
import { StarRadar } from "@/components/star-radar"

type DestinyMode = "today" | "life"

export default function DestinyPage() {
  const [destinyMode, setDestinyMode] = useState<DestinyMode>("today")
  const [cardRevealed, setCardRevealed] = useState(false)
  const [selectedHour, setSelectedHour] = useState<number | null>(null)

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
        <div className="flex gap-0 border hairline border-foreground rounded mb-8">
          <button
            onClick={() => setDestinyMode("today")}
            className={`flex-1 py-3 text-sm font-light border-r hairline border-foreground transition-colors ${
              destinyMode === "today" ? "bg-foreground text-background" : "hover:bg-muted"
            }`}
          >
            Today Trending
          </button>
          <button
            onClick={() => setDestinyMode("life")}
            className={`flex-1 py-3 text-sm font-light transition-colors ${
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
            />
            
            {/* Timeline content - reveals after chart */}
            {(cardRevealed || destinyMode === "life") && (
              <div className="animate-fade-in" style={{ animationDelay: "2s" }}>
                <DestinyTimeline 
                  selectedHour={selectedHour}
                  onSelectHour={setSelectedHour}
                />
              </div>
            )}
          </div>

          {/* Card overlay for Today view when not revealed */}
          {destinyMode === "today" && !cardRevealed && (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-background/20 backdrop-blur-sm pointer-events-none">
              <div className="pointer-events-auto mt-[-100px]">
                <TarotCard onReveal={() => setCardRevealed(true)} />
              </div>
            </div>
          )}
        </div>

        {/* Stars Section - 放在曲线下方 */}
        <div className="mt-6">
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
