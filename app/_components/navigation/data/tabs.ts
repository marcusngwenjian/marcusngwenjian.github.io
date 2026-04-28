import { Home, Info, LayoutDashboard } from 'lucide-react';
import { tabId } from '../lib/constants';
import type { Tab } from '../lib/types';

export const tabs: ReadonlyArray<Tab> = [
  { id: tabId.home, label: 'Home', icon: Home, link: '/' },
  {
    id: tabId.portfolio,
    label: 'Portfolio',
    icon: LayoutDashboard,
    link: '/portfolio',
  },
  { id: tabId.profile, label: 'Profile', icon: Info, link: '/profile' },
];
