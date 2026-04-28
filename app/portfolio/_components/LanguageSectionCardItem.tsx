import { Progress } from '@/app/_components/progress';
import type { Language } from '../_lib/types';

type LanguageSectionCardItemProps = Language;

export const LanguageSectionCardItem = ({
  name,
  proficiency,
  level,
}: LanguageSectionCardItemProps) => {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="text-foreground">{name}</span>
        <span className="text-primary">Lv. {level}</span>
      </div>
      <Progress value={proficiency} className="h-1" />
    </div>
  );
};
