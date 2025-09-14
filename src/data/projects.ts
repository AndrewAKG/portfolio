import NodejsIcon from '../assets/logos/Nodejs-logo.svg?raw';
import AWSIcon from '../assets/logos/AWS-logo.svg?raw';
import FirebaseIcon from '../assets/logos/Firebase-logo.svg?raw';
import SocketIoIcon from '../assets/logos/Socket.io-logo.svg?raw';
import JavascriptIcon from '../assets/logos/JavaScript-logo.svg?raw';
import ReactIcon from '../assets/logos/React-logo.svg?raw';
import TypeScriptIcon from '../assets/logos/TypeScript-logo.svg?raw';

export const projects = [
  {
    title: 'GameSafe',
    techStack:
      'AWS • Node.js • TypeScript • PostgreSQL • Firebase • Socket.io • CloudFormation • Serverless Framework • S3 • Lambda • SQS • SNS • ECS • RDS • EC2',
    description:
      'GameSafe is an app for protecting children while playing games online.',
    ctaText: 'View Project',
    ctaLink: 'https://www.gamesafe.ai/',
    icon: NodejsIcon,
  },
  {
    title: 'Digital Citizen Academy',
    techStack:
      'AWS • Node.js • TypeScript • Firebase • Socket.io • MongoDB • ECS • Cognito • CloudFormation • Serverless Framework • Lambda • SQS • RDS',
    description:
      'An online platform that teaches kids to be good digital citizens with safe, structured content and tracking.',
    ctaText: 'View Project',
    ctaLink: 'https://dcakids.org',
    icon: SocketIoIcon,
  },
  {
    title: 'GunSync',
    techStack:
      'AWS • Node.js • TypeScript • PostgreSQL • Marketplace Integrations • Serverless • Event-Driven • SQS • SNS • RDS',
    description:
      'A platform with complex integrations to firearm-related marketplaces, orchestrating listings and data sync.',
    ctaText: 'View Project',
    ctaLink: 'https://gunsync.com/',
    icon: AWSIcon,
  },
  {
    title: 'StudioShot',
    techStack:
      'AWS • GCP • EC2 GPU • Node.js • Stable Diffusion • ComfyUI • S3 • Firebase',
    description:
      'AI service that turns selfies into professional images; migrated GPU workloads to EC2 for better cost/perf.',
    ctaText: 'View Project',
    ctaLink: 'https://studioshot.ai/',
    icon: FirebaseIcon,
  },
  {
    title: 'Home Maintenance App',
    techStack:
      'AWS • Serverless Framework • API Gateway • Lambda • Node.js • TypeScript • DynamoDB',
    description:
      'Freelancing marketplace for home maintenance jobs, delivered with a cloud-native, serverless backend.',
    ctaText: null,
    ctaLink: null,
    icon: JavascriptIcon,
  },
  {
    title: 'Mood Tracking App',
    techStack:
      'AWS • Serverless Framework • API Gateway • Lambda • Node.js • TypeScript • DynamoDB',
    description:
      'Mobile app analyzing user mood based on daily activities, backed by event-driven serverless APIs.',
    ctaText: null,
    ctaLink: null,
    icon: JavascriptIcon,
  },
  {
    title: 'Medical App with Bluetooth Inhaler',
    techStack:
      'AWS • Serverless • Lambda • DynamoDB • Aurora • EventBridge • SNS • SQS • React • Node.js • TypeScript • Snowflake',
    description:
      'A medical application integrating a Bluetooth-enabled inhaler with secure, scalable serverless data flows.',
    ctaText: null,
    ctaLink: null,
    icon: TypeScriptIcon,
  },
  {
    title: 'Underground Water Pipeline Cost Simulator',
    techStack:
      'AWS • Serverless • React • Node.js • TypeScript • MongoDB • EventBridge • SQS • Lambda',
    description:
      'Cost simulation tool for underground water pipelines, delivered with a cloud-native architecture.',
    ctaText: null,
    ctaLink: null,
    icon: ReactIcon,
  },
  {
    title: 'Medical History & Doctor Booking',
    techStack: 'AWS • React • React Native • Node.js • Express',
    description:
      'End-to-end product for storing medical history and booking doctor appointments across web and mobile.',
    ctaText: null,
    ctaLink: null,
    icon: JavascriptIcon,
  },
];
