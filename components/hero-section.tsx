import { AnalyticCards } from "@/components/analytic-cards"
import { StatusBadge } from "@/components/status-badge"
import { cn } from "@/lib/utils"

export function HeroSection({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 text-center md:items-start md:text-left",
        className
      )}
    >
      <StatusBadge />
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Hey, I&apos;m Ellie.
      </h1>
      <p className="max-w-md text-muted-foreground">
        Designer and developer building fast, thoughtful things for the web.
        Currently based in New York/Remote.
      </p>
      <AnalyticCards />
    </div>
  )
}
