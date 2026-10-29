import { FiAward } from 'react-icons/fi';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';
import './styles.css';

const roles = [
  {
    company: 'Lucent Labs',
    title: 'Co-founder & Blockchain Developer',
    period: '2024 / Present',
    current: true,
    points: [
      'Co-founded and helped shape product and engineering direction.',
      'Developed Cardano smart contracts using Aiken, MeshJS and Lucid.',
      'Built decentralized applications and protocol infrastructure.',
      'Contributed to architecture discussions and code reviews.',
    ],
    awards: [
      'Contributed to HydraStake, a privacy-preserving liquid staking protocol on Midnight. 1st place, DeFi Track, Midnight London Summit Hackathon 2025.',
      'Contributed to FundAGoal. 1st place, Midnight Track, African Blockchain Championship Hackathon.',
    ],
    technologies: 'Cardano / Aiken / MeshJS / Lucid / Midnight / TypeScript',
  },
  {
    company: 'Metera',
    title: 'Blockchain Developer',
    period: '2025 / Present',
    current: true,
    points: [
      'Developed frontend features and integrations for the Cardano ecosystem.',
      'Built and maintained ecosystem tools, index dashboards and analytics.',
      'Worked across Next.js, TypeScript, tRPC, Tailwind CSS and Shadcn UI.',
    ],
    technologies: 'Next.js / TypeScript / tRPC / Tailwind CSS',
  },
  {
    company: 'Intersect',
    title: 'Product Committee Member',
    period: '2026 / Present',
    current: true,
    points: [
      'Contributed to product and community initiatives within the Cardano ecosystem.',
    ],
    technologies: 'Product / Ecosystem / Community',
  },
  {
    company: 'UCSC Sandbox Hackathon',
    title: 'Mentor',
    period: '2025',
    current: false,
    points: [
      'Mentored participants through technical challenges and received a Contributor Award.',
    ],
    technologies: 'Mentorship / Developer Education',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="02"
            label="Experience"
            title="Built through doing."
            aside="Engineering, product and community. From protocol internals to the interfaces people use."
          />
        </Reveal>
        <div className="timeline" aria-label="Professional experience">
          {roles.map((role) => (
            <Reveal key={role.company}>
              <article className="experience-entry">
                <div className="experience-meta">
                  <span>{role.period}</span>
                  {role.current && (
                    <span className="current-role">CURRENT</span>
                  )}
                </div>
                <div className="experience-body">
                  <h3>{role.company}</h3>
                  <p className="experience-title">{role.title}</p>
                  <ul className="experience-points">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {role.awards && (
                    <ul
                      className="experience-awards"
                      aria-label="Hackathon achievements"
                    >
                      {role.awards.map((award) => (
                        <li key={award}>
                          <FiAward aria-hidden="true" />
                          <span>{award}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="experience-technologies">{role.technologies}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
