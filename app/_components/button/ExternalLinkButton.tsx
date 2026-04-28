import type { ComponentProps } from 'react';
import { cn } from '@/app/_utilities/classname';
import type { ButtonSize, ButtonVariant } from './lib/types';
import { buttonVariants } from './lib/variants';

type ExternalLinkButtonProps = ComponentProps<'a'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const ExternalLinkButton = ({
  href,
  children,
  className,
  variant,
  size,
  ...props
}: ExternalLinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </a>
  );
};
