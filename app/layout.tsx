import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { DevModeProvider } from "@/components/dev-mode-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Moin Sayyad",
  description: "Creative digital agency crafting exceptional digital experiences",
  generator: '',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Add dev-mode class to body in development for cursor override
  const isDev = process.env.NODE_ENV === 'development'
  return (
    <html lang="en">
      <body className={inter.className + (isDev ? ' dev-mode' : '')}>
        <DevModeProvider>
          {children}
        </DevModeProvider>
      </body>
    </html>
  )
}
