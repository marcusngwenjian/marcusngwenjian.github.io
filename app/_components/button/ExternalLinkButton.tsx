import { ComponentProps } from "react";
import { cn } from "@/app/_utilities/classname";
import { buttonVariants } from "./lib/variants";
import { ButtonSize, ButtonVariant } from "./lib/types";

type ExternalLinkButtonProps = ComponentProps<"a"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const ExternalLinkButton = ({ href, children, className, variant, size, ...props }: ExternalLinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}>
      {children}
    </a>
  );
};
