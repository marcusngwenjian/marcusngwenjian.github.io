import { ComponentProps } from "react";
import { cn } from "@/app/_utilities/classname";

type CardFooterProps = ComponentProps<"div">;

export const CardFooter = ({
  className,
  ...props
}: CardFooterProps) => {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4",
        className
      )}
      {...props}
    />
  );
};
