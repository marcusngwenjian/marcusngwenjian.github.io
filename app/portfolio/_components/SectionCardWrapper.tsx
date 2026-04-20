import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/card";
import { cn } from "@/app/_utilities/classname";

interface SectionCardWrapperProps {
  className?: string;
  children: ReactNode;
  title: string;
}

export const SectionCardWrapper = ({
  className,
  children,
  title,
}: SectionCardWrapperProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
      </CardContent>
    </Card>
  );
};
