import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "capstone:border-input capstone:placeholder:text-muted-foreground capstone:focus-visible:border-ring capstone:focus-visible:ring-ring/50 capstone:aria-invalid:ring-destructive/20 capstone:dark:aria-invalid:ring-destructive/40 capstone:aria-invalid:border-destructive capstone:dark:bg-input/30 capstone:flex capstone:field-sizing-content capstone:min-h-16 capstone:w-full capstone:rounded-md capstone:border capstone:bg-transparent capstone:px-3 capstone:py-2 capstone:text-base capstone:shadow-xs capstone:transition-[color,box-shadow] capstone:outline-none capstone:focus-visible:ring-[3px] capstone:disabled:cursor-not-allowed capstone:disabled:opacity-50 capstone:md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
