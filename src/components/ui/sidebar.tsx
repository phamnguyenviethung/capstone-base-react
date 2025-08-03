"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import { PanelLeftIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "capstone:group/sidebar-wrapper capstone:has-data-[variant=inset]:bg-sidebar capstone:flex capstone:min-h-svh capstone:w-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "capstone:bg-sidebar capstone:text-sidebar-foreground capstone:flex capstone:h-full capstone:w-(--sidebar-width) capstone:flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="capstone:bg-sidebar capstone:text-sidebar-foreground capstone:w-(--sidebar-width) capstone:p-0 capstone:[&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="capstone:sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="capstone:flex capstone:h-full capstone:w-full capstone:flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="capstone:group capstone:peer capstone:text-sidebar-foreground capstone:hidden capstone:md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "capstone:relative capstone:w-(--sidebar-width) capstone:bg-transparent capstone:transition-[width] capstone:duration-200 capstone:ease-linear",
          "capstone:group-data-[collapsible=offcanvas]:w-0",
          "capstone:group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "capstone:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "capstone:group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "capstone:fixed capstone:inset-y-0 capstone:z-10 capstone:hidden capstone:h-svh capstone:w-(--sidebar-width) capstone:transition-[left,right,width] capstone:duration-200 capstone:ease-linear capstone:md:flex",
          side === "left"
            ? "capstone:left-0 capstone:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "capstone:right-0 capstone:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "capstone:p-2 capstone:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "capstone:group-data-[collapsible=icon]:w-(--sidebar-width-icon) capstone:group-data-[side=left]:border-r capstone:group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="capstone:bg-sidebar capstone:group-data-[variant=floating]:border-sidebar-border capstone:flex capstone:h-full capstone:w-full capstone:flex-col capstone:group-data-[variant=floating]:rounded-lg capstone:group-data-[variant=floating]:border capstone:group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("capstone:size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="capstone:sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "capstone:hover:after:bg-sidebar-border capstone:absolute capstone:inset-y-0 capstone:z-20 capstone:hidden capstone:w-4 capstone:-translate-x-1/2 capstone:transition-all capstone:ease-linear capstone:group-data-[side=left]:-right-4 capstone:group-data-[side=right]:left-0 capstone:after:absolute capstone:after:inset-y-0 capstone:after:left-1/2 capstone:after:w-[2px] capstone:sm:flex",
        "capstone:in-data-[side=left]:cursor-w-resize capstone:in-data-[side=right]:cursor-e-resize",
        "capstone:[[data-side=left][data-state=collapsed]_&]:cursor-e-resize capstone:[[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "capstone:hover:group-data-[collapsible=offcanvas]:bg-sidebar capstone:group-data-[collapsible=offcanvas]:translate-x-0 capstone:group-data-[collapsible=offcanvas]:after:left-full",
        "capstone:[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "capstone:[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "capstone:bg-background capstone:relative capstone:flex capstone:w-full capstone:flex-1 capstone:flex-col",
        "capstone:md:peer-data-[variant=inset]:m-2 capstone:md:peer-data-[variant=inset]:ml-0 capstone:md:peer-data-[variant=inset]:rounded-xl capstone:md:peer-data-[variant=inset]:shadow-sm capstone:md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("capstone:bg-background capstone:h-8 capstone:w-full capstone:shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("capstone:flex capstone:flex-col capstone:gap-2 capstone:p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("capstone:flex capstone:flex-col capstone:gap-2 capstone:p-2", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("capstone:bg-sidebar-border capstone:mx-2 capstone:w-auto", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "capstone:flex capstone:min-h-0 capstone:flex-1 capstone:flex-col capstone:gap-2 capstone:overflow-auto capstone:group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("capstone:relative capstone:flex capstone:w-full capstone:min-w-0 capstone:flex-col capstone:p-2", className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "capstone:text-sidebar-foreground/70 capstone:ring-sidebar-ring capstone:flex capstone:h-8 capstone:shrink-0 capstone:items-center capstone:rounded-md capstone:px-2 capstone:text-xs capstone:font-medium capstone:outline-hidden capstone:transition-[margin,opacity] capstone:duration-200 capstone:ease-linear capstone:focus-visible:ring-2 capstone:[&>svg]:size-4 capstone:[&>svg]:shrink-0",
        "capstone:group-data-[collapsible=icon]:-mt-8 capstone:group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "capstone:text-sidebar-foreground capstone:ring-sidebar-ring capstone:hover:bg-sidebar-accent capstone:hover:text-sidebar-accent-foreground capstone:absolute capstone:top-3.5 capstone:right-3 capstone:flex capstone:aspect-square capstone:w-5 capstone:items-center capstone:justify-center capstone:rounded-md capstone:p-0 capstone:outline-hidden capstone:transition-transform capstone:focus-visible:ring-2 capstone:[&>svg]:size-4 capstone:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "capstone:after:absolute capstone:after:-inset-2 capstone:md:after:hidden",
        "capstone:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("capstone:w-full capstone:text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("capstone:flex capstone:w-full capstone:min-w-0 capstone:flex-col capstone:gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("capstone:group/menu-item capstone:relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "capstone:peer/menu-button capstone:flex capstone:w-full capstone:items-center capstone:gap-2 capstone:overflow-hidden capstone:rounded-md capstone:p-2 capstone:text-left capstone:text-sm capstone:outline-hidden capstone:ring-sidebar-ring capstone:transition-[width,height,padding] capstone:hover:bg-sidebar-accent capstone:hover:text-sidebar-accent-foreground capstone:focus-visible:ring-2 capstone:active:bg-sidebar-accent capstone:active:text-sidebar-accent-foreground capstone:disabled:pointer-events-none capstone:disabled:opacity-50 capstone:group-has-data-[sidebar=menu-action]/menu-item:pr-8 capstone:aria-disabled:pointer-events-none capstone:aria-disabled:opacity-50 capstone:data-[active=true]:bg-sidebar-accent capstone:data-[active=true]:font-medium capstone:data-[active=true]:text-sidebar-accent-foreground capstone:data-[state=open]:hover:bg-sidebar-accent capstone:data-[state=open]:hover:text-sidebar-accent-foreground capstone:group-data-[collapsible=icon]:size-8! capstone:group-data-[collapsible=icon]:p-2! capstone:[&>span:last-child]:truncate capstone:[&>svg]:size-4 capstone:[&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "capstone:hover:bg-sidebar-accent capstone:hover:text-sidebar-accent-foreground",
        outline:
          "capstone:bg-background capstone:shadow-[0_0_0_1px_hsl(var(--sidebar-border))] capstone:hover:bg-sidebar-accent capstone:hover:text-sidebar-accent-foreground capstone:hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "capstone:h-8 capstone:text-sm",
        sm: "capstone:h-7 capstone:text-xs",
        lg: "capstone:h-12 capstone:text-sm capstone:group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "capstone:text-sidebar-foreground capstone:ring-sidebar-ring capstone:hover:bg-sidebar-accent capstone:hover:text-sidebar-accent-foreground capstone:peer-hover/menu-button:text-sidebar-accent-foreground capstone:absolute capstone:top-1.5 capstone:right-1 capstone:flex capstone:aspect-square capstone:w-5 capstone:items-center capstone:justify-center capstone:rounded-md capstone:p-0 capstone:outline-hidden capstone:transition-transform capstone:focus-visible:ring-2 capstone:[&>svg]:size-4 capstone:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "capstone:after:absolute capstone:after:-inset-2 capstone:md:after:hidden",
        "capstone:peer-data-[size=sm]/menu-button:top-1",
        "capstone:peer-data-[size=default]/menu-button:top-1.5",
        "capstone:peer-data-[size=lg]/menu-button:top-2.5",
        "capstone:group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "capstone:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground capstone:group-focus-within/menu-item:opacity-100 capstone:group-hover/menu-item:opacity-100 capstone:data-[state=open]:opacity-100 capstone:md:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "capstone:text-sidebar-foreground capstone:pointer-events-none capstone:absolute capstone:right-1 capstone:flex capstone:h-5 capstone:min-w-5 capstone:items-center capstone:justify-center capstone:rounded-md capstone:px-1 capstone:text-xs capstone:font-medium capstone:tabular-nums capstone:select-none",
        "capstone:peer-hover/menu-button:text-sidebar-accent-foreground capstone:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "capstone:peer-data-[size=sm]/menu-button:top-1",
        "capstone:peer-data-[size=default]/menu-button:top-1.5",
        "capstone:peer-data-[size=lg]/menu-button:top-2.5",
        "capstone:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("capstone:flex capstone:h-8 capstone:items-center capstone:gap-2 capstone:rounded-md capstone:px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="capstone:size-4 capstone:rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="capstone:h-4 capstone:max-w-(--skeleton-width) capstone:flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "capstone:border-sidebar-border capstone:mx-3.5 capstone:flex capstone:min-w-0 capstone:translate-x-px capstone:flex-col capstone:gap-1 capstone:border-l capstone:px-2.5 capstone:py-0.5",
        "capstone:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("capstone:group/menu-sub-item capstone:relative", className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "capstone:text-sidebar-foreground capstone:ring-sidebar-ring capstone:hover:bg-sidebar-accent capstone:hover:text-sidebar-accent-foreground capstone:active:bg-sidebar-accent capstone:active:text-sidebar-accent-foreground capstone:[&>svg]:text-sidebar-accent-foreground capstone:flex capstone:h-7 capstone:min-w-0 capstone:-translate-x-px capstone:items-center capstone:gap-2 capstone:overflow-hidden capstone:rounded-md capstone:px-2 capstone:outline-hidden capstone:focus-visible:ring-2 capstone:disabled:pointer-events-none capstone:disabled:opacity-50 capstone:aria-disabled:pointer-events-none capstone:aria-disabled:opacity-50 capstone:[&>span:last-child]:truncate capstone:[&>svg]:size-4 capstone:[&>svg]:shrink-0",
        "capstone:data-[active=true]:bg-sidebar-accent capstone:data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "capstone:text-xs",
        size === "md" && "capstone:text-sm",
        "capstone:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
