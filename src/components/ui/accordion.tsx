import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("capstone:border-b capstone:last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="capstone:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "capstone:focus-visible:border-ring capstone:focus-visible:ring-ring/50 capstone:flex capstone:flex-1 capstone:items-start capstone:justify-between capstone:gap-4 capstone:rounded-md capstone:py-4 capstone:text-left capstone:text-sm capstone:font-medium capstone:transition-all capstone:outline-none capstone:hover:underline capstone:focus-visible:ring-[3px] capstone:disabled:pointer-events-none capstone:disabled:opacity-50 capstone:[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="capstone:text-muted-foreground capstone:pointer-events-none capstone:size-4 capstone:shrink-0 capstone:translate-y-0.5 capstone:transition-transform capstone:duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="capstone:data-[state=closed]:animate-accordion-up capstone:data-[state=open]:animate-accordion-down capstone:overflow-hidden capstone:text-sm"
      {...props}
    >
      <div className={cn("capstone:pt-0 capstone:pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
