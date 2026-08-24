import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import HeaderBreadCrumb from "./header-breadcrumb"

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
        <HeaderBreadCrumb />
      </div>
      <Separator />
      {/* <h1 className="my-5 w-full px-6 text-2xl font-bold">{title}</h1> */}
      <div className="w-full px-6">
        {/* More information or page actions */}
        {children}
      </div>
    </div>
  )
}
