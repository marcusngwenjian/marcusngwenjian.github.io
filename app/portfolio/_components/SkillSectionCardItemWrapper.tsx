import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

type SkillSectionCardItemWrapperProps = {
  children: ReactNode;
  icon: LucideIcon;
  type: string;
  name: string;
};

export const SkillSectionCardItemWrapper = ({
  children,
  icon: Icon,
  type,
  name,
}: SkillSectionCardItemWrapperProps) => {
  return (
    <div className="flex gap-3">
      <div className="mt-1">
        <Icon className="text-primary h-4 w-4" />
      </div>
      <div className="flex flex-1 flex-col">
        <span className="text-foreground text-xs font-bold tracking-tight uppercase">
          {name}
        </span>
        <span className="text-muted-foreground bg-primary/10 mt-0.5 w-fit rounded px-1 text-[10px] font-bold whitespace-nowrap">
          {type}
        </span>
        {children}
      </div>
    </div>
  );
};
