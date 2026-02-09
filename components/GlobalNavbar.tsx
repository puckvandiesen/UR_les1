"use client"

export default function GlobalNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / titel */}
        <div className="text-xl font-semibold">
          MySite
        </div>

        {/* Navigatie */}
        <div className="flex space-x-8">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/project1" className="hover:underline">Project 1</a>
          <a href="/project2" className="hover:underline">Project 2</a>
          <a href="/project3" className="hover:underline">Project 3</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </nav>
    </header>
  )
}
