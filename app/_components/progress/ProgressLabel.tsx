'use client';

import { Progress as ProgressPrimitive } from '@base-ui/react/progress';
import { cn } from '@/app/_utilities/classname';

type ProgressLabelProps = ProgressPrimitive.Label.Props;

export const ProgressLabel = ({ className, ...props }: ProgressLabelProps) => {
  return (
    <ProgressPrimitive.Label
      className={cn('text-sm font-medium', className)}
      data-slot="progress-label"
      {...props}
    />
  );
};
