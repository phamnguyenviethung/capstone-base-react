"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("capstone:disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("capstone:flex capstone:items-center", className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "capstone:data-[active=true]:border-ring capstone:data-[active=true]:ring-ring/50 capstone:data-[active=true]:aria-invalid:ring-destructive/20 capstone:dark:data-[active=true]:aria-invalid:ring-destructive/40 capstone:aria-invalid:border-destructive capstone:data-[active=true]:aria-invalid:border-destructive capstone:dark:bg-input/30 capstone:border-input capstone:relative capstone:flex capstone:h-9 capstone:w-9 capstone:items-center capstone:justify-center capstone:border-y capstone:border-r capstone:text-sm capstone:shadow-xs capstone:transition-all capstone:outline-none capstone:first:rounded-l-md capstone:first:border-l capstone:last:rounded-r-md capstone:data-[active=true]:z-10 capstone:data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="capstone:pointer-events-none capstone:absolute capstone:inset-0 capstone:flex capstone:items-center capstone:justify-center">
          <div className="capstone:animate-caret-blink capstone:bg-foreground capstone:h-4 capstone:w-px capstone:duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
