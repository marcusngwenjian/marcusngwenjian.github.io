import type { DataScope, EducationQualification } from '@mnwj/contracts/types';

export interface EducationService {
  getQualifications: (
    scope: DataScope,
  ) => Promise<readonly EducationQualification[]>;
}
