import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { profile } from '../../static/profile';
import { publishedArticles } from '../../content/articles';
import './styles.css';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ currentPage }: { currentPage?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = [...links].reverse().find(({ id }) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 180;
      });
      setActive(
        currentPage === 'work'
          ? 'projects'
          : currentPage === 'article' || currentPage === 'writing'
            ? 'writing'
            : current?.id || '',
      );
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [currentPage]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onOutside);
    };
  }, [open]);

  return (
    <header
      ref={header}
      className={'site-header' + (scrolled || open ? ' header-scrolled' : '')}
    >
      <nav className="container nav-inner" aria-label="Main navigation">
        <a
          className="wordmark"
          href={currentPage ? '/' : '#homepage'}
          onClick={() => setOpen(false)}
          title="Back to home"
        >
          <span className="brand-mark" aria-hidden="true">
            s<span>i</span>
          </span>
          <span>
            Samir Idris<span className="brand-period">.</span>
          </span>
        </a>
        <div
          id="main-navigation"
          className={'nav-links' + (open ? ' nav-open' : '')}
        >
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={
                id === 'projects' && currentPage
                  ? '/work'
                  : (currentPage ? '/' : '') + '#' + id
              }
              aria-current={active === id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          {!!publishedArticles().length && (
            <a
              href="/writing"
              aria-current={active === 'writing' ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              Writing
            </a>
          )}
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="nav-cv"
          >
            CV <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <button
          ref={button}
          type="button"
          className="icon-button menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </nav>
    </header>
  );
}
