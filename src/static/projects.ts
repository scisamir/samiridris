import { ProjectProps } from '../pages/Projects/Project/Project.type';

const MyProjects: ProjectProps[] = [
    {
        p_head: 'Minswap DEX',
        image_src: 'projects/minswap.png',
        category: 'Major protocol contribution',
        description: 'Refactored smart contracts to Plutus V3, integrated CIP-113 support, and contributed to protocol improvements and modernization.',
        tools: ['Cardano', 'Aiken', 'MeshJS', 'TypeScript', 'DEX'],
        site_link: 'https://minswap.org/'
    },
    {
        p_head: 'Statera Protocol',
        image_src: 'projects/statera.png',
        category: 'Zero-interest Cardano protocol',
        description: 'Zero-interest collateral protocol on Cardano featuring collateral management, position NFTs, batching, and pool architecture.',
        tools: ['Cardano', 'Aiken', 'Lucid', 'MeshJS', 'Protocol Design'],
        site_link: 'https://statera-protocol-cardano.vercel.app/'
    },
    {
        p_head: 'Lava',
        image_src: 'projects/lava.png',
        category: 'Multi-platform staking protocol',
        description: 'A multi-platform staking protocol designed to provide seamless staking experiences across blockchain ecosystems, with modular infrastructure for integrations.',
        tools: ['Cardano', 'Aiken', 'MeshJS', 'TypeScript'],
        site_link: 'https://lava-smart-contracts-bixd.vercel.app/'
    },
    {
        p_head: 'MinutesMarkets',
        image_src: 'projects/minutemarkets.png',
        category: 'Decentralized application tooling',
        description: 'Platform infrastructure for decentralized product creation and participation.',
        tools: ['Next.js', 'TypeScript', 'tRPC', 'Web3'],
        site_link: 'https://www.minutemarkets.io/'
    },
    {
        p_head: 'Metera Indexes',
        image_src: 'projects/meteraindexes.png',
        category: 'Ecosystem analytics',
        description: 'Dashboard and tooling for index management and ecosystem analytics.',
        tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
        site_link: 'https://app.meteraprotocol.io/'
    },
    {
        p_head: 'Cardano Developer Course',
        image_src: 'projects/cardanodevcourse.png',
        category: 'Developer education',
        description: 'Educational content designed to help developers learn Cardano smart contract development with Aiken.',
        tools: ['Aiken', 'Cardano', 'Education', 'Smart Contracts'],
        site_link: 'https://github.com/betterafricafdn/NextGen-Africa/blob/main/Cardano%20Development%20Course%20Module%201.pdf'
    },
    {
        p_head: 'TELA Maize Research Project',
        image_src: 'projects/telamaize.jpg',
        category: 'Biotechnology research',
        description: "Participatory Rural Appraisal study on farmers' awareness and perceptions of GM TELA maize in Niger State, Nigeria.",
        tools: ['Biotechnology', 'Agritech', 'Field Research', 'PRA'],
        site_link: 'https://docs.google.com/document/d/1Bb3nGTt0BV3hc5Ile2JmZPzAfKtuZRIE/edit?usp=sharing&ouid=113358264175618603101&rtpof=true&sd=true'
    }
];

export default MyProjects;
