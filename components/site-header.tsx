import Image from "next/image"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { Latency } from "@/components/latency"
import { NyClock } from "@/components/ny-clock"
import { ModeSwitcher } from "@/components/mode-switcher"
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50  bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-sm font-medium tracking-tight">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <NyClock />
          <span className="h-3 w-px bg-border" />
          <Latency />
          <span className="h-3 w-px bg-border" />
          <ModeSwitcher />
        </div>
      </div>
    </header>
  )
}
