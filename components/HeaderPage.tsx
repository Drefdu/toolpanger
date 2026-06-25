import {
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function HeaderPage({title}: { title: string }) {
    return (
        <div className="bg-[#171717]px-5 z-20 flex w-full flex-col flex-wrap items-start justify-start h-[5%]">
            <div className="flex full flex-row items-center">
                <SidebarTrigger size="lg" /> <Separator orientation="vertical" />
                <h1 className="ms-3 w-full text-2xl font-bold">{title}</h1>
            </div>
            <Separator />
        </div>
    )
}