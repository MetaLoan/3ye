"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { InkRevealText } from "@/components/ink-reveal-text"
import { AudioPlayer } from "@/components/audio-player"
import { ManifestationRecorder } from "@/components/manifestation-recorder"

const freeLibrary = [
  {
    id: "deep-sleep",
    title: "Deep Sleep",
    subtitle: "Delta waves for restorative rest",
    frequency: "432Hz + White Noise",
    duration: "8:00",
    description: "Gentle delta wave frequencies tuned to 432Hz harmonize with your natural sleep cycle. The layered white noise masks environmental disturbances, guiding you into deep restorative sleep within minutes.",
  },
  {
    id: "focus-flow",
    title: "Focus Flow",
    subtitle: "Gamma waves for concentration",
    frequency: "40Hz Binaural",
    duration: "25:00",
    description: "40Hz gamma binaural beats enhance neural synchronization and cognitive clarity. Ideal for deep work sessions, creative problem-solving, or whenever you need laser-sharp mental focus.",
  },
  {
    id: "anxiety-shield",
    title: "Anxiety Shield",
    subtitle: "Calming frequencies",
    frequency: "528Hz + Singing Bowl",
    duration: "12:00",
    description: "The 528Hz 'miracle tone' combined with Tibetan singing bowls creates a protective sonic cocoon. Reduces cortisol levels and activates your parasympathetic nervous system for instant calm.",
  },
  {
    id: "energy-boost",
    title: "Energy Boost",
    subtitle: "Morning activation",
    frequency: "Beta Wave 15Hz",
    duration: "10:00",
    description: "Energizing beta frequencies stimulate alertness and mental clarity. Perfect for replacing your morning coffee or overcoming afternoon fatigue. Awakens body and mind naturally.",
  },
]

export default function EchoPage() {
  // 追踪每个音频的播放次数（模拟一些初始数据）
  const [playCountMap, setPlayCountMap] = useState<Record<string, number>>({
    "deep-sleep": 5,      // 满能量
    "focus-flow": 3,      // 3档能量
    "anxiety-shield": 1,  // 1档能量
    "energy-boost": 0,    // 无能量
  })

  const handlePlayComplete = (audioId: string) => {
    setPlayCountMap((prev) => ({
      ...prev,
      [audioId]: Math.min((prev[audioId] || 0) + 1, 5), // 最多5档
    }))
  }

  return (
    <main className="min-h-screen bg-background pb-20">
      <div className="p-6 pt-12 max-w-screen-lg mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-light mb-2">
            <InkRevealText text="Echo" />
          </h1>
          <p className="text-sm opacity-60 font-light">
            <InkRevealText text="Soul resonance & healing frequencies" />
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Free Library Section */}
          <section className="space-y-3">
            {freeLibrary.map((audio) => (
              <AudioPlayer 
                key={audio.id} 
                {...audio} 
                playCount={playCountMap[audio.id] || 0}
                onPlayComplete={() => handlePlayComplete(audio.id)}
              />
            ))}
          </section>

          {/* Manifestation Section */}
          <section className="lg:sticky lg:top-6">
            <ManifestationRecorder />
          </section>
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
