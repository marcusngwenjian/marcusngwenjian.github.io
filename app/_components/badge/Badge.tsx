import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/_utilities/classname';
import { badgeVariant } from './lib/constants';
import { badgeVariants } from './lib/variants';

type BadgeProps = useRender.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants>;

export const Badge = ({
  variant = badgeVariant.default,
  render,
  className,
  ...props
}: BadgeProps) => {
  return useRender({
    defaultTagName: 'span',
    props: mergeProps<'span'>(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props,
    ),
    render,
    state: {
      slot: 'badge',
      variant,
    },
  });
};
