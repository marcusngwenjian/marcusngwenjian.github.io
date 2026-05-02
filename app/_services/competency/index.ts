import { getCompetencies } from './implementation';
import type { CompetencyService } from './types';

export const competencyService: CompetencyService = {
  getCompetencies: async () => getCompetencies(),
};
