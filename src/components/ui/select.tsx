import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "capstone:border-input capstone:data-[placeholder]:text-muted-foreground capstone:[&_svg:not([class*=text-])]:text-muted-foreground capstone:focus-visible:border-ring capstone:focus-visible:ring-ring/50 capstone:aria-invalid:ring-destructive/20 capstone:dark:aria-invalid:ring-destructive/40 capstone:aria-invalid:border-destructive capstone:dark:bg-input/30 capstone:dark:hover:bg-input/50 capstone:flex capstone:w-fit capstone:items-center capstone:justify-between capstone:gap-2 capstone:rounded-md capstone:border capstone:bg-transparent capstone:px-3 capstone:py-2 capstone:text-sm capstone:whitespace-nowrap capstone:shadow-xs capstone:transition-[color,box-shadow] capstone:outline-none capstone:focus-visible:ring-[3px] capstone:disabled:cursor-not-allowed capstone:disabled:opacity-50 capstone:data-[size=default]:h-9 capstone:data-[size=sm]:h-8 capstone:*:data-[slot=select-value]:line-clamp-1 capstone:*:data-[slot=select-value]:flex capstone:*:data-[slot=select-value]:items-center capstone:*:data-[slot=select-value]:gap-2 capstone:[&_svg]:pointer-events-none capstone:[&_svg]:shrink-0 capstone:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="capstone:size-4 capstone:opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "capstone:bg-popover capstone:text-popover-foreground capstone:data-[state=open]:animate-in capstone:data-[state=closed]:animate-out capstone:data-[state=closed]:fade-out-0 capstone:data-[state=open]:fade-in-0 capstone:data-[state=closed]:zoom-out-95 capstone:data-[state=open]:zoom-in-95 capstone:data-[side=bottom]:slide-in-from-top-2 capstone:data-[side=left]:slide-in-from-right-2 capstone:data-[side=right]:slide-in-from-left-2 capstone:data-[side=top]:slide-in-from-bottom-2 capstone:relative capstone:z-50 capstone:max-h-(--radix-select-content-available-height) capstone:min-w-[8rem] capstone:origin-(--radix-select-content-transform-origin) capstone:overflow-x-hidden capstone:overflow-y-auto capstone:rounded-md capstone:border capstone:shadow-md",
          position === "popper" &&
            "capstone:data-[side=bottom]:translate-y-1 capstone:data-[side=left]:-translate-x-1 capstone:data-[side=right]:translate-x-1 capstone:data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "capstone:p-1",
            position === "popper" &&
              "capstone:h-[var(--radix-select-trigger-height)] capstone:w-full capstone:min-w-[var(--radix-select-trigger-width)] capstone:scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("capstone:text-muted-foreground capstone:px-2 capstone:py-1.5 capstone:text-xs", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "capstone:focus:bg-accent capstone:focus:text-accent-foreground capstone:[&_svg:not([class*=text-])]:text-muted-foreground capstone:relative capstone:flex capstone:w-full capstone:cursor-default capstone:items-center capstone:gap-2 capstone:rounded-sm capstone:py-1.5 capstone:pr-8 capstone:pl-2 capstone:text-sm capstone:outline-hidden capstone:select-none capstone:data-[disabled]:pointer-events-none capstone:data-[disabled]:opacity-50 capstone:[&_svg]:pointer-events-none capstone:[&_svg]:shrink-0 capstone:[&_svg:not([class*=size-])]:size-4 capstone:*:[span]:last:flex capstone:*:[span]:last:items-center capstone:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="capstone:absolute capstone:right-2 capstone:flex capstone:size-3.5 capstone:items-center capstone:justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="capstone:size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("capstone:bg-border capstone:pointer-events-none capstone:-mx-1 capstone:my-1 capstone:h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "capstone:flex capstone:cursor-default capstone:items-center capstone:justify-center capstone:py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="capstone:size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "capstone:flex capstone:cursor-default capstone:items-center capstone:justify-center capstone:py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="capstone:size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
