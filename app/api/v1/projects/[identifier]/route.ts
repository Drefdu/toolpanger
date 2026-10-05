import { db } from "@/drizzle/db/index"
import { projectsTable } from "@/drizzle/db/schema"
import { NextRequest, NextResponse } from "next/server"
import { sql } from "drizzle-orm"
import z from "zod"
import { verifySession } from "@/lib/dal"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ identifier: string }> }
) {
  const user = await verifySession()

  if (!user) {
    return NextResponse.json({
      code: "UNAUTHENTICATED",
      message: "You are not authenticated."
    },
      { status: 403 }
    )
  }

  const { identifier } = await params
  const UUIDValidator = z.object({ identifier: z.uuid() })
  const result = UUIDValidator.safeParse({ identifier: identifier })
  const identifierSearch = result.success ? searchById(identifier) : searchBySlug(identifier)
  const projects = await db
    .select()
    .from(projectsTable)
    .where(sql`${identifierSearch} AND ${projectsTable.user_id} = ${user.id}`)

  return Response.json({ data: projects[0] })
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ identifier: string }> }
) {
  const user = await verifySession()

  if (!user) {
    return NextResponse.json({
      code: "UNAUTHENTICATED",
      message: "You are not authenticated."
    },
      { status: 403 }
    )
  }

  const { slug, title, description } = await request.json()
  const { identifier } = await params
  const UUIDValidator = z.object({ identifier: z.uuid() })
  const result = UUIDValidator.safeParse({ identifier: identifier })
  const identifierSearch = result.success ? searchById(identifier) : searchBySlug(identifier)
  const projects = await db
    .update(projectsTable)
    .set({title, slug, description})
    .where(sql`${identifierSearch} AND ${projectsTable.user_id} = ${user.id}`)
    .returning()

  return Response.json({ data: projects[0] })
}

function searchById(identifier: string) {
  return sql`${projectsTable.id} = ${identifier}`
}


function searchBySlug(identifier: string) {
  return sql`${projectsTable.slug} = ${identifier}`
}