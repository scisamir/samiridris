import {
  FiBox,
  FiCloud,
  FiCode,
  FiGitBranch,
  FiLayers,
  FiServer,
} from 'react-icons/fi';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';
import './styles.css';

const groups = [
  {
    title: 'Languages',
    icon: FiCode,
    skills: [
      'TypeScript',
      'JavaScript',
      'Python',
      'Rust',
      'Solidity',
      'Compact',
    ],
  },
  {
    title: 'Frontend',
    icon: FiLayers,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Shadcn UI'],
  },
  {
    title: 'Blockchain & protocols',
    icon: FiBox,
    skills: [
      'Cardano',
      'Aiken',
      'Plutus',
      'MeshJS',
      'Lucid',
      'Midnight',
      'EVM',
      'Nervos CKB',
      'Foundry',
      'Base',
      'wagmi',
      'viem',
    ],
  },
  {
    title: 'Backend & data',
    icon: FiServer,
    skills: ['Node.js', 'Flask', 'SQLAlchemy', 'tRPC', 'Redis', 'MySQL'],
  },
  {
    title: 'Infrastructure & delivery',
    icon: FiCloud,
    skills: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Nginx',
      'CI/CD',
      'CircleCI',
      'CloudFormation',
      'Ansible',
      'Prometheus',
    ],
  },
  {
    title: 'Engineering workflow',
    icon: FiGitBranch,
    skills: [
      'Git',
      'GitHub',
      'Linux',
      'Bash',
      'Smart contract testing',
      'Privacy & zero-knowledge',
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section stack-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="03"
            label="Technical stack"
            title="The tools behind the work."
            aside="From user interfaces to protocol logic and the infrastructure in between."
          />
        </Reveal>
        <div className="stack-grid">
          {groups.map((group, index) => (
            <Reveal key={group.title}>
              <div className="stack-group">
                <div className="stack-group-heading">
                  <group.icon aria-hidden="true" />
                  <h3>{group.title}</h3>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
