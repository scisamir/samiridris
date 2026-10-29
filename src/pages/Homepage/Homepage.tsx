import { useState } from 'react';
import {
  FiArrowDown,
  FiArrowDownRight,
  FiArrowUpRight,
  FiGithub,
  FiMapPin,
  FiPause,
  FiPlay,
} from 'react-icons/fi';
import { profile } from '../../static/profile';
import './styles.css';

const descriptors = [
  'Software Engineer',
  'Blockchain Engineer',
  'Distributed Systems • Blockchain',
  'Software × Computational Biology',
];

export default function HomePage() {
  const [motionPaused, setMotionPaused] = useState(false);
  return (
    <section
      id="homepage"
      className={'hero' + (motionPaused ? ' hero-motion-paused' : '')}
      aria-label="Introduction"
    >
      <div className="hero-geometry" aria-hidden="true">
        <div className="hero-slice" />
      </div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span /> ENGINEERING / RESEARCH / BUILDING
          </p>
          <h1>Samir Idris</h1>
          <div className="hero-identity">
            <a
              className="hero-handle"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              @scisamir <FiArrowUpRight aria-hidden="true" />
            </a>
            <button
              type="button"
              className="hero-motion-toggle"
              aria-label="Pause hero animation"
              aria-pressed={motionPaused}
              title={motionPaused ? 'Resume animation' : 'Pause animation'}
              onClick={() => setMotionPaused(!motionPaused)}
            >
              {motionPaused ? (
                <FiPlay aria-hidden="true" />
              ) : (
                <FiPause aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hero-descriptors">
            <span className="sr-only">
              Software Engineer. Blockchain Engineer. Distributed Systems.
              Software and Computational Biology.
            </span>
            <div className="descriptor-rotation" aria-hidden="true">
              {descriptors.map((descriptor, index) => (
                <span
                  className={'descriptor descriptor-' + index}
                  key={descriptor}
                >
                  {descriptor}
                  <span className="descriptor-cursor">_</span>
                </span>
              ))}
            </div>
          </div>
          <p className="hero-summary">
            Building across distributed systems, blockchain and computational
            biology.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore my work <FiArrowDownRight aria-hidden="true" />
            </a>
            <a href="#contact" className="text-link">
              Get in touch <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-bottom">
          <a
            className="hero-github"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub aria-hidden="true" /> github.com/scisamir{' '}
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <span className="hero-location">
            <FiMapPin aria-hidden="true" /> Abuja
          </span>
          <a
            className="hero-scroll"
            href="#about"
            aria-label="A little further down to About"
          >
            A little further down <FiArrowDown aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
