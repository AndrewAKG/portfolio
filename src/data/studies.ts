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
    title: 'Udemy Courses',
    institution: 'Udemy',
    description:
      'GraphQL, Terraform, TypeScript, Docker, AWS, Modern JavaScript',
    tags: [
      'GraphQL',
      'Modern JavaScript',
      'TypeScript',
      'Docker',
      'Terraform',
      'AWS',
    ],
  },
];

export type StudyItem = (typeof studies)[number];
