import Link from "next/link"
import { Latency } from "@/components/latency"
import { NyClock } from "@/components/ny-clock"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50  bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-sm font-medium tracking-tight">
          <span className="relative flex size-2 shrink-0">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/90" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          <span className="text-muted-foreground">
            AIEllie<span className="text-foreground">.dev</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <NyClock />
          <span className="h-3 w-px bg-border" />
          <Latency />
        </div>
      </div>
    </header>
  )
}
