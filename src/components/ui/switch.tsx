"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "capstone:peer capstone:data-[state=checked]:bg-primary capstone:data-[state=unchecked]:bg-input capstone:focus-visible:border-ring capstone:focus-visible:ring-ring/50 capstone:dark:data-[state=unchecked]:bg-input/80 capstone:inline-flex capstone:h-[1.15rem] capstone:w-8 capstone:shrink-0 capstone:items-center capstone:rounded-full capstone:border capstone:border-transparent capstone:shadow-xs capstone:transition-all capstone:outline-none capstone:focus-visible:ring-[3px] capstone:disabled:cursor-not-allowed capstone:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "capstone:bg-background capstone:dark:data-[state=unchecked]:bg-foreground capstone:dark:data-[state=checked]:bg-primary-foreground capstone:pointer-events-none capstone:block capstone:size-4 capstone:rounded-full capstone:ring-0 capstone:transition-transform capstone:data-[state=checked]:translate-x-[calc(100%-2px)] capstone:data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
