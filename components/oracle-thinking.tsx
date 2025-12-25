"use client"

import { OracleEyeIcon } from "./oracle-eye-icon"

export function OracleThinking() {
  return (
    <div className="flex justify-start mb-6 gap-3">
      {/* Oracle 头像 - 无动画，保持稳定 */}
      <div className="shrink-0">
        <OracleEyeIcon className="w-10 h-10" />
      </div>

      <div className="max-w-[85%] text-left">
        {/* 思考镭射点 - 无边框 */}
        <div className="inline-block px-4 py-3">
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full holographic"
                style={{
                  animation: `thinking-dot 1.4s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

