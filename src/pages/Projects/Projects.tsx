import { useMemo, useState } from 'react';
import { FiArrowDown, FiArrowUp, FiArrowUpRight } from 'react-icons/fi';
import Project from './Project/Project';
import MyProjects from '../../static/projects';
import { ProjectGroup } from './Project/Project.type';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';
import './styles.css';

type ProjectFilter = 'All' | ProjectGroup;
const projectFilters: ProjectFilter[] = [
  'All',
  'Blockchain',
  'DevOps',
  'Biotech',
  'Misc',
];
const initialCount = 6;
const contributions = [
  {
    name: 'Minswap DEX',
    description:
      'Plutus V3 smart contract migration, CIP-113 support and protocol modernization.',
    href: 'https://minswap.org/',
  },
  {
    name: 'FluidTokens',
    description:
      'NFT fractionalization infrastructure and related protocol features.',
  },
  {
    name: 'Metera',
    description: 'Frontend engineering, integrations and ecosystem tooling.',
    href: 'https://app.meteraprotocol.io/',
  },
];

export default function Projects({ archive = false }: { archive?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [expanded, setExpanded] = useState(archive);
  const projects = useMemo(
    () => MyProjects.filter((project) => !project.hidden),
    [],
  );
  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === 'All' || project.project_type === activeFilter,
  );
  const selectedProjects =
    activeFilter === 'All' && projects.some((project) => project.featured)
      ? filteredProjects.filter((project) => project.featured)
      : filteredProjects;
  const visibleProjects =
    expanded || archive
      ? filteredProjects
      : selectedProjects.slice(0, initialCount);

  const toggleExpanded = () => {
    if (expanded)
      document
        .getElementById('work-filters')
        ?.scrollIntoView({ block: 'start' });
    setExpanded(!expanded);
  };

  return (
    <section id="projects" className="section work-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="04"
            label="Selected projects & major contributions"
            title="Engineering, in practice."
            aside="Protocols, products, infrastructure and research. A selection of the work I've built or contributed to."
          />
        </Reveal>
        <div id="work-filters" className="work-toolbar">
          <div
            className="project-filters"
            role="group"
            aria-label="Filter work by category"
          >
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setExpanded(false);
                }}
              >
                {filter}
                <span>
                  {projects
                    .filter(
                      (project) =>
                        filter === 'All' || project.project_type === filter,
                    )
                    .length.toString()
                    .padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>
          <span className="work-count" aria-live="polite">
            {String(visibleProjects.length).padStart(2, '0')} /{' '}
            {String(filteredProjects.length).padStart(2, '0')}
          </span>
        </div>
        <div className="projects-list" id="project-results">
          {visibleProjects.length ? (
            visibleProjects.map((project, index) => (
              <Reveal key={project.p_head}>
                <Project {...project} index={index + 1} />
              </Reveal>
            ))
          ) : (
            <p className="empty-projects">More work is on the way.</p>
          )}
        </div>
        {!archive &&
          filteredProjects.length >
            Math.min(selectedProjects.length, initialCount) && (
            <div className="work-expand">
              <button
                className="button"
                type="button"
                aria-expanded={expanded}
                aria-controls="project-results"
                onClick={toggleExpanded}
              >
                {expanded
                  ? 'Show selected work'
                  : 'View all ' + filteredProjects.length + ' projects'}
                {expanded ? (
                  <FiArrowUp aria-hidden="true" />
                ) : (
                  <FiArrowDown aria-hidden="true" />
                )}
              </button>
            </div>
          )}
        {!archive && (
          <div className="work-archive-link">
            <a className="text-link" href="/work">
              Browse all engineering work
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        )}
        <div className="contributions">
          <p className="eyebrow">More ecosystem contributions</p>
          <div className="contribution-grid">
            {contributions.map((contribution) => (
              <article key={contribution.name}>
                <h3>
                  {contribution.href ? (
                    <a
                      className="text-link"
                      href={contribution.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {contribution.name}
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  ) : (
                    contribution.name
                  )}
                </h3>
                <p>{contribution.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
