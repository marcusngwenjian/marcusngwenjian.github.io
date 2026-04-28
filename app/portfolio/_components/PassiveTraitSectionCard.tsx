import { passiveAbilities } from '../_data/trait';
import { PassiveTraitSectionCardItem } from './PassiveTraitSectionCardItem';
import { SectionCardWrapper } from './SectionCardWrapper';

interface PassiveTraitSectionCardProps {
  className?: string;
}

export const PassiveTraitSectionCard = ({
  className,
}: PassiveTraitSectionCardProps) => {
  return (
    <SectionCardWrapper title="Passive Traits" className={className}>
      {passiveAbilities.map((ability) => (
        <PassiveTraitSectionCardItem key={ability.name} {...ability} />
      ))}
    </SectionCardWrapper>
  );
};
