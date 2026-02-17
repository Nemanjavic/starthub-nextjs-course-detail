import type { Metadata, Viewport } from "next"
import { Inter, Source_Serif_4 } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Learnwise — Online Courses",
    template: "%s | Learnwise",
  },
  description:
    "Master new skills with expert-led courses. Flexible learning, real-world projects, and industry-recognized certificates.",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Learnwise",
  },
}

export const viewport: Viewport = {
  themeColor: "#f5f0eb",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
