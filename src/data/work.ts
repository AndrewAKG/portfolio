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
      'Leading GameSafe App (app for protecting children while playing games online), DCA App (app for learning how to be a good digital citizen through an online platform) and FGI (app that has complex integrations with guns marketplaces)',
      'Architected Apps on AWS using the AWS Well-Architected Framework utilizing Terraform, CloudFormation and Serverless Framework stack.',
      'Built CI/CD pipelines with GitHub Actions and Optimzed Docker Images to make fast, reliable deployments.',
      'Integrated unit tests and security scans in cicd pipelines to ensure code quality and compliance.',
      'Mentored juniordevelopers on best practices and conducted PR reviews to improve code quality.',
      'Optimized AWS resource utilization including EC2, ECS and RDS to reduce operational costs by 50% for non production environments while maintaining application reliability.',
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
      'Terraform',
      'Socket.io',
      'Redis',
      'Node.js',
      'TypeScript',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Nodogoro',
    region: 'Cairo, Egypt',
    description: [
      'Led the development of StudioShot App, utilizing AI services to produce professional images from selfie images using Stable Diffusion and ComfyUI tools.',
      'Managed backend development and maintenance of AWS/GCP components for StudioShot App and optimized cost and performance by transitioning AI GPU workloads to AWS EC2 GPU instances',
      'Developed internal tools using Retool',
      'Migrated the old app architecture to a new scalable architecture using AWS and GCP native services.',
    ],
    technologies: [
      'AWS',
      'GCP',
      'EC2 GPU',
      'Stable Diffusion',
      'ComfyUI',
      'S3',
      'Firebase',
      'Retool',
      'PostgreSQL',
      'Node.js',
      'TypeScript',
      'GitHub Actions',
    ],
  },
  {
    title: 'Professional Services Delivery Engineer',
    company: 'Onica (Rackspace)',
    region: 'Cairo, Egypt',
    description: [
      'Contributed to the successful delivery of two projects: a medical application integrating a Bluetooth-enabled inhaler for patients and a cost simulation tool for underground water pipelines.',
      'Leveraged React with TypeScript for front-end development and Node.js with TypeScript alongside MongoDB for back-end implementation.',
      'Employed a cloud-native architecture utilizing the Serverless Framework on AWS, incorporating AWS Lambda functions, DynamoDB, AuroraDB, EventBridge, SNS, and SQS to enable event-driven patterns and efficient event propagation.',
    ],
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
    description: [
      'Contributed to the successful delivery of two projects: a freelancing app for home maintenance jobs and a mood app for analyzing user mood according to daily activities.',
      'Leveraged Node.js with TypeScript alongside AWS with cloud-native approach for back-end implementation using Serverless Framework.',
    ],
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
    description: [
      'Led app development to store medical history and enable booking doctor appointments.',
      'Utilized ReactJS for front-end, NodeJS (JavaScript) and Express for backend, React Native for mobile app development, and AWS as the cloud provider.',
    ],
    technologies: ['React', 'React Native', 'Node.js', 'Express', 'AWS'],
  },
];

export type WorkItem = (typeof work)[number];
