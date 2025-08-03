import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "capstone:relative capstone:w-full capstone:rounded-lg capstone:border capstone:px-4 capstone:py-3 capstone:text-sm capstone:grid capstone:has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] capstone:grid-cols-[0_1fr] capstone:has-[>svg]:gap-x-3 capstone:gap-y-0.5 capstone:items-start capstone:[&>svg]:size-4 capstone:[&>svg]:translate-y-0.5 capstone:[&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "capstone:bg-card capstone:text-card-foreground",
        destructive:
          "capstone:text-destructive capstone:bg-card capstone:[&>svg]:text-current capstone:*:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "capstone:col-start-2 capstone:line-clamp-1 capstone:min-h-4 capstone:font-medium capstone:tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "capstone:text-muted-foreground capstone:col-start-2 capstone:grid capstone:justify-items-start capstone:gap-1 capstone:text-sm capstone:[&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
