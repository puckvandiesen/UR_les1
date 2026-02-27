"use client"

import GhostTrail from "@/components/GhostTrail"
import { useEffect, useRef, useState } from "react"

export default function HomePage() {
  const personRef = useRef<HTMLImageElement | null>(null)
  const imgDataRef = useRef<ImageData | null>(null)

  const [ready, setReady] = useState(false)
  const [showDoodles, setShowDoodles] = useState(false)

  // lager = makkelijker triggeren
  const ALPHA_THRESHOLD = 6

  useEffect(() => {
    const imgEl = personRef.current
    if (!imgEl) return

    const off = document.createElement("canvas")
    const ctx = off.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    const build = () => {
      if (!imgEl.naturalWidth || !imgEl.naturalHeight) return

      off.width = imgEl.naturalWidth
      off.height = imgEl.naturalHeight

      ctx.clearRect(0, 0, off.width, off.height)
      ctx.drawImage(imgEl, 0, 0)

      try {
        imgDataRef.current = ctx.getImageData(0, 0, off.width, off.height)
        setReady(true)
      } catch (e) {
        console.error("Could not read image data", e)
        setReady(false)
      }
    }

    build()
    const raf = requestAnimationFrame(build)
    imgEl.addEventListener("load", build)

    return () => {
      cancelAnimationFrame(raf)
      imgEl.removeEventListener("load", build)
    }
  }, [])

  // cover-aware + 5x5 tolerance sampling
  const isOpaqueAtPointer = (clientX: number, clientY: number) => {
    const imgEl = personRef.current
    const imgData = imgDataRef.current
    if (!imgEl || !imgData) return false

    const rect = imgEl.getBoundingClientRect()

    if (
      clientX < rect.left ||
      clientX > rect.right ||
      clientY < rect.top ||
      clientY > rect.bottom
    )
      return false

    const rx = (clientX - rect.left) / rect.width
    const ry = (clientY - rect.top) / rect.height

    const iw = imgData.width
    const ih = imgData.height
    const imageAR = iw / ih
    const rectAR = rect.width / rect.height

    let sx = 0,
      sy = 0,
      sw = iw,
      sh = ih

    if (rectAR > imageAR) {
      sh = iw / rectAR
      sy = (ih - sh) / 2
    } else {
      sw = ih * rectAR
      sx = (iw - sw) / 2
    }

    const x0 = Math.floor(sx + rx * sw)
    const y0 = Math.floor(sy + ry * sh)

    const R = 2 // 5x5 sampling
    let maxAlpha = 0

    for (let dy = -R; dy <= R; dy++) {
      const y = y0 + dy
      if (y < 0 || y >= ih) continue

      for (let dx = -R; dx <= R; dx++) {
        const x = x0 + dx
        if (x < 0 || x >= iw) continue

        const idx = (y * iw + x) * 4
        const a = imgData.data[idx + 3]
        if (a > maxAlpha) maxAlpha = a
        if (maxAlpha > ALPHA_THRESHOLD) return true
      }
    }

    return false
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!ready) return
    setShowDoodles(isOpaqueAtPointer(e.clientX, e.clientY))
  }

  const onPointerLeave = () => setShowDoodles(false)

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      <GhostTrail />

      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/Images/Home_Page.png')" }}
      />

      <div className="absolute inset-0 bg-black/15" />

      <div
        className="hero-layer"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        {/* Ghost */}
        <div
          className={`hero-doodle ${showDoodles ? "is-visible" : ""}`}
          style={{ left: "22%", bottom: "6%", width: "220px", rotate: "-25deg" }}
        >
          <img src="/Images/ghost.png" className="hero-doodle-inner" />
        </div>

        {/* Coffee */}
        <div
          className={`hero-doodle ${showDoodles ? "is-visible" : ""}`}
          style={{ left: "35%", top: "12%", width: "280px", rotate: "-25deg" }}
        >
          <img src="/Images/coffee.png" className="hero-doodle-inner" />
        </div>

        {/* Star */}
        <div
          className={`hero-doodle ${showDoodles ? "is-visible" : ""}`}
          style={{ right: "18%", top: "15%", width: "360px" }}
        >
          <img src="/Images/star.png" className="hero-doodle-inner" />
        </div>

        <img
          ref={personRef}
          src="/Images/puck-cutout.png"
          crossOrigin="anonymous"
          className="hero-person"
        />
      </div>
      
      <div className="absolute inset-x-0 top-28 md:top-32 z-30 pointer-events-none">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-md text-white space-y-4">
            <h1
              className="font-bold tracking-wide leading-[1.05]"
              style={{ textShadow: "3px 3px 10px rgba(0,0,0,0.7)" }}
            >
              <span className="block text-6xl md:text-7xl">Puck</span>
              <span className="block text-5xl md:text-6xl">van Diesen</span>
            </h1>

            <p
              className="text-lg md:text-xl"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.65)" }}
            >
              BA in Marketing & Communicatie. Student Grafische & Digitale Media.
              Creatief denker. Visuele verteller.
            </p>
          </div>
        </div>
      </div>

      {/* ================= KNOP (wel klikbaar, maar blokkeert rest niet) ================= */}
      <div className="absolute inset-x-0 bottom-24 md:bottom-28 z-30">
        <div className="max-w-7xl mx-auto px-8 flex justify-end">
          <a
            href="/projects"
            className="pointer-events-auto px-6 py-3 bg-white/90 text-black rounded hover:bg-white transition"
          >
            Bekijk mijn werk
          </a>
        </div>
      </div>
    </main>
  )
}