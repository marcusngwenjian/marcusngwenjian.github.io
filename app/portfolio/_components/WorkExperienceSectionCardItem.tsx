'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { WorkExperience } from '../_lib/types';

type WorkExperienceSectionCardItemProps = WorkExperience;

export const WorkExperienceSectionCardItem = ({
  role,
  company,
  date,
  achievements,
}: WorkExperienceSectionCardItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasManyAchievements = achievements.length >= 5;

  const initialAchievements = hasManyAchievements
    ? achievements.slice(0, 3)
    : achievements;
  const extraAchievements = hasManyAchievements ? achievements.slice(3) : [];

  return (
    <div className="border-border relative border-l pb-6 pl-6 last:border-0 last:pb-0">
      <div className="bg-primary absolute top-1.5 -left-1.5 h-3 w-3 rounded-full shadow-[0_0_8px_rgba(0,255,0,0.5)]" />
      <h4 className="text-foreground text-base font-bold">{role}</h4>
      <p className="text-primary mb-2 text-sm">
        {company}
        <span className="text-muted-secondary-foreground ml-2">{date}</span>
      </p>
      {achievements.length === 1 ? (
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
          {achievements[0]}
        </p>
      ) : (
        <>
          <ul className="text-muted-foreground ml-4 list-outside list-disc space-y-1 text-sm">
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
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <ul className="text-muted-foreground mt-1 ml-4 list-outside list-disc space-y-1 text-sm">
                  {extraAchievements.map((achievement, index) => (
                    <li
                      key={index + 3}
                      className="pl-1 leading-relaxed text-pretty"
                    >
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
              className="text-primary/70 hover:text-primary group/btn mt-4 flex cursor-pointer items-center gap-2 py-1 text-[9px] font-black tracking-widest uppercase transition-colors"
            >
              {isExpanded ? (
                <>
                  Collapse Data{' '}
                  <ChevronUp className="h-3 w-3 transition-transform group-hover/btn:-translate-y-0.5" />
                </>
              ) : (
                <>
                  Decrypt Remaining Points ({achievements.length - 3} more){' '}
                  <ChevronDown className="h-3 w-3 transition-transform group-hover/btn:translate-y-0.5" />
                </>
              )}
            </button>
          )}
        </>
      )}
    </div>
  );
};
