import type { ComponentProps } from 'react';
import { cn } from '@/app/_utilities/classname';

type DialogBodyProps = ComponentProps<'div'>;

export const DialogBody = ({
  children,
  className,
  ...props
}: DialogBodyProps) => {
  return (
    <div data-slot="dialog-body" className={cn('p-6', className)} {...props}>
      {children}
    </div>
  );
};
