import { Brain, MemoryStick, PawPrint } from "lucide-react";
import { SectionCardWrapper } from "./SectionCardWrapper";
import { SkillSectionCardItemWrapper } from "./SkillSectionCardItemWrapper";
import { SkillModal } from "./SkillModal";

interface SkillSectionCardProps {
  className?: string;
}

export const SkillSectionCard = ({ className }: SkillSectionCardProps) => {
  return (
    <SectionCardWrapper title="Skills" className={className}>
      <SkillSectionCardItemWrapper icon={MemoryStick} type="Normal Attack" name="Logic Synthesis">
        <div className="text-xs text-muted-foreground mt-0.5">Unleash up to 4 consecutive strikes using known
          <span>&nbsp;</span>
          <SkillModal>
            <span className="text-primary italic">Computing Skills</span>
          </SkillModal>
          <span>&nbsp;</span>
          to solve real-world problems, dealing Electro DMG.
        </div>
      </SkillSectionCardItemWrapper>
      <SkillSectionCardItemWrapper icon={PawPrint} type="Advanced Skill" name="Binary Hunt">
        <div className="text-xs text-muted-foreground mt-0.5">Call upon his Cyber Wolf Companion to execute a synchronized pincer attack. On hit, the companion applies 'Binary Scent' to targets, granting Marcus a 20% Movement Speed buff while dealing AoE Electro DMG based on 140% of Focus.</div>
      </SkillSectionCardItemWrapper>
      <SkillSectionCardItemWrapper icon={Brain} type="Ultimate Skill" name="Neural Link: Knowledge Transfer">
        <div className="text-xs text-muted-foreground mt-0.5">Synchronizes the neural networks of all nearby party members. Shares programming knowledge to increase ATK, CRIT Rate by 15%, and CRIT DMG by 30% for 30mins.</div>
      </SkillSectionCardItemWrapper>
    </SectionCardWrapper>
  );
};
