"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

type GhostConfig = {
  id: string
  leftPercent: number
  bottomPx: number
  sizePx: number
  delaySec: number
  opacity: number
}

export default function GhostTrail() {
  const pathname = usePathname()
  const [runId, setRunId] = useState(0)

  // Start animatie bij refresh + bij route change naar home
  useEffect(() => {
    if (pathname === "/" || pathname === "/home") {
      setRunId((v) => v + 1)
    }
  }, [pathname])

  // Alleen op home tonen
  if (!(pathname === "/" || pathname === "/home")) return null

  // Starthoogtes (pas gerust aan)
  const low = -180     // ghost 1 (laagste)
  const high = 60      // ghost 2 (hoogste)
  const mid = -60      // ghost 3 (tussenin)
  const slightlyAboveLow = -150 // ghost 5 (net hoger dan ghost 1)

  // 5 spookjes, allemaal naast elkaar (3 links, 2 rechts)
  const ghosts: GhostConfig[] = [
    // LINKS (3 naast elkaar)
    { id: "g1", leftPercent: 6,  bottomPx: low, sizePx: 60, delaySec: 0.0, opacity: 0.85 }, // laagste
    { id: "g2", leftPercent: 14, bottomPx: high, sizePx: 56, delaySec: 0.1, opacity: 0.85 }, // hoogste
    { id: "g3", leftPercent: 22, bottomPx: mid, sizePx: 58, delaySec: 0.2, opacity: 0.85 }, // tussen

    // RECHTS (2 naast elkaar, maar nog steeds via left% voor consistentie)
    { id: "g4", leftPercent: 78, bottomPx: high, sizePx: 56, delaySec: 0.1, opacity: 0.85 }, // even hoog als g2
    { id: "g5", leftPercent: 86, bottomPx: slightlyAboveLow, sizePx: 60, delaySec: 0.0, opacity: 0.85 }, // net hoger dan g1
  ]

  return (
    <div
      key={runId}
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
      aria-hidden="true"
    >
      {ghosts.map((g) => (
        <img
          key={g.id}
          src="/Images/ghost.gif"
          alt=""
          className="ghost-trail"
          style={{
            left: `${g.leftPercent}%`,
            bottom: `${g.bottomPx}px`,
            width: `${g.sizePx}px`,
            animationDelay: `${g.delaySec}s`,
            opacity: g.opacity,
          }}
        />
      ))}
    </div>
  )
}