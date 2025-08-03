"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "capstone:focus:bg-accent capstone:focus:text-accent-foreground capstone:data-[state=open]:bg-accent capstone:data-[state=open]:text-accent-foreground capstone:flex capstone:cursor-default capstone:items-center capstone:rounded-sm capstone:px-2 capstone:py-1.5 capstone:text-sm capstone:outline-hidden capstone:select-none capstone:data-[inset]:pl-8 capstone:[&_svg]:pointer-events-none capstone:[&_svg]:shrink-0 capstone:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="capstone:ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "capstone:bg-popover capstone:text-popover-foreground capstone:data-[state=open]:animate-in capstone:data-[state=closed]:animate-out capstone:data-[state=closed]:fade-out-0 capstone:data-[state=open]:fade-in-0 capstone:data-[state=closed]:zoom-out-95 capstone:data-[state=open]:zoom-in-95 capstone:data-[side=bottom]:slide-in-from-top-2 capstone:data-[side=left]:slide-in-from-right-2 capstone:data-[side=right]:slide-in-from-left-2 capstone:data-[side=top]:slide-in-from-bottom-2 capstone:z-50 capstone:min-w-[8rem] capstone:origin-(--radix-context-menu-content-transform-origin) capstone:overflow-hidden capstone:rounded-md capstone:border capstone:p-1 capstone:shadow-lg",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "capstone:bg-popover capstone:text-popover-foreground capstone:data-[state=open]:animate-in capstone:data-[state=closed]:animate-out capstone:data-[state=closed]:fade-out-0 capstone:data-[state=open]:fade-in-0 capstone:data-[state=closed]:zoom-out-95 capstone:data-[state=open]:zoom-in-95 capstone:data-[side=bottom]:slide-in-from-top-2 capstone:data-[side=left]:slide-in-from-right-2 capstone:data-[side=right]:slide-in-from-left-2 capstone:data-[side=top]:slide-in-from-bottom-2 capstone:z-50 capstone:max-h-(--radix-context-menu-content-available-height) capstone:min-w-[8rem] capstone:origin-(--radix-context-menu-content-transform-origin) capstone:overflow-x-hidden capstone:overflow-y-auto capstone:rounded-md capstone:border capstone:p-1 capstone:shadow-md",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
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

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "capstone:focus:bg-accent capstone:focus:text-accent-foreground capstone:relative capstone:flex capstone:cursor-default capstone:items-center capstone:gap-2 capstone:rounded-sm capstone:py-1.5 capstone:pr-2 capstone:pl-8 capstone:text-sm capstone:outline-hidden capstone:select-none capstone:data-[disabled]:pointer-events-none capstone:data-[disabled]:opacity-50 capstone:[&_svg]:pointer-events-none capstone:[&_svg]:shrink-0 capstone:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="capstone:pointer-events-none capstone:absolute capstone:left-2 capstone:flex capstone:size-3.5 capstone:items-center capstone:justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="capstone:size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "capstone:focus:bg-accent capstone:focus:text-accent-foreground capstone:relative capstone:flex capstone:cursor-default capstone:items-center capstone:gap-2 capstone:rounded-sm capstone:py-1.5 capstone:pr-2 capstone:pl-8 capstone:text-sm capstone:outline-hidden capstone:select-none capstone:data-[disabled]:pointer-events-none capstone:data-[disabled]:opacity-50 capstone:[&_svg]:pointer-events-none capstone:[&_svg]:shrink-0 capstone:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="capstone:pointer-events-none capstone:absolute capstone:left-2 capstone:flex capstone:size-3.5 capstone:items-center capstone:justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="capstone:size-2 capstone:fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "capstone:text-foreground capstone:px-2 capstone:py-1.5 capstone:text-sm capstone:font-medium capstone:data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("capstone:bg-border capstone:-mx-1 capstone:my-1 capstone:h-px", className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "capstone:text-muted-foreground capstone:ml-auto capstone:text-xs capstone:tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
