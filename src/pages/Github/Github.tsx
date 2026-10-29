import { FiArrowUpRight, FiAward, FiGithub, FiGitBranch } from 'react-icons/fi';
import Reveal from '../../components/Reveal';
import { profile } from '../../static/profile';
import './styles.css';

const repositories = [
  {
    name: 'minswap-dex-v2',
    stack: 'Aiken / Plutus V3 / CIP-113',
    href: 'https://github.com/scisamir/minswap-dex-v2',
  },
  {
    name: 'fiber-dev-kit',
    stack: 'Nervos CKB / TypeScript / JSON-RPC',
    href: 'https://github.com/scisamir/fiber-dev-kit',
  },
  {
    name: 'fractionalized-nft',
    stack: 'Cardano / Aiken / MeshJS / Svelte',
    href: 'https://github.com/scisamir/fractionalized-nft',
  },
];

export default function Github() {
  return (
    <section
      className="section github-section"
      aria-labelledby="github-heading"
    >
      <div className="container">
        <Reveal className="github-layout">
          <div className="github-copy">
            <p className="section-label">
              <span>05</span> / Open source
            </p>
            <h2 id="github-heading">
              The code is part
              <br />
              of the conversation.
            </h2>
            <p>
              Code, contributions and experiments. Follow what I'm building, or
              explore a few repositories I've worked on.
            </p>
            <a
              className="text-link github-profile"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub aria-hidden="true" />
              @scisamir
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="github-repositories">
            <p className="eyebrow">Selected repositories & contributions</p>
            {repositories.map((repo) => (
              <a
                className="repository-link"
                href={repo.href}
                key={repo.name}
                target="_blank"
                rel="noreferrer"
              >
                <FiGitBranch aria-hidden="true" />
                <span>
                  <span className="repository-name">{repo.name}</span>
                  <span className="repository-stack">{repo.stack}</span>
                </span>
                <FiArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal className="github-recognition">
          <h3>
            <FiAward aria-hidden="true" /> Engineering recognition
          </h3>
          <div className="recognition-list">
            <a
              href="https://github.com/TechMartins72/hydra-stake-protocol"
              target="_blank"
              rel="noreferrer"
            >
              <span className="recognition-place">
                01<span>ST</span>
              </span>
              <span className="recognition-details">
                <strong>DeFi Track / HydraStake</strong>
                <span>Midnight London Summit Hackathon 2025</span>
              </span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="https://github.com/codeBigInt/fundagoal"
              target="_blank"
              rel="noreferrer"
            >
              <span className="recognition-place">
                01<span>ST</span>
              </span>
              <span className="recognition-details">
                <strong>Midnight Track / FundAGoal</strong>
                <span>African Blockchain Championship Hackathon</span>
              </span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
