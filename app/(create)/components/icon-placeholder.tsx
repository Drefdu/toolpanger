"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import * as LucideIcons from "lucide-react"

type LucideIconName = keyof typeof LucideIcons

type IconPlaceholderProps = React.ComponentPropsWithoutRef<"svg"> & {
  lucide?: LucideIconName | React.ComponentType<{
    className?: string
    strokeWidth?: number
  }>
  tabler?: string
  hugeicons?: unknown
  phosphor?: string
  remixicon?: string
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
  const safeStrokeWidth =
    typeof strokeWidth === "number" ? strokeWidth : Number(strokeWidth) || undefined

  if (lucide) {
    const LucideIconComponent = (
      typeof lucide === "string"
        ? (LucideIcons[lucide as LucideIconName] as React.ComponentType<{
            className?: string
            strokeWidth?: number
          }>)
        : (lucide as React.ComponentType<{
            className?: string
            strokeWidth?: number
          }>)
    )

    if (LucideIconComponent) {
      return (
        <LucideIconComponent
          className={className}
          strokeWidth={safeStrokeWidth}
          {...props}
        />
      )
    }
  }

  if (hugeicons) {
    return (
      <HugeiconsIcon
        icon={hugeicons as never}
        className={className}
        strokeWidth={safeStrokeWidth}
        {...props}
      />
    )
  }

  if (tabler || phosphor || remixicon) {
    const missing = []
    if (tabler) missing.push(`tabler="${tabler}"`)
    if (phosphor) missing.push(`phosphor="${phosphor}"`)
    if (remixicon) missing.push(`remixicon="${remixicon}"`)
    console.warn(
      `IconPlaceholder: The following icon libraries are not installed: ${missing.join(", ")}`
    )
  }

  return null
}

export { IconPlaceholder, type IconPlaceholderProps }
