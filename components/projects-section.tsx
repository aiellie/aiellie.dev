import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"

export function ProjectsSection() {
  if (projects.length === 0) return null

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-sm font-medium text-muted-foreground">Projects</h2>
        <p className="text-2xl font-semibold tracking-tight">Selected work</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
