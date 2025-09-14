import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: 'Backend Team Lead & AWS Architect',
    company: 'DevGurus',
    region: 'United States (Remote)',
    description: [
      'Led Development of GameSafe, DCA, and FGI platforms.',
      'Architected AWS workloads with the Well-Architected Framework using Terraform, CloudFormation, and Serverless Framework.',
      'Built CI/CD with GitHub Actions and Optimzed Docker Images to make fast, reliable deployments.',
      'Integrated unit tests and security scans in cicd pipelines to ensure code quality and compliance.',
      'Right-sized non-prod infra to reduce costs by ~50% while improving reliability and performance.',
    ],
    technologies: [
      'AWS',
      'ECS',
      'RDS',
      'EC2',
      'Lambda',
      'EventBridge',
      'SQS',
      'SNS',
      'CloudFormation',
      'Serverless Framework',
      'GitHub Actions',
      'Node.js',
      'TypeScript',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Nodogoro',
    region: 'Cairo, Egypt',
    description:
      'Owned backend and infra for StudioShot (AI image generation). Migrated GPU workloads to AWS EC2 for better cost/perf, operated across AWS/GCP, set up pipelines and monitoring, and modernized legacy architecture using native cloud services.',
    technologies: [
      'AWS',
      'GCP',
      'EC2 GPU',
      'Stable Diffusion',
      'ComfyUI',
      'S3',
      'Docker',
      'Node.js',
      'GitHub Actions',
    ],
  },
  {
    title: 'Professional Services Delivery Engineer',
    company: 'Onica (Rackspace)',
    region: 'Cairo, Egypt',
    description:
      'Delivered cloud-native solutions with serverless/event-driven patterns. Built APIs and data flows with Lambda, DynamoDB, Aurora, EventBridge, SNS/SQS; shipped React/Node services; enabled scalable, cost-efficient architectures on AWS.',
    technologies: [
      'AWS',
      'Lambda',
      'DynamoDB',
      'Aurora',
      'EventBridge',
      'SQS',
      'SNS',
      'Serverless Framework',
      'Node.js',
      'TypeScript',
      'React',
    ],
  },
  {
    title: 'Top Rated Freelancer (Backend/Serverless)',
    company: 'Upwork',
    region: 'Remote',
    description:
      'Delivered two production apps end-to-end using a serverless, cloud-first approach. Implemented secure, scalable backends with IaC and automation to accelerate delivery.',
    technologies: [
      'Node.js',
      'TypeScript',
      'AWS',
      'Serverless Framework',
      'API Gateway',
      'Lambda',
      'DynamoDB',
      'S3',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Callvita, LLC',
    region: 'Cairo, Egypt',
    description:
      'Built medical history and doctor appointment products across web and mobile. Implemented REST APIs and CI basics, and deployed on AWS.',
    technologies: ['React', 'React Native', 'Node.js', 'Express', 'AWS'],
  },
];

export type WorkItem = (typeof work)[number];
