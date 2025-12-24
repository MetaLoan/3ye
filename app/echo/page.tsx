import { BottomNav } from "@/components/bottom-nav"
import { InkRevealText } from "@/components/ink-reveal-text"
import { AudioPlayer } from "@/components/audio-player"
import { ManifestationRecorder } from "@/components/manifestation-recorder"

const freeLibrary = [
  {
    title: "Deep Sleep",
    subtitle: "Delta waves for restorative rest",
    frequency: "432Hz + White Noise",
    duration: "8:00",
  },
  {
    title: "Focus Flow",
    subtitle: "Gamma waves for concentration",
    frequency: "40Hz Binaural",
    duration: "25:00",
  },
  {
    title: "Anxiety Shield",
    subtitle: "Calming frequencies",
    frequency: "528Hz + Singing Bowl",
    duration: "12:00",
  },
  {
    title: "Energy Boost",
    subtitle: "Morning activation",
    frequency: "Beta Wave 15Hz",
    duration: "10:00",
  },
]

export default function EchoPage() {
  return (
    <main className="min-h-screen bg-background pb-20">
      <div className="p-6 pt-12 max-w-screen-sm mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-light mb-2">
            <InkRevealText text="Echo" />
          </h1>
          <p className="text-sm opacity-60 font-light">
            <InkRevealText text="Soul resonance & healing frequencies" />
          </p>
        </div>

        {/* Free Library Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-light tracking-tight">
              <InkRevealText text="Free Library" />
            </h2>
            <span className="text-xs opacity-40 tracking-wider uppercase">Always free</span>
          </div>

          <div className="space-y-4">
            {freeLibrary.map((audio, i) => (
              <AudioPlayer key={i} {...audio} />
            ))}
          </div>
        </div>

        {/* Manifestation Section */}
        <ManifestationRecorder />
      </div>

      <BottomNav />
    </main>
  )
}
