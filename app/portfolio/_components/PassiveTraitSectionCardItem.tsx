import { PassiveTrait } from "../_lib/types";

type PassiveTraitSectionCardItemProps = PassiveTrait;

export const PassiveTraitSectionCardItem = ({ icon: Icon, name, description, effect }: PassiveTraitSectionCardItemProps) => {
  return (
    <div className="flex gap-3">
      <div className="mt-1"><Icon className="w-4 h-4 text-primary" /></div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold text-foreground uppercase tracking-tight">{name}</span>
          <span className="text-xs font-bold text-primary bg-primary/10 px-1 rounded whitespace-nowrap">{effect}</span>
        </div>
        <p className="text-xs text-muted-secondary-foreground mt-0.5">{description}</p>
      </div>
    </div>
  );
};
