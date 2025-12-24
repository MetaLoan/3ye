"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { InkRevealText } from "@/components/ink-reveal-text"
import { TarotCard } from "@/components/tarot-card"
import { DestinyChart } from "@/components/destiny-chart"
import { DestinyTimeline } from "@/components/destiny-timeline"
import { StarRadar } from "@/components/star-radar"

type View = "destiny" | "stars"

export default function DestinyPage() {
  const [activeView, setActiveView] = useState<View>("destiny")
  const [destinyMode, setDestinyMode] = useState<"today" | "life">("today")
  const [cardRevealed, setCardRevealed] = useState(false)
  const [selectedHour, setSelectedHour] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background pb-20">
      <div className="p-6 pt-12 max-w-screen-sm mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light mb-2">
            <InkRevealText text="Destiny" />
          </h1>
          <p className="text-sm opacity-60 font-light">
            <InkRevealText text="Tune your destiny frequency" />
          </p>
        </div>

        <div className="flex gap-0 border hairline border-foreground rounded mb-8">
          <button
            onClick={() => setActiveView("destiny")}
            className={`flex-1 py-3 text-sm font-light border-r hairline border-foreground transition-colors ${
              activeView === "destiny" ? "bg-foreground text-background" : "hover:bg-muted"
            }`}
          >
            Destiny Line
          </button>
          <button
            onClick={() => setActiveView("stars")}
            className={`flex-1 py-3 text-sm font-light transition-colors ${
              activeView === "stars" ? "bg-foreground text-background" : "hover:bg-muted"
            }`}
          >
            Stars
          </button>
        </div>

        {activeView === "destiny" && (
          <div className="flex items-center justify-end gap-3 mb-6">
            <span
              className={`text-xs font-light transition-opacity ${destinyMode === "today" ? "opacity-100" : "opacity-40"}`}
            >
              Today
            </span>
            <button
              onClick={() => setDestinyMode(destinyMode === "today" ? "life" : "today")}
              className="relative w-12 h-6 border hairline border-foreground rounded-full transition-colors"
            >
              <div
                className={`absolute top-0.5 w-5 h-5 rounded-full border hairline border-foreground bg-background transition-all ${
                  destinyMode === "life" ? "left-6 holographic" : "left-0.5"
                }`}
              />
            </button>
            <span
              className={`text-xs font-light transition-opacity ${destinyMode === "life" ? "opacity-100" : "opacity-40"}`}
            >
              Life
            </span>
          </div>
        )}

        {/* Content based on active view */}
        {activeView === "destiny" && (
          <div className="relative">
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
        )}

        {activeView === "stars" && (
          <div>
            <StarRadar />
          </div>
        )}
      </div>

      <BottomNav />
    </main>
  )
}
