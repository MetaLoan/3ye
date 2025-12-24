"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { InkRevealText } from "@/components/ink-reveal-text"
import { WaveformVisual } from "@/components/waveform-visual"

export default function ConnectPage() {
  const [showResult, setShowResult] = useState(false)
  const [date1, setDate1] = useState("")
  const [date2, setDate2] = useState("")

  const generateWaveform = () => {
    if (date1 && date2) {
      setShowResult(true)
    }
  }

  return (
    <main className="min-h-screen bg-background pb-20">
      <div className="p-6 pt-12 max-w-screen-sm mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-light mb-2">
            <InkRevealText text="Connect" />
          </h1>
          <p className="text-sm opacity-60 font-light">
            <InkRevealText text="Magnetic field resonance" />
          </p>
        </div>

        {/* Vibe Check Interface */}
        <div className="mb-12">
          <h2 className="text-lg font-light mb-6">
            <InkRevealText text="Vibe Check" />
          </h2>

          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-xs opacity-40 mb-2 tracking-wider uppercase">Your birthday</label>
              <input
                type="date"
                value={date1}
                onChange={(e) => setDate1(e.target.value)}
                className="w-full border hairline border-foreground rounded px-4 py-3 text-sm font-light bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
              />
            </div>
            <div>
              <label className="block text-xs opacity-40 mb-2 tracking-wider uppercase">Their birthday</label>
              <input
                type="date"
                value={date2}
                onChange={(e) => setDate2(e.target.value)}
                className="w-full border hairline border-foreground rounded px-4 py-3 text-sm font-light bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
              />
            </div>
          </div>

          <button
            onClick={generateWaveform}
            disabled={!date1 || !date2}
            className="w-full border hairline border-foreground rounded py-4 text-sm font-light hover:bg-foreground hover:text-background transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Generate Magnetic Field
          </button>
        </div>

        {/* Waveform visualization */}
        {showResult ? (
          <div className="space-y-6">
            <WaveformVisual compatibility={87.5} person1="You" person2="Them" />

            {/* Detailed analysis */}
            <div className="border hairline border-foreground rounded p-6">
              <h3 className="text-base font-light mb-4">
                <InkRevealText text="Energy Analysis" />
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="opacity-60 text-xs">Emotional Sync</span>
                    <span className="text-xs">92%</span>
                  </div>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-foreground" style={{ width: "92%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="opacity-60 text-xs">Intellectual Harmony</span>
                    <span className="text-xs">78%</span>
                  </div>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-foreground" style={{ width: "78%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="opacity-60 text-xs">Spiritual Alignment</span>
                    <span className="text-xs">95%</span>
                  </div>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-foreground" style={{ width: "95%" }} />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t hairline border-foreground">
                <p className="text-xs opacity-60 leading-relaxed">
                  <InkRevealText text="Your magnetic fields show exceptional resonance. This connection operates on a frequency that transcends ordinary interaction. Nurture this bond carefully." />
                </p>
              </div>
            </div>

            {/* Share CTA */}
            <div className="text-center pt-4">
              <button className="px-8 py-3 border hairline border-foreground rounded text-sm font-light hover:bg-foreground hover:text-background transition-colors">
                Share to Instagram Story
              </button>
              <p className="text-xs opacity-30 mt-3">Unlock high-res image by sharing</p>
            </div>
          </div>
        ) : (
          <div className="border hairline border-foreground rounded h-64 flex items-center justify-center">
            <p className="text-sm opacity-40">
              <InkRevealText text="Enter birthdays to visualize magnetic resonance" />
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </main>
  )
}
