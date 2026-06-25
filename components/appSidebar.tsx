import {
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

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

export default function AppSideBar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
                      Organization Name
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
              <SidebarGroupLabel>
                <a href="/workspaces">Workspaces</a>
              </SidebarGroupLabel>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/#" className="flex flex-row gap-2">
                    <LineSquiggle />
                    <span className="text-[12px]">Grisi</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/#" className="flex flex-row gap-2">
                    <LineSquiggle />
                    <span className="text-[12px]">3M</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/#" className="flex flex-row gap-2">
                    <LineSquiggle />
                    <span className="text-[12px]">Presta Prenda</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/#" className="flex flex-row gap-2">
                    <LineSquiggle />
                    <span className="text-[12px]">Mas</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Herramientas</SidebarGroupLabel>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/#" className="flex flex-row gap-2">
                    <LineSquiggle />
                    <span className="text-[12px]">Ui</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/#" className="flex flex-row gap-2">
                    <Lock />
                    <span className="text-[12px]">Ciberseguridad</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/#" className="flex flex-row gap-2">
                    <Braces />
                    <span className="text-[12px]">Backend</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/#" className="flex flex-row gap-2">
                    <Ellipsis />
                    <span className="text-[12px]">Otras</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Extras</SidebarGroupLabel>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/#" className="flex flex-row gap-2">
                    <BookOpenCheck />
                    <span className="text-[12px]">Cursos</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/#" className="flex flex-row gap-2">
                    <Puzzle />
                    <span className="text-[12px]">Extenciones</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/#" className="flex flex-row gap-2">
                    <File />
                    <span className="text-[12px]">Documentación</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/#" className="flex flex-row gap-2">
                    <FilePen />
                    <span className="text-[12px]">Tutoriales</span>
                  </a>
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
        <div className="h-auto w-full overflow-hidden">{children}</div>
      </SidebarProvider>
    </div>
  )
}
