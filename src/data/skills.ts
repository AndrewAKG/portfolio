export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>`,
    title: 'System Design & Architecture',
    description:
      'Designing scalable, secure, and cost-aware systems with clear service boundaries and pragmatic trade-offs.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: 'Backend APIs & Integrations',
    description:
      'Building reliable REST services and integrating external platforms with queues, background jobs, and safeguards.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 18H6a4 4 0 010-8 5 5 0 019.9-1.5A4.5 4.5 0 1119 18z"/></svg>`,
    title: 'Cloud & DevOps (CI/CD & IaC)',
    description:
      'Automating delivery pipelines and infrastructure with best practices for security, repeatability, and speed.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>`,
    title: 'Observability & Reliability',
    description:
      'Monitoring, alerting, and performance tuning to maintain SLAs and ensure dependable user experiences.',
  },
];

export type Skill = (typeof skills)[number];
