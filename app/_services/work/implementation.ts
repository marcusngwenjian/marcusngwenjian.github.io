import { dataScope } from '@mnwj/contracts/constants';
import type { DataScope, WorkExperience } from '@mnwj/contracts/types';
import {
  envirohubWorkExperience,
  micepadWorkExperience,
  synapxeWorkExperience,
} from '@mnwj/data';

const work: Record<DataScope, readonly WorkExperience[]> = {
  [dataScope.portfolio]: [
    synapxeWorkExperience,
    micepadWorkExperience,
    envirohubWorkExperience,
  ],
  [dataScope.resume]: [synapxeWorkExperience, micepadWorkExperience],
};

export const getWorkExperiences = (scope: DataScope) => {
  return work[scope];
};
