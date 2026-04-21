
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

type SkillSectionCardItemWrapperProps = {
  icon: LucideIcon;
  type: string;
  name: string;
  children: ReactNode;
};

export const SkillSectionCardItemWrapper = ({ icon: Icon, type, name, children }: SkillSectionCardItemWrapperProps) => {
  return (
    <div className="flex gap-3">
      <div className="mt-1"><Icon className="w-4 h-4 text-primary" /></div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold text-foreground uppercase tracking-tight">{name}</span>
          <span className="text-xs font-bold text-muted-secondary-foreground bg-primary/10 px-1 rounded whitespace-nowrap">{type}</span>
        </div>
        {/* <p className="text-xs text-muted-foreground mt-0.5">{children}</p> */}
        {children}
      </div>
    </div>
  );
};
