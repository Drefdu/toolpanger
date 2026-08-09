import { db } from "@/drizzle/db/index"
import { linksTable } from "@/drizzle/db/schema"
import { NextResponse, NextRequest } from "next/server"

export async function GET() {
  const links = await db.select().from(linksTable)
  return Response.json({ data: links })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log(body)
  return NextResponse.json({ message: "ok" }, { status: 200 })
}
