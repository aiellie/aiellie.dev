import {
  ArrowUpRight01Icon,
  GithubIcon,
  Globe02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type ProjectLink = {
  href: string
  label: string
  icon: typeof GithubIcon
}

type Project = {
  title: string
  description: string
  tags: string[]
  links: ProjectLink[]
}

const projects: Project[] = [
  {
    title: "aiellie.dev",
    description:
      "This site — a minimal personal home built with Next.js, shadcn/ui and Tailwind.",
    tags: ["Next.js", "React", "Tailwind"],
    links: [
      { href: "https://github.com/aiellie", label: "Source", icon: GithubIcon },
      { href: "https://aiellie.dev", label: "Live", icon: Globe02Icon },
    ],
  },
  {
    title: "Project Two",
    description:
      "A short one-line description of what this project does and why it matters.",
    tags: ["TypeScript", "Node"],
    links: [
      { href: "https://github.com/aiellie", label: "Source", icon: GithubIcon },
    ],
  },
  {
    title: "Project Three",
    description:
      "Another placeholder — swap these out for your real work in components/projects.tsx.",
    tags: ["React", "AI"],
    links: [
      { href: "https://github.com/aiellie", label: "Source", icon: GithubIcon },
      { href: "#", label: "Live", icon: Globe02Icon },
    ],
  },
]

export function Projects({ className }: { className?: string }) {
  return (
    <section className={cn("flex w-full flex-col gap-4", className)}>
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-tight">Projects</h2>
        <span className="text-xs text-muted-foreground">
          {projects.length} displayed
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group/project gap-3 rounded-2xl transition-colors hover:bg-accent/40"
          >
            <CardContent className="flex flex-1 flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <span className="font-medium leading-snug">{project.title}</span>
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  strokeWidth={2}
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-hover/project:-translate-y-0.5 group-hover/project:translate-x-0.5"
                />
              </div>

              <p className="flex-1 text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-1.5 pt-1">
                {project.links.map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "h-7 gap-1.5 px-2 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <HugeiconsIcon
                      icon={icon}
                      strokeWidth={2}
                      className="size-4"
                    />
                    {label}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

