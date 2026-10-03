import 'server-only'
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { cache } from 'react'

type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null | undefined;
}

export const verifySession = cache(async (): Promise<User | null> => {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  const user_id = session?.user?.id;

  if (!user_id) {
    return null
  }

  return session.user
})