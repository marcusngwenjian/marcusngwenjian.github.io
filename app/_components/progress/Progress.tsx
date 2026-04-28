'use client';

import { Progress as ProgressPrimitive } from '@base-ui/react/progress';
import { cn } from '@/app/_utilities/classname';
import { ProgressIndicator } from './ProgressIndicator';
import { ProgressTrack } from './ProgressTrack';

type ProgressProps = ProgressPrimitive.Root.Props;

export const Progress = ({
  children,
  value,
  className,
  ...props
}: ProgressProps) => {
  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      className={cn('flex flex-wrap gap-3', className)}
      {...props}
    >
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  );
};
