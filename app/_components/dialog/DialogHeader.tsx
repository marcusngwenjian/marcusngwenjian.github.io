import { ComponentProps } from "react";
import { XIcon } from "lucide-react";
import { cn } from "@/app/_utilities/classname";
import { useDialogContext } from "./lib/hooks";

type DialogHeaderProps = ComponentProps<"div"> & {
  hideCloseIcon?: boolean;
  hideDivider?: boolean;
};

export const DialogHeader = ({
  children,
  className,
  hideCloseIcon = false,
  hideDivider = false,
}: DialogHeaderProps) => {
  const { closeDialog } = useDialogContext();

  return (
    <div className={cn("flex justify-between items-center pt-6 px-6", !hideDivider && "border-b border-muted p-6", className)}>
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
