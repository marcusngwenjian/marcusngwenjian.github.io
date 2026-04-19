"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "@/app/_utilities/classname";

type AvatarProps = AvatarPrimitive.Root.Props & {
  size?: "default" | "sm" | "lg";
};

export const Avatar = ({
  className,
  size = "default",
  ...props
}: AvatarProps) => {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none after:absolute after:inset-0 after:rounded-full after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  );
};
