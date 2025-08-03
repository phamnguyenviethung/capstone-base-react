import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "capstone:bg-primary capstone:text-primary-foreground capstone:animate-in capstone:fade-in-0 capstone:zoom-in-95 capstone:data-[state=closed]:animate-out capstone:data-[state=closed]:fade-out-0 capstone:data-[state=closed]:zoom-out-95 capstone:data-[side=bottom]:slide-in-from-top-2 capstone:data-[side=left]:slide-in-from-right-2 capstone:data-[side=right]:slide-in-from-left-2 capstone:data-[side=top]:slide-in-from-bottom-2 capstone:z-50 capstone:w-fit capstone:origin-(--radix-tooltip-content-transform-origin) capstone:rounded-md capstone:px-3 capstone:py-1.5 capstone:text-xs capstone:text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="capstone:bg-primary capstone:fill-primary capstone:z-50 capstone:size-2.5 capstone:translate-y-[calc(-50%_-_2px)] capstone:rotate-45 capstone:rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
