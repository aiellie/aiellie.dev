"use client"

import { type Table } from "@tanstack/react-table"
import { Cancel01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { DataTableFacetedFilter } from "@/app/tasks/components/data-table-faceted-filter"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { type Project } from "@/lib/projects"

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "title:asc", label: "Title A–Z" },
  { value: "title:desc", label: "Title Z–A" },
  { value: "status:asc", label: "Status A–Z" },
  { value: "status:desc", label: "Status Z–A" },
] as const

type SortValue = (typeof sortOptions)[number]["value"]

function getSortValue(table: Table<Project>): SortValue {
  const sorting = table.getState().sorting[0]
  if (!sorting) return "featured"
  const value = `${sorting.id}:${sorting.desc ? "desc" : "asc"}`
  return sortOptions.some((option) => option.value === value)
    ? (value as SortValue)
    : "featured"
}

interface ProjectsToolbarProps {
  table: Table<Project>
  statusOptions: { label: string; value: string }[]
  tagOptions: { label: string; value: string }[]
}

export function ProjectsToolbar({
  table,
  statusOptions,
  tagOptions,
}: ProjectsToolbarProps) {
  const isFiltered = table.getState().columnFilters.length > 0
  const sortValue = getSortValue(table)

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        <Input
          placeholder="Search projects..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-full sm:w-[180px] lg:w-[240px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statusOptions}
          />
        )}
        {table.getColumn("tags") && (
          <DataTableFacetedFilter
            column={table.getColumn("tags")}
            title="Tags"
            options={tagOptions}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.resetColumnFilters()}
          >
            Reset
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
          </Button>
        )}
      </div>
      <Select
        value={sortValue}
        onValueChange={(value) => {
          if (!value || value === "featured") {
            table.resetSorting()
            return
          }
          const [id, direction] = value.split(":")
          table.setSorting([{ id, desc: direction === "desc" }])
        }}
      >
        <SelectTrigger className="h-8 w-full sm:w-[150px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent align="end">
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
