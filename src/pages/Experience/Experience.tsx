import './styles.css'

const roles = [
    {
        company: 'Lucent Labs',
        title: 'Co-founder & Blockchain Developer',
        period: '2024-Present',
        points: [
            'Co-founded and helped shape product and engineering direction.',
            'Developed Cardano smart contracts using Aiken, Lucid and MeshJS.',
            'Built decentralized applications and protocol infrastructure.',
            'Contributed to architecture discussions and code reviews.',
            'Contributed to HydraStake, a privacy-preserving liquid staking protocol on Midnight and 1st-place DeFi Track winner at the Midnight London Summit Hackathon 2025.',
            'Contributed to FundAGoal, a 1st-place Midnight Track winner at the African Blockchain Championship Hackathon.'
        ]
    },
    {
        company: 'Metera',
        title: 'Blockchain Developer',
        period: '2025-Present',
        points: [
            'Developed frontend features and integrations.',
            'Worked with Next.js, TypeScript, tRPC, Tailwind CSS, and Shadcn UI.',
            'Built and maintained ecosystem tools and dashboards.'
        ]
    },
    {
        company: 'Intersect',
        title: 'Product Committee Member',
        period: '2026-Present',
        points: [
            'Contributed to product and community initiatives within the Cardano ecosystem.'
        ]
    },
    {
        company: 'UCSC Sandbox Hackathon',
        title: 'Mentor',
        period: '2025',
        points: [
            'Mentored participants and received a Contributor Award.'
        ]
    }
];

const skillGroups = [
    {
        title: 'Blockchain',
        skills: ['Cardano', 'Midnight', 'Privacy', 'Aiken', 'MeshJS', 'Lucid', 'Solidity', 'Foundry', 'Base', 'wagmi', 'viem']
    },
    {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Shadcn UI']
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'tRPC']
    },
    {
        title: 'DevOps & Cloud',
        skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'CircleCI', 'CloudFormation', 'Ansible', 'Prometheus']
    },
    {
        title: 'Tools',
        skills: ['Git', 'GitHub', 'Bash', 'Linux']
    }
];

const Experience = () => {
    return (
        <section id="experience" className="sectionPad darkSection">
            <div className="sectionHeading">
                <p className="eyebrow">Experience</p>
                <h2>Protocol, product, and community work across Web3.</h2>
            </div>
            <div className="experienceLayout">
                <div className="timeline" aria-label="Professional experience">
                    {roles.map((role) => (
                        <article className="roleCard" key={`${role.company}-${role.title}`}>
                            <div className="roleMeta">
                                <span>{role.period}</span>
                            </div>
                            <div className="roleBody">
                                <p>{role.company}</p>
                                <h3>{role.title}</h3>
                                <ul>
                                    {role.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
                <aside className="skillColumn" aria-label="Technical skills">
                    <div className="evmPanel">
                        <p className="eyebrow">EVM expansion</p>
                        <h3>Expanded from Cardano into EVM development.</h3>
                        <p>
                            Experience includes Solidity, Foundry with Forge and Cast, Base ecosystem work,
                            wagmi, viem, and smart contract deployment and interaction.
                        </p>
                    </div>
                    <div className="skillsGrid">
                        {skillGroups.map((group) => (
                            <article key={group.title}>
                                <h3>{group.title}</h3>
                                <div>
                                    {group.skills.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="educationPanel">
                        <p className="eyebrow">Education</p>
                        <h3>Ahmadu Bello University, Zaria</h3>
                        <p>B.Sc. Botany, First Class Honours. Best Graduating Student in the Department.</p>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default Experience;
