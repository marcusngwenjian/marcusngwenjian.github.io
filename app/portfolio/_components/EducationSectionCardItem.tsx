import { EducationQualification } from "../_lib/types";

type EducationSectionCardItemProps = EducationQualification;

export const EducationSectionCardItem = ({
  icon: Icon,
  institution,
  qualification,
}: EducationSectionCardItemProps) => {
  return (
    <div className="flex gap-3">
      <div className="mt-1"><Icon className="w-4 h-4 text-primary" /></div>
      <div>
        <p className="text-sm font-medium text-foreground">{institution}</p>
        <p className="text-xs text-muted-secondary-foreground">{qualification}</p>
      </div>
    </div>
  );
};
