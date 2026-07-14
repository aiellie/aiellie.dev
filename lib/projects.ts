export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  status: string
  accent: string
  featured?: boolean
  hide?: boolean
}

const labelTag = (label: string) =>
  label.charAt(0).toUpperCase() + label.slice(1)

export const projects: Project[] = [
  {
    slug: "lens",
    title: "Lens",
    description:
      "An AI design-review agent. Drop in a screenshot and watch it work: it verifies every contrast claim with real WCAG math, computes accessible color fixes at the same hue, and streams a scored verdict — an agentic tool loop, not a chat wrapper. UI built entirely from AIEllie UI components.",
    tags: [
      "Next.js",
      "TypeScript",
      "Anthropic SDK",
      "Agents",
      "AIEllie UI",
      "Accessibility",
    ],
    liveUrl: "https://lens.aiellie.dev",
    repoUrl: "https://github.com/aiellie/lens.aiellie.dev",
    status: "Live",
    accent: "from-teal-400 to-cyan-500",
    featured: true,
  },
  {
    slug: "aiellie-ui",
    title: "AIEllie UI",
    description:
      "A shadcn registry of 170+ installable components — including 100+ original AI, code, media, voice, and brand components for building AI products, all installable via the shadcn CLI.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    liveUrl: "https://ui.aiellie.dev",
    repoUrl: "https://github.com/aiellie/ui.aiellie.dev",
    status: "Live",
    accent: "from-blue-500 to-purple-500",
    featured: true,
  },
  {
    slug: "avatar-generator",
    title: "Avatar Generator",
    description:
      "Deterministic avatar generator with a URL-based API — the same name always maps to the same image. Gradient and glass styles, mesh gradients from custom colors, and an in-browser recolor tool, with PNG/SVG output and query-param customization.",
    tags: [
    
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    liveUrl: "https://avatar.aiellie.dev",
    repoUrl: "https://github.com/aiellie/avatar.aiellie.dev",
    status: "Live",
    accent: "from-amber-500 to-orange-500",
    featured: true,
  },
  {
    slug: "stashd",
    title: "Stashd",
    description: "Notion-style rich text editor built on Plate.js.",
    tags: ["Plate", "Next.js", "Rich Text", "Editor"],
    liveUrl: "https://stashd.aiellie.dev",
    repoUrl: "https://github.com/politokk/stashd2",
    status: "Live",
    accent: "from-rose-500 to-pink-500",
    hide: true,
  },
  {
    slug: "chat-ai",
    title: "Chat AIellie",
    description:
      "A multi-model AI chat app with streaming responses, saved chat history, file attachments, and code artifacts. Built on the Vercel AI SDK with switchable providers — OpenAI, Anthropic, Google, xAI, and more.",
    tags: [
      "Next.js",
      "TypeScript",
      "AI SDK",
      "shadcn/ui",
      "Tailwind CSS",
      "Postgres",
      "Auth.js",
    ],
    liveUrl: "https://chat.aiellie.dev/",
    repoUrl: "https://github.com/aiellie/chat.aiellie.dev",
    status: "Live",
    accent: "from-cyan-500 to-blue-500",
    hide: true,
  },
  {
    slug: "linderlabs-ui",
    title: "LinderLabs UI",
    description:
      "An AI-native design system and shadcn/ui component registry — copy, paste, or install AI tools, blocks, and components straight from the CLI, with one-click “Open in v0” and MCP support.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "AI SDK",
      "Design System",
    ],
    liveUrl: "https://ui.linderlabs.dev",
    repoUrl: "https://github.com/aiellie/linderlabs-ui",
    status: "Live",
    accent: "from-violet-500 to-purple-500",
    hide: true,
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
    hide: true,
  },
  {
    slug: "playellieai",
    title: "Play Ellieai",
    description:
      "Free neon-arcade classic games that run right in the browser — no installs, no signups, just press play. Snake, Brick Storm, and Mind Flip are live, with more on the way.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Canvas",
      "Games",
    ],
    liveUrl: "https://playellieai.vercel.app",
    repoUrl: "https://github.com/aiellie/playellieai",
    status: "Live",
    accent: "from-lime-500 to-green-500",
  },
  {
    slug: "severance-match-game",
    title: "Severance Match",
    description:
      "A 2048-style game featuring characters from the Apple TV+ show Severance",
    tags: [
      labelTag("game"),
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "React",
      "TypeScript",
    ],
    liveUrl: "https://severance-match-game.vercel.app",
    repoUrl: "https://github.com/aiellie/severance-match-game",
    status: "Completed",
    accent: "from-emerald-600 to-teal-600",
    hide: true,
  },
  {
    slug: "oharas",
    title: "O'Hara's",
    description:
      "Restaurant and pub website for a NYC Financial District institution since 1983.",
    tags: ["Next.js", "Restaurant", "Portfolio"],
    liveUrl: "https://oharas.vercel.app",
    repoUrl: "https://github.com/aiellie/oharas",
    status: "Live",
    accent: "from-green-600 to-emerald-700",
    hide: true,
  },
  {
    slug: "the-gpteamm",
    title: "The GPTeam",
    description:
      "A searchable directory of GPT plugins and resources with reviews, ratings, and categories.",
    tags: [labelTag("website"), "WordPress", "SQL", "Elementor"],
    status: "Completed",
    accent: "from-sky-500 to-blue-600",
    hide: true,
  },
  {
    slug: "gpt-plugins-portfolio",
    title: "GPT Plugins Portfolio",
    description:
      "A showcase of shipped OpenAI plugins — Amazon Finds, GPT Finder, eBay Finds, AIimage, and more.",
    tags: [labelTag("plugin"), "OpenAI", "Next.js", "Vercel"],
    liveUrl: "https://gpt-plugins-portfolio.vercel.app/plugins",
    status: "Completed",
    accent: "from-fuchsia-500 to-pink-600",
    hide: true,
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
    hide: true,
  },
]
