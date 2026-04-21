import { Brain, MemoryStick, PawPrint } from "lucide-react";
import { SectionCardWrapper } from "./SectionCardWrapper";
import { SkillSectionCardItemWrapper } from "./SkillSectionCardItemWrapper";

interface SkillSectionCardProps {
  className?: string;
}

export const SkillSectionCard = ({ className }: SkillSectionCardProps) => {
  return (
    <SectionCardWrapper title="Skills" className={className}>
      <SkillSectionCardItemWrapper icon={MemoryStick} type="Normal Attack" name="Resonance: Logic Synthesis">
        <p className="text-xs text-muted-foreground mt-0.5">Unleash up to 4 consecutive strikes using known Computing Skills to solve real-world problems, dealing Electro DMG.</p>
      </SkillSectionCardItemWrapper>
      <SkillSectionCardItemWrapper icon={PawPrint} type="Advanced Skill" name="Cyber-Alpha: Binary Hunt">
        <p className="text-xs text-muted-foreground mt-0.5">Call upon his Cyber Wolf Companion to execute a synchronized pincer attack. On hit, the companion applies 'Binary Scent' to targets, granting Marcus a 20% Movement Speed buff while dealing AoE Electro DMG based on 140% of Focus.</p>
      </SkillSectionCardItemWrapper>
      <SkillSectionCardItemWrapper icon={Brain} type="Ultimate Skill" name="Neural Link: Knowledge Transfer">
        <p className="text-xs text-muted-foreground mt-0.5">Synchronizes the neural networks of all nearby party members. Shares programming knowledge to increase ATK, CRIT Rate by 15%, and CRIT DMG by 30% for 30mins. During this state, Marcus enters 'Senior Dev' mode.</p>
      </SkillSectionCardItemWrapper>
    </SectionCardWrapper>
  );
};
