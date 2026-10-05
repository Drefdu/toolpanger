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
import { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { type Project, ProjectSchema } from "@/lib/zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { Spinner } from "@/components/ui/spinner"
import { z } from "better-auth"

const ProjectCreateSchema = ProjectSchema.pick({
  title: true,
  slug: true,
  description: true
});

type ProjectCreateType = z.infer<typeof ProjectCreateSchema>

export function EditProject({ selectedProject, open, setOpen, fetchProjects }: { selectedProject: Project, open: boolean, setOpen: (open: boolean) => void, fetchProjects: (page: number, pageSize: number) => void }) {
  const [formError, setFormError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isLoading, },
  } = useForm<ProjectCreateType>({
    resolver: zodResolver(ProjectCreateSchema),
    defaultValues: {
      title: selectedProject.title,
      slug: selectedProject.slug,
      description: selectedProject.description
    },
    values: {
      title: selectedProject.title,
      slug: selectedProject.slug,
      description: selectedProject.description
    }
  })

  const onSubmit: SubmitHandler<ProjectCreateType> = async (formData) => {
    const response = await fetch(`/api/v1/projects/${selectedProject.id}`, {
      method: "PUT",
      body: JSON.stringify(formData)
    })

    if (response.status != 200) {
      setFormError("Sorry, try it again later.")
      return
    }

    const body = await response.json()

    reset();
    fetchProjects(1, 5)
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={(open) => {
      setOpen(open)
    }}>
      <SheetContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SheetHeader>
            <SheetTitle>Edit Project</SheetTitle>
            <SheetDescription>
              Edit this project. Click save when you&apos;re done.
              you&apos;re done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <FieldGroup>
              <div className="grid gap-3">
                <Label htmlFor="project-title">Title</Label>
                <Input id="project-title" placeholder="example" {...register("title")} />
                {errors.title && <p className="text-red-500">{errors.title?.message}</p>}
              </div>

              <div className="grid gap-3">
                <Label htmlFor="project-title">Slug</Label>
                <Input id="project-slug" placeholder="example" {...register("slug")} />
                {errors.slug && <p className="text-red-500">{errors.slug?.message}</p>}
              </div>

              <Field>
                <FieldLabel htmlFor="project-description">
                  Description
                </FieldLabel>
                <Textarea
                  id="project-description"
                  placeholder="Description..."
                  className="resize-none"
                  {...register("description")}
                />
              </Field>
              {errors.description && <p className="text-red-500">{errors.description?.message}</p>}
            </FieldGroup>
            {formError && <p className="text-red-500">{formError}</p>}
          </div>
          <SheetFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Spinner data-icon="inline-start" />}
              Save changes
            </Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
