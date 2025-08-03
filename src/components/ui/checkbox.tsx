"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "capstone:peer capstone:border-input capstone:dark:bg-input/30 capstone:data-[state=checked]:bg-primary capstone:data-[state=checked]:text-primary-foreground capstone:dark:data-[state=checked]:bg-primary capstone:data-[state=checked]:border-primary capstone:focus-visible:border-ring capstone:focus-visible:ring-ring/50 capstone:aria-invalid:ring-destructive/20 capstone:dark:aria-invalid:ring-destructive/40 capstone:aria-invalid:border-destructive capstone:size-4 capstone:shrink-0 capstone:rounded-[4px] capstone:border capstone:shadow-xs capstone:transition-shadow capstone:outline-none capstone:focus-visible:ring-[3px] capstone:disabled:cursor-not-allowed capstone:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="capstone:flex capstone:items-center capstone:justify-center capstone:text-current capstone:transition-none"
      >
        <CheckIcon className="capstone:size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
