import Link from "next/link"
import { Latency } from "@/components/latency"
import { NyClock } from "@/components/ny-clock"
import { Orb } from "@/components/orb"
import { SocialLinks } from "@/components/social-links"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50  bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-sm font-medium tracking-tight">
          <Orb size={18} />
          <span className="text-muted-foreground">
            AIEllie<span className="text-foreground">.dev</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <NyClock />
          <span className="h-3 w-px bg-border" />
          <Latency />
          <span className="h-3 w-px bg-border" />
          <SocialLinks />
        </div>
      </div>
    </header>
  )
}
