"use client"

import Image from "next/image"
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StatusBadge } from "@/components/status-badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const socialLinks = [
  {
    href: "https://github.com/aiellie",
    label: "GitHub",
    icon: GithubIcon,
    external: true,
  },
  {
    href: "https://x.com/aiellie",
    label: "X",
    icon: NewTwitterIcon,
    external: true,
  },
  {
    href: "https://linkedin.com/in/aiellie",
    label: "LinkedIn",
    icon: LinkedinIcon,
    external: true,
  },
  {
    href: "mailto:hello@aiellie.dev",
    label: "Email",
    icon: MailIcon,
    external: false,
  },
] as const

export function SocialsCard({
  title = "AIEllie",
  subtitle = "hello@aiellie.dev",
  className,
}: {
  title?: string
  subtitle?: string
  className?: string
}) {
  return (
    <Card className={cn("w-full max-w-xs gap-0 rounded-3xl py-0 shadow-sm", className)}>
      <CardContent className="flex flex-col gap-4 p-4">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src="/aiellie.png"
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex min-w-0 flex-col gap-2">
          <span className="truncate font-semibold">{title}</span>
          <span className="truncate text-sm text-muted-foreground">{subtitle}</span>
          <StatusBadge />
        </div>

        <TooltipProvider>
          <div className="flex items-center justify-between">
            {socialLinks.map(({ href, label, icon, external }) => (
              <Tooltip key={label}>
                <TooltipTrigger
                  delay={300}
                  render={
                    <a
                      href={href}
                      aria-label={label}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "text-muted-foreground hover:text-foreground"
                      )}
                    />
                  }
                >
                  <HugeiconsIcon icon={icon} strokeWidth={2} className="size-5" />
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  )
}
