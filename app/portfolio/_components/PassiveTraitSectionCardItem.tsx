import type { PassiveTrait } from '../_lib/types';

type PassiveTraitSectionCardItemProps = PassiveTrait;

export const PassiveTraitSectionCardItem = ({
  icon: Icon,
  name,
  description,
  effect,
}: PassiveTraitSectionCardItemProps) => {
  return (
    <div className="flex gap-3">
      <div className="mt-1">
        <Icon className="text-primary h-4 w-4" />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-2">
          <span className="text-foreground text-xs font-bold tracking-tight uppercase">
            {name}
          </span>
          <span className="text-primary bg-primary/10 rounded px-1 text-xs font-bold whitespace-nowrap">
            {effect}
          </span>
        </div>
        <p className="text-muted-secondary-foreground mt-0.5 text-xs">
          {description}
        </p>
      </div>
    </div>
  );
};
