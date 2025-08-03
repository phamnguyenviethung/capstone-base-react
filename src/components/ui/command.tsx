"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "capstone:bg-popover capstone:text-popover-foreground capstone:flex capstone:h-full capstone:w-full capstone:flex-col capstone:overflow-hidden capstone:rounded-md",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="capstone:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("capstone:overflow-hidden capstone:p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="capstone:[&_[cmdk-group-heading]]:text-muted-foreground capstone:**:data-[slot=command-input-wrapper]:h-12 capstone:[&_[cmdk-group-heading]]:px-2 capstone:[&_[cmdk-group-heading]]:font-medium capstone:[&_[cmdk-group]]:px-2 capstone:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 capstone:[&_[cmdk-input-wrapper]_svg]:h-5 capstone:[&_[cmdk-input-wrapper]_svg]:w-5 capstone:[&_[cmdk-input]]:h-12 capstone:[&_[cmdk-item]]:px-2 capstone:[&_[cmdk-item]]:py-3 capstone:[&_[cmdk-item]_svg]:h-5 capstone:[&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="capstone:flex capstone:h-9 capstone:items-center capstone:gap-2 capstone:border-b capstone:px-3"
    >
      <SearchIcon className="capstone:size-4 capstone:shrink-0 capstone:opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "capstone:placeholder:text-muted-foreground capstone:flex capstone:h-10 capstone:w-full capstone:rounded-md capstone:bg-transparent capstone:py-3 capstone:text-sm capstone:outline-hidden capstone:disabled:cursor-not-allowed capstone:disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "capstone:max-h-[300px] capstone:scroll-py-1 capstone:overflow-x-hidden capstone:overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="capstone:py-6 capstone:text-center capstone:text-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "capstone:text-foreground capstone:[&_[cmdk-group-heading]]:text-muted-foreground capstone:overflow-hidden capstone:p-1 capstone:[&_[cmdk-group-heading]]:px-2 capstone:[&_[cmdk-group-heading]]:py-1.5 capstone:[&_[cmdk-group-heading]]:text-xs capstone:[&_[cmdk-group-heading]]:font-medium",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("capstone:bg-border capstone:-mx-1 capstone:h-px", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "capstone:data-[selected=true]:bg-accent capstone:data-[selected=true]:text-accent-foreground capstone:[&_svg:not([class*=text-])]:text-muted-foreground capstone:relative capstone:flex capstone:cursor-default capstone:items-center capstone:gap-2 capstone:rounded-sm capstone:px-2 capstone:py-1.5 capstone:text-sm capstone:outline-hidden capstone:select-none capstone:data-[disabled=true]:pointer-events-none capstone:data-[disabled=true]:opacity-50 capstone:[&_svg]:pointer-events-none capstone:[&_svg]:shrink-0 capstone:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "capstone:text-muted-foreground capstone:ml-auto capstone:text-xs capstone:tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
