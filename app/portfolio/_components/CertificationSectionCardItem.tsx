import { Award } from "lucide-react";
import { Certification } from "../_lib/types";

type CertificationSectionCardItemProps = Certification;

export const CertificationSectionCardItem = ({
  name,
  company,
  year,
}: CertificationSectionCardItemProps) => {
  return (
    <div className="flex gap-3">
      <div className="mt-1"><Award className="w-4 h-4 text-primary" /></div>
      <div>
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="text-xs text-muted-secondary-foreground">{company} • {year}</p>
      </div>
    </div>
  );
};
