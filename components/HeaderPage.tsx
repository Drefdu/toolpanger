import {
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function HeaderPage({title, children}: { title: string, children: React.ReactElement }) {
    return (
        <div className="bg-[#131313] z-20 flex w-full flex-col flex-wrap items-start justify-start h-auto">
            <div className="flex full flex-row items-center h-12">
                <SidebarTrigger size="lg"/> 
                <Separator orientation="vertical"/>
                <h1 className="ms-3 w-full text-2xl font-bold">{title}</h1>
            </div>
            <Separator />

            <div className="w-full px-12">
                {/* More information or page actions */}
                { children }
            </div>
        </div>
    )
}