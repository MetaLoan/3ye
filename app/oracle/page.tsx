"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { InkRevealText } from "@/components/ink-reveal-text"
import { ChatMessage } from "@/components/chat-message"

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

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        content:
          "Your question reveals a deeper truth. The resistance you feel is not weakness but wisdom. Your intuition is guiding you toward a path that requires courage. Trust the energy that flows through you.",
        isUser: false,
        timestamp: "Just now",
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-background pb-40">
      <div className="p-6 pt-12 max-w-screen-sm mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-light mb-2">
            <InkRevealText text="Oracle" />
          </h1>
          <p className="text-sm opacity-60 font-light">
            <InkRevealText text="Your all-knowing companion" />
          </p>
        </div>

        {/* Messages */}
        <div className="space-y-6 mb-24">
          {messages.map((message) => (
            <ChatMessage key={message.id} {...message} />
          ))}
        </div>

        {/* Usage indicator */}
        <div className="text-center mb-8">
          <p className="text-xs opacity-20">2 of 5 daily messages remaining</p>
        </div>
      </div>

      {/* Fixed input area */}
      <div className="fixed bottom-20 left-0 right-0 p-6 bg-background border-t hairline border-foreground">
        <div className="max-w-screen-sm mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask the oracle..."
            className="flex-1 border hairline border-foreground rounded px-4 py-3 text-sm font-light bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
          />
          <button
            onClick={sendMessage}
            className="px-6 border hairline border-foreground rounded hover:bg-foreground hover:text-background transition-colors text-sm"
          >
            Send
          </button>
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
