import { db } from "@/drizzle/db/index"
import { projectsTable } from "@/drizzle/db/schema"
import { NextRequest } from "next/server"
import { sql } from "drizzle-orm"
import z from "zod"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ identifier: string }> }
) {
  const { identifier } = await params
  const UUIDValidator = z.object({ identifier: z.uuid() })
  const result = UUIDValidator.safeParse({ identifier: identifier })
  const project = await getProject(result.success, identifier)
  return Response.json({ data: project })
}

async function getProjectById(identifier: string) {
  const projects = await db
    .select()
    .from(projectsTable)
    .where(sql`${projectsTable.id} = ${identifier}`)

  return projects[0]
}

async function getProjectBySlug(identifier: string) {
  const projects = await db
    .select()
    .from(projectsTable)
    .where(sql`${projectsTable.slug} = ${identifier}`)

  return projects[0]
}

function getProject(isUUID: boolean, identifier: string) {
  if (isUUID) {
    return getProjectById(identifier)
  } else {
    return getProjectBySlug(identifier)
  }
}
