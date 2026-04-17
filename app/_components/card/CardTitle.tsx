import { ComponentProps } from "react"
import { cn } from "@/app/_utilities/classname"

type CardTitleProps = ComponentProps<"div">;

export const CardTitle = ({
  className,
  ...props
}: CardTitleProps) => {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-normal font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}
