import { db } from '@/drizzle/db/index'
import { linksTable } from "@/drizzle/db/schema";

export async function GET() {
  const links = await db.select().from(linksTable);
  return Response.json({data: links});
}