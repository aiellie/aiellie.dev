export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  stars?: number
  featured?: boolean
  accent?: string
}

export const projects: Project[] = [
  {
    slug: "nebula-analytics",
    title: "Nebula Analytics",
    description:
      "Real-time product analytics dashboard with sub-second queries over billions of events.",
    tags: ["Next.js", "TypeScript", "ClickHouse", "tRPC"],
    liveUrl: "#",
    repoUrl: "#",
    stars: 1284,
    featured: true,
    accent: "from-violet-500 to-fuchsia-500",
  },
]
