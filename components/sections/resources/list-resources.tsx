"use client"

import { Field, FieldLabel } from "@/components/ui/field"
import TableResources from "@/components/table-resources"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useSortable } from "@dnd-kit/sortable"
import { GripVertical } from "lucide-react"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { SquarePen, Copy } from "lucide-react"

type Resources = {
  id: string
  slug: string
  title: string
  description: string
  url: string
  imageUrl: string
  tags: string[]
  project_id: string
}

function DragHandle({ id }: { id: string }) {
  const { attributes, listeners } = useSortable({ id })
  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="size-7 text-muted-foreground hover:bg-transparent"
    >
      <GripVertical className="size-3 text-muted-foreground" />
      <span className="sr-only">Drag to reorder</span>
    </Button>
  )
}

function capitalizeWords(str: string) {
  if (!str) return ""
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export const columns: ColumnDef<Resources>[] = [
  {
    id: "title",
    header: ({ table }) => (
      <div className="flex items-start justify-start gap-2">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
        <span>Title</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-start justify-start gap-2">
        <Checkbox aria-label="Select one" />
        <Link className="text-white" href={row.original.url} target="_blank">
          <p className="text-white">{capitalizeWords(row.original.title)}</p>
        </Link>
      </div>
    ),
  },
  {
    id: "tags",
    header: ({ table }) => (
      <div className="text-start">
        <p>Tags</p>
      </div>
    ),
    cell: ({ row }) => (
      <div className="mx-auto flex flex-row gap-2 text-center">
        {row.original.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    id: "edit",
    header: "Actions",
    cell: ({ row }) => (
      <div className="mx-auto flex flex-row gap-2 text-center">
        <Button variant="outline" size="icon" aria-label="Submit">
          <SquarePen />
        </Button>
        <Button variant="outline" size="icon" aria-label="Submit">
          <Copy />
        </Button>
      </div>
    ),
  },
]

export function ListResources({ projectId }: { projectId: string }) {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [items, setItems] = useState<null | Resources[]>(null)

  useEffect(() => {
    async function getResources() {
      setItems(null)
      const response = await fetch(
        `/api/v1/projects/${projectId}/links?page=${page}&pageSize=${pageSize}`
      ).then((response) => response.json())
      setItems(response.data)
    }

    getResources()
  }, [page, pageSize, projectId])

  if (!items) {
    return <p>Cargando</p>
  }

  return (
    <div className="flex w-full flex-1 flex-col">
      <TableResources columns={columns} data={items} />
      <div className="relative mt-auto flex flex-row items-center justify-between px-6 py-6">
        <p className="w-fit text-center text-sm text-muted-foreground">
          0 of 68 row(s) selected.
        </p>
        <div className="flex w-fit flex-row">
          <Field orientation="horizontal" className="w-fit">
            <FieldLabel htmlFor="select-rows-per-page" className="text-nowrap">
              Rows per page
            </FieldLabel>
            <Select
              defaultValue="10"
              onValueChange={(e) => {
                setPageSize(parseInt(e))
              }}
            >
              <SelectTrigger className="w-20" id="select-rows-per-page">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}
