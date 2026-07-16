"use client"

import type { IconSvgElement } from "@hugeicons/react"
import { HugeiconsIcon } from "@hugeicons/react"
import { PlusSignIcon } from "@hugeicons/core-free-icons"

import { Kbd } from "@/components/ui/kbd"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: IconSvgElement
    shortcut: string
    action?: {
      label: string
      shortcut: string
    }
  }[]
}) {
  return (
    <SidebarGroup className="pt-1">
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                render={<a href={item.url} />}
                tooltip={{
                  children: (
                    <>
                      <span>{item.title}</span>
                      <Kbd>{item.shortcut}</Kbd>
                    </>
                  ),
                }}
              >
                <HugeiconsIcon icon={item.icon} strokeWidth={2} />
                <span>{item.title}</span>
              </SidebarMenuButton>
              {item.action ? (
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <SidebarMenuAction aria-label={item.action.label} />
                    }
                  >
                    <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <span>{item.action.label}</span>
                    <Kbd>{item.action.shortcut}</Kbd>
                  </TooltipContent>
                </Tooltip>
              ) : null}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
