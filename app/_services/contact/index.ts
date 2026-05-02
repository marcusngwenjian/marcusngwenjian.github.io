import { getContacts } from './implementation';
import type { ContactService } from './types';

export const contactService: ContactService = {
  getContacts: async (scope) => getContacts(scope),
};
