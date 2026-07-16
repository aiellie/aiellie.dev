import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "@/app/globals.css"  
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { AiellieChat } from "@/components/aiellie-chat"

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body >
        <ThemeProvider>
          <div className="flex min-h-svh flex-col">
            <main className="flex flex-1 flex-col">{children}</main>
          </div>
          <AiellieChat />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
