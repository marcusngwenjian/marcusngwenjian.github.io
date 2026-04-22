import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "@/app/_utilities/classname";

type AccordionProps = AccordionPrimitive.Root.Props;

export const Accordion = ({ className, ...props }: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  );
};
