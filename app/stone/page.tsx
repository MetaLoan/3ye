"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { InkRevealText } from "@/components/ink-reveal-text"
import { FateStone } from "@/components/fate-stone"
import { TarotCard } from "@/components/tarot-card"

export default function StonePage() {
  const [mode, setMode] = useState<"stone" | "tarot">("stone")

  return (
    <main className="h-screen bg-background overflow-hidden flex flex-col">
      <div className="h-[calc(100vh-84px)] overflow-hidden">
        <div className="p-6 pt-6 max-w-screen-sm mx-auto flex flex-col h-full">
          <div className="shrink-0 mb-2 text-center relative z-10">
            <h1 className="text-4xl font-light mb-4">
              <InkRevealText 
                key={mode} 
                text={mode === "stone" ? "The Fate Stone" : "Tarot Reading"} 
              />
            </h1>
            <p className="text-xs opacity-60 font-light tracking-wide mb-4">
              <InkRevealText 
                key={`sub-${mode}`}
                text={mode === "stone" ? "When destiny calls for an answer" : "Reveal the cards of your fate"} 
              />
            </p>

            {/* Mode Switcher */}
            <div className="flex items-center justify-center gap-6">
               <button 
                  onClick={() => setMode("stone")}
                  className={`text-xs uppercase tracking-widest transition-all duration-500 ${
                    mode === "stone" ? "opacity-100 border-b border-foreground pb-1" : "opacity-30 pb-1 border-b border-transparent hover:opacity-60"
                  }`}
               >
                 Stone
               </button>
               <span className="text-xs opacity-10">|</span>
               <button 
                  onClick={() => setMode("tarot")}
                  className={`text-xs uppercase tracking-widest transition-all duration-500 ${
                    mode === "tarot" ? "opacity-100 border-b border-foreground pb-1" : "opacity-30 pb-1 border-b border-transparent hover:opacity-60"
                  }`}
               >
                 Tarot
               </button>
            </div>
          </div>

          <div className="flex-1 relative z-0">
            {mode === "stone" ? (
              <div className="animate-in fade-in duration-700 h-full">
                <FateStone />
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center pt-8 animate-in fade-in zoom-in-95 duration-700">
                 <TarotCard onReveal={() => {}} />
                 <div className="mt-12 text-center">
                   <p className="text-xs opacity-30 font-light tracking-widest">
                     <InkRevealText text="Focus on your question" />
                   </p>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
