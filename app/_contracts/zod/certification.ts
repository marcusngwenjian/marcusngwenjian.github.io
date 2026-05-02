import { z } from 'zod';

export const CertificationSchema = z
  .object({
    name: z.string(),
    company: z.string(),
    year: z.string(),
  })
  .readonly();
