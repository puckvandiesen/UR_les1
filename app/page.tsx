import GhostTrail from "@/components/GhostTrail"

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Ghost overlay (doorzichtig) */}
      <GhostTrail />

      {/* Achtergrond */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/Images/Home_Page.png')" }}
      />

      {/* subtiele overlay voor leesbaarheid */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Tekst links op de muur */}
      <div className="absolute left-8 md:left-20 top-28 md:top-32 z-10 max-w-md text-white space-y-4">
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
          Grafische & Digitale Media student. Creatief denker. Visuele verteller.
        </p>
      </div>

      {/* Knop rechts onder op de trap (uitgelijnd onder Login) */}
      <div className="absolute inset-x-0 bottom-24 md:bottom-28 z-10">
        <div className="max-w-7xl mx-auto px-8 flex justify-end">
          <a
            href="#work"
            className="px-6 py-3 bg-white/90 text-black rounded hover:bg-white transition"
          >
            Bekijk mijn werk
          </a>
        </div>
      </div>

     </main>
  )
}