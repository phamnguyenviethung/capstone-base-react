"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("capstone:flex capstone:flex-col capstone:gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "capstone:bg-muted capstone:text-muted-foreground capstone:inline-flex capstone:h-9 capstone:w-fit capstone:items-center capstone:justify-center capstone:rounded-lg capstone:p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "capstone:data-[state=active]:bg-background capstone:dark:data-[state=active]:text-foreground capstone:focus-visible:border-ring capstone:focus-visible:ring-ring/50 capstone:focus-visible:outline-ring capstone:dark:data-[state=active]:border-input capstone:dark:data-[state=active]:bg-input/30 capstone:text-foreground capstone:dark:text-muted-foreground capstone:inline-flex capstone:h-[calc(100%-1px)] capstone:flex-1 capstone:items-center capstone:justify-center capstone:gap-1.5 capstone:rounded-md capstone:border capstone:border-transparent capstone:px-2 capstone:py-1 capstone:text-sm capstone:font-medium capstone:whitespace-nowrap capstone:transition-[color,box-shadow] capstone:focus-visible:ring-[3px] capstone:focus-visible:outline-1 capstone:disabled:pointer-events-none capstone:disabled:opacity-50 capstone:data-[state=active]:shadow-sm capstone:[&_svg]:pointer-events-none capstone:[&_svg]:shrink-0 capstone:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("capstone:flex-1 capstone:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
