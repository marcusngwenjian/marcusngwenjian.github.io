import { z } from 'zod';

export const WorkRoleSchema = z
  .object({
    role: z.string(),
    date: z.string(),
    summary: z.string().optional(),
    topAchievements: z.array(z.string()).readonly().optional(),
    achievements: z.array(z.string()).readonly().optional(),
  })
  .readonly();

export const WorkExperienceSchema = z
  .object({
    company: z.string(),
    roles: z.array(WorkRoleSchema).readonly(),
  })
  .readonly();
