"use client"

import { useEffect, useRef } from "react"

interface StarfieldEffectProps {
  className?: string
  speedMultiplier?: number // 速度倍数，1 = 正常速度，10 = 10倍速度
  colorMode?: "normal" | "rainbow" | "fading" // 颜色模式：正常(黑白)、彩虹、渐隐回白色
}

export function StarfieldEffect({ className, speedMultiplier = 1, colorMode = "normal" }: StarfieldEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const speedRef = useRef(speedMultiplier)
  const colorModeRef = useRef(colorMode)
  const fadeProgressRef = useRef(0) // 用于 fading 模式的进度
  const starsRef = useRef<{x: number, y: number, z: number, hue: number}[]>([])
  
  // 实时更新速度和颜色模式引用
  useEffect(() => {
    speedRef.current = speedMultiplier
  }, [speedMultiplier])
  
  useEffect(() => {
    colorModeRef.current = colorMode
    if (colorMode === "fading") {
      fadeProgressRef.current = 0
    }
  }, [colorMode])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 设置 canvas 尺寸
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()

    const starCount = 400
    const baseSpeed = 2

    // 初始化星星
    if (starsRef.current.length === 0) {
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: (Math.random() - 0.5) * canvas.width,
          y: (Math.random() - 0.5) * canvas.height,
          z: Math.random() * canvas.width,
          hue: Math.random() * 360 // 每个星星有自己的色相
        })
      }
    }

    // 初始化白色背景
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    function draw() {
      const currentSpeed = baseSpeed * speedRef.current
      const currentColorMode = colorModeRef.current
      const isBoost = speedRef.current > 1.5
      
      // 计算颜色过渡进度
      let colorProgress = 0
      let fadeOpacity = 1 // fading 模式的整体透明度
      if (currentColorMode === "rainbow") {
        // 彩虹模式：速度从1到10，颜色从黑白到彩色
        colorProgress = Math.min(1, Math.max(0, (speedRef.current - 1) / 9))
      } else if (currentColorMode === "fading") {
        // 渐隐模式：保持彩色，整体透明度逐渐变为20%（约1.5秒完成）
        fadeProgressRef.current = Math.min(1, fadeProgressRef.current + 0.012)
        colorProgress = 1 // 保持彩色
        fadeOpacity = 1 - fadeProgressRef.current * 0.8 // 透明度从1变到0.2（保持20%）
      }
      // normal 模式下 colorProgress 保持为 0
      
      // 白色半透明背景产生拖尾效果
      const trailAlpha = isBoost ? 0.12 : 0.3
      ctx!.fillStyle = `rgba(255, 255, 255, ${trailAlpha})`
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height)

      for (const star of starsRef.current) {
        star.z -= currentSpeed
        // 彩虹模式时让色相缓慢变化
        if (currentColorMode === "rainbow" || (currentColorMode === "fading" && colorProgress > 0)) {
          star.hue = (star.hue + 0.3) % 360
        }

        if (star.z <= 0) {
          star.z = canvas!.width
          star.x = (Math.random() - 0.5) * canvas!.width
          star.y = (Math.random() - 0.5) * canvas!.height
          star.hue = Math.random() * 360
        }

        const k = 128 / star.z
        const x = star.x * k + canvas!.width / 2
        const y = star.y * k + canvas!.height / 2

        const size = (1 - star.z / canvas!.width) * 2
        const brightness = 1 - star.z / canvas!.width

        // fading 模式现在保持20%透明度，不再跳过绘制
        
        // 计算形态过渡进度：从圆点到线条
        // rainbow 模式下根据速度过渡，fading 模式保持线条
        const shapeProgress = currentColorMode === "rainbow" 
          ? Math.min(1, Math.max(0, (speedRef.current - 1) / 2)) // 速度 1-3 之间过渡形态
          : (currentColorMode === "fading" ? 1 : 0)
        
        if (shapeProgress > 0) {
          // 绘制线条（带过渡）
          // 计算最终透明度：基础透明度 * 形态过渡 * fading透明度
          const lineOpacity = brightness * shapeProgress * fadeOpacity
          
          if (colorProgress > 0) {
            // 彩色线条
            const saturation = 80 * colorProgress
            const lightness = 50 + 10 * colorProgress
            ctx!.strokeStyle = `hsla(${star.hue}, ${saturation}%, ${lightness}%, ${lineOpacity})`
          } else if (currentColorMode === "rainbow" && shapeProgress > 0) {
            // rainbow 模式早期：从黑色过渡
            ctx!.strokeStyle = `rgba(60, 60, 80, ${lineOpacity})`
          } else {
            ctx!.strokeStyle = `rgba(255, 255, 255, 0)`
          }
          ctx!.lineWidth = Math.max(0.5, size * 0.8)
          ctx!.beginPath()
          ctx!.moveTo(x, y)
          ctx!.lineTo(
            star.x * (k + 0.1) + canvas!.width / 2,
            star.y * (k + 0.1) + canvas!.height / 2
          )
          ctx!.stroke()
        }
        
        if (shapeProgress < 1 && currentColorMode !== "fading") {
          // 绘制圆点（带过渡淡出）
          const dotOpacity = brightness * (1 - shapeProgress) * fadeOpacity
          ctx!.fillStyle = `rgba(60, 60, 80, ${dotOpacity})`
          ctx!.beginPath()
          ctx!.arc(x, y, size, 0, Math.PI * 2)
          ctx!.fill()
        }
      }

      animationRef.current = window.requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      resizeCanvas()
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className || ""}`}
      style={{ background: 'white' }}
    />
  )
}
