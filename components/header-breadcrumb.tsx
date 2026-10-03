"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "./ui/breadcrumb"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface BreadItem {
  title: string
  path: string
}

export default function HeaderBreadCrumb() {
  const pathname = usePathname()

  const breadItems = pathname == "/" ? ["/"] : pathname.substring(1).split("/")
  const breadCount = breadItems.length * 2 - 1
  const breadMap: (BreadItem | null)[] = []
  console.log(breadMap)
  for (let index = 0; index < breadCount; index++) {
    if (breadMap[index - 1] == null) {
      console.log(index)
      const title = breadItems[index / 2]
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
        .replace("-", " ")
      breadMap.push({
        path: index == 0 ? `/${breadItems[index]}` : `${breadMap[index -2]?.path}/${breadItems[index - 1]}`,
        title: title,
      })
    } else {
      breadMap.push(null)
    }
  }

  console.log(breadMap)

  return (
    <Breadcrumb className="ml-2">
      <BreadcrumbList>
        {breadMap.map((c, index) =>
          c == null ? (
            <BreadcrumbSeparator key={`separator-${index}`} />
          ) : (
            <BreadcrumbItem key={`item-${index}`}>
              {breadMap.length == index + 1 ? (
                <BreadcrumbPage>{c.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={c.path}>{c.title}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
