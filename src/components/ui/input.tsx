import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "capstone:file:text-foreground capstone:placeholder:text-muted-foreground capstone:selection:bg-primary capstone:selection:text-primary-foreground capstone:dark:bg-input/30 capstone:border-input capstone:flex capstone:h-9 capstone:w-full capstone:min-w-0 capstone:rounded-md capstone:border capstone:bg-transparent capstone:px-3 capstone:py-1 capstone:text-base capstone:shadow-xs capstone:transition-[color,box-shadow] capstone:outline-none capstone:file:inline-flex capstone:file:h-7 capstone:file:border-0 capstone:file:bg-transparent capstone:file:text-sm capstone:file:font-medium capstone:disabled:pointer-events-none capstone:disabled:cursor-not-allowed capstone:disabled:opacity-50 capstone:md:text-sm",
        "capstone:focus-visible:border-ring capstone:focus-visible:ring-ring/50 capstone:focus-visible:ring-[3px]",
        "capstone:aria-invalid:ring-destructive/20 capstone:dark:aria-invalid:ring-destructive/40 capstone:aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
