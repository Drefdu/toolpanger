import { db } from "@/drizzle/db/index"
import { linksTable, projectsTable } from "@/drizzle/db/schema"
import { NextResponse, NextRequest } from "next/server"
import { sql } from "drizzle-orm"
import z from "zod"

export async function GET(
  request: NextRequest,
  {
    params,
  }: { params: Promise<{ identifier: string; page: number; pageSize: number }> }
) {
  const { identifier, pageSize, page } = await params
  const UUIDValidator = z.object({ identifier: z.uuid() })
  const result = UUIDValidator.safeParse({ identifier: identifier })
  const project = await getProject(result.success, identifier)

  const links = await db
    .select()
    .from(linksTable)
    .where(sql`${linksTable.project_id} = ${project.id}`)
    .limit(page | 10)
    .offset((page * pageSize) | 0)
  return Response.json({ data: links })
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

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ project_id: string }> }
) {
  const { project_id } = await params
  const body = await request.json()
  const { title, slug, description, url, image_url, tags } = body

  const result = await db
    .insert(linksTable)
    .values({
      title,
      slug,
      description,
      url,
      imageUrl: image_url,
      tags,
      project_id,
    })
    .returning()

  return NextResponse.json(
    {
      data: result,
    },
    { status: 200 }
  )
}
