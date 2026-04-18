import { LucideIcon } from "lucide-react";

export type Skill = string;

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

export type Language = {
  readonly name: string;
  readonly proficiency: number;
  readonly level: number;
};

export type WorkExperience = {
  readonly role: string;
  readonly company: string;
  readonly date: string;
  readonly achievements: readonly string[];
};

export type Testimonial = {
  readonly referee: string;
  readonly attribution: string;
  readonly avatar: string;
  readonly quote: string;
};
