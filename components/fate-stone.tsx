"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { InkRevealText } from "./ink-reveal-text"
import { TextReveal } from "./text-reveal"
import dynamic from "next/dynamic"

// 动态导入 3D 石头组件避免 SSR 问题
const Stone3D = dynamic(
  () => import("./stone-3d").then((mod) => mod.Stone3D),
  { ssr: false }
)

const oracles = [
  { result: "YES", message: "The path ahead glows with certainty" },
  { result: "NO", message: "Resistance is the universe's protection" },
  { result: "WAIT", message: "Timing is the hidden dimension of fate" },
  { result: "SILENCE", message: "The silence is the answer" },
  { result: "RELEASE", message: "Let go of what you cannot control" },
]

// 长按时按顺序显示的提示文字（speed: 文字动画速度倍率，shake: 是否震动）
const holdingMessages = [
  { text: "Hold your breath...", speed: 1, shake: false },
  { text: "Focus on your question...", speed: 1, shake: false },
  { text: "Breathe steadily...", speed: 1, shake: false },
  { text: "I see it! The question deep in your heart!", speed: 2, shake: true },
  { text: "This question seems...", speed: 2, shake: true },
  { text: "Let me answer you...", speed: 1, shake: false },
]

// 随机生成 3-5 秒的等待时间
const getRandomWaitTime = () => 3000 + Math.random() * 2000

// 中途松开时的提示
const unfocusedMessage = "It seems you lack focus. I cannot reveal the answer."

