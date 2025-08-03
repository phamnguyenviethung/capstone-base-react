import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "capstone:inline-flex capstone:items-center capstone:justify-center capstone:gap-2 capstone:whitespace-nowrap capstone:rounded-md capstone:text-sm capstone:font-medium capstone:transition-all capstone:disabled:pointer-events-none capstone:disabled:opacity-50 capstone:[&_svg]:pointer-events-none capstone:[&_svg:not([class*=size-])]:size-4 capstone:shrink-0 capstone:[&_svg]:shrink-0 capstone:outline-none capstone:focus-visible:border-ring capstone:focus-visible:ring-ring/50 capstone:focus-visible:ring-[3px] capstone:aria-invalid:ring-destructive/20 capstone:dark:aria-invalid:ring-destructive/40 capstone:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "capstone:bg-primary capstone:text-primary-foreground capstone:shadow-xs capstone:hover:bg-primary/90",
        destructive:
          "capstone:bg-destructive capstone:text-white capstone:shadow-xs capstone:hover:bg-destructive/90 capstone:focus-visible:ring-destructive/20 capstone:dark:focus-visible:ring-destructive/40 capstone:dark:bg-destructive/60",
        outline:
          "capstone:border capstone:bg-background capstone:shadow-xs capstone:hover:bg-accent capstone:hover:text-accent-foreground capstone:dark:bg-input/30 capstone:dark:border-input capstone:dark:hover:bg-input/50",
        secondary:
          "capstone:bg-secondary capstone:text-secondary-foreground capstone:shadow-xs capstone:hover:bg-secondary/80",
        ghost:
          "capstone:hover:bg-accent capstone:hover:text-accent-foreground capstone:dark:hover:bg-accent/50",
        link: "capstone:text-primary capstone:underline-offset-4 capstone:hover:underline",
      },
      size: {
        default: "capstone:h-9 capstone:px-4 capstone:py-2 capstone:has-[>svg]:px-3",
        sm: "capstone:h-8 capstone:rounded-md capstone:gap-1.5 capstone:px-3 capstone:has-[>svg]:px-2.5",
        lg: "capstone:h-10 capstone:rounded-md capstone:px-6 capstone:has-[>svg]:px-4",
        icon: "capstone:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
