import type { ComponentProps } from 'react';
import { cn } from '@/app/_utilities/classname';

type CardDescriptionProps = ComponentProps<'div'>;

export const CardDescription = ({
  className,
  ...props
}: CardDescriptionProps) => {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
};
