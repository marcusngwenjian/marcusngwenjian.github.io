import { getWorkExperiences } from './implementation';
import type { WorkService } from './types';

export const workService: WorkService = {
  getWorkExperiences: async (scope) => getWorkExperiences(scope),
};
