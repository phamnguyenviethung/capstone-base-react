import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "capstone:inline-flex capstone:items-center capstone:justify-center capstone:gap-2 capstone:rounded-md capstone:text-sm capstone:font-medium capstone:hover:bg-muted capstone:hover:text-muted-foreground capstone:disabled:pointer-events-none capstone:disabled:opacity-50 capstone:data-[state=on]:bg-accent capstone:data-[state=on]:text-accent-foreground capstone:[&_svg]:pointer-events-none capstone:[&_svg:not([class*=size-])]:size-4 capstone:[&_svg]:shrink-0 capstone:focus-visible:border-ring capstone:focus-visible:ring-ring/50 capstone:focus-visible:ring-[3px] capstone:outline-none capstone:transition-[color,box-shadow] capstone:aria-invalid:ring-destructive/20 capstone:dark:aria-invalid:ring-destructive/40 capstone:aria-invalid:border-destructive capstone:whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "capstone:bg-transparent",
        outline:
          "capstone:border capstone:border-input capstone:bg-transparent capstone:shadow-xs capstone:hover:bg-accent capstone:hover:text-accent-foreground",
      },
      size: {
        default: "capstone:h-9 capstone:px-2 capstone:min-w-9",
        sm: "capstone:h-8 capstone:px-1.5 capstone:min-w-8",
        lg: "capstone:h-10 capstone:px-2.5 capstone:min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
