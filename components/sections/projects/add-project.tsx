'use client'

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Project } from "@/lib/types"
import { useEffect, useState } from "react"


export function AddProject() {

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <span className="text-[12px]">New Project</span>
          <Plus />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <form>
          <SheetHeader>
            <SheetTitle>New Project</SheetTitle>
            <SheetDescription>
              Create a new project. Click save when you&apos;re done.
              you&apos;re done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <FieldGroup>
              <div className="grid gap-3">
                <Label htmlFor="project-title">Title</Label>
                <Input id="project-title" placeholder="example" />
              </div>

              <Field>
                <FieldLabel htmlFor="project-description">
                  Description
                </FieldLabel>
                <Textarea
                  id="project-description"
                  placeholder="Description..."
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
