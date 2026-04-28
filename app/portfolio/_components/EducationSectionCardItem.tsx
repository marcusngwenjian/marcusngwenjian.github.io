import type { EducationQualification } from '../_lib/types';

type EducationSectionCardItemProps = EducationQualification;

export const EducationSectionCardItem = ({
  icon: Icon,
  institution,
  qualification,
}: EducationSectionCardItemProps) => {
  return (
    <div className="flex gap-3">
      <div className="mt-1">
        <Icon className="text-primary h-4 w-4" />
      </div>
      <div>
        <p className="text-foreground text-sm font-medium">{institution}</p>
        <p className="text-muted-secondary-foreground text-xs">
          {qualification}
        </p>
      </div>
    </div>
  );
};
