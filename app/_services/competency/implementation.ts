import { skills, tools } from '@mnwj/data';

export const getCompetencies = (): readonly string[] => {
  return [...new Set([...skills, ...tools])];
};
