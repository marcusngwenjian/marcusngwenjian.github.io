import { SectionCardWrapper } from "./SectionCardWrapper";
import { CertificationSectionCardItem } from "./CertificationSectionCardItem";
import { certifications } from "../_data/certification";

export const CertificationSectionCard = () => {
  return (
    <SectionCardWrapper title="Achievements">
      {certifications.map((certification) => (
        <CertificationSectionCardItem key={certification.name} {...certification} />
      ))}
    </SectionCardWrapper>
  );
};
