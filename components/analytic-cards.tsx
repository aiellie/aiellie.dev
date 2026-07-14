import { certifications } from "@/lib/certifications"
import { projects } from "@/lib/projects"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    label: "Shipped",
    value: projects.length,
  },
  {
    label: "Certifications",
    value: certifications.length,
  },
] as const

export function AnalyticCards({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid w-full max-w-md grid-cols-2 gap-3",
        className
      )}
    >
      {stats.map((stat) => (
        <Card key={stat.label} size="sm" className="shadow-sm">
          <CardContent className="flex flex-col gap-1 px-4 py-3">
            <span className="text-2xl font-semibold tracking-tight tabular-nums">
              {stat.value}
            </span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
