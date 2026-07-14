"use client"

import * as React from "react"
import { ArrowUp02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { cn } from "@/lib/utils"
import { LogoIcon } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { Spinner } from "@/components/ui/spinner"

type ChatMessage = { role: "user" | "assistant"; content: string }

const GREETING =
  "hey! i'm aiellie, ellie's ai agent. ask me anything about her work, her projects, or how to get in touch ✨"

export function AiellieChat() {
  const [open, setOpen] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault()
    const text = input.trim()
    if (!text || isLoading) return

    const history = [...messages, { role: "user" as const, content: text }]
    setMessages(history)
    setInput("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      })
      if (!res.ok || !res.body) throw new Error(`Request failed: ${res.status}`)

      setMessages((prev) => [...prev, { role: "assistant", content: "" }])

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const delta = decoder.decode(value, { stream: true })
        setMessages((prev) => {
          const next = [...prev]
          const last = next[next.length - 1]
          next[next.length - 1] = { ...last, content: last.content + delta }
          return next
        })
      }
    } catch {
      setMessages((prev) => [
        ...prev.filter((m, i) => !(i === prev.length - 1 && m.role === "assistant" && m.content === "")),
        {
          role: "assistant",
          content: "hmm, something went wrong on my end — mind trying again?",
        },
      ])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  return (
    <>
      {/* Floating toggle button — the aiellie orb */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with aiellie"}
        aria-expanded={open}
        className={cn(
          "group fixed right-5 bottom-5 z-50 rounded-full outline-none transition-transform duration-200 hover:scale-110 focus-visible:ring-3 focus-visible:ring-ring/50",
          open && "scale-95"
        )}
      >
        <LogoIcon className="size-12 drop-shadow-lg" />
      </button>

      {/* Chat panel */}
      <div
        className={cn(
          "fixed right-5 bottom-20 z-50 flex h-[28rem] max-h-[calc(100dvh-6.5rem)] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border bg-background shadow-xl transition-all duration-200",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        )}
      >
        <div className="group flex items-center gap-2.5 border-b px-4 py-3">
          <LogoIcon className="size-8" />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold leading-none">aiellie</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              ellie&apos;s ai agent
            </span>
          </div>
        </div>

        <MessageScrollerProvider>
        <MessageScroller className="flex-1">
          <MessageScrollerViewport>
            <MessageScrollerContent className="gap-3 p-4">
              <MessageScrollerItem>
                <Message>
                  <MessageContent>
                    <Bubble variant="muted">
                      <BubbleContent>{GREETING}</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>

              {messages.map((message, index) => (
                <MessageScrollerItem key={index}>
                  <Message align={message.role === "user" ? "end" : "start"}>
                    <MessageContent>
                      <Bubble
                        variant={message.role === "user" ? "default" : "muted"}
                        align={message.role === "user" ? "end" : "start"}
                      >
                        <BubbleContent className="whitespace-pre-wrap">
                          {message.content || <Spinner className="size-4" />}
                        </BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
        </MessageScrollerProvider>

        <form onSubmit={sendMessage} className="flex gap-2 border-t p-3">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ask me about ellie..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                sendMessage()
              }
            }}
            maxLength={2000}
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            <HugeiconsIcon icon={ArrowUp02Icon} strokeWidth={2} className="size-4" />
          </Button>
        </form>
      </div>
    </>
  )
}
