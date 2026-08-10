"use client"

import { Field, FieldLabel } from "@/components/ui/field"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/data-table"
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
import { UUID } from "node:crypto"

type Resources = {
  id: UUID
  slug: string
  title: string
  description: string
  url: string
  imageUrl: string
  tags: string[]
  project_id: string
}

export const columns: ColumnDef<Resources>[] = [
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
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
        `/api/v1/projects/${projectId}/links?page${page}&pageSize${pageSize}`
      ).then((response) => {
        return response.json()
      })
      setItems(response.data)
    }

    getResources()
  }, [page, pageSize, projectId])

  if (!items) {
    return <p>Cargando</p>
  }

  if (items.length === 0) {
    return <p>Sin datos que mostrar</p>
  }

  return (
    <div className="flex w-full flex-1 flex-col">
      <DataTable columns={columns} data={items} />
      <div className="relative mt-auto flex flex-row items-center justify-between px-6 py-6">
        <p className="w-fittext-center text-sm text-muted-foreground">
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
