'use client';

import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLProps,
  type MouseEvent,
  type ReactElement,
} from 'react';
import { useDialogContext } from './lib/hooks';

interface DialogTriggerProps {
  children: ReactElement<HTMLProps<HTMLElement>>;
}

export const DialogTrigger = ({ children }: DialogTriggerProps) => {
  const { openDialog } = useDialogContext();

  // Basic check for a single child
  if (Children.count(children) !== 1 || !isValidElement(children)) {
    return null;
  }

  return cloneElement(children, {
    // Inject the combined onClick logic
    onClick: (e: MouseEvent<HTMLElement>) => {
      openDialog();

      // If the original child had its own onClick, call that too (for chaining)
      if (typeof children.props.onClick === 'function') {
        children.props.onClick(e);
      }
    },

    'aria-haspopup': 'dialog',
  });
};
