import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';
import { profile } from '../../static/profile';
import './styles.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="01"
            label="About"
            title="An engineer's mind. A scientist's curiosity."
          />
          <div className="about-layout">
            <div className="about-copy">
              <p className="about-lead">
                I build software with a systems mindset and a researcher's
                curiosity.
              </p>
              <p>
                I'm Samir Idris (@scisamir), a software engineer, blockchain
                engineer and co-founder of Lucent Labs. My work spans smart
                contracts, distributed applications, frontend engineering and
                the infrastructure that brings them together, including Cardano
                development with Aiken and Plutus.
              </p>
              <p>
                My foundation is in the life sciences. I graduated with First
                Class Honours in Botany from Ahmadu Bello University, Zaria, as
                the department's best graduating student. Today, I'm exploring
                how software, AI and computational biology can inform one
                another.
              </p>
              <a
                className="text-link"
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
              >
                View my curriculum vitae <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <figure className="about-portrait">
              <img
                src="/samir-idris-portrait.webp"
                srcSet="/samir-idris-portrait-small.webp 320w, /samir-idris-portrait.webp 480w"
                sizes="(max-width: 600px) 156px, (max-width: 900px) 170px, 216px"
                alt="Portrait of Samir Idris"
                width="240"
                height="300"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span className="portrait-marker" /> BASED IN ABUJA
              </figcaption>
            </figure>
          </div>
          <dl className="about-footnotes">
            <div>
              <dt>BUILDING</dt>
              <dd>Software & distributed systems</dd>
            </div>
            <div>
              <dt>EXPLORING</dt>
              <dd>AI & computational biology</dd>
            </div>
            <div>
              <dt>FOUNDATION</dt>
              <dd>First Class B.Sc. Botany</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
