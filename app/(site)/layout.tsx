import AppSideBar from "@/components/app-sidebar"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppSideBar>
      <div className="flex h-dvh flex-col overflow-hidden">
        {children}
      </div>
    </AppSideBar>
  )
}
