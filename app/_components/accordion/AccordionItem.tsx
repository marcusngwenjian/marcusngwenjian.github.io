import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "@/app/_utilities/classname";

type AccordionItemProps = AccordionPrimitive.Item.Props;

export const AccordionItem = ({ className, ...props }: AccordionItemProps) => {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("not-last:border-b", className)}
      {...props}
    />
  );
};
