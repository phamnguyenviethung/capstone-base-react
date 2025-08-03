import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "capstone:bg-background capstone:flex capstone:h-9 capstone:items-center capstone:gap-1 capstone:rounded-md capstone:border capstone:p-1 capstone:shadow-xs",
        className
      )}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "capstone:focus:bg-accent capstone:focus:text-accent-foreground capstone:data-[state=open]:bg-accent capstone:data-[state=open]:text-accent-foreground capstone:flex capstone:items-center capstone:rounded-sm capstone:px-2 capstone:py-1 capstone:text-sm capstone:font-medium capstone:outline-hidden capstone:select-none",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "capstone:bg-popover capstone:text-popover-foreground capstone:data-[state=open]:animate-in capstone:data-[state=closed]:fade-out-0 capstone:data-[state=open]:fade-in-0 capstone:data-[state=closed]:zoom-out-95 capstone:data-[state=open]:zoom-in-95 capstone:data-[side=bottom]:slide-in-from-top-2 capstone:data-[side=left]:slide-in-from-right-2 capstone:data-[side=right]:slide-in-from-left-2 capstone:data-[side=top]:slide-in-from-bottom-2 capstone:z-50 capstone:min-w-[12rem] capstone:origin-(--radix-menubar-content-transform-origin) capstone:overflow-hidden capstone:rounded-md capstone:border capstone:p-1 capstone:shadow-md",
          className
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "capstone:focus:bg-accent capstone:focus:text-accent-foreground capstone:data-[variant=destructive]:text-destructive capstone:data-[variant=destructive]:focus:bg-destructive/10 capstone:dark:data-[variant=destructive]:focus:bg-destructive/20 capstone:data-[variant=destructive]:focus:text-destructive capstone:data-[variant=destructive]:*:[svg]:!text-destructive capstone:[&_svg:not([class*=text-])]:text-muted-foreground capstone:relative capstone:flex capstone:cursor-default capstone:items-center capstone:gap-2 capstone:rounded-sm capstone:px-2 capstone:py-1.5 capstone:text-sm capstone:outline-hidden capstone:select-none capstone:data-[disabled]:pointer-events-none capstone:data-[disabled]:opacity-50 capstone:data-[inset]:pl-8 capstone:[&_svg]:pointer-events-none capstone:[&_svg]:shrink-0 capstone:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "capstone:focus:bg-accent capstone:focus:text-accent-foreground capstone:relative capstone:flex capstone:cursor-default capstone:items-center capstone:gap-2 capstone:rounded-xs capstone:py-1.5 capstone:pr-2 capstone:pl-8 capstone:text-sm capstone:outline-hidden capstone:select-none capstone:data-[disabled]:pointer-events-none capstone:data-[disabled]:opacity-50 capstone:[&_svg]:pointer-events-none capstone:[&_svg]:shrink-0 capstone:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="capstone:pointer-events-none capstone:absolute capstone:left-2 capstone:flex capstone:size-3.5 capstone:items-center capstone:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="capstone:size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "capstone:focus:bg-accent capstone:focus:text-accent-foreground capstone:relative capstone:flex capstone:cursor-default capstone:items-center capstone:gap-2 capstone:rounded-xs capstone:py-1.5 capstone:pr-2 capstone:pl-8 capstone:text-sm capstone:outline-hidden capstone:select-none capstone:data-[disabled]:pointer-events-none capstone:data-[disabled]:opacity-50 capstone:[&_svg]:pointer-events-none capstone:[&_svg]:shrink-0 capstone:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="capstone:pointer-events-none capstone:absolute capstone:left-2 capstone:flex capstone:size-3.5 capstone:items-center capstone:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="capstone:size-2 capstone:fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "capstone:px-2 capstone:py-1.5 capstone:text-sm capstone:font-medium capstone:data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("capstone:bg-border capstone:-mx-1 capstone:my-1 capstone:h-px", className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        "capstone:text-muted-foreground capstone:ml-auto capstone:text-xs capstone:tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "capstone:focus:bg-accent capstone:focus:text-accent-foreground capstone:data-[state=open]:bg-accent capstone:data-[state=open]:text-accent-foreground capstone:flex capstone:cursor-default capstone:items-center capstone:rounded-sm capstone:px-2 capstone:py-1.5 capstone:text-sm capstone:outline-none capstone:select-none capstone:data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="capstone:ml-auto capstone:h-4 capstone:w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        "capstone:bg-popover capstone:text-popover-foreground capstone:data-[state=open]:animate-in capstone:data-[state=closed]:animate-out capstone:data-[state=closed]:fade-out-0 capstone:data-[state=open]:fade-in-0 capstone:data-[state=closed]:zoom-out-95 capstone:data-[state=open]:zoom-in-95 capstone:data-[side=bottom]:slide-in-from-top-2 capstone:data-[side=left]:slide-in-from-right-2 capstone:data-[side=right]:slide-in-from-left-2 capstone:data-[side=top]:slide-in-from-bottom-2 capstone:z-50 capstone:min-w-[8rem] capstone:origin-(--radix-menubar-content-transform-origin) capstone:overflow-hidden capstone:rounded-md capstone:border capstone:p-1 capstone:shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
