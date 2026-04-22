"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { WorkExperience } from "../_lib/types";

type WorkExperienceSectionCardItemProps = WorkExperience;

export const WorkExperienceSectionCardItem = ({ role, company, date, achievements }: WorkExperienceSectionCardItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasManyAchievements = achievements.length >= 5;

  const initialAchievements = hasManyAchievements ? achievements.slice(0, 3) : achievements;
  const extraAchievements = hasManyAchievements ? achievements.slice(3) : [];

  return (
    <div className="relative pl-6 border-l border-border last:border-0 pb-6 last:pb-0">
      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,0,0.5)]" />
      <h4 className="text-base font-bold text-foreground">{role}</h4>
      <p className="text-sm text-primary mb-2">
        {company}
        <span className="text-muted-secondary-foreground ml-2">{date}</span>
      </p>
      {achievements.length === 1 ? (
        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
          {achievements[0]}
        </p>
      ) : (
        <>
          <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
            {initialAchievements.map((achievement, index) => (
              <li key={index} className="pl-1 leading-relaxed text-pretty">
                {achievement}
              </li>
            ))}
          </ul>

          <AnimatePresence initial={false}>
            {isExpanded && extraAchievements.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1 mt-1">
                  {extraAchievements.map((achievement, index) => (
                    <li key={index + 3} className="pl-1 leading-relaxed text-pretty">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {hasManyAchievements && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary/70 hover:text-primary transition-colors py-1 cursor-pointer group/btn"
            >
              {isExpanded ? (
                <>Collapse Data <ChevronUp className="w-3 h-3 group-hover/btn:-translate-y-0.5 transition-transform" /></>
              ) : (
                <>Decrypt Remaining Points ({achievements.length - 3} more) <ChevronDown className="w-3 h-3 group-hover/btn:translate-y-0.5 transition-transform" /></>
              )}
            </button>
          )}
        </>
      )}
    </div>
  );
};
