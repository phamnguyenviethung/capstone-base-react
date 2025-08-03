import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "capstone:inline-flex capstone:items-center capstone:justify-center capstone:rounded-md capstone:border capstone:px-2 capstone:py-0.5 capstone:text-xs capstone:font-medium capstone:w-fit capstone:whitespace-nowrap capstone:shrink-0 capstone:[&>svg]:size-3 capstone:gap-1 capstone:[&>svg]:pointer-events-none capstone:focus-visible:border-ring capstone:focus-visible:ring-ring/50 capstone:focus-visible:ring-[3px] capstone:aria-invalid:ring-destructive/20 capstone:dark:aria-invalid:ring-destructive/40 capstone:aria-invalid:border-destructive capstone:transition-[color,box-shadow] capstone:overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "capstone:border-transparent capstone:bg-primary capstone:text-primary-foreground capstone:[a&]:hover:bg-primary/90",
        secondary:
          "capstone:border-transparent capstone:bg-secondary capstone:text-secondary-foreground capstone:[a&]:hover:bg-secondary/90",
        destructive:
          "capstone:border-transparent capstone:bg-destructive capstone:text-white capstone:[a&]:hover:bg-destructive/90 capstone:focus-visible:ring-destructive/20 capstone:dark:focus-visible:ring-destructive/40 capstone:dark:bg-destructive/60",
        outline:
          "capstone:text-foreground capstone:[a&]:hover:bg-accent capstone:[a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
