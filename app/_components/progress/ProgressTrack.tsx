'use client';

import { Progress as ProgressPrimitive } from '@base-ui/react/progress';
import { cn } from '@/app/_utilities/classname';

type ProgressTrackProps = ProgressPrimitive.Track.Props;

export const ProgressTrack = ({ className, ...props }: ProgressTrackProps) => {
  return (
    <ProgressPrimitive.Track
      className={cn(
        'bg-muted relative flex h-1.5 w-full items-center overflow-x-hidden rounded-full',
        className,
      )}
      data-slot="progress-track"
      {...props}
    />
  );
};
