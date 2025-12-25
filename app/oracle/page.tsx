"use client"

import { useState, useEffect, useRef } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { InkRevealText } from "@/components/ink-reveal-text"
import { ChatMessage } from "@/components/chat-message"
import { OracleInteractiveEye } from "@/components/oracle-interactive-eye"
import { OracleThinking } from "@/components/oracle-thinking"

const initialMessages = [
  {
    id: 1,
    content:
      "I sense your presence. I can see your star chart shows Mars in retrograde, and you recently chose to follow the stone's guidance. Tell me what weighs on your heart.",
    isUser: false,
    contextHint: "Context-aware",
    timestamp: "Just now",
  },
]

export default function OraclePage() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")
  const [eyeDirection, setEyeDirection] = useState<"down" | "down-right" | "down-left" | "center">("center")
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isThinking, setIsThinking] = useState(false)
  const eyeTimerRef = useRef<NodeJS.Timeout>()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // 根据输入框焦点状态改变眼睛方向
  useEffect(() => {
    if (isInputFocused) {
      setEyeDirection("down")
    } else {
      setEyeDirection("center")
    }
  }, [isInputFocused])

  const sendMessage = () => {
    if (!input.trim()) return

    const newUserMessage = {
      id: messages.length + 1,
      content: input,
      isUser: true,
      timestamp: "Just now",
    }

    setMessages([...messages, newUserMessage])
    setInput("")

    // 用户发送消息时，眼睛看向右下角（用户消息在右边）
    setEyeDirection("down-right")
    if (eyeTimerRef.current) clearTimeout(eyeTimerRef.current)
    
    // 滚动到新消息
    setTimeout(() => {
      scrollContainerRef.current?.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      })
    }, 100)

    eyeTimerRef.current = setTimeout(() => {
      // 显示思考动画，眼睛看向左下角并保持
      setIsThinking(true)
      setEyeDirection("down-left")
    }, 1500)

    // 5秒后显示AI回复
    setTimeout(() => {
      setIsThinking(false)
      
      const aiResponse = {
        id: messages.length + 2,
        content:
          "Your question reveals a deeper truth. The resistance you feel is not weakness but wisdom. Your intuition is guiding you toward a path that requires courage. Trust the energy that flows through you.",
        isUser: false,
        timestamp: "Just now",
      }
      setMessages((prev) => [...prev, aiResponse])

      // 新消息出现后，滚动到新消息
      setTimeout(() => {
        scrollContainerRef.current?.scrollTo({
          top: scrollContainerRef.current.scrollHeight,
          behavior: "smooth",
        })
      }, 100)

      // 新消息出现后，眼睛回正
      if (eyeTimerRef.current) clearTimeout(eyeTimerRef.current)
      eyeTimerRef.current = setTimeout(() => {
        setEyeDirection("center")
      }, 1000)
    }, 6500)
  }

  // 清理定时器
  useEffect(() => {
    return () => {
      if (eyeTimerRef.current) clearTimeout(eyeTimerRef.current)
    }
  }, [])

  return (
    <main className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Fixed header */}
      <div className="shrink-0 p-6 pt-12 bg-background">
        <div className="max-w-screen-sm mx-auto">
          <div className="flex items-start gap-4">
            {/* 交互式眼睛 */}
            <div className="shrink-0">
              <OracleInteractiveEye direction={eyeDirection} className="w-16 h-16" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-light mb-2">
                <InkRevealText text="Oracle" />
              </h1>
              <p className="text-sm opacity-60 font-light">
                <InkRevealText text="Your all-knowing companion" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable messages area with gradient mask */}
      <div className="flex-1 relative overflow-hidden">
        {/* 顶部渐变遮罩 - 缩小到约10%区域 */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none z-10" />
        
        <div ref={scrollContainerRef} className="h-full overflow-y-auto px-6 pb-6 hide-scrollbar">
          <div className="max-w-screen-sm mx-auto">
            {/* Messages */}
            <div className="space-y-6 pt-8">
              {messages.map((message) => (
                <ChatMessage key={message.id} {...message} />
              ))}
              
              {/* Oracle thinking animation */}
              {isThinking && <OracleThinking />}
            </div>

            {/* Usage indicator */}
            <div className="text-center my-8">
              <p className="text-xs opacity-20">2 of 5 daily messages remaining</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed input area */}
      <div className="shrink-0 p-6 bg-background pb-20">
        <div className="max-w-screen-sm mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            placeholder="Ask the oracle..."
            className="flex-1 border hairline border-foreground px-4 py-3 text-sm font-light bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
          />
          <button
            onClick={sendMessage}
            className="px-6 border hairline border-foreground hover:bg-foreground hover:text-background transition-colors text-sm"
          >
            Send
          </button>
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
