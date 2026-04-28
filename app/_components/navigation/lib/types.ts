import type { LucideIcon } from 'lucide-react';
import type { tabId } from './constants';

export type TabId = (typeof tabId)[keyof typeof tabId];

export type Tab = {
  readonly id: TabId;
  readonly label: string;
  readonly icon: LucideIcon;
  readonly link: string;
};
