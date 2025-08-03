import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "capstone:data-[state=open]:animate-in capstone:data-[state=closed]:animate-out capstone:data-[state=closed]:fade-out-0 capstone:data-[state=open]:fade-in-0 capstone:fixed capstone:inset-0 capstone:z-50 capstone:bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "capstone:group/drawer-content capstone:bg-background capstone:fixed capstone:z-50 capstone:flex capstone:h-auto capstone:flex-col",
          "capstone:data-[vaul-drawer-direction=top]:inset-x-0 capstone:data-[vaul-drawer-direction=top]:top-0 capstone:data-[vaul-drawer-direction=top]:mb-24 capstone:data-[vaul-drawer-direction=top]:max-h-[80vh] capstone:data-[vaul-drawer-direction=top]:rounded-b-lg capstone:data-[vaul-drawer-direction=top]:border-b",
          "capstone:data-[vaul-drawer-direction=bottom]:inset-x-0 capstone:data-[vaul-drawer-direction=bottom]:bottom-0 capstone:data-[vaul-drawer-direction=bottom]:mt-24 capstone:data-[vaul-drawer-direction=bottom]:max-h-[80vh] capstone:data-[vaul-drawer-direction=bottom]:rounded-t-lg capstone:data-[vaul-drawer-direction=bottom]:border-t",
          "capstone:data-[vaul-drawer-direction=right]:inset-y-0 capstone:data-[vaul-drawer-direction=right]:right-0 capstone:data-[vaul-drawer-direction=right]:w-3/4 capstone:data-[vaul-drawer-direction=right]:border-l capstone:data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "capstone:data-[vaul-drawer-direction=left]:inset-y-0 capstone:data-[vaul-drawer-direction=left]:left-0 capstone:data-[vaul-drawer-direction=left]:w-3/4 capstone:data-[vaul-drawer-direction=left]:border-r capstone:data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="capstone:bg-muted capstone:mx-auto capstone:mt-4 capstone:hidden capstone:h-2 capstone:w-[100px] capstone:shrink-0 capstone:rounded-full capstone:group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "capstone:flex capstone:flex-col capstone:gap-0.5 capstone:p-4 capstone:group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center capstone:group-data-[vaul-drawer-direction=top]/drawer-content:text-center capstone:md:gap-1.5 capstone:md:text-left",
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("capstone:mt-auto capstone:flex capstone:flex-col capstone:gap-2 capstone:p-4", className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("capstone:text-foreground capstone:font-semibold", className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("capstone:text-muted-foreground capstone:text-sm", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
