"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "@/app/_utilities/classname";
import { ProgressTrack } from "./ProgressTrack";
import { ProgressIndicator } from "./ProgressIndicator";

type ProgressProps = ProgressPrimitive.Root.Props;

export const Progress = ({
  className,
  children,
  value,
  ...props
}: ProgressProps) => {
  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      className={cn("flex flex-wrap gap-3", className)}
      {...props}
    >
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  );
};
