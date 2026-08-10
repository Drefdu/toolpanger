import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function HeaderPage({
  title,
  children,
}: {
  title: string
  children: React.ReactElement
}) {
  return (
    <div className="z-20 flex h-auto w-full flex-col flex-wrap items-start justify-start bg-[#131313]">
      <div className="full flex h-12 flex-row items-center">
        <SidebarTrigger size="lg" />
        <Separator orientation="vertical" />
        <h1 className="ms-3 w-full text-2xl font-bold">{title}</h1>
      </div>
      <Separator />

      <div className="w-full px-6">
        {/* More information or page actions */}
        {children}
      </div>
    </div>
  )
}
