import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "capstone:bg-popover capstone:text-popover-foreground capstone:data-[state=open]:animate-in capstone:data-[state=closed]:animate-out capstone:data-[state=closed]:fade-out-0 capstone:data-[state=open]:fade-in-0 capstone:data-[state=closed]:zoom-out-95 capstone:data-[state=open]:zoom-in-95 capstone:data-[side=bottom]:slide-in-from-top-2 capstone:data-[side=left]:slide-in-from-right-2 capstone:data-[side=right]:slide-in-from-left-2 capstone:data-[side=top]:slide-in-from-bottom-2 capstone:z-50 capstone:w-64 capstone:origin-(--radix-hover-card-content-transform-origin) capstone:rounded-md capstone:border capstone:p-4 capstone:shadow-md capstone:outline-hidden",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
