'use client';

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { cn } from '@/app/_utilities/classname';

type DialogDescriptionProps = DialogPrimitive.Description.Props;

export const DialogDescription = ({
  className,
  ...props
}: DialogDescriptionProps) => {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        'text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3',
        className,
      )}
      {...props}
    />
  );
};
