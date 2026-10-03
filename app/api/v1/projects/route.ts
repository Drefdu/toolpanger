import { db } from "@/drizzle/db/index"
import { projectsTable } from "@/drizzle/db/schema"
import { NextRequest, NextResponse } from "next/server"
import { sql } from "drizzle-orm"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { verifySession } from "@/lib/dal"

export async function POST(request: NextRequest) {
  const { slug, title, description } = await request.json()

  const user = await verifySession()
  
  if (!user) {
    return NextResponse.json({
      code: "UNAUTHENTICATED",
      message: "You are not authenticated."
    },
      { status: 403 }
    )
  }

  const result = await db
    .insert(projectsTable)
    .values({
      title,
      slug,
      description,
      user_id: user.id
    })
    .returning()

  return NextResponse.json(
    {
      data: result[0],
    },
    { status: 200 }
  )
}

export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const result = await db
    .select()
    .from(projectsTable)
    .where(sql`${projectsTable.user_id} = ${session?.user?.id}`)

  return NextResponse.json(
    {
      data: result || [],
    },
    {
      status: 200,
    }
  )
}
