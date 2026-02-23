"use client"

import { AppToaster } from "@/components/ui/toast"
import GlobalNavbar from "@/components/GlobalNavbar"
import Footer from "@/components/Footer"
import GoogleAnalyticsTracker from "@/components/GoogleAnalyticsTracker"
import { usePathname } from "next/navigation"
import Script from "next/script"

import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <html lang="en">
      <body>
        <GoogleAnalyticsTracker />
        <GlobalNavbar />

        {/* Alleen padding op NIET-home */}
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