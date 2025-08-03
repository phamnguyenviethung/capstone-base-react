import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "capstone:group/navigation-menu capstone:relative capstone:flex capstone:max-w-max capstone:flex-1 capstone:items-center capstone:justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "capstone:group capstone:flex capstone:flex-1 capstone:list-none capstone:items-center capstone:justify-center capstone:gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("capstone:relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "capstone:group capstone:inline-flex capstone:h-9 capstone:w-max capstone:items-center capstone:justify-center capstone:rounded-md capstone:bg-background capstone:px-4 capstone:py-2 capstone:text-sm capstone:font-medium capstone:hover:bg-accent capstone:hover:text-accent-foreground capstone:focus:bg-accent capstone:focus:text-accent-foreground capstone:disabled:pointer-events-none capstone:disabled:opacity-50 capstone:data-[state=open]:hover:bg-accent capstone:data-[state=open]:text-accent-foreground capstone:data-[state=open]:focus:bg-accent capstone:data-[state=open]:bg-accent/50 capstone:focus-visible:ring-ring/50 capstone:outline-none capstone:transition-[color,box-shadow] capstone:focus-visible:ring-[3px] capstone:focus-visible:outline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "capstone:group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="capstone:relative capstone:top-[1px] capstone:ml-1 capstone:size-3 capstone:transition capstone:duration-300 capstone:group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "capstone:data-[motion^=from-]:animate-in capstone:data-[motion^=to-]:animate-out capstone:data-[motion^=from-]:fade-in capstone:data-[motion^=to-]:fade-out capstone:data-[motion=from-end]:slide-in-from-right-52 capstone:data-[motion=from-start]:slide-in-from-left-52 capstone:data-[motion=to-end]:slide-out-to-right-52 capstone:data-[motion=to-start]:slide-out-to-left-52 capstone:top-0 capstone:left-0 capstone:w-full capstone:p-2 capstone:pr-2.5 capstone:md:absolute capstone:md:w-auto",
        "capstone:group-data-[viewport=false]/navigation-menu:bg-popover capstone:group-data-[viewport=false]/navigation-menu:text-popover-foreground capstone:group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in capstone:group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out capstone:group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 capstone:group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 capstone:group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 capstone:group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 capstone:group-data-[viewport=false]/navigation-menu:top-full capstone:group-data-[viewport=false]/navigation-menu:mt-1.5 capstone:group-data-[viewport=false]/navigation-menu:overflow-hidden capstone:group-data-[viewport=false]/navigation-menu:rounded-md capstone:group-data-[viewport=false]/navigation-menu:border capstone:group-data-[viewport=false]/navigation-menu:shadow capstone:group-data-[viewport=false]/navigation-menu:duration-200 capstone:**:data-[slot=navigation-menu-link]:focus:ring-0 capstone:**:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "capstone:absolute capstone:top-full capstone:left-0 capstone:isolate capstone:z-50 capstone:flex capstone:justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "capstone:origin-top-center capstone:bg-popover capstone:text-popover-foreground capstone:data-[state=open]:animate-in capstone:data-[state=closed]:animate-out capstone:data-[state=closed]:zoom-out-95 capstone:data-[state=open]:zoom-in-90 capstone:relative capstone:mt-1.5 capstone:h-[var(--radix-navigation-menu-viewport-height)] capstone:w-full capstone:overflow-hidden capstone:rounded-md capstone:border capstone:shadow capstone:md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "capstone:data-[active=true]:focus:bg-accent capstone:data-[active=true]:hover:bg-accent capstone:data-[active=true]:bg-accent/50 capstone:data-[active=true]:text-accent-foreground capstone:hover:bg-accent capstone:hover:text-accent-foreground capstone:focus:bg-accent capstone:focus:text-accent-foreground capstone:focus-visible:ring-ring/50 capstone:[&_svg:not([class*=text-])]:text-muted-foreground capstone:flex capstone:flex-col capstone:gap-1 capstone:rounded-sm capstone:p-2 capstone:text-sm capstone:transition-all capstone:outline-none capstone:focus-visible:ring-[3px] capstone:focus-visible:outline-1 capstone:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "capstone:data-[state=visible]:animate-in capstone:data-[state=hidden]:animate-out capstone:data-[state=hidden]:fade-out capstone:data-[state=visible]:fade-in capstone:top-full capstone:z-[1] capstone:flex capstone:h-1.5 capstone:items-end capstone:justify-center capstone:overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="capstone:bg-border capstone:relative capstone:top-[60%] capstone:h-2 capstone:w-2 capstone:rotate-45 capstone:rounded-tl-sm capstone:shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
