import { dataScope } from '@mnwj/contracts/constants';
import type { Contact, DataScope } from '@mnwj/contracts/types';
import { email, github, linkedin, phone, website } from '@mnwj/data';

const contacts: Record<DataScope, readonly Contact[]> = {
  [dataScope.portfolio]: [github, linkedin, website],
  [dataScope.resume]: [github, linkedin, website],
};

export const getContacts = (scope: DataScope) => {
  return contacts[scope];
};
