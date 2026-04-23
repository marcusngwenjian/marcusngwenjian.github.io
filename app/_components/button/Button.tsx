import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/app/_utilities/classname";
import { buttonSize, buttonVariant } from "./lib/constants";
import { buttonVariants } from "./lib/variants";

type ButtonProps = ButtonPrimitive.Props & VariantProps<typeof buttonVariants>;

export const Button = ({
  variant = buttonVariant.default,
  size = buttonSize.default,
  className,
  ...props
}: ButtonProps) => {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
