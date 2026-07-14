import Anthropic from "@anthropic-ai/sdk"

import { AIELLIE_SYSTEM_PROMPT } from "@/lib/aiellie-persona"

// Swap to "claude-haiku-4-5" if you want cheaper/faster responses.
const MODEL = "claude-opus-4-8"

// Guardrails for a public endpoint.
const MAX_MESSAGES = 30
const MAX_MESSAGE_LENGTH = 2000

const client = new Anthropic()

type ChatMessage = { role: "user" | "assistant"; content: string }

function isValidMessage(m: unknown): m is ChatMessage {
  if (typeof m !== "object" || m === null) return false
  const { role, content } = m as Record<string, unknown>
  return (
    (role === "user" || role === "assistant") &&
    typeof content === "string" &&
    content.length > 0 &&
    content.length <= MAX_MESSAGE_LENGTH
  )
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const messages = (body as { messages?: unknown })?.messages
  if (
    !Array.isArray(messages) ||
    messages.length === 0 ||
    messages.length > MAX_MESSAGES ||
    !messages.every(isValidMessage) ||
    messages[0].role !== "user"
  ) {
    return Response.json({ error: "Invalid messages" }, { status: 400 })
  }

  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: 1024,
    system: [
      {
        type: "text",
        text: AIELLIE_SYSTEM_PROMPT,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages,
  })

  const encoder = new TextEncoder()
  const readable = new ReadableStream<Uint8Array>({
    start(controller) {
      stream.on("text", (delta) => {
        controller.enqueue(encoder.encode(delta))
      })
      stream.on("end", () => controller.close())
      stream.on("error", (err) => {
        console.error("aiellie chat error:", err)
        controller.error(err)
      })
    },
    cancel() {
      stream.abort()
    },
  })

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  })
}
