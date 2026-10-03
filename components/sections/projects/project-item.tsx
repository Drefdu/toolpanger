'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Item, ItemContent, ItemTitle, ItemDescription, ItemActions } from "@/components/ui/item"
import { EllipsisVertical, Pencil, Trash } from "lucide-react"

export default function ProjectItem({
  title,
  slug,
  description,
}: {
  title: string
  slug: string
  description?: string
}) {
  return (
    <Item variant="outline">
      <ItemContent>
        <Link href={`/projects/${slug}`} className="block w-full">
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>{description}</ItemDescription>
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
  )
}