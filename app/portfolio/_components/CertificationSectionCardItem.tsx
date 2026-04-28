import { Award } from 'lucide-react';
import type { Certification } from '../_lib/types';

type CertificationSectionCardItemProps = Certification;

export const CertificationSectionCardItem = ({
  name,
  company,
  year,
}: CertificationSectionCardItemProps) => {
  return (
    <div className="flex gap-3">
      <div className="mt-1">
        <Award className="text-primary h-4 w-4" />
      </div>
      <div>
        <p className="text-foreground text-sm font-medium">{name}</p>
        <p className="text-muted-secondary-foreground text-xs">
          {company} • {year}
        </p>
      </div>
    </div>
  );
};
