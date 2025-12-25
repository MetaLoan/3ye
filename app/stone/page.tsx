import { BottomNav } from "@/components/bottom-nav"
import { InkRevealText } from "@/components/ink-reveal-text"
import { FateStone } from "@/components/fate-stone"

export default function StonePage() {
  return (
    <main className="min-h-screen bg-background pb-20">
      <div className="p-6 pt-12 max-w-screen-sm mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-light mb-4">
            <InkRevealText text="The Fate Stone" />
          </h1>
          <p className="text-xs opacity-60 font-light tracking-wide">
            <InkRevealText text="When destiny calls for an answer" />
          </p>
        </div>

        <FateStone />
      </div>

      <BottomNav />
    </main>
  )
}
