import { z } from 'zod';

export const EducationQualificationSchema = z
  .object({
    institution: z.string(),
    qualification: z.string(),
  })
  .readonly();
