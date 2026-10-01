import { NextRequest, NextResponse } from "next/server"
import { usersTable } from "@/drizzle/db/schema"
import { db } from "@/drizzle/db/index"
import { sql } from "drizzle-orm"

export async function POST(request: NextRequest) {
    const { given_name, last_name, email, phone, password } = await request.json()

    const result = await db
			.insert(usersTable)
			.values({
				given_name,
				last_name,
				email,
				phone,
				password
			})
			.returning()

			return NextResponse.json({
				data: result
			}, {
				status: 200
			})
}
export async function GET(request: NextRequest) {
	
}
export async function PUT(request: NextRequest) {}
export async function DELETE(request: NextRequest) {}
