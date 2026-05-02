import type { Certification, DataScope } from '@mnwj/contracts/types';

export interface CertificationService {
  getCertifications: (scope: DataScope) => Promise<readonly Certification[]>;
}
