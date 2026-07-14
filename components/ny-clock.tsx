"use client"

import { useEffect, useState } from "react"

function formatNYTime(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date)

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "00"

  return `${get("hour")}:${get("minute")}:${get("second")}`
}

export function NyClock() {
  const [time, setTime] = useState(() => formatNYTime(new Date()))

  useEffect(() => {
    const id = setInterval(() => setTime(formatNYTime(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <span>New York</span>
      <span className="font-mono tabular-nums tracking-tight text-foreground" suppressHydrationWarning>
        {time}
      </span>
    </div>
  )
}
