import HeaderPage from "@/components/header-page"
import { Button } from "@/components/ui/button"
import { Search, Plus } from "lucide-react"
import { ListResources } from "@/components/sections"
import { projectsTable } from "@/drizzle/db/schema"
import { db } from "@/drizzle/db"
import { sql } from "drizzle-orm"
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const dynamic = "force-dynamic"

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const projects = await db
    .select()
    .from(projectsTable)
    .where(sql`${projectsTable.slug} = ${slug}`)
  const project = projects[0]
  return (
    <>
      <Sheet>
        <HeaderPage title={project.title}>
          <>
            <h2 className="my-4"></h2>
            <div className="mb-5 flex w-full flex-row items-center justify-end gap-5">
              <InputGroup className="w-100">
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
              </InputGroup>
              <SheetTrigger asChild>
                <Button>
                  <span className="text-[12px]">New resouce</span>
                  <Plus />
                </Button>
              </SheetTrigger>
            </div>
          </>
        </HeaderPage>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Name</Label>
              <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-username">Username</Label>
              <Input id="sheet-demo-username" defaultValue="@peduarte" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <ListResources projectId={project.id} />
    </>
  )
}
