import type { z } from 'zod';
import type { dataScope } from './constants';
import type { CertificationSchema } from './zod/certification';
import type { ContactSchema } from './zod/contact';
import type { EducationQualificationSchema } from './zod/education';
import type { WorkExperienceSchema, WorkRoleSchema } from './zod/work';

export type DataScope = keyof typeof dataScope;

export type WorkRole = z.infer<typeof WorkRoleSchema>;
export type WorkExperience = z.infer<typeof WorkExperienceSchema>;

export type Certification = z.infer<typeof CertificationSchema>;

export type EducationQualification = z.infer<
  typeof EducationQualificationSchema
>;

export type Contact = z.infer<typeof ContactSchema>;
