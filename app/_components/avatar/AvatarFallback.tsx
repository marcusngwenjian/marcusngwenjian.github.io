'use client';

import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';
import { cn } from '@/app/_utilities/classname';

type AvatarFallbackProps = AvatarPrimitive.Fallback.Props;

export const AvatarFallback = ({
  className,
  ...props
}: AvatarFallbackProps) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'bg-muted text-muted-foreground flex size-full items-center justify-center rounded-full text-sm group-data-[size=sm]/avatar:text-xs',
        className,
      )}
      {...props}
    />
  );
};
