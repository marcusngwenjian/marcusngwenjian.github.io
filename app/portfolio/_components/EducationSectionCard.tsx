import { SectionCardWrapper } from "./SectionCardWrapper";
import { EducationSectionCardItem } from "./EducationSectionCardItem";
import { qualifications } from "../_data/education";

export const EducationSectionCard = () => {
  return (
    <SectionCardWrapper title="Academy">
      {qualifications.map((qualification) => (
        <EducationSectionCardItem key={qualification.institution} {...qualification} />
      ))}
    </SectionCardWrapper>
  );
};
