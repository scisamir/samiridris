import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { ProjectProps } from './Project.type';
import { projectId } from '../../../static/project-id';
import './styles.css';

export default function Project({
  image_src,
  image_alt,
  p_head,
  category,
  description,
  tools,
  site_link,
  github_link,
  site_label,
  technical_focus,
  index,
}: ProjectProps & { index: number }) {
  const showSite = site_link && site_link !== github_link;
  return (
    <article
      id={projectId(p_head)}
      className={'project-entry' + (!image_src ? ' project-without-image' : '')}
    >
      <span className="project-number" aria-hidden="true">
        {String(index).padStart(2, '0')}
      </span>
      <div className="project-copy">
        <p className="project-category">{category}</p>
        <h3>{p_head}</h3>
        <p className="project-description">{description}</p>
        {technical_focus && (
          <p className="project-focus">
            <span>FOCUS</span>
            {technical_focus}
          </p>
        )}
        <ul className="project-tools" aria-label={p_head + ' technologies'}>
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <div className="project-links">
          {showSite && (
            <a
              className="text-link"
              href={site_link}
              target="_blank"
              rel="noreferrer"
            >
              {site_label || 'Explore ' + p_head}
              <FiArrowUpRight aria-hidden="true" />
              <span className="sr-only">: {p_head}</span>
            </a>
          )}
          {github_link && (
            <a
              className="text-link"
              href={github_link}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub aria-hidden="true" />
              Source code
              <FiArrowUpRight aria-hidden="true" />
              <span className="sr-only">: {p_head}</span>
            </a>
          )}
        </div>
      </div>
      {image_src && (
        <a
          className="project-image-link"
          href={site_link || github_link}
          target="_blank"
          rel="noreferrer"
          aria-label={'Open ' + p_head}
        >
          <div className="project-image-meta" aria-hidden="true">
            <span />
            <span />
            <span />
            <span>{p_head}</span>
            <FiArrowUpRight />
          </div>
          <img
            className="project-image"
            src={'/' + image_src}
            alt={image_alt || p_head + ' project preview'}
            loading="lazy"
            decoding="async"
            width="800"
            height="450"
          />
        </a>
      )}
    </article>
  );
}
