import { ComponentProps } from "react";
import { cn } from "@/app/_utilities/classname";

type CardContentProps = ComponentProps<"div">;

export const CardContent = ({
  className,
  ...props
}: CardContentProps) => {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 group-data-[size=sm]/card:px-4", className)}
      {...props}
    />
  );
};
