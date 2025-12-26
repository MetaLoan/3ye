"use client"

import { useEffect, useState } from "react"
import { CalendarDays, Droplets, Infinity, Sparkles, User, UserRound } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { BottomNav } from "@/components/bottom-nav"
import { InkRevealText } from "@/components/ink-reveal-text"
import { cn } from "@/lib/utils"

type PortalId = "subjectA" | "subjectB"
type FieldKey = "name" | "birthday" | "soul" | "gender" | "blood"

type NodeConfig = {
  label: string
  field: FieldKey
  icon: LucideIcon
}

const fieldMeta: Record<
  FieldKey,
  {
    label: string
    type: "text" | "date" | "select"
    placeholder?: string
    options?: string[]
  }
> = {
  name: { label: "Name", type: "text", placeholder: "Enter a name" },
  birthday: { label: "Birthday", type: "date" },
  soul: { label: "Soul", type: "text", placeholder: "Describe the soul imprint" },
  gender: { label: "Gender", type: "select", options: ["Female", "Male", "Non-binary"] },
  blood: { label: "Blood Type", type: "select", options: ["A", "B", "AB", "O"] },
}

const portalNodes: Record<PortalId, NodeConfig[]> = {
  subjectA: [
    { label: "Name", field: "name", icon: User },
    { label: "Gender", field: "gender", icon: UserRound },
    { label: "Birthday", field: "birthday", icon: CalendarDays },
    { label: "Soul", field: "soul", icon: Sparkles },
    { label: "Blood", field: "blood", icon: Droplets },
  ],
  subjectB: [
    { label: "Name", field: "name", icon: User },
    { label: "Gender", field: "gender", icon: UserRound },
    { label: "Birthday", field: "birthday", icon: CalendarDays },
    { label: "Soul", field: "soul", icon: Sparkles },
    { label: "Blood", field: "blood", icon: Droplets },
  ],
}

const ringPositions = Array.from({ length: 5 }, (_, index) => {
  const angleDeg = -90 + index * (360 / 5)
  const angleRad = (angleDeg * Math.PI) / 180
  const radius = 32
  const x = 50 + radius * Math.cos(angleRad)
  const y = 50 + radius * Math.sin(angleRad)
  return {
    top: `${y}%`,
    left: `${x}%`,
    x,
    y,
  }
})

const emptyFields: Record<FieldKey, string> = {
  name: "",
  birthday: "",
  soul: "",
  gender: "",
  blood: "",
}

type PortalRingProps = {
  id: PortalId
  label: string
  codename: string
  invert?: boolean
  activePortal: PortalId
  onActivate: (portal: PortalId) => void
  values: Record<FieldKey, string>
  onSelectField: (portal: PortalId, field: FieldKey) => void
}

function formatFieldDisplay(field: FieldKey, value: string, fallback: string) {
  if (!value) return fallback
  if (field === "birthday") {
    const parsed = new Date(value)
    const safe = Number.isNaN(parsed.getTime()) ? value : parsed.toLocaleDateString()
    return safe
  }
  if (field === "blood") return value.toUpperCase()
  if (value.length > 14) return `${value.slice(0, 12)}…`
  return value
}

