"use client"

import * as React from "react"
import type { IconSvgElement } from "@hugeicons/react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpDownIcon, PlusSignIcon } from "@hugeicons/core-free-icons"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Kbd } from "@/components/ui/kbd"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

type Workspace = {
  name: string
  icon: IconSvgElement
  plan: string
}

export function WorkspaceSwitcher({ workspaces }: { workspaces: Workspace[] }) {
  const { isMobile } = useSidebar()
  const [activeWorkspace, setActiveWorkspace] = React.useState(workspaces[0])

  if (!activeWorkspace) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <SidebarMenuButton
            size="lg"
            className="data-popup-open:bg-sidebar-accent data-popup-open:text-sidebar-accent-foreground"
            render={<DropdownMenuTrigger />}
            tooltip={{
              children: (
                <>
                  <span>Switch workspace</span>
                  <Kbd>⌘W</Kbd>
                </>
              ),
            }}
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <HugeiconsIcon icon={activeWorkspace.icon} strokeWidth={2} />
            </div>
            <div className="grid min-w-0 flex-1 text-start text-sm leading-tight">
              <span className="truncate font-medium">
                {activeWorkspace.name}
              </span>
              <span className="truncate text-xs text-muted-foreground">
                {activeWorkspace.plan}
              </span>
            </div>
            <HugeiconsIcon
              icon={ArrowUpDownIcon}
              strokeWidth={2}
              className="ms-auto size-4"
            />
          </SidebarMenuButton>
          <DropdownMenuContent
            className="min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
              {workspaces.map((workspace, index) => (
                <DropdownMenuItem
                  key={workspace.name}
                  onClick={() => setActiveWorkspace(workspace)}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-md border">
                    <HugeiconsIcon
                      icon={workspace.icon}
                      strokeWidth={2}
                      className="size-3.5"
                    />
                  </div>
                  {workspace.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2 text-muted-foreground">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <HugeiconsIcon
                  icon={PlusSignIcon}
                  strokeWidth={2}
                  className="size-4"
                />
              </div>
              <span className="font-medium">Add workspace</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
