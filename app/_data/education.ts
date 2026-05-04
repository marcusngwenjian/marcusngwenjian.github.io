import type { EducationQualification } from '@mnwj/contracts/types';

export const nus: EducationQualification = {
  institution: 'National University of Singapore',
  qualification: 'Bachelor of Computing (Honours) in Computer Science',
} as const;

export const srjc: EducationQualification = {
  institution: 'Serangoon Junior College',
  qualification: 'GCE A-Levels',
} as const;

export const bowen: EducationQualification = {
  institution: 'Bowen Secondary School',
  qualification: 'GCE O-Levels',
} as const;

export const hgps: EducationQualification = {
  institution: 'Hougang Primary School',
  qualification: 'Primary School Leaving Examination (PSLE)',
} as const;
