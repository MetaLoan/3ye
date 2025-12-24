"use client"

import { InkRevealText } from "./ink-reveal-text"

interface ChatMessageProps {
  content: string
  isUser: boolean
  timestamp?: string
  contextHint?: string
}

export function ChatMessage({ content, isUser, timestamp, contextHint }: ChatMessageProps) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-6`}>
      <div className={`max-w-[85%] ${isUser ? "text-right" : "text-left"}`}>
        {/* Context hint for Oracle messages */}
        {!isUser && contextHint && (
          <div className="text-[10px] opacity-30 mb-2 tracking-wider uppercase">
            <InkRevealText text={contextHint} />
          </div>
        )}

        {/* Message bubble */}
        <div
          className={`inline-block border hairline rounded p-4 ${
            isUser ? "border-foreground bg-foreground text-background" : "border-foreground bg-background"
          }`}
        >
          <p className="text-sm leading-relaxed font-light">
            <InkRevealText text={content} />
          </p>
        </div>

        {/* Timestamp */}
        {timestamp && <div className="text-[10px] opacity-20 mt-2">{timestamp}</div>}
      </div>
    </div>
  )
}
