import { BookOpen, GraduationCap } from 'lucide-react';
import type { EducationQualification } from '../_lib/types';

export const qualifications: readonly EducationQualification[] = [
  {
    icon: GraduationCap,
    institution: 'National University of Singapore',
    qualification: 'Bachelor of Computing (Honours) in Computer Science',
  },
  {
    icon: BookOpen,
    institution: 'Serangoon Junior College',
    qualification: 'GCE A-Levels',
  },
  {
    icon: BookOpen,
    institution: 'Bowen Secondary School',
    qualification: 'GCE O-Levels',
  },
  {
    icon: BookOpen,
    institution: 'Hougang Primary School',
    qualification: 'Primary School Leaving Examination (PSLE)',
  },
] as const;
