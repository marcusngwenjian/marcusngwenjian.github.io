import { BookOpen, GraduationCap } from 'lucide-react';
import type { EducationQualification } from './schema';

export const nus: EducationQualification = {
  icon: GraduationCap,
  institution: 'National University of Singapore',
  qualification: 'Bachelor of Computing (Honours) in Computer Science',
} as const;

export const srjc: EducationQualification = {
  icon: BookOpen,
  institution: 'Serangoon Junior College',
  qualification: 'GCE A-Levels',
} as const;

export const bowen: EducationQualification = {
  icon: BookOpen,
  institution: 'Bowen Secondary School',
  qualification: 'GCE O-Levels',
} as const;

export const hgps: EducationQualification = {
  icon: BookOpen,
  institution: 'Hougang Primary School',
  qualification: 'Primary School Leaving Examination (PSLE)',
} as const;
