import type { WorkExperience, WorkRole } from './schema';

export const synapxeAssistantLeadEngineer: WorkRole = {
  role: 'Assistant Lead Engineer',
  date: '2024 - Present',
  topAchievements: [
    'Orchestrated a large-scale migration of 40+ microservices from Red Hat OpenShift Service on AWS (ROSA) to Amazon EKS, architecting robust CI/CD pipelines that automated the provisioning of the entire EKS ecosystem and improved infrastructure portability.',
    'Architected and implemented an interactive infrastructure visualization module using React and AI-assisted development (Copilot) to map complex AWS resource relationships and data flows, eliminating manual resource discovery and significantly accelerating system onboarding and troubleshooting.',
    'Engineered a custom DevOps Utility Program leveraging the Azure DevOps API to automate high-volume Pull Request (PR) workflows and pipeline monitoring, centralizing build/release statuses into a unified dashboard and accelerating the code review lifecycle.',
    'Streamlined the Release Management Lifecycle by consolidating redundant deployment stages into a unified, multi-step automated process, significantly reducing manual intervention and shortening the total time-to-production for feature releases.',
    'Championed operational transparency and cross-functional alignment by delivering comprehensive technical implementation plans for system changes and instituting a proactive communication loop with Business Analysts to ensure 100% requirement fulfillment.',
  ] as const,
};

export const synapxeSeniorSoftwareEngineer: WorkRole = {
  role: 'Senior Software Engineer',
  date: '2021 - 2024',
  summary:
    'Engineered system integrations to government (OGP) and clinical (NHIPS) platforms. Managed AWS environments using Terraform (IaC) while ensuring 100% remediation of high-priority security risks. Collaborated closely with Department Directors to standardize architectural governance, accelerating cross-functional team delivery and ensuring production stability.',
  achievements: [
    'Developed the integration strategy for an internal system, connecting to government-level interfaces (OGP) and clinical systems (NHIPS).',
    'Engineered and managed secure cloud infrastructure using Terraform (IaC), including AWS API Gateway, Lambda, EC2, ROSA, and VPC Endpoints.',
    'Spearheaded system hardening efforts by remediating high-priority CVE vulnerabilities and Penetration Testing findings, ensuring 100% resolution of security risks across the infrastructure.',
    'Standardized architectural governance by developing system design patterns and high-level sequence diagrams, facilitating Director-level alignment and accelerating onboarding for cross-functional engineering teams.',
    'Directed production deployments for large-scale infrastructure and React-based frontend applications, serving as the primary lead for release stability.',
    'Led cross-functional synchronization meetings to clarify complex requirements and align development teams on unified technical solutions.',
    'Optimized infrastructure monitoring and observability by configuring CloudWatch Alarms, X-Ray tracing, and internal backend alerting systems.',
  ] as const,
};

export const synapxeSoftwareEngineer: WorkRole = {
  role: 'Software Engineer',
  date: '2019 - 2021',
  summary:
    'Optimized flagship healthcare system (HealthHub) using ASP.NET and SQL, ensuring high reliability and the remediation of critical PII security vulnerabilities. Collaborated cross-functionally with Agile stakeholders to translate complex requirements into technical documentation that accelerated team velocity and streamlined production releases.',
  achievements: [
    'Architected and optimized full-stack backend modules for a flagship healthcare platform (HealthHub) using ASP.NET and SQL, achieving enhanced data consistency and system reliability by synchronizing complex Angular frontend components.',
    'Proactively identified and mitigated a PII data exposure vulnerability by analyzing network traffic and packet data.',
    'Remediated high-priority security vulnerabilities identified through external bug bounty programs and automated code scans.',
    'Provided critical production support for MVP releases, ensuring stable transitions to Service Operations teams.',
    ' with Business Analysts and QA to translate ambiguous user requirements into rigorous technical specifications, streamlining the development lifecycle within an Agile/Scrum framework',
    'Standardized organizational knowledge by authoring comprehensive technical documentation and developer guides, reducing onboarding time for new hires and increasing overall team velocity.',
  ] as const,
};

export const micepadIntern: WorkRole = {
  role: 'Intern',
  date: '2018',
  summary:
    'Collaborated with the CTO and global teams to develop iOS features for an international user base, implementing clean Objective-C code, Core Data persistence, and RESTful API integrations.',
  achievements: [
    'Collaborated directly with the CTO and global cross-functional teams to design, iterate, and ship user-facing features for an international user base.',
    'Developed iOS application features using Objective-C, focusing on writing clean, maintainable code to meet complex functional requirements.',
    'Optimized application performance and responsiveness by maintaining high standards for code quality and organization.',
    'Leveraged the iOS SDK and Core Data to manage complex local data persistence.',
    'Integrated diverse third-party libraries and RESTful APIs, expanding application functionality and enhancing the overall user experience.',
  ] as const,
};

export const envirohubIntern: WorkRole = {
  role: 'Intern',
  date: '2015',
  summary:
    'Supported the IT Manager in maintaining high-availability systems and robust security by streamlining SAP administration, resolving critical network issues, and managing firewalls to ensure zero data breaches.',
  achievements: [
    'Directly supported the IT Manager in maintaining business continuity by resolving critical connectivity issues and streamlining SAP administration.',
    'Fortified organizational security posture by executing rapid virus containment strategies and managing firewall configurations, resulting in zero data breaches during high-threat periods.',
  ] as const,
} as const;

export const synapxeWorkExperience: WorkExperience = {
  company: 'Synapxe Pte Ltd',
  roles: [
    synapxeAssistantLeadEngineer,
    synapxeSeniorSoftwareEngineer,
    synapxeSoftwareEngineer,
  ] as const,
} as const;

export const micepadWorkExperience: WorkExperience = {
  company: 'Micepad',
  roles: [micepadIntern] as const,
} as const;
