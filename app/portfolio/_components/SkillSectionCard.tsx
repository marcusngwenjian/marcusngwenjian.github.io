import { Badge, badgeVariant } from "@/app/_components/badge";
import { SectionCardWrapper } from "./SectionCardWrapper";
import { skills } from "../_data/skill";

export const SkillSectionCard = () => {
  return (
    <SectionCardWrapper title="Skills">
      <div className="flex flex-wrap gap-2 pt-2">
        {skills.map(skill => (
          <Badge key={skill} variant={badgeVariant.secondary}>
            {skill}
          </Badge>
        ))}
      </div>
    </SectionCardWrapper>
  );
};
