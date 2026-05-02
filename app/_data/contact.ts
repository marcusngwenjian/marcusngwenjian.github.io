import type { Contact } from '@mnwj/contracts/types';

export const phone: Contact = {
  icon: {
    png: '/icons/external/icons8-phone-30.png',
  } as const,
  alt: 'Phone',
  label: '+65 98765432',
} as const;

export const email: Contact = {
  icon: {
    png: '/icons/external/icons8-email-30.png',
  } as const,
  alt: 'Email',
  label: 'welcome@email.com',
  url: 'mailto:welcome@email.com',
} as const;

export const github: Contact = {
  icon: {
    png: '/icons/external/icons8-github-30.png',
    svg: '/icons/external/icons8-github.svg',
  } as const,
  alt: 'GitHub',
  label: 'github.com/marcusngwenjian',
  url: 'https://github.com/marcusngwenjian',
} as const;

export const linkedin: Contact = {
  icon: {
    png: '/icons/external/icons8-linkedin-30.png',
    svg: '/icons/external/icons8-linkedin.svg',
  } as const,
  alt: 'LinkedIn',
  label: 'linkedin.com/in/marcusngwenjian',
  url: 'https://www.linkedin.com/in/marcusngwenjian/',
} as const;

export const website: Contact = {
  icon: {
    png: '/icons/external/icons8-website-30.png',
  } as const,
  alt: 'Website',
  label: 'marcusngwenjian.github.io',
  url: 'https://marcusngwenjian.github.io/',
} as const;
