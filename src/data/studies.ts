export const studies = [
  {
    title: 'B.Sc. in Computer Science',
    institution: 'German University in Cairo (GUC)',
    description:
      'Sep 2014 – May 2019. Core CS foundations with a Bachelor thesis in Computer Science & Engineering.',
    tags: [
      'Algorithms',
      'Data Structures',
      'Operating Systems',
      'Databases',
      'Networking',
    ],
  },
  {
    title: 'Bachelor Project – Personal Assistant for Elderly People (VR)',
    institution: 'DHBW Stuttgart, Germany',
    description:
      'Mar 2018 – Aug 2018. Built a VR-based assistant prototype supporting independent living; led web components and integrations.',
    tags: ['Virtual Reality', 'HCI', 'Prototyping', 'Web Systems'],
  },
  {
    title: 'AWS Professional Certifications',
    institution: 'Amazon Web Services',
    description:
      'DevOps Engineer – Professional (2024); Solutions Architect – Professional (2023); Developer – Associate (2023); Solutions Architect – Associate (2021); Cloud Practitioner (2021).',
    tags: ['AWS', 'DevOps', 'Cloud Architecture', 'IaC', 'CI/CD'],
  },
  {
    title: 'Udemy Courses',
    institution: 'Udemy',
    description: 'GraphQL, React, Node.js, TypeScript, Docker, CI/CD, AWS',
    tags: [
      'GraphQL',
      'React',
      'Node.js',
      'TypeScript',
      'Docker',
      'CI/CD',
      'AWS',
    ],
  },
];

export type StudyItem = (typeof studies)[number];
