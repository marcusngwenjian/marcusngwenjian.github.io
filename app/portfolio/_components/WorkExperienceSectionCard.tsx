import { workExperiences } from '../_data/job';
import { SectionCardWrapper } from './SectionCardWrapper';
import { WorkExperienceSectionCardItem } from './WorkExperienceSectionCardItem';

export const WorkExperienceSectionCard = () => {
  return (
    <SectionCardWrapper title="Job Advancement">
      <div>
        {workExperiences.map((job, i) => (
          <WorkExperienceSectionCardItem key={i} {...job} />
        ))}
      </div>
    </SectionCardWrapper>
  );
};
