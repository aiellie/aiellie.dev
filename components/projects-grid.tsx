import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"
import { cn } from "@/lib/utils"

export function ProjectsGrid({ className }: { className?: string }) {
  return (
    <section className={cn("flex w-full flex-col gap-4", className)}>
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-tight">Projects</h2>
        <span className="text-xs text-muted-foreground">
          {projects.length} shipped
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  )
}
