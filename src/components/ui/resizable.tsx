import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "capstone:flex capstone:h-full capstone:w-full capstone:data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "capstone:bg-border capstone:focus-visible:ring-ring capstone:relative capstone:flex capstone:w-px capstone:items-center capstone:justify-center capstone:after:absolute capstone:after:inset-y-0 capstone:after:left-1/2 capstone:after:w-1 capstone:after:-translate-x-1/2 capstone:focus-visible:ring-1 capstone:focus-visible:ring-offset-1 capstone:focus-visible:outline-hidden capstone:data-[panel-group-direction=vertical]:h-px capstone:data-[panel-group-direction=vertical]:w-full capstone:data-[panel-group-direction=vertical]:after:left-0 capstone:data-[panel-group-direction=vertical]:after:h-1 capstone:data-[panel-group-direction=vertical]:after:w-full capstone:data-[panel-group-direction=vertical]:after:translate-x-0 capstone:data-[panel-group-direction=vertical]:after:-translate-y-1/2 capstone:[&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="capstone:bg-border capstone:z-10 capstone:flex capstone:h-4 capstone:w-3 capstone:items-center capstone:justify-center capstone:rounded-xs capstone:border">
          <GripVerticalIcon className="capstone:size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
