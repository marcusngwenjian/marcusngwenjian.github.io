import { dataScope } from '@mnwj/contracts/constants';
import type { DataScope, EducationQualification } from '@mnwj/contracts/types';
import { bowen, hgps, nus, srjc } from '@mnwj/data';

const education: Record<DataScope, readonly EducationQualification[]> = {
  [dataScope.portfolio]: [nus, srjc, bowen, hgps],
  [dataScope.resume]: [nus],
};

export const getQualifications = (scope: DataScope) => {
  return education[scope];
};
