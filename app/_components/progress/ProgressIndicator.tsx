'use client';

import { Progress as ProgressPrimitive } from '@base-ui/react/progress';
import { cn } from '@/app/_utilities/classname';

type ProgressIndicatorProps = ProgressPrimitive.Indicator.Props;

export const ProgressIndicator = ({
  className,
  ...props
}: ProgressIndicatorProps) => {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn('bg-primary h-full transition-all', className)}
      {...props}
    />
  );
};