function OrbitalNode({
  node,
  collapsed,
  value,
  onSelect,
  position,
}: {
  node: NodeConfig
  collapsed: boolean
  value: string
  onSelect: (field: FieldKey) => void
  position: { top: string; left: string }
}) {
  const Icon = node.icon
  const filled = Boolean(value)

  return (
    <button
      type="button"
      onClick={() => onSelect(node.field)}
      className={cn(
        "absolute flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.18em] transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-foreground/60",
        collapsed ? "opacity-0 scale-75" : "opacity-100 scale-100",
      )}
      style={{
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={cn(
          "flex items-center justify-center w-[72px] h-[72px] rounded-full border border-foreground bg-background shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-colors",
          filled ? "bg-foreground text-background" : "hover:bg-foreground hover:text-background",
        )}
      >
        <Icon className="h-8 w-8" />
      </div>
    </button>
  )
}

function PortalRing({ id, label, codename, invert, activePortal, onActivate, values, onSelectField }: PortalRingProps) {
  const isActive = activePortal === id
  const collapsed = !isActive

  const handleActivate = () => onActivate(id)
  const connectorPoints = ringPositions.map((point) => `${point.x},${point.y}`).join(" ")
  const starOrder = [0, 2, 4, 1, 3]
  const starPoints = starOrder.map((index) => `${ringPositions[index].x},${ringPositions[index].y}`).join(" ")

  return (
    <div className="relative flex flex-col items-center">
      <div
        role="button"
        tabIndex={0}
        aria-label={label}
        aria-description={codename}
        aria-pressed={isActive}
        onClick={handleActivate}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            handleActivate()
          }
        }}
        className="relative flex items-center justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-foreground/60"
      >
        <div
          className={cn(
            "relative rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer bg-background/70 border border-foreground/15 backdrop-blur",
            collapsed ? "opacity-70 scale-95 w-[200px] h-[200px] md:w-[240px] md:h-[240px]" : "opacity-100 scale-100 w-[320px] h-[320px] md:w-[380px] md:h-[380px]",
            "shadow-[0_20px_80px_rgba(0,0,0,0.12)]",
          )}
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 text-foreground/25">
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth={0.5} strokeDasharray="2 4" />
            <polygon
              points={starPoints}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {portalNodes[id].map((node, index) => (
            <OrbitalNode
              key={`${id}-${node.label}`}
              node={node}
              collapsed={collapsed}
              value={values[node.field]}
              position={ringPositions[index]}
              onSelect={(field) => onSelectField(id, field)}
            />
          ))}

          <div className="absolute inset-0 rounded-full bg-foreground/5 blur-3xl opacity-40 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}

export default function ConnectPage() {
  const [activePortal, setActivePortal] = useState<PortalId>("subjectA")
  const [portalValues, setPortalValues] = useState<Record<PortalId, Record<FieldKey, string>>>({
    subjectA: { ...emptyFields },
    subjectB: { ...emptyFields },
  })
  const [editing, setEditing] = useState<{ portal: PortalId; field: FieldKey } | null>(null)
  const [draftValue, setDraftValue] = useState("")

  useEffect(() => {
    if (editing) {
      setDraftValue(portalValues[editing.portal][editing.field] || "")
    } else {
      setDraftValue("")
    }
  }, [editing, portalValues])

  const handleSelectField = (portal: PortalId, field: FieldKey) => {
    setActivePortal(portal)
    setEditing({ portal, field })
  }

  const handleSave = (valueOverride?: string) => {
    if (!editing) return
    const nextValue = valueOverride ?? draftValue
    setPortalValues((prev) => ({
      ...prev,
      [editing.portal]: { ...prev[editing.portal], [editing.field]: nextValue },
    }))
    setEditing(null)
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden pb-24">
      <div className="relative px-6 pt-12 max-w-screen-lg mx-auto">
        <div className="mb-0">
          <h1 className="text-4xl font-light mb-2">
            <InkRevealText text="Connect" />
          </h1>
          <p className="text-sm opacity-60 font-light">
            <InkRevealText text="Magnetic field resonance" />
          </p>
        </div>

        <section className="relative flex flex-col items-center gap-10 pt-[15px]">
          <PortalRing
            id="subjectA"
            label="Subject A"
            codename="North Node"
            activePortal={activePortal}
            onActivate={setActivePortal}
            values={portalValues.subjectA}
            onSelectField={handleSelectField}
          />

          <div className="relative flex items-center justify-center w-full max-w-xl py-1">
            <div className="absolute w-[120%] h-px bg-gradient-to-r from-transparent via-foreground/60 to-transparent" />
            <button
              type="button"
              onClick={() => setActivePortal(activePortal === "subjectA" ? "subjectB" : "subjectA")}
              className="relative flex items-center justify-center w-16 h-16 rounded-full border border-foreground bg-background transition-transform duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 rounded-full border border-foreground/20 animate-[pulseHalo_3s_ease-in-out_infinite]" />
              <div className="absolute inset-2 rounded-full border border-foreground/15 animate-[spinSlow_12s_linear_infinite]" />
              <Infinity className="h-6 w-6" />
            </button>
          </div>

          <PortalRing
            id="subjectB"
            label="Subject B"
            codename="South Node"
            invert
            activePortal={activePortal}
            onActivate={setActivePortal}
            values={portalValues.subjectB}
            onSelectField={handleSelectField}
          />
        </section>
      </div>

      {editing ? (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-24 w-[92%] max-w-md z-40">
          <div className="border hairline border-foreground/50 rounded-lg bg-background/95 backdrop-blur shadow-[0_24px_80px_rgba(0,0,0,0.18)] p-5">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] opacity-60">
                  {fieldMeta[editing.field].label}
                </p>
                <p className="text-xs opacity-60">{editing.portal === "subjectA" ? "Subject A" : "Subject B"}</p>
              </div>
              <button
                type="button"
                className="text-xs opacity-60 hover:opacity-100"
                onClick={() => setEditing(null)}
              >
                Close
              </button>
            </div>

            {fieldMeta[editing.field].type === "text" && (
              <input
                type="text"
                value={draftValue}
                onChange={(event) => setDraftValue(event.target.value)}
                placeholder={fieldMeta[editing.field].placeholder}
                className="w-full border hairline border-foreground rounded px-4 py-3 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
              />
            )}

            {fieldMeta[editing.field].type === "date" && (
              <input
                type="date"
                value={draftValue}
                onChange={(event) => setDraftValue(event.target.value)}
                className="w-full border hairline border-foreground rounded px-4 py-3 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
              />
            )}

            {fieldMeta[editing.field].type === "select" && (
              <div className="flex flex-wrap gap-2">
                {fieldMeta[editing.field].options?.map((option) => {
                  const isActive = portalValues[editing.portal][editing.field] === option
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSave(option)}
                      className={cn(
                        "px-4 py-2 text-sm border hairline rounded-full transition-colors",
                        isActive ? "bg-foreground text-background" : "bg-background hover:bg-foreground hover:text-background",
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            )}

            {fieldMeta[editing.field].type !== "select" && (
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  className="px-4 py-2 text-xs uppercase tracking-[0.18em] border hairline border-foreground/40 rounded hover:bg-foreground hover:text-background transition-colors"
                  onClick={() => setEditing(null)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-xs uppercase tracking-[0.18em] border hairline border-foreground rounded bg-background hover:bg-foreground hover:text-background transition-colors"
                  onClick={() => handleSave()}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}

      <BottomNav />

      <style jsx global>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulseHalo {
          0% {
            transform: scale(0.98);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(0.98);
            opacity: 0.5;
          }
        }

        @keyframes drift {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(3deg) scale(1.02);
          }
          100% {
            transform: rotate(0deg) scale(1);
          }
        }
      `}</style>
    </main>
  )
}
