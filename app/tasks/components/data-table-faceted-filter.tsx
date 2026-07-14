"use client"

import * as React from "react"
import { type Column } from "@tanstack/react-table"
import {
  HelpCircleIcon,
  PlusSignCircleIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>
  title?: string
  options: {
    label: string
    value: string
    icon?: typeof HelpCircleIcon
  }[]
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
}: DataTableFacetedFilterProps<TData, TValue>) {
  const [query, setQuery] = React.useState("")
  const facets = column?.getFacetedUniqueValues()
  const selectedValues = new Set(column?.getFilterValue() as string[])

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(query.trim().toLowerCase())
  )

  function toggleOption(value: string) {
    const next = new Set(selectedValues)
    if (next.has(value)) {
      next.delete(value)
    } else {
      next.add(value)
    }
    const filterValues = Array.from(next)
    column?.setFilterValue(filterValues.length ? filterValues : undefined)
  }

  const selectedOptions = options.filter((option) =>
    selectedValues.has(option.value)
  )

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="outline" size="sm" className="h-8 border-dashed" />
          }
        >
          <HugeiconsIcon icon={PlusSignCircleIcon} strokeWidth={2} />
          {title}
        </PopoverTrigger>
        <PopoverContent
          className="w-[220px] p-2"
          align="start"
          // Avoid focusing the search input (scrolls the page to the popup).
          initialFocus={false}
          finalFocus={false}
        >
          <Input
            placeholder={title}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-8"
          />
          <div className="mt-2 max-h-72 overflow-y-auto overscroll-contain">
            {filteredOptions.length === 0 ? (
              <p className="px-2 py-6 text-center text-sm text-muted-foreground">
                No results found.
              </p>
            ) : (
              <div className="flex flex-col gap-0.5">
                {filteredOptions.map((option) => {
                  const isSelected = selectedValues.has(option.value)
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => toggleOption(option.value)}
                      className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none hover:bg-muted focus-visible:bg-muted"
                    >
                      <span
                        className={cn(
                          "flex size-4 items-center justify-center rounded-[4px] border",
                          isSelected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-input"
                        )}
                      >
                        <HugeiconsIcon
                          icon={Tick02Icon}
                          strokeWidth={2}
                          className={cn(
                            "size-3.5 text-primary-foreground",
                            !isSelected && "invisible"
                          )}
                        />
                      </span>
                      {option.icon && (
                        <HugeiconsIcon
                          icon={option.icon}
                          strokeWidth={2}
                          className="size-4 text-muted-foreground"
                        />
                      )}
                      <span className="truncate">{option.label}</span>
                      {facets?.get(option.value) != null && (
                        <span className="ml-auto flex size-4 items-center justify-center font-mono text-xs text-muted-foreground">
                          {facets.get(option.value)}
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
          {selectedValues.size > 0 && (
            <>
              <Separator className="my-2" />
              <button
                type="button"
                onClick={() => {
                  column?.setFilterValue(undefined)
                  setQuery("")
                }}
                className="flex w-full items-center justify-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-muted focus-visible:bg-muted"
              >
                Clear filters
              </button>
            </>
          )}
        </PopoverContent>
      </Popover>
      {selectedValues.size > 0 ? (
        <>
          <Badge variant="secondary" className="rounded-sm px-1 font-normal">
            {selectedValues.size}
          </Badge>
          {selectedOptions.length <= 2 ? (
            <div className="hidden gap-1 lg:flex">
              {selectedOptions.map((option) => (
                <Badge
                  variant="secondary"
                  key={option.value}
                  className="rounded-sm px-1 font-normal"
                >
                  {option.label}
                </Badge>
              ))}
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  )
}
