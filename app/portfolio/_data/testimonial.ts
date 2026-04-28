import type { Testimonial } from '../_lib/types';

export const testimonials: readonly Testimonial[] = [
  {
    referee: 'James Gwee',
    attribution: 'Chief Technology Officer, Micepad',
    avatar: '/images/avatar-james.webp',
    quote:
      'Marcus... managed to learn fast and picked up mobile development within a month without prior experience. From his pull requests and extensive documentation, one can tell that he took his work very seriously... Despite [working remotely], he managed to communicate well and built rapport with the team... I think he would be a great member to any team he joins.',
  },
  {
    referee: 'Justin Chua',
    attribution: 'IT Manager, Enviro-Hub Holdings Ltd',
    avatar: '/images/avatar-justin.webp',
    quote:
      'Marcus displayed great understanding towards the importance of information security. He was cautious and would adhere to rules and regulations... minimizing the risk and impact of security breaches... Marcus had made a notable contribution to the IT development and support of the company [and] responsibly performed his duties.',
  },
  {
    referee: 'Natasha Koh',
    attribution: 'Senior Software Engineer, IHiS',
    avatar: '/images/avatar-natasha.webp',
    quote:
      "I'll never forget Marcus who was such a proactive, motivated and reliable teammate during the 1+ years of working together with him. I was particularly impressed by his ability to pick up technical skills such as Infrastructure Orchestration with Terraform, TypeScript and C# very quickly on-the-job, even under a lot of pressure. It was such a pleasure working with Marcus and I'd definitely recommend him for any technical team position in the future.",
  },
  {
    referee: 'LTC Koh Leong Kar',
    attribution: 'Commanding Officer, 4SIR',
    avatar: '/images/avatar-co.webp',
    quote:
      '[He] was one of the leaders within the section and the platoon... [he] looked out for his fellow soldiers and made the extra effort to check on them. [He] also worked very closely with the section 2IC to ensure that the section ran smoothly. His kind and caring nature in addition to his hard working self made him well liked and reliable.',
  },
] as const;
