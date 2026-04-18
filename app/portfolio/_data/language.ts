import { Language } from "../_lib/types";

export const languages: readonly Language[] = [
  { name: "English", proficiency: 100, level: 10 },
  { name: "Chinese", proficiency: 92, level: 9 },
  { name: "Japanese", proficiency: 50, level: 5 },
] as const;
