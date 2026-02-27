"use client"

import { AppToaster } from "@/components/ui/toast"
import GlobalNavbar from "@/components/GlobalNavbar"
import Footer from "@/components/Footer"
import GoogleAnalyticsTracker from "@/components/GoogleAnalyticsTracker"
import { usePathname } from "next/navigation"

import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // ✅ Voeg hier alle “home routes” toe die jij gebruikt
  const isHome = pathname === "/" || pathname === "/home"

  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <GoogleAnalyticsTracker />
        <GlobalNavbar />

        {/* ✅ Geen rand/padding op home, wel op alle andere pagina’s */}
        <div className={isHome ? "" : "p-20 mx-auto mt-10"}>
          {children}
        </div>

        <div className="fixed bottom-0 left-0 right-0">
          <Footer />
        </div>

        <AppToaster />
      </body>
    </html>
  )
}