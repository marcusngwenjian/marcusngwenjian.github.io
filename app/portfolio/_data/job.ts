import { WorkExperience } from "../_lib/types";

export const workExperiences: readonly WorkExperience[] = [
  {
    role: "Assistant Lead Engineer",
    company: "Synapxe Pte Ltd",
    date: "2024 - Present",
    achievements: [
      "[Mock] Developed and launched a new feature that increased user engagement by 10%",
      "[Mock] Optimized database queries, reducing load time by 20%",
      "[Mock] Collaborated with cross-functional teams to deliver high-quality software",
    ] as const,
  },
  {
    role: "Senior Software Engineer",
    company: "Synapxe Pte Ltd",
    date: "2021 - 2024",
    achievements: [
      "[Mock] Developed and launched a new feature that increased user engagement by 10%",
      "[Mock] Optimized database queries, reducing load time by 20%",
      "[Mock] Collaborated with cross-functional teams to deliver high-quality software",
    ] as const,
  },
  {
    role: "Software Engineer",
    company: "Synapxe Pte Ltd",
    date: "2019 - 2021",
    achievements: [
      "[Mock] Developed and launched a new feature that increased user engagement by 10%",
      "[Mock] Optimized database queries, reducing load time by 20%",
      "[Mock] Collaborated with cross-functional teams to deliver high-quality software",
    ] as const,
  },
  {
    role: "Intern",
    company: "Micepad",
    date: "2018",
    achievements: [
      "[Mock] Developed and launched a new feature that increased user engagement by 10%",
      "[Mock] Optimized database queries, reducing load time by 20%",
      "[Mock] Collaborated with cross-functional teams to deliver high-quality software",
    ] as const,
  },
  {
    role: "Intern",
    company: "Enviro-Hub Holdings Ltd",
    date: "2015",
    achievements: [
      "Directly supported the IT Manager in maintaining business continuity by resolving critical connectivity issues, streamlining SAP administration, and assisting in network security and virus containment.",
    ] as const,
  },
] as const;
