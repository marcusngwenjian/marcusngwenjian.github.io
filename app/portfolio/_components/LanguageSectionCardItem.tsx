import { Progress } from "@/app/_components/progress";
import { Language } from "../_lib/types";

type LanguageSectionCardItemProps = Language;

export const LanguageSectionCardItem = ({
  name,
  proficiency,
  level,
}: LanguageSectionCardItemProps) => {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-foreground">{name}</span>
        <span className="text-primary">Lv. {level}</span>
      </div>
      <Progress value={proficiency} className="h-1" />
    </div>
  );
};
