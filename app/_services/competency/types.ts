export interface CompetencyService {
  getCompetencies: () => Promise<readonly string[]>;
}
