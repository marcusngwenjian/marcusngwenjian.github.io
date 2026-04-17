import { ComponentProps } from "react"
import { cn } from "@/app/_utilities/classname"

type CardActionProps = ComponentProps<"div">;

export const CardAction = ({
  className,
  ...props
}: CardActionProps) => {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}
