import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function StatusBadge({
  label = "Available to work",
  className,
}: {
  label?: string
  className?: string
}) {
  return (
    <Badge variant="secondary" className={cn("gap-1.5", className)}>
      <span className="relative flex size-2 shrink-0">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      {label}
    </Badge>
  )
}
