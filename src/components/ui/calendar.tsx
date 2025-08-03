import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "capstone:bg-background capstone:group/calendar capstone:p-3 capstone:[--cell-size:--spacing(8)] capstone:[[data-slot=card-content]_&]:bg-transparent capstone:[[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("capstone:w-fit", defaultClassNames.root),
        months: cn(
          "capstone:flex capstone:gap-4 capstone:flex-col capstone:md:flex-row capstone:relative",
          defaultClassNames.months
        ),
        month: cn("capstone:flex capstone:flex-col capstone:w-full capstone:gap-4", defaultClassNames.month),
        nav: cn(
          "capstone:flex capstone:items-center capstone:gap-1 capstone:w-full capstone:absolute capstone:top-0 capstone:inset-x-0 capstone:justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "capstone:size-(--cell-size) capstone:aria-disabled:opacity-50 capstone:p-0 capstone:select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "capstone:size-(--cell-size) capstone:aria-disabled:opacity-50 capstone:p-0 capstone:select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "capstone:flex capstone:items-center capstone:justify-center capstone:h-(--cell-size) capstone:w-full capstone:px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "capstone:w-full capstone:flex capstone:items-center capstone:text-sm capstone:font-medium capstone:justify-center capstone:h-(--cell-size) capstone:gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "capstone:relative capstone:has-focus:border-ring capstone:border capstone:border-input capstone:shadow-xs capstone:has-focus:ring-ring/50 capstone:has-focus:ring-[3px] capstone:rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "capstone:absolute capstone:bg-popover capstone:inset-0 capstone:opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "capstone:select-none capstone:font-medium",
          captionLayout === "label"
            ? "capstone:text-sm"
            : "capstone:rounded-md capstone:pl-2 capstone:pr-1 capstone:flex capstone:items-center capstone:gap-1 capstone:text-sm capstone:h-8 capstone:[&>svg]:text-muted-foreground capstone:[&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "capstone:w-full capstone:border-collapse",
        weekdays: cn("capstone:flex", defaultClassNames.weekdays),
        weekday: cn(
          "capstone:text-muted-foreground capstone:rounded-md capstone:flex-1 capstone:font-normal capstone:text-[0.8rem] capstone:select-none",
          defaultClassNames.weekday
        ),
        week: cn("capstone:flex capstone:w-full capstone:mt-2", defaultClassNames.week),
        week_number_header: cn(
          "capstone:select-none capstone:w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "capstone:text-[0.8rem] capstone:select-none capstone:text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "capstone:relative capstone:w-full capstone:h-full capstone:p-0 capstone:text-center capstone:[&:first-child[data-selected=true]_button]:rounded-l-md capstone:[&:last-child[data-selected=true]_button]:rounded-r-md capstone:group/day capstone:aspect-square capstone:select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "capstone:rounded-l-md capstone:bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("capstone:rounded-none", defaultClassNames.range_middle),
        range_end: cn("capstone:rounded-r-md capstone:bg-accent", defaultClassNames.range_end),
        today: cn(
          "capstone:bg-accent capstone:text-accent-foreground capstone:rounded-md capstone:data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "capstone:text-muted-foreground capstone:aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "capstone:text-muted-foreground capstone:opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("capstone:invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("capstone:size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("capstone:size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("capstone:size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="capstone:flex capstone:size-(--cell-size) capstone:items-center capstone:justify-center capstone:text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "capstone:data-[selected-single=true]:bg-primary capstone:data-[selected-single=true]:text-primary-foreground capstone:data-[range-middle=true]:bg-accent capstone:data-[range-middle=true]:text-accent-foreground capstone:data-[range-start=true]:bg-primary capstone:data-[range-start=true]:text-primary-foreground capstone:data-[range-end=true]:bg-primary capstone:data-[range-end=true]:text-primary-foreground capstone:group-data-[focused=true]/day:border-ring capstone:group-data-[focused=true]/day:ring-ring/50 capstone:dark:hover:text-accent-foreground capstone:flex capstone:aspect-square capstone:size-auto capstone:w-full capstone:min-w-(--cell-size) capstone:flex-col capstone:gap-1 capstone:leading-none capstone:font-normal capstone:group-data-[focused=true]/day:relative capstone:group-data-[focused=true]/day:z-10 capstone:group-data-[focused=true]/day:ring-[3px] capstone:data-[range-end=true]:rounded-md capstone:data-[range-end=true]:rounded-r-md capstone:data-[range-middle=true]:rounded-none capstone:data-[range-start=true]:rounded-md capstone:data-[range-start=true]:rounded-l-md capstone:[&>span]:text-xs capstone:[&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
