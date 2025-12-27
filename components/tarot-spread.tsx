"use client"

import { useState, useRef, useEffect } from "react"
import { TarotCard } from "./tarot-card"
import { tarotCards, TarotCardData, getRandomCard } from "@/lib/tarot-data"
import { InkRevealText } from "./ink-reveal-text"

interface TarotSpreadProps {
  onSelect: (card: TarotCardData) => void
}

export function TarotSpread({ onSelect }: TarotSpreadProps) {
  const [isSpread, setIsSpread] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [cards, setCards] = useState<TarotCardData[]>([])
  const [isHolding, setIsHolding] = useState(false)
  const [holdProgress, setHoldProgress] = useState(0)
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize with 7 random cards for the spread
  useEffect(() => {
    const randomSelection = [...tarotCards]
      .sort(() => Math.random() - 0.5)
      .slice(0, 7)
    setCards(randomSelection)
  }, [])

  const startHold = () => {
    if (isSpread) return
    setIsHolding(true)
    setHoldProgress(0)
    
    let progress = 0
    holdTimerRef.current = setInterval(() => {
      progress += 2
      setHoldProgress(Math.min(progress, 100))
      if (progress >= 100) {
        if (holdTimerRef.current) clearInterval(holdTimerRef.current)
        setIsHolding(false)
        setIsSpread(true)
      }
    }, 30)
  }

  const endHold = () => {
    if (holdProgress < 100) {
      setIsHolding(false)
      setHoldProgress(0)
      if (holdTimerRef.current) clearInterval(holdTimerRef.current)
    }
  }

  const handleCardClick = (index: number) => {
    if (!isSpread || selectedIndex !== null) return
    setSelectedIndex(index)
    setTimeout(() => {
      onSelect(cards[index])
    }, 500)
  }

  return (
    <div className="relative w-full h-[400px] flex flex-col items-center justify-center">
      {/* Cards Container */}
      <div 
        className="relative w-48 h-72 perspective-1000"
        onMouseDown={!isSpread ? startHold : undefined}
        onMouseUp={!isSpread ? endHold : undefined}
        onMouseLeave={!isSpread ? endHold : undefined}
        onTouchStart={!isSpread ? startHold : undefined}
        onTouchEnd={!isSpread ? endHold : undefined}
      >
        {cards.map((card, index) => {
          // Calculate spread position
          const spreadOffset = isSpread ? (index - 3) * 40 : 0
          const spreadRotation = isSpread ? (index - 3) * 10 : 0
          const spreadZ = isSpread ? Math.abs(index - 3) * -15 : index * -2
          const isSelected = selectedIndex === index
          const isHidden = selectedIndex !== null && !isSelected

          return (
            <div
              key={card.id}
              className="absolute inset-0 transition-all duration-700 ease-out cursor-pointer"
              style={{
                transform: `translateX(${spreadOffset}px) rotateZ(${spreadRotation}deg) translateZ(${spreadZ}px) ${
                  isSelected ? "scale(1.1) translateY(-40px)" : ""
                }`,
                opacity: isHidden ? 0 : 1,
                pointerEvents: isHidden ? "none" : (isSpread ? "auto" : "none"), // Disable individual card pointer events when not spread to let container handle hold
                zIndex: isSelected ? 100 : 10 + index,
              }}
              onClick={() => handleCardClick(index)}
            >
              <TarotCard card={card} isInteractive={false} />
            </div>
          )
        })}
      </div>

      {/* Progress Bar for Holding */}
      {isHolding && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[1px] bg-foreground/10 overflow-hidden z-[60]">
          <div 
            className="h-full bg-foreground transition-all duration-100"
            style={{ width: `${holdProgress}%` }}
          />
        </div>
      )}

      {/* Instruction text */}
      <div className="mt-12 text-center h-8">
        {!isSpread ? (
          <p className="text-xs opacity-40 tracking-widest uppercase">
            {isHolding ? "Focusing..." : "Hold the deck to spread"}
          </p>
        ) : selectedIndex === null ? (
          <p className="text-xs opacity-40 tracking-widest uppercase">
            Select your card
          </p>
        ) : null}
      </div>
    </div>
  )
}

