"use client"

import { EllipsisVertical } from "lucide-react"
import { Pencil, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { useEffect, useState } from "react"
import { UUID } from "node:crypto"
import Link from "next/link"

interface Project {
  id: UUID
  title: string
  slug: string
  description: string
}

export function ListProjects() {
  const userId = "100"
  const page = 1
  const [projects, setProjects] = useState<Project[] | null>(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/v1/projects").then((response) => {
        return response.json()
      })
      setProjects(response.data)
    }

    fetchData()
  }, [userId, page])

  if (!projects) {
    return <></>
  }
  return (
    <div className="mt-5 flex w-full flex-col gap-2 px-6">
      {projects.map((map: Project) => (
        <Item key={map.slug} variant="outline">
          <ItemContent>
            <Link href={`/projects/${map.slug}`}>
              <ItemTitle>{map.title}</ItemTitle>
              <ItemDescription>Updated 2 days ago</ItemDescription>
            </Link>
          </ItemContent>
          <ItemActions>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <EllipsisVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48" align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Item size="xs" className="w-full p-2">
                      <ItemContent className="flex flex-row justify-between gap-0">
                        <ItemTitle>
                          <span>edit</span>
                        </ItemTitle>
                        <Pencil className="text-neutral-100" />
                      </ItemContent>
                    </Item>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Item size="xs" className="w-full p-2">
                      <ItemContent className="flex flex-row justify-between gap-0">
                        <ItemTitle>
                          <span className="text-red-500">delete</span>
                        </ItemTitle>
                        <Trash className="text-red-500" />
                      </ItemContent>
                    </Item>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ItemActions>
        </Item>
      ))}
    </div>
  )
}
