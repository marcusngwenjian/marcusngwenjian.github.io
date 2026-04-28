import { languages } from '../_data/language';
import { LanguageSectionCardItem } from './LanguageSectionCardItem';
import { SectionCardWrapper } from './SectionCardWrapper';

export const LanguageSectionCard = () => {
  return (
    <SectionCardWrapper title="Linguistic Mastery">
      {languages.map((language) => (
        <LanguageSectionCardItem key={language.name} {...language} />
      ))}
    </SectionCardWrapper>
  );
};
