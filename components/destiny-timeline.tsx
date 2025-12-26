"use client"

import { useEffect, useRef } from "react"
import { InkRevealText } from "./ink-reveal-text"

interface TimelineItem {
  hour: number
  title: string
  content: string
  type: "do" | "dont" | "warning" | "ritual"
}

interface DestinyTimelineProps {
  selectedHour: number | null
  onSelectHour: (hour: number | null) => void
}

const timelineData: TimelineItem[] = [
  {
    hour: 0,
    title: "Midnight Threshold",
    content: "The day resets. Silent observation of your inner compass.",
    type: "ritual",
  },
  {
    hour: 2,
    title: "Deep Void",
    content: "The veil is thinnest. Avoid active manifestation; practice silent observation.",
    type: "dont",
  },
  {
    hour: 4,
    title: "Pre-Dawn Stillness",
    content: "The subconscious is most receptive. Dream work and intuition peak.",
    type: "ritual",
  },
  {
    hour: 6,
    title: "Ink Awakening",
    content: "Write down your first thought. This is the seed of your day's trajectory.",
    type: "ritual",
  },
  {
    hour: 8,
    title: "Morning Momentum",
    content: "Physical energy peaks. Ideal for challenging tasks and bold moves.",
    type: "do",
  },
  {
    hour: 10,
    title: "Peak Frequency",
    content: "Manifest professional growth. The alignment is perfect for strategic expansion.",
    type: "do",
  },
  {
    hour: 12,
    title: "Solar Zenith",
    content: "Current moment. Your destiny is being written right now.",
    type: "warning",
  },
  {
    hour: 14,
    title: "Static Noise",
    content: "Avoid major financial decisions. The energy field is currently fragmented.",
    type: "warning",
  },
  {
    hour: 16,
    title: "Afternoon Flow",
    content: "Creative energies stabilize. Perfect for collaboration and refinement.",
    type: "do",
  },
  {
    hour: 18,
    title: "Twilight Harmony",
    content: "Perfect time for social connection and magnetic resonance with others.",
    type: "do",
  },
  {
    hour: 20,
    title: "Evening Reflection",
    content: "Review the day's patterns. What aligned? What drifted?",
    type: "ritual",
  },
  {
    hour: 22,
    title: "Starlight Shield",
    content: "Close the day with a mental cleanse. Protect your subconscious from digital noise.",
    type: "ritual",
  },
  {
    hour: 24,
    title: "Full Circle",
    content: "The cycle completes. Tomorrow awaits with new frequencies.",
    type: "ritual",
  },
]

export function DestinyTimeline({ selectedHour, onSelectHour }: DestinyTimelineProps) {
  const currentHour = 12
  const nextHour = currentHour + 2 // 下一个即将到来的时间点
  const containerRef = useRef<HTMLDivElement>(null)
  const selectedItem = timelineData.find(item => item.hour === selectedHour)

  // Auto-scroll selected item to center
  useEffect(() => {
    if (selectedHour !== null && containerRef.current) {
      const container = containerRef.current
      const selectedButton = container.querySelector(`[data-hour="${selectedHour}"]`)
      
      if (selectedButton) {
        const buttonRect = selectedButton.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        const scrollLeft = buttonRect.left - containerRect.left - containerRect.width / 2 + buttonRect.width / 2
        
        container.scrollTo({
          left: container.scrollLeft + scrollLeft,
          behavior: 'smooth'
        })
      }
    }
  }, [selectedHour])

  return (
    <div className="mt-2 pb-12">
      {/* Content Card - Shows between chart and timeline when item is selected */}
      {selectedItem && (
        <div className="relative mb-4 animate-fade-in">
          {/* Content Card */}
          <div className="max-w-md mx-auto p-4 box-frame">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[8px]  tracking-widest px-2 py-1 rounded-sm bg-foreground/5 text-foreground">
                {selectedItem.type}
              </span>
              <h3 className="text-sm font-normal tracking-tight text-foreground">
                <InkRevealText text={selectedItem.title} />
              </h3>
            </div>
            <p className="text-xs font-light leading-relaxed text-foreground">
              <InkRevealText text={selectedItem.content} />
            </p>
          </div>
          {/* Triangle Indicator pointing down to timeline */}
          <div className="flex justify-center mt-2">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-foreground" />
          </div>
        </div>
      )}

      {/* Horizontal Timeline - Scrollable */}
      <div ref={containerRef} className="relative overflow-x-auto scrollbar-hide">
        <div className="relative inline-flex items-start gap-0" style={{ minHeight: '50px', paddingLeft: 'calc(50% - 40px)', paddingRight: 'calc(50% - 40px)' }}>
          {/* Horizontal Line - extends beyond the points */}
          <div className="absolute left-0 right-0 top-2 h-[0.5px] bg-foreground" />
          
          {/* Timeline Items */}
          {timelineData.map((item, i) => {
            const isPast = item.hour <= currentHour
            const isCurrent = item.hour === currentHour
            const isNext = item.hour === nextHour
            const isSelected = selectedHour === item.hour
            const isClickable = isPast || isCurrent || isNext
            
            return (
              <div key={i} className="relative flex flex-col items-center shrink-0" style={{ width: '80px' }}>
                {/* Dot */}
                <button
                  data-hour={item.hour}
                  onClick={() => isClickable && onSelectHour(isSelected ? null : item.hour)}
                  disabled={!isClickable}
                  className={`absolute w-4 h-4 rounded-full flex items-center justify-center transition-all top-2 -translate-y-1/2 ${
                    isSelected 
                      ? 'border-[2px] border-foreground bg-background scale-125 z-20' 
                      : isPast || isCurrent
                      ? 'border-[0.5px] border-foreground/10 bg-background cursor-pointer hover:scale-110 z-10' 
                      : isNext
                      ? 'border-[0.5px] border-foreground/10 bg-background cursor-pointer hover:scale-110 z-10'
                      : 'border-[0.5px] border-foreground/5 bg-background/50 cursor-not-allowed z-0'
                  } ${isCurrent && !isSelected ? 'ring-1 ring-foreground/20' : ''}`}
                >
                  <div className={`w-1 h-1 rounded-full transition-all ${
                    isSelected ? "w-1.5 h-1.5 bg-foreground" :
                    isCurrent ? "bg-foreground" :
                    isPast ? (
                      item.type === "do" ? "holographic" : 
                      item.type === "dont" ? "bg-foreground/40" : 
                      item.type === "warning" ? "bg-foreground" : "holographic"
                    ) : isNext ? "bg-foreground/30" : "bg-foreground/10"
                  }`} />
                </button>

                {/* Time Label */}
                <span className={`absolute top-6 text-[10px] font-mono whitespace-nowrap text-foreground ${
                  isSelected ? 'font-normal' : isPast || isNext ? '' : 'opacity-30'
                }`}>
                  {String(item.hour).padStart(2, '0')}:00
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

