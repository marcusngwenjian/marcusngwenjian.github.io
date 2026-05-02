import { z } from 'zod';
import { LucideIconSchema } from './lucide';

export const EducationQualificationSchema = z
  .object({
    icon: LucideIconSchema,
    institution: z.string(),
    qualification: z.string(),
  })
  .readonly();
