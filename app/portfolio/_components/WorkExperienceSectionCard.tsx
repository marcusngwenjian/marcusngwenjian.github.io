import { SectionCardWrapper } from "./SectionCardWrapper";
import { WorkExperienceSectionCardItem } from "./WorkExperienceSectionCardItem";
import { workExperiences } from "../_data/job";

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
