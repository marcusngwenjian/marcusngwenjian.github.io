import { WorkExperience } from "../_lib/types";

type WorkExperienceSectionCardItemProps = WorkExperience;

export const WorkExperienceSectionCardItem = ({ role, company, date, achievements }: WorkExperienceSectionCardItemProps) => {
  return (
    <div className="relative pl-6 border-l border-zinc-800 last:border-0 pb-6 last:pb-0">
      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,0,0.5)]" />
      <h4 className="text-base font-bold text-foreground">{role}</h4>
      <p className="text-sm text-primary mb-2">
        {company}
        <span className="text-muted-secondary-foreground ml-2">{date}</span>
      </p>
      {achievements.length === 1 ? (
        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
          {achievements[0]}
        </p>
      ) : (
        <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index} className="pl-1 leading-relaxed text-pretty">
              {achievement}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