export function FateStone() {
  const [isHolding, setIsHolding] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [messageMode, setMessageMode] = useState<"fadein" | "fadeaway" | "idle">("idle")
  const [isShaking, setIsShaking] = useState(false) // 石头震动状态
  const [revealed, setRevealed] = useState(false)
  const [oracle, setOracle] = useState(oracles[0])
  const [showChoice, setShowChoice] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [showUnfocusedMessage, setShowUnfocusedMessage] = useState(false)
  const holdTimerRef = useRef<NodeJS.Timeout>()
  const progressTimerRef = useRef<NodeJS.Timeout>()
  const messageTimerRef = useRef<NodeJS.Timeout>()
  const stoneRef = useRef<HTMLDivElement>(null)
  const completedRef = useRef(false)
  const router = useRouter()

  const startHold = () => {
    if (revealed) return

    setIsHolding(true)
    setProgress(0)
    setCurrentMessageIndex(0)
    setMessageMode("fadein")
    setShowUnfocusedMessage(false)
    completedRef.current = false

    // 持续增加进度用于3D效果
    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100))
    }, 30)
  }
  
  // 消息淡入完成后的回调
  const handleMessageFadeInComplete = () => {
    const waitTime = getRandomWaitTime()
    const isLastMessage = currentMessageIndex === holdingMessages.length - 1
    
    // 等待随机 3-5 秒后开始消失动画
    messageTimerRef.current = setTimeout(() => {
      if (isLastMessage) {
        // 最后一条消息直接触发结果
        completedRef.current = true
        triggerResult()
      } else {
        // 开始逐字消失动画
        setMessageMode("fadeaway")
      }
    }, waitTime)
  }
  
  // 消息消失完成后的回调
  const handleMessageFadeOutComplete = () => {
    // 显示下一条消息
    const nextIndex = currentMessageIndex + 1
    setCurrentMessageIndex(nextIndex)
    setMessageMode("fadein")
    // 根据下一条消息设置震动状态
    if (nextIndex < holdingMessages.length) {
      setIsShaking(holdingMessages[nextIndex].shake)
    }
  }

  const triggerResult = () => {
    // 清理定时器
    if (progressTimerRef.current) clearInterval(progressTimerRef.current)
    if (messageTimerRef.current) clearTimeout(messageTimerRef.current)
    
    // Generate oracle result
    const randomOracle = oracles[Math.floor(Math.random() * oracles.length)]
    setOracle(randomOracle)
    setRevealed(true)
    setIsHolding(false)
    setProgress(0)
    setMessageMode("idle")
    setIsShaking(false)

    // Show choice buttons after brief delay
    setTimeout(() => {
      setShowChoice(true)
    }, 1500)
  }

  const releaseStone = () => {
    if (!isHolding) return
    
    // 清理定时器
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current)
    if (progressTimerRef.current) clearInterval(progressTimerRef.current)
    if (messageTimerRef.current) clearTimeout(messageTimerRef.current)

    // 如果已经完成，不做任何处理
    if (completedRef.current || revealed) return

    // 中途松开显示不够专注的提示
    setShowUnfocusedMessage(true)
    setIsHolding(false)
    setProgress(0)
    setMessageMode("idle")
    setIsShaking(false)
    
    // 3秒后隐藏提示
    setTimeout(() => {
      setShowUnfocusedMessage(false)
    }, 3000)
  }

  const makeChoice = (choice: "follow" | "rebel") => {
    // 开始淡出动画
    setIsFadingOut(true)
    
    // 动画结束后重置状态
    setTimeout(() => {
      setRevealed(false)
      setShowChoice(false)
      setIsFadingOut(false)
      setOracle(oracles[0])
    }, 600) // 600ms 淡出动画
  }

  useEffect(() => {
    return () => {
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current)
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
      if (messageTimerRef.current) clearTimeout(messageTimerRef.current)
    }
  }, [])

  return (
    <div className="h-full flex flex-col items-center justify-between relative">
      {/* Stone */}
      <div className="flex-1 flex items-center justify-center w-full" ref={stoneRef}>
        {/* 3D 多面体石头 */}
        <div
          onMouseDown={startHold}
          onMouseUp={releaseStone}
          onMouseLeave={releaseStone}
          onTouchStart={startHold}
          onTouchEnd={releaseStone}
          className="transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
          style={{ 
            cursor: revealed ? 'default' : 'pointer',
            pointerEvents: revealed ? 'none' : 'auto',
            transform: revealed ? 'scale(0.8) translateY(-40px)' : 'scale(1) translateY(0)'
          }}
        >
          <Stone3D 
            size={320}
            isHolding={isHolding}
            progress={progress}
            revealed={revealed}
            isShaking={isShaking}
          />
        </div>
      </div>

      <div className="flex-none w-full flex flex-col items-center justify-end pb-5 relative min-h-[160px]">
        {/* Instruction text / Holding messages - Always rendered but faded out when revealed */}
        <div 
          className={`text-center h-[60px] flex flex-col items-center justify-center overflow-hidden absolute bottom-5 left-0 right-0 transition-all duration-700 ease-out ${
            revealed ? 'opacity-0 translate-y-4 pointer-events-none delay-0' : 'opacity-100 translate-y-0 delay-300'
          }`}
        >
            {showUnfocusedMessage ? (
              <p className="text-xs opacity-60 font-light tracking-wide italic">
                <InkRevealText text={unfocusedMessage} staggerDelay={30} />
              </p>
            ) : isHolding && messageMode !== "idle" ? (
              <p 
                key={currentMessageIndex}
                className="text-xs opacity-60 font-light tracking-wide"
              >
                <TextReveal 
                  key={`msg-${currentMessageIndex}-${messageMode}`}
                  text={holdingMessages[currentMessageIndex].text} 
                  mode={messageMode}
                  delayPerChar={messageMode === "fadein" 
                    ? Math.round(40 / holdingMessages[currentMessageIndex].speed) 
                    : Math.round(30 / holdingMessages[currentMessageIndex].speed)}
                  onComplete={messageMode === "fadein" ? handleMessageFadeInComplete : handleMessageFadeOutComplete}
                />
              </p>
            ) : !isHolding && (
              <>
                <p className="text-xs opacity-40 tracking-widest ">
                  <InkRevealText text="Hold to seek guidance" />
                </p>
                <p className="text-xs opacity-20 mt-2">3 times remaining today</p>
              </>
            )}
        </div>

        {/* Oracle result - Positioned relative to take up space */}
        {revealed && (
          <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards ease-out">
            <div 
              className="text-center space-y-4 transition-all duration-500 ease-out mb-6"
              style={{
                opacity: isFadingOut ? 0 : 1,
                transform: isFadingOut ? 'translateY(-20px)' : 'translateY(0)',
              }}
            >
              <div className="text-5xl font-light tracking-wider">
                <InkRevealText text={oracle.result} />
              </div>
              <div className="text-sm opacity-60 max-w-xs mx-auto leading-relaxed">
                <InkRevealText text={oracle.message} />
              </div>
            </div>

            {/* Choice buttons */}
            {showChoice ? (
              <div 
                className="flex gap-4 w-full max-w-sm px-6 transition-all duration-700 ease-out animate-in fade-in slide-in-from-bottom-4"
                style={{
                  opacity: isFadingOut ? 0 : 1,
                  transform: isFadingOut ? 'translateY(20px)' : 'translateY(0)',
                }}
              >
                <button
                  onClick={() => makeChoice("follow")}
                  className="flex-1 border hairline border-foreground py-3 text-sm font-light hover:bg-foreground hover:text-background transition-all ink-reveal"
                >
                  Follow
                </button>
                <button
                  onClick={() => makeChoice("rebel")}
                  className="flex-1 border hairline border-foreground bg-foreground text-background py-3 text-sm font-light hover:bg-background hover:text-foreground transition-all ink-reveal-delay-1"
                >
                  No Way
                </button>
              </div>
            ) : (
               /* Placeholder to keep layout stable if needed, or just let it expand */
               <div className="h-[46px] w-full" /> 
            )}
          </div>
        )}
      </div>
    </div>
  )
}
