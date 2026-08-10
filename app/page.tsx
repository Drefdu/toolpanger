"use client"

import CardGrid from "../components/table/cardGrid"
import CardList from "../components/table/CardList"

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

import { Plus, Search } from "lucide-react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import HeaderPage from "@/components/header-page"

export default function Page() {
  const [showStatusBar, setShowStatusBar] = useState(true)
  const [showActivityBar, setShowActivityBar] = useState(false)
  const [showPanel, setShowPanel] = useState(false)

  return (
    <>
      <HeaderPage title="Enlaces">
        <div className="mt-7 mb-7 flex w-full flex-row items-center justify-end gap-1">
          <div className="flex flex-row gap-5">
            <InputGroup className="w-100">
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <span className="text-[12px]">Columns</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={showStatusBar ?? false}
                    onCheckedChange={setShowStatusBar}
                  >
                    Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showActivityBar}
                    onCheckedChange={setShowActivityBar}
                    disabled
                  >
                    Activity Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                  >
                    Panel
                  </DropdownMenuCheckboxItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button>
              <span className="text-[12px]">New Tool</span>
              <Plus />
            </Button>
          </div>
        </div>
      </HeaderPage>
      <div className="flex w-full flex-1 flex-col">
        <CardList />
        <div className="relative mt-auto flex flex-row items-center justify-between px-6 py-6">
          <p className="w-fittext-center text-sm text-muted-foreground">
            0 of 68 row(s) selected.
          </p>
          <div className="flex w-fit flex-row">
            <Field orientation="horizontal" className="w-fit">
              <FieldLabel
                htmlFor="select-rows-per-page"
                className="text-nowrap"
              >
                Rows per page
              </FieldLabel>
              <Select defaultValue="25">
                <SelectTrigger className="w-20" id="select-rows-per-page">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent align="start">
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
    </>
  )
}
