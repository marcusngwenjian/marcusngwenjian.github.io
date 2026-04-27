import type { LucideIcon } from "lucide-react";

export type WorkRole = {
  readonly role: string;
  readonly date: string;
  readonly summary?: string;
  readonly topAchievements?: readonly string[];
  readonly achievements?: readonly string[];
};

export type WorkExperience = {
  readonly company: string;
  readonly roles: readonly WorkRole[];
};

export type Certification = {
  readonly name: string;
  readonly company: string;
  readonly year: string;
};

export type EducationQualification = {
  readonly icon: LucideIcon;
  readonly institution: string;
  readonly qualification: string;
};
