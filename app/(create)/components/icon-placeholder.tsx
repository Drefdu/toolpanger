"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"
import { HugeiconsIcon } from "@hugeicons/react"

type HugeiconsIconData = Array<Array<{ path: Record<string, string>; [key: string]: unknown }>>

type IconPlaceholderProps = {
  lucide?: LucideIcon
  tabler?: string
  hugeicons?: HugeiconsIconData
  phosphor?: string
  remixicon?: string
  className?: string
  strokeWidth?: number
}

function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  className,
  strokeWidth = 2,
  ...props
}: IconPlaceholderProps) {
  if (hugeicons) {
    return (
      <HugeiconsIcon
        icon={hugeicons}
        strokeWidth={strokeWidth}
        className={className}
        {...props}
      />
    )
  }

  if (lucide) {
    const LucideIconComponent = lucide as React.ComponentType<{
      className?: string
      strokeWidth?: number
    }>
    return (
      <LucideIconComponent
        className={className}
        strokeWidth={strokeWidth}
        {...props}
      />
    )
  }

  if (tabler || phosphor || remixicon) {
    const missing = []
    if (tabler) missing.push(`tabler="${tabler}"`)
    if (phosphor) missing.push(`phosphor="${phosphor}"`)
    if (remixicon) missing.push(`remixicon="${remixicon}"`)
    console.warn(`IconPlaceholder: The following icon libraries are not installed: ${missing.join(", ")}`)
  }

  return null
}

export { IconPlaceholder, type IconPlaceholderProps }
