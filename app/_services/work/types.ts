import type { DataScope, WorkExperience } from '@mnwj/contracts/types';

export interface WorkService {
  getWorkExperiences: (scope: DataScope) => Promise<readonly WorkExperience[]>;
}
