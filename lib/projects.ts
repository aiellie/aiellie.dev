export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  liveUrl: string
  repoUrl: string
  status: string
  accent: string
}

const labelTag = (label: string) =>
  label.charAt(0).toUpperCase() + label.slice(1)

export const projects: Project[] = [
  {
    slug: "aiellie-ui",
    title: "AIEllie UI",
    description: "A UI Registry for AIEllie",
    tags: [
      labelTag("components"),
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Vercel",
    ],
    liveUrl: "https://ui.aiellie.dev",
    repoUrl: "https://github.com/aiellie/ui.aiellie.dev",
    status: "Ongoing",
    accent: "from-blue-500 to-purple-500",
  },
  {
    slug: "avatar-generator",
    title: "Avatar Generator",
    description: "A Avatar Generator for AIEllie",
    tags: [
      labelTag("tool"),
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Vercel",
      "React",
      "TypeScript",
    ],
    liveUrl: "https://avatar.aiellie.dev",
    repoUrl: "https://github.com/aiellie/avatar.aiellie.dev",
    status: "Completed",
    accent: "from-amber-500 to-orange-500",
  },
  {
    slug: "chat-ai",
    title: "Chat AI",
    description: "A Chat AI for AIEllie",
    tags: [
      labelTag("tool"),
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Vercel",
      "React",
      "TypeScript",
    ],
    liveUrl: "https://chat.aiellie.dev/",
    repoUrl: "https://github.com/aiellie/chat.aiellie.dev",
    status: "Completed",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    slug: "linderlabs-ui",
    title: "LinderLabs UI",
    description: "A UI for LinderLabs",
    tags: [labelTag("documentation")],
    liveUrl: "https://ui.linderlabs.dev",
    repoUrl: "https://github.com/aiellie/linderlabs-ui",
    status: "Completed",
    accent: "from-violet-500 to-purple-500",
  },
  {
    slug: "linderlabs-ui-docs",
    title: "LinderLabs UI Docs",
    description: "Docs for LinderLabs UI",
    tags: [labelTag("documentation")],
    liveUrl: "https://docs.linderlabs.dev",
    repoUrl: "https://github.com/politokk/linderlabs.ui",
    status: "Completed",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    slug: "stashd",
    title: "Stashd",
    description: "A UI for Stashd",
    tags: [labelTag("documentation")],
    liveUrl: "https://stashd.aiellie.dev",
    repoUrl: "https://github.com/politokk/stashd2",
    status: "Completed",
    accent: "from-rose-500 to-pink-500",
  },
  {
    slug: "my-webchat",
    title: "My WebChat",
    description: "A WebChat for My WebChat",
    tags: [labelTag("documentation")],
    liveUrl: "https://mywebchat-five.vercel.app",
    repoUrl: "https://github.com/aiellie/my-webchat",
    status: "Completed",
    accent: "from-teal-500 to-emerald-500",
  },
]
