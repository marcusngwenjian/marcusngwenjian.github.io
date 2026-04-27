import { skills, tools } from "@/app/_data/skill";

export const skillset: readonly string[] = [...new Set([...skills, ...tools])] as const;
