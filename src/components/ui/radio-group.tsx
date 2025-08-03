"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("capstone:grid capstone:gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "capstone:border-input capstone:text-primary capstone:focus-visible:border-ring capstone:focus-visible:ring-ring/50 capstone:aria-invalid:ring-destructive/20 capstone:dark:aria-invalid:ring-destructive/40 capstone:aria-invalid:border-destructive capstone:dark:bg-input/30 capstone:aspect-square capstone:size-4 capstone:shrink-0 capstone:rounded-full capstone:border capstone:shadow-xs capstone:transition-[color,box-shadow] capstone:outline-none capstone:focus-visible:ring-[3px] capstone:disabled:cursor-not-allowed capstone:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="capstone:relative capstone:flex capstone:items-center capstone:justify-center"
      >
        <CircleIcon className="capstone:fill-primary capstone:absolute capstone:top-1/2 capstone:left-1/2 capstone:size-2 capstone:-translate-x-1/2 capstone:-translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
