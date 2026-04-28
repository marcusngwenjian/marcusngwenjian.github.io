import type { ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/_components/card';

interface SectionCardWrapperProps {
  children: ReactNode;
  title: string;
  className?: string;
}

export const SectionCardWrapper = ({
  children,
  title,
  className,
}: SectionCardWrapperProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-foreground text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
};
