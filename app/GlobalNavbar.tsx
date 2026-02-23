"use client"
import { usePathname } from "next/navigation"

export default function GlobalNavbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition ${
        isHome ? "bg-transparent" : "bg-white border-b shadow-sm"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-4 text-lg ${
          isHome ? "text-white" : "text-black"
        }`}
      >
        {/* LINKS: menu */}
        <div className="flex space-x-14 items-center">

          <a href="/home" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>

          {/* Projects dropdown */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-gray-300">
              Projects ▾
            </span>

            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <div className="w-56 bg-black/80 backdrop-blur rounded shadow-lg text-white">
                <a href="/project1" className="block px-4 py-2 hover:bg-white/10">
                  NACHTBREKERS
                </a>
                <a href="/project2" className="block px-4 py-2 hover:bg-white/10">
                  HERO Organix
                </a>
                <a href="/project3" className="block px-4 py-2 hover:bg-white/10">
                  NAAKT Magazine
                </a>
              </div>
            </div>
          </div>

          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* RECHTS: login */}
        <div>
          <a href="/login" className="hover:text-gray-300">
            Login
          </a>
        </div>

      </nav>
    </header>
  )
}