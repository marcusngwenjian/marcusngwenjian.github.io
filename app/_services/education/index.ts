import { getQualifications } from './implementation';
import type { EducationService } from './types';

export const educationService: EducationService = {
  getQualifications: async (scope) => getQualifications(scope),
};
