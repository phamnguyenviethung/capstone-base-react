"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "capstone:flex capstone:items-center capstone:gap-2 capstone:text-sm capstone:leading-none capstone:font-medium capstone:select-none capstone:group-data-[disabled=true]:pointer-events-none capstone:group-data-[disabled=true]:opacity-50 capstone:peer-disabled:cursor-not-allowed capstone:peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
