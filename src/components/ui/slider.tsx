"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "capstone:relative capstone:flex capstone:w-full capstone:touch-none capstone:items-center capstone:select-none capstone:data-[disabled]:opacity-50 capstone:data-[orientation=vertical]:h-full capstone:data-[orientation=vertical]:min-h-44 capstone:data-[orientation=vertical]:w-auto capstone:data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "capstone:bg-muted capstone:relative capstone:grow capstone:overflow-hidden capstone:rounded-full capstone:data-[orientation=horizontal]:h-1.5 capstone:data-[orientation=horizontal]:w-full capstone:data-[orientation=vertical]:h-full capstone:data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "capstone:bg-primary capstone:absolute capstone:data-[orientation=horizontal]:h-full capstone:data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="capstone:border-primary capstone:bg-background capstone:ring-ring/50 capstone:block capstone:size-4 capstone:shrink-0 capstone:rounded-full capstone:border capstone:shadow-sm capstone:transition-[color,box-shadow] capstone:hover:ring-4 capstone:focus-visible:ring-4 capstone:focus-visible:outline-hidden capstone:disabled:pointer-events-none capstone:disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
