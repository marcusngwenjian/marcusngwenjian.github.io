"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "@/app/_utilities/classname";

type ProgressValueProps = ProgressPrimitive.Value.Props;

export const ProgressValue = ({ className, ...props }: ProgressValueProps) => {
  return (
    <ProgressPrimitive.Value
      className={cn(
        "ml-auto text-sm text-muted-foreground tabular-nums",
        className
      )}
      data-slot="progress-value"
      {...props}
    />
  );
};
