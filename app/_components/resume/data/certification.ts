import {
  awsSolutionArchitectAssociate,
  hashicorpTerraformAssociate,
  type Certification,
} from '@/app/_data';

export const certifications: readonly Certification[] = [
  awsSolutionArchitectAssociate,
  hashicorpTerraformAssociate,
] as const;
