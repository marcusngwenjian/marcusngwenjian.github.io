import { qualifications } from '../_data/education';
import { EducationSectionCardItem } from './EducationSectionCardItem';
import { SectionCardWrapper } from './SectionCardWrapper';

export const EducationSectionCard = () => {
  return (
    <SectionCardWrapper title="Academy">
      {qualifications.map((qualification) => (
        <EducationSectionCardItem
          key={qualification.institution}
          {...qualification}
        />
      ))}
    </SectionCardWrapper>
  );
};
