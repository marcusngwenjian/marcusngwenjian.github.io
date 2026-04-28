import type { ComponentProps } from 'react';
import { cn } from '@/app/_utilities/classname';

type AvatarGroupProps = ComponentProps<'div'>;

export const AvatarGroup = ({ className, ...props }: AvatarGroupProps) => {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        'group/avatar-group *:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2',
        className,
      )}
      {...props}
    />
  );
};
