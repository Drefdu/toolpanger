import HeaderPage from "@/components/header-page"
import { Search } from "lucide-react"
import { ListResources, AddResource } from "@/components/sections"
import { projectsTable } from "@/drizzle/db/schema"
import { db } from "@/drizzle/db"
import { sql } from "drizzle-orm"
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group"

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
            <AddResource />
          </div>
        </>
      </HeaderPage>
      <ListResources projectId={project.id} />
    </>
  )
}
