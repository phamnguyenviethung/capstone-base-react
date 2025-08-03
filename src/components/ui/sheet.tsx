import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "capstone:data-[state=open]:animate-in capstone:data-[state=closed]:animate-out capstone:data-[state=closed]:fade-out-0 capstone:data-[state=open]:fade-in-0 capstone:fixed capstone:inset-0 capstone:z-50 capstone:bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "capstone:bg-background capstone:data-[state=open]:animate-in capstone:data-[state=closed]:animate-out capstone:fixed capstone:z-50 capstone:flex capstone:flex-col capstone:gap-4 capstone:shadow-lg capstone:transition capstone:ease-in-out capstone:data-[state=closed]:duration-300 capstone:data-[state=open]:duration-500",
          side === "right" &&
            "capstone:data-[state=closed]:slide-out-to-right capstone:data-[state=open]:slide-in-from-right capstone:inset-y-0 capstone:right-0 capstone:h-full capstone:w-3/4 capstone:border-l capstone:sm:max-w-sm",
          side === "left" &&
            "capstone:data-[state=closed]:slide-out-to-left capstone:data-[state=open]:slide-in-from-left capstone:inset-y-0 capstone:left-0 capstone:h-full capstone:w-3/4 capstone:border-r capstone:sm:max-w-sm",
          side === "top" &&
            "capstone:data-[state=closed]:slide-out-to-top capstone:data-[state=open]:slide-in-from-top capstone:inset-x-0 capstone:top-0 capstone:h-auto capstone:border-b",
          side === "bottom" &&
            "capstone:data-[state=closed]:slide-out-to-bottom capstone:data-[state=open]:slide-in-from-bottom capstone:inset-x-0 capstone:bottom-0 capstone:h-auto capstone:border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="capstone:ring-offset-background capstone:focus:ring-ring capstone:data-[state=open]:bg-secondary capstone:absolute capstone:top-4 capstone:right-4 capstone:rounded-xs capstone:opacity-70 capstone:transition-opacity capstone:hover:opacity-100 capstone:focus:ring-2 capstone:focus:ring-offset-2 capstone:focus:outline-hidden capstone:disabled:pointer-events-none">
          <XIcon className="capstone:size-4" />
          <span className="capstone:sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("capstone:flex capstone:flex-col capstone:gap-1.5 capstone:p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("capstone:mt-auto capstone:flex capstone:flex-col capstone:gap-2 capstone:p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("capstone:text-foreground capstone:font-semibold", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("capstone:text-muted-foreground capstone:text-sm", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
