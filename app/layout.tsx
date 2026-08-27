import "./globals.css"
import { Geist_Mono, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import AppSideBar from "@/components/app-sidebar"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>
          <AppSideBar>
            <div className="flex h-dvh flex-col overflow-hidden">
              {children}
            </div>
          </AppSideBar>
        </ThemeProvider>
      </body>
    </html>
  )
}
