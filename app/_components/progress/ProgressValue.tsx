'use client';

import { Progress as ProgressPrimitive } from '@base-ui/react/progress';
import { cn } from '@/app/_utilities/classname';

type ProgressValueProps = ProgressPrimitive.Value.Props;

export const ProgressValue = ({ className, ...props }: ProgressValueProps) => {
  return (
    <ProgressPrimitive.Value
      className={cn(
        'text-muted-foreground ml-auto text-sm tabular-nums',
        className,
      )}
      data-slot="progress-value"
      {...props}
    />
  );
};
