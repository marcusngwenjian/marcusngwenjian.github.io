import type { ComponentProps } from 'react';
import { XIcon } from 'lucide-react';
import { cn } from '@/app/_utilities/classname';
import { useDialogContext } from './lib/hooks';

type DialogHeaderProps = ComponentProps<'div'> & {
  hideCloseIcon?: boolean;
  hideDivider?: boolean;
};

export const DialogHeader = ({
  children,
  hideCloseIcon = false,
  hideDivider = false,
  className,
  ...props
}: DialogHeaderProps) => {
  const { closeDialog } = useDialogContext();

  return (
    <div
      className={cn(
        'flex items-center justify-between px-6 pt-6',
        !hideDivider && 'border-muted border-b p-6',
        className,
      )}
      {...props}
    >
      {children}
      {!hideCloseIcon && (
        <button
          className="ml-auto rounded-full p-1 opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
          onClick={closeDialog}
        >
          <span className="sr-only">Close</span>
          <XIcon className="size-5 cursor-pointer" />
        </button>
      )}
    </div>
  );
};
