import { getCertifications } from './implementation';
import type { CertificationService } from './types';

export const certificationService: CertificationService = {
  getCertifications: async (scope) => getCertifications(scope),
};
