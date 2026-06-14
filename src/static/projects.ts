import { ProjectProps } from '../pages/Projects/Project/Project.type';

const MyProjects: ProjectProps[] = [
    {
        p_head: 'Minswap DEX',
        project_type: 'Blockchain',
        image_src: 'projects/minswap.png',
        category: 'Major protocol contribution',
        description: 'Refactored smart contracts to Plutus V3, integrated CIP-113 support, and contributed to protocol improvements and modernization.',
        tools: ['Cardano', 'Aiken', 'MeshJS', 'TypeScript', 'DEX'],
        site_link: 'https://minswap.org/'
    },
    {
        p_head: 'Statera Protocol',
        project_type: 'Blockchain',
        image_src: 'projects/statera.png',
        category: 'Zero-interest Cardano protocol',
        description: 'Zero-interest collateral protocol on Cardano featuring collateral management, position NFTs, batching, and pool architecture.',
        tools: ['Cardano', 'Aiken', 'Lucid', 'MeshJS', 'Protocol Design'],
        site_link: 'https://statera-protocol-cardano.vercel.app/'
    },
    {
        p_head: 'Lava',
        project_type: 'Blockchain',
        image_src: 'projects/lava.png',
        category: 'Multi-platform staking protocol',
        description: 'A multi-platform staking protocol designed to provide seamless staking experiences across blockchain ecosystems, with modular infrastructure for integrations.',
        tools: ['Cardano', 'Aiken', 'MeshJS', 'TypeScript'],
        site_link: 'https://lava-smart-contracts-bixd.vercel.app/'
    },
    {
        p_head: 'MinutesMarkets',
        project_type: 'Blockchain',
        image_src: 'projects/minutemarkets.png',
        category: 'Decentralized application tooling',
        description: 'Platform infrastructure for decentralized product creation and participation.',
        tools: ['Next.js', 'TypeScript', 'tRPC', 'Web3'],
        site_link: 'https://www.minutemarkets.io/'
    },
    {
        p_head: 'Metera Indexes',
        project_type: 'Blockchain',
        image_src: 'projects/meteraindexes.png',
        category: 'Ecosystem analytics',
        description: 'Dashboard and tooling for index management and ecosystem analytics.',
        tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
        site_link: 'https://app.meteraprotocol.io/'
    },
    {
        p_head: 'Coverly',
        project_type: 'Frontend',
        image_src: 'project1.png',
        category: 'Frontend product',
        description: 'AI-powered cover letter generator built as a polished web product for creating high-quality application letters quickly.',
        tools: ['React', 'Tailwind CSS', 'JavaScript', 'Product UI'],
        site_link: 'https://coverly.app/',
        github_link: 'https://github.com/workshopapps/coverletter.web'
    },
    {
        p_head: 'Little Lemon Restaurant',
        project_type: 'Frontend',
        image_src: 'project0.jpg',
        category: 'Frontend application',
        description: 'Restaurant website and booking experience for a Mediterranean dining brand, built with reusable React components and responsive UI patterns.',
        tools: ['React', 'HTML', 'CSS', 'Responsive Design'],
        site_link: 'https://scisamir-little-lemon.vercel.app/',
        github_link: 'https://github.com/scisamir/meta-frontend-developer-capstone'
    },
    {
        p_head: 'Fullstack DevOps',
        project_type: 'DevOps',
        image_src: 'projectd3.png',
        category: 'Cloud DevOps system',
        description: 'End-to-end cloud DevOps project using CI/CD, configuration management, monitoring, alerting, and AWS infrastructure automation.',
        tools: ['AWS', 'CircleCI', 'CloudFormation', 'Ansible', 'Prometheus'],
        site_link: 'https://github.com/scisamir/udacity-cloud-devops-project3',
        github_link: 'https://github.com/scisamir/udacity-cloud-devops-project3'
    },
    {
        p_head: 'Operationalized Microservice',
        project_type: 'DevOps',
        image_src: 'projectd2.jpg',
        category: 'Container orchestration',
        description: 'Operationalized machine learning microservice with containerization, Kubernetes deployment, and automated delivery workflow.',
        tools: ['Docker', 'Kubernetes', 'CircleCI', 'Python'],
        site_link: 'https://hub.docker.com/repository/docker/scisamir/ml_microservice_api/general',
        github_link: 'https://github.com/scisamir/operationalized_microservice'
    },
    {
        p_head: 'Cardano Developer Course',
        project_type: 'Blockchain',
        image_src: 'projects/cardanodevcourse.png',
        category: 'Developer education',
        description: 'Educational content designed to help developers learn Cardano smart contract development with Aiken.',
        tools: ['Aiken', 'Cardano', 'Education', 'Smart Contracts'],
        site_link: 'https://github.com/betterafricafdn/NextGen-Africa/blob/main/Cardano%20Development%20Course%20Module%201.pdf'
    },
    {
        p_head: 'TELA Maize Research Project',
        project_type: 'Biotech',
        image_src: 'projects/telamaize.jpg',
        category: 'Biotechnology research',
        description: "Participatory Rural Appraisal study on farmers' awareness and perceptions of GM TELA maize in Niger State, Nigeria.",
        tools: ['Biotechnology', 'Agritech', 'Field Research', 'PRA'],
        site_link: 'https://docs.google.com/document/d/1Bb3nGTt0BV3hc5Ile2JmZPzAfKtuZRIE/edit?usp=sharing&ouid=113358264175618603101&rtpof=true&sd=true'
    }
];

export default MyProjects;
