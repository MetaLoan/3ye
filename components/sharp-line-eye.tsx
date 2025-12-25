"use client"

import { useState, useEffect, useRef } from "react"

export function SharpLineEye() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const dx = mousePos.x - centerX
    const dy = mousePos.y - centerY
    const dist = Math.sqrt(dx * dx + dy * dy)
    const angle = Math.atan2(dy, dx)

    // 限制移动范围，确保圆润的眼球不超出尖锐的眼眶
    const maxMove = 25
    const limitedDist = Math.min(dist / 15, maxMove)

    setEyeOffset({
      x: Math.cos(angle) * limitedDist,
      y: Math.sin(angle) * limitedDist,
    })
  }, [mousePos])

  // 定义尖锐眼眶的路径
  // M 10 100 (左尖角)
  // Q 100 40 190 100 (上弧线到右尖角)
  // Q 100 160 10 100 (下弧线回左尖角)
  const eyePath = "M 10 100 Q 100 45 190 100 Q 100 155 10 100 Z"

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center w-full h-screen bg-black overflow-hidden cursor-none"
    >
      <svg width="600" height="600" viewBox="0 0 200 200">
        <defs>
          {/* 尖锐眼眶的裁剪区域 */}
          <clipPath id="sharpEyeClip">
            <path d={eyePath} />
          </clipPath>
        </defs>

        {/* 装饰性外部线条 - 强化尖锐感 */}
        <path d="M 0 100 L 30 100 M 170 100 L 200 100" stroke="white" strokeWidth="0.5" opacity="0.3" />

        {/* 主眼眶轮廓 */}
        <path d={eyePath} fill="none" stroke="white" strokeWidth="1.2" />

        {/* 内部细轮廓线 */}
        <path d="M 18 100 Q 100 52 182 100 Q 100 148 18 100 Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />

        {/* 可移动的圆眼球 */}
        <g clipPath="url(#sharpEyeClip)">
          <g
            style={{
              transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
              transition: "transform 0.12s ease-out",
            }}
          >
            {/* 完美的圆形虹膜轮廓 */}
            <circle cx="100" cy="100" r="42" fill="none" stroke="white" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="38" fill="none" stroke="white" strokeWidth="0.3" strokeDasharray="2 2" />

            {/* 放射状精密线条 */}
            {[...Array(48)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + Math.cos((i * 7.5 * Math.PI) / 180) * 42}
                y2={100 + Math.sin((i * 7.5 * Math.PI) / 180) * 42}
                stroke="white"
                strokeWidth="0.3"
                opacity="0.2"
              />
            ))}

            {/* 核心瞳孔 - 保持竖直且尖锐 */}
            <ellipse cx="100" cy="100" rx="8" ry="28" fill="white" />

            {/* 瞳孔内部的黑色细缝 */}
            <ellipse cx="100" cy="100" rx="1.5" ry="20" fill="black" />
          </g>
        </g>

        {/* 眼角排线装饰 */}
        <g stroke="white" strokeWidth="0.5" opacity="0.2">
          <line x1="20" y1="95" x2="35" y2="85" />
          <line x1="20" y1="105" x2="35" y2="115" />
          <line x1="180" y1="95" x2="165" y2="85" />
          <line x1="180" y1="105" x2="165" y2="115" />
        </g>
      </svg>

      {/* 极简跟随点 */}
      <div
        className="fixed w-1 h-1 bg-white rounded-full pointer-events-none opacity-50"
        style={{ left: mousePos.x, top: mousePos.y }}
      />
    </div>
  )
}

