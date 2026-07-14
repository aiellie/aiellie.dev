"use client"

import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

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

export function SocialLinks() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-0.5">
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
                    buttonVariants({ variant: "ghost", size: "icon-sm" }),
                    "text-muted-foreground hover:text-foreground"
                  )}
                />
              }
            >
              <HugeiconsIcon icon={icon} strokeWidth={2} />
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
