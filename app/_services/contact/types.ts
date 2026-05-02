import type { Contact, DataScope } from '@mnwj/contracts/types';

export interface ContactService {
  getContacts: (scope: DataScope) => Promise<readonly Contact[]>;
}
