import { certifications } from '../_data/certification';
import { CertificationSectionCardItem } from './CertificationSectionCardItem';
import { SectionCardWrapper } from './SectionCardWrapper';

export const CertificationSectionCard = () => {
  return (
    <SectionCardWrapper title="Achievements">
      {certifications.map((certification) => (
        <CertificationSectionCardItem
          key={certification.name}
          {...certification}
        />
      ))}
    </SectionCardWrapper>
  );
};
