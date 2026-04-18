import { SectionCardWrapper } from "./SectionCardWrapper";
import { LanguageSectionCardItem } from "./LanguageSectionCardItem";
import { languages } from "../_data/language";

export const LanguageSectionCard = () => {
  return (
    <SectionCardWrapper title="Languages">
      {languages.map((language) => (
        <LanguageSectionCardItem key={language.name} {...language} />
      ))}
    </SectionCardWrapper>
  );
};
