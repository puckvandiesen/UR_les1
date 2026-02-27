"use client"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-100 py-4 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Left side */}
        <div>
          &copy; {currentYear} Your Company. All rights reserved.
        </div>

        {/* Right side */}
        <div className="flex space-x-6">
          <Link href="/terms-of-agreement" className="hover:text-gray-800">
            Terms of Agreement
          </Link>
          <Link href="/copyright-regulations" className="hover:text-gray-800">
            Copyright Regulations
          </Link>
          <Link href="/cookie-settings" className="hover:text-gray-800">
            Cookie Settings
          </Link>
        </div>

      </div>
    </footer>
  )
}