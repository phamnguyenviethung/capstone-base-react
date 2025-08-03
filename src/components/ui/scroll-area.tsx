"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("capstone:relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="capstone:focus-visible:ring-ring/50 capstone:size-full capstone:rounded-[inherit] capstone:transition-[color,box-shadow] capstone:outline-none capstone:focus-visible:ring-[3px] capstone:focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "capstone:flex capstone:touch-none capstone:p-px capstone:transition-colors capstone:select-none",
        orientation === "vertical" &&
          "capstone:h-full capstone:w-2.5 capstone:border-l capstone:border-l-transparent",
        orientation === "horizontal" &&
          "capstone:h-2.5 capstone:flex-col capstone:border-t capstone:border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="capstone:bg-border capstone:relative capstone:flex-1 capstone:rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
