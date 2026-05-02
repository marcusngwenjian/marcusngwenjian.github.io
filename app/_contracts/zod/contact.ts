import { z } from 'zod';

export const ContactIconSchema = z
  .object({
    svg: z.string().optional(),
    png: z.string().optional(),
  })
  .readonly();

export const ContactSchema = z
  .object({
    icon: ContactIconSchema,
    alt: z.string(),
    label: z.string(),
    url: z.string().optional(),
  })
  .readonly();
