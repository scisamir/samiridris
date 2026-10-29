import { FiArrowUpRight } from 'react-icons/fi';
import {
  Article,
  ArticleBlock,
  publishedArticles,
  safeArticleLink,
} from '../../content/articles';
import Breadcrumbs from '../../components/Breadcrumbs';
import { projectId } from '../../static/project-id';
import { site } from '../../static/site';
import './styles.css';

function displayDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value));
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'paragraph':
      return <p>{block.text}</p>;
    case 'heading':
      return block.level === 2 ? (
        <h2 id={block.id}>{block.text}</h2>
      ) : (
        <h3 id={block.id}>{block.text}</h3>
      );
    case 'code':
      return (
        <figure className="article-code">
          <figcaption>{block.language}</figcaption>
          <pre>
            <code>{block.code}</code>
          </pre>
        </figure>
      );
    case 'list': {
      const List = block.ordered ? 'ol' : 'ul';
      return (
        <List>
          {block.items.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </List>
      );
    }
    case 'link':
      return safeArticleLink(block.href) ? (
        <p>
          <a href={block.href}>{block.label}</a>
        </p>
      ) : null;
    case 'image':
      return (
        <figure className="article-image">
          <img
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
            loading="lazy"
            decoding="async"
          />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
  }
}

export function WritingIndex() {
  return (
    <section className="document-content container">
      <Breadcrumbs
        items={[{ label: 'Home', href: '/' }, { label: 'Writing' }]}
      />
      <header className="document-heading">
        <p className="eyebrow">Notes from the work</p>
        <h1>Technical writing.</h1>
        <p>
          Original notes on software engineering, blockchain protocols,
          distributed systems and software for the life sciences.
        </p>
      </header>
      <div className="writing-list">
        {publishedArticles().map((article) => (
          <article key={article.slug}>
            <time dateTime={article.datePublished}>
              {displayDate(article.datePublished)}
            </time>
            <h2>
              <a href={'/writing/' + article.slug}>
                {article.title}
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </h2>
            <p>{article.description}</p>
          </article>
        ))}
      </div>
      <a className="text-link" href="/work">
        Explore related engineering work
        <FiArrowUpRight aria-hidden="true" />
      </a>
    </section>
  );
}

export function WritingArticle({ article }: { article: Article }) {
  const related = publishedArticles()
    .filter((entry) => entry.slug !== article.slug)
    .slice(0, 3);
  return (
    <article className="document-content article-page container">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Writing', href: '/writing' },
          { label: article.title },
        ]}
      />
      <header className="document-heading">
        <p className="article-byline">
          <a href="/#about" rel="author">
            {site.name}
          </a>
          <span>/</span>
          <time dateTime={article.datePublished}>
            {displayDate(article.datePublished)}
          </time>
        </p>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        {article.dateModified && (
          <p className="article-modified">
            Updated{' '}
            <time dateTime={article.dateModified}>
              {displayDate(article.dateModified)}
            </time>
          </p>
        )}
      </header>
      <div className="article-prose">
        {article.body.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </div>
      <footer className="article-footer">
        <p>
          Written by <a href="/#about">Samir Idris / @scisamir</a>.
        </p>
        {!!article.relatedProjects?.length && (
          <div>
            <h2>Related engineering work</h2>
            <ul>
              {article.relatedProjects.map((name) => (
                <li key={name}>
                  <a href={'/work#' + projectId(name)}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {!!related.length && (
          <div>
            <h2>More writing</h2>
            <ul>
              {related.map((entry) => (
                <li key={entry.slug}>
                  <a href={'/writing/' + entry.slug}>{entry.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <a className="text-link" href="/writing">
          All technical writing
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </footer>
    </article>
  );
}
