"use client"

import * as React from "react"
import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
} from "@tanstack/react-table"

import { ProjectCard } from "@/components/project-card"
import { ProjectsToolbar } from "@/components/projects-toolbar"
import { projects, type Project } from "@/lib/projects"
import { cn } from "@/lib/utils"

const statusOptions = [...new Set(projects.map((project) => project.status))]
  .sort()
  .map((status) => ({ label: status, value: status }))

const tagOptions = [...new Set(projects.flatMap((project) => project.tags))]
  .sort((a, b) => a.localeCompare(b))
  .map((tag) => ({ label: tag, value: tag }))

const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "title",
    filterFn: (row, _id, value: string) => {
      const query = value.trim().toLowerCase()
      if (!query) return true
      const { title, description, tags } = row.original
      return (
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        tags.some((tag) => tag.toLowerCase().includes(query))
      )
    },
  },
  {
    accessorKey: "status",
    filterFn: (row, id, value: string[]) => {
      if (!value?.length) return true
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "tags",
    filterFn: (row, id, value: string[]) => {
      if (!value?.length) return true
      const tags = row.getValue<string[]>(id)
      return value.some((tag) => tags.includes(tag))
    },
    getUniqueValues: (row) => row.tags,
  },
]

export function ProjectsGrid({ className }: { className?: string }) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data: projects,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: (updater) => {
      const scrollY = window.scrollY
      setColumnFilters(updater)
      // Filtering shrinks the page; keep the viewport where it was.
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, behavior: "auto" })
      })
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  const rows = table.getRowModel().rows
  const visibleCount = rows.length

  return (
    <section className={cn("flex w-full flex-col gap-4", className)}>
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-tight">Projects</h2>
        <span className="text-xs text-muted-foreground">
          {visibleCount === projects.length
            ? `${projects.length} shipped`
            : `${visibleCount} of ${projects.length}`}
        </span>
      </div>

      <ProjectsToolbar
        table={table}
        statusOptions={statusOptions}
        tagOptions={tagOptions}
      />

      {visibleCount > 0 ? (
        <div className="grid min-h-[28rem] gap-4 sm:grid-cols-3">
          {rows.map((row) => (
            <ProjectCard key={row.original.slug} {...row.original} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[28rem] items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
          No projects match your filters.
        </div>
      )}
    </section>
  )
}
