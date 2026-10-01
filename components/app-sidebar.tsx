import {
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

import {
  ChevronDown,
  Plus,
  LineSquiggle,
  BrushCleaning,
  Lock,
  Braces,
  Ellipsis,
  BookOpenCheck,
  Puzzle,
  File,
  FilePen,
  Search,
  SquareKanban,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default async function AppSideBar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  console.log(session)
  return (
    <div className="relative flex min-h-screen w-full flex-row bg-[#0a0a0a]">
      <SidebarProvider>
        <Sidebar>
          {/* Sidebar Header */}
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton>
                      { session?.user?.name }'s Organization
                      <ChevronDown className="ml-auto" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-60">
                    <DropdownMenuItem>
                      <span>Organizacion one</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Organizacion one</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Organizacion one</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Mas</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          {/* Sidebar content */}
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex flex-row items-center justify-center p-0">
                  <Link
                    href="/projects"
                    className="flex h-full w-full flex-row items-center justify-start gap-2 pl-2"
                  >
                    <SquareKanban />
                    <span className="text-[12px]">Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Herramientas</SidebarGroupLabel>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link href="/#" className="flex flex-row gap-2">
                    <LineSquiggle />
                    <span className="text-[12px]">Ui</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link href="/#" className="flex flex-row gap-2">
                    <Lock />
                    <span className="text-[12px]">Ciberseguridad</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link href="/#" className="flex flex-row gap-2">
                    <Braces />
                    <span className="text-[12px]">Backend</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link href="/#" className="flex flex-row gap-2">
                    <Ellipsis />
                    <span className="text-[12px]">Otras</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Extras</SidebarGroupLabel>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link href="/#" className="flex flex-row gap-2">
                    <BookOpenCheck />
                    <span className="text-[12px]">Cursos</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link href="/#" className="flex flex-row gap-2">
                    <Puzzle />
                    <span className="text-[12px]">Extenciones</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link href="/#" className="flex flex-row gap-2">
                    <File />
                    <span className="text-[12px]">Documentación</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link href="/#" className="flex flex-row gap-2">
                    <FilePen />
                    <span className="text-[12px]">Tutoriales</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>
          </SidebarContent>

          {/* Sidebar Footer */}
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Username</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="h-auto w-full">{children}</div>
      </SidebarProvider>
    </div>
  )
}
