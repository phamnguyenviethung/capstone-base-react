import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("capstone:bg-accent capstone:animate-pulse capstone:rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
