"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "@/app/_utilities/classname";

type AvatarImageProps = AvatarPrimitive.Image.Props;

export const AvatarImage = ({
  className,
  ...props
}: AvatarImageProps) => {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full rounded-full object-cover",
        className
      )}
      {...props}
    />
  );
};
