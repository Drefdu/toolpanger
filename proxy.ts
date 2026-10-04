import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const publicRoutes = ['/', '/sign-in']
const protectedRoutes = ['/dashboard', '/projects']

export async function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path) || protectedRoutes.some((route) => path.startsWith(route))
    const isPublicRoute = publicRoutes.includes(path) || publicRoutes.some((route) => path.startsWith(route));
    
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session && isProtectedRoute) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}