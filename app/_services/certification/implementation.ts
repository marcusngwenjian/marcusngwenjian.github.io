import { dataScope } from '@mnwj/contracts/constants';
import type { Certification, DataScope } from '@mnwj/contracts/types';
import {
  awsSolutionArchitectAssociate,
  hashicorpTerraformAssociate,
} from '@mnwj/data';

const certifications: Record<DataScope, readonly Certification[]> = {
  [dataScope.portfolio]: [
    awsSolutionArchitectAssociate,
    awsSolutionArchitectAssociate,
  ],
  [dataScope.resume]: [
    awsSolutionArchitectAssociate,
    hashicorpTerraformAssociate,
  ],
};

export const getCertifications = (scope: DataScope) => {
  return certifications[scope];
};
