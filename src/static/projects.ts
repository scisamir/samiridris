import { ProjectProps } from '../pages/Projects/Project/Project.type';

const MyProjects: ProjectProps[] = [
  {
    p_head: 'Minswap DEX',
    featured: true,
    technical_focus: 'Plutus V3 migration and CIP-113 compatibility.',
    project_type: 'Blockchain',
    image_src: 'projects/minswap.webp',
    image_alt: 'Minswap DEX trading interface on Cardano',
    category: 'Major protocol contribution',
    description:
      'Refactored smart contracts to Plutus V3, integrated CIP-113 support, and contributed to protocol improvements and modernization.',
    tools: ['Cardano', 'Aiken', 'MeshJS', 'TypeScript', 'DEX'],
    site_link: 'https://minswap.org/',
  },
  {
    p_head: 'Statera Protocol',
    featured: true,
    technical_focus:
      'Collateral state, position NFTs and batched protocol operations.',
    project_type: 'Blockchain',
    image_src: 'projects/statera.webp',
    image_alt: 'Statera Protocol application interface',
    category: 'Zero-interest Cardano protocol',
    description:
      'Zero-interest collateral protocol on Cardano featuring collateral management, position NFTs, batching, and pool architecture.',
    tools: ['Cardano', 'Aiken', 'Lucid', 'MeshJS', 'Protocol Design'],
    site_link: 'https://statera-protocol-cardano.vercel.app/',
  },
  {
    p_head: 'Metera Indexes',
    featured: true,
    technical_focus:
      'Index management workflows and ecosystem data visibility.',
    project_type: 'Blockchain',
    image_src: 'projects/meteraindexes.webp',
    image_alt: 'Metera Indexes dashboard showing Cardano index portfolios',
    category: 'Ecosystem analytics',
    description:
      'Dashboard and tooling for index management and ecosystem analytics.',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    site_link: 'https://app.meteraprotocol.io/',
  },
  {
    p_head: 'Lava',
    featured: true,
    technical_focus:
      'Modular staking infrastructure across blockchain ecosystems.',
    project_type: 'Blockchain',
    image_src: 'projects/lava.webp',
    image_alt: 'Lava staking application interface',
    category: 'Multi-platform staking protocol',
    description:
      'A multi-platform staking protocol designed to provide seamless staking experiences across blockchain ecosystems, with modular infrastructure for integrations.',
    tools: ['Cardano', 'Aiken', 'MeshJS', 'TypeScript'],
    site_link: 'https://lava-smart-contracts-bixd.vercel.app/',
  },
  {
    p_head: 'HydraStake',
    technical_focus: 'Privacy-preserving liquid staking on Midnight.',
    project_type: 'Blockchain',
    image_src: 'projects/hydrastake.webp',
    image_alt: 'HydraStake protocol logo',
    category: 'Privacy-preserving liquid staking',
    description:
      'Contributed to HydraStake, a privacy-preserving liquid staking protocol on Midnight and 1st-place DeFi Track winner at the Midnight London Summit Hackathon 2025.',
    tools: ['Midnight', 'Compact', 'ZK', 'Liquid Staking', 'DeFi'],
    github_link: 'https://github.com/TechMartins72/hydra-stake-protocol',
  },
  {
    p_head: 'FundAGoal',
    technical_focus: 'Crowdfunding with privacy on Midnight.',
    project_type: 'Blockchain',
    image_src: 'projects/fundagoal.webp',
    image_alt: 'FundAGoal crowdfunding application',
    category: 'Midnight hackathon winner',
    description:
      'Contributed to FundAGoal, a 1st-place Midnight Track winner at the African Blockchain Championship Hackathon.',
    tools: ['Midnight', 'Privacy', 'Web3', 'Crowdfunding', 'Hackathon'],
    site_link: 'http://fundagoal.s3-website.eu.north-1.amazonaws.com/',
    github_link: 'https://github.com/codeBigInt/fundagoal',
  },
  {
    p_head: 'Coverly',
    technical_focus:
      'Reusable product interfaces for AI-assisted cover letter creation.',
    project_type: 'Misc',
    image_src: 'projects/coverly.webp',
    image_alt: 'Coverly cover letter application',
    category: 'Frontend product',
    description:
      'AI-powered cover letter generator built as a polished web product for creating high-quality application letters quickly.',
    tools: ['React', 'Tailwind CSS', 'JavaScript', 'Product UI'],
    site_link: 'https://coverly.app/',
    github_link: 'https://github.com/workshopapps/coverletter.web',
  },
  {
    p_head: 'Little Lemon Restaurant',
    technical_focus: 'Responsive restaurant discovery and booking workflows.',
    project_type: 'Misc',
    image_src: 'projects/little-lemon-restaurant.webp',
    image_alt: 'Little Lemon restaurant website',
    category: 'Frontend application',
    description:
      'Restaurant website and booking experience for a Mediterranean dining brand, built with reusable React components and responsive UI patterns.',
    tools: ['React', 'HTML', 'CSS', 'Responsive Design'],
    site_link: 'https://scisamir-little-lemon.vercel.app/',
    github_link: 'https://github.com/scisamir/meta-frontend-developer-capstone',
  },
  {
    p_head: 'Fullstack DevOps',
    featured: true,
    technical_focus:
      'Automated cloud provisioning, delivery and observability.',
    project_type: 'DevOps',
    image_src: 'projects/fullstack-devops.webp',
    image_alt:
      'Employee management application deployed with the Fullstack DevOps pipeline',
    category: 'Cloud DevOps system',
    description:
      'End-to-end cloud DevOps project using CI/CD, configuration management, monitoring, alerting, and AWS infrastructure automation.',
    tools: ['AWS', 'CircleCI', 'CloudFormation', 'Ansible', 'Prometheus'],
    site_link: 'https://github.com/scisamir/udacity-cloud-devops-project3',
    github_link: 'https://github.com/scisamir/udacity-cloud-devops-project3',
  },
  {
    p_head: 'Operationalized Microservice',
    technical_focus:
      'Containerized machine learning with Kubernetes and CI/CD.',
    project_type: 'DevOps',
    image_src: 'projects/operationalized-microservice.webp',
    image_alt:
      'Docker Hub repository for the machine learning microservice image',
    category: 'Container orchestration',
    description:
      'Operationalized machine learning microservice with containerization, Kubernetes deployment, and automated delivery workflow.',
    tools: ['Docker', 'Kubernetes', 'CircleCI', 'Python'],
    site_link:
      'https://hub.docker.com/repository/docker/scisamir/ml_microservice_api/general',
    github_link: 'https://github.com/scisamir/operationalized_microservice',
  },
  {
    p_head: 'Cardano Developer Course',
    technical_focus:
      'Making Aiken smart contract development accessible to developers.',
    site_label: 'Read course',
    project_type: 'Blockchain',
    image_src: 'projects/cardanodevcourse.webp',
    image_alt:
      'Cardano Development Course, Module 1: Introduction to Cardano Development',
    category: 'Developer education',
    description:
      'Educational content designed to help developers learn Cardano smart contract development with Aiken.',
    tools: ['Aiken', 'Cardano', 'Education', 'Smart Contracts'],
    site_link:
      'https://github.com/betterafricafdn/NextGen-Africa/blob/main/Cardano%20Development%20Course%20Module%201.pdf',
  },
  {
    p_head: 'TELA Maize Research Project',
    featured: true,
    technical_focus: 'Farmer awareness and perceptions of GM TELA maize.',
    site_label: 'Read research',
    project_type: 'Biotech',
    image_src: 'projects/telamaize.webp',
    image_alt: 'An ear of maize on a green stalk',
    category: 'Biotechnology research',
    description:
      "Participatory Rural Appraisal study on farmers' awareness and perceptions of GM TELA maize in Niger State, Nigeria.",
    tools: ['Biotechnology', 'Agritech', 'Field Research', 'PRA'],
    site_link:
      'https://docs.google.com/document/d/1Bb3nGTt0BV3hc5Ile2JmZPzAfKtuZRIE/edit?usp=sharing&ouid=113358264175618603101&rtpof=true&sd=true',
  },
];

export default MyProjects;
