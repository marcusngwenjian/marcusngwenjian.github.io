import { Certification } from "../_lib/types";

export const certifications: readonly Certification[] = [
  {
    name: "AWS Certified Solutions Architect (Associate)",
    company: "Amazon Web Services",
    year: "2025",
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    company: "HashiCorp",
    year: "2025",
  },
] as const;
