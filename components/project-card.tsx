"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  Github01Icon,
} from "@hugeicons/core-free-icons"

import { StatusBadge } from "@/components/status-badge"
import { cn } from "@/lib/utils"

export function ProjectCard({
  title = "AIEllie UI",
  description = "A Component Registry built from Shadcn",
  tags = ["Next.js", "Tailwind CSS", "Shadcn UI", "Vercel"],
  liveUrl = "https://ui.aiellie.dev",
  repoUrl = "https://github.com/aiellie/ui.aiellie.dev",
  status = "Live",
  accent = "from-blue-500 to-purple-500",
  className,
}: {
  title?: string
  description?: string
  tags?: string[]
  liveUrl?: string
  repoUrl?: string
  status?: string
  accent?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "group w-full overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div
        className={cn(
          "relative flex h-36 items-center justify-center bg-gradient-to-br",
          accent
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]"
        />
        <span className="relative text-3xl font-bold tracking-tight text-white/90">
          {title.split(" ")[0]}
        </span>
        <StatusBadge
          label={status}
          className="absolute top-3 left-3 shrink-0"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/title inline-flex items-center gap-1.5 hover:opacity-80"
          >
            <h3 className="font-semibold tracking-tight">{title}</h3>
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              strokeWidth={2}
              className="size-4 shrink-0 text-muted-foreground transition-transform group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5"
            />
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-accent"
          >
            <HugeiconsIcon icon={Github01Icon} className="size-4.5" />
          </a>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
