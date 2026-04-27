import { BookOpen, GraduationCap } from "lucide-react";
import type { EducationQualification } from "./schema";

export const Nus: EducationQualification = {
  icon: GraduationCap,
  institution: "National University of Singapore",
  qualification: "Bachelor of Computing (Honours) in Computer Science",
};

export const Srjc: EducationQualification = {
  icon: BookOpen,
  institution: "Serangoon Junior College",
  qualification: "GCE A-Levels",
};

export const Bowen: EducationQualification = {
  icon: BookOpen,
  institution: "Bowen Secondary School",
  qualification: "GCE O-Levels",
};

export const Hgps: EducationQualification = {
  icon: BookOpen,
  institution: "Hougang Primary School",
  qualification: "Primary School Leaving Examination (PSLE)",
};
