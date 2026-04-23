import { SectionCardWrapper } from "./SectionCardWrapper";
import { PassiveTraitSectionCardItem } from "./PassiveTraitSectionCardItem";
import { passiveAbilities } from "../_data/trait";

interface PassiveTraitSectionCardProps {
  className?: string;
}

export const PassiveTraitSectionCard = ({ className }: PassiveTraitSectionCardProps) => {
  return (
    <SectionCardWrapper title="Passive Traits" className={className}>
      {passiveAbilities.map((ability) => (
        <PassiveTraitSectionCardItem key={ability.name} {...ability} />
      ))}
    </SectionCardWrapper>
  );
};
