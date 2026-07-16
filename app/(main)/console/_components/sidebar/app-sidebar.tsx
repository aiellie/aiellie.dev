"use client"

import * as React from "react"

import { NavMain } from "@/app/(main)/console/_components/sidebar/nav-main"
import { NavUser } from "@/app/(main)/console/_components/sidebar/nav-user"
import { WorkspaceSwitcher } from "@/app/(main)/console/_components/sidebar/workspace-switcher"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Building02Icon,
  Chat01Icon,
  Clock04Icon,
  CodeCircleIcon,
  Edit01Icon,
  Folder01Icon,
  GitPullRequestIcon,
  LayoutGridIcon,
  Plug02Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  workspaces: [
    {
      name: "Codex",
      icon: CodeCircleIcon,
      plan: "Personal workspace",
    },
    {
      name: "Workplace",
      icon: Building02Icon,
      plan: "Shared workspace",
    },
  ],
  navMain: [
    {
      title: "New task",
      url: "/console?new=true",
      icon: Edit01Icon,
      shortcut: "⌘N",
    },
    {
      title: "Projects",
      url: "/#projects",
      icon: Folder01Icon,
      shortcut: "⌘P",
      action: {
        label: "New project",
        shortcut: "⌘⇧P",
      },
    },
    {
      title: "Scheduled",
      url: "/console#scheduled",
      icon: Clock04Icon,
      shortcut: "⌘S",
    },
    {
      title: "Plugins",
      url: "/console#plugins",
      icon: Plug02Icon,
      shortcut: "⌘⇧L",
    },
    {
      title: "Sites",
      url: "/console#sites",
      icon: LayoutGridIcon,
      shortcut: "⌘⇧S",
    },
    {
      title: "Pull requests",
      url: "/console#pull-requests",
      icon: GitPullRequestIcon,
      shortcut: "⌘R",
    },
    {
      title: "Chat",
      url: "/console#chat",
      icon: Chat01Icon,
      shortcut: "⌘J",
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <TooltipProvider>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <div className="flex items-center gap-1">
            <WorkspaceSwitcher workspaces={data.workspaces} />
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-9 shrink-0 group-data-[collapsible=icon]:hidden"
                    aria-label="Search"
                  />
                }
              >
                <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
              </TooltipTrigger>
              <TooltipContent side="right">
                <span>Search</span>
                <Kbd>⌘K</Kbd>
              </TooltipContent>
            </Tooltip>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </TooltipProvider>
  )
}
