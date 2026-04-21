"use client";

import { ComponentProps } from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { Button } from "@/app/_components/button";
import { cn } from "@/app/_utilities/classname";

type DialogFooterProps = ComponentProps<"div"> & {
  showCloseButton?: boolean;
};

export const DialogFooter = ({
  className,
  showCloseButton = false,
  children,
  ...props
}: DialogFooterProps) => {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button variant="outline" />}>
          Close
        </DialogPrimitive.Close>
      )}
    </div>
  );
};
