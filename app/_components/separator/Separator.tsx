"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { cn } from "@/app/_utilities/classname";

type SeparatorProps = SeparatorPrimitive.Props;

export const Separator = ({
  orientation = "horizontal",
  className,
  ...props
}: SeparatorProps) => {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  );
};
