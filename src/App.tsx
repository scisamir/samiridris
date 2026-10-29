import './App.css';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Experience from './pages/Experience/Experience';
import HomePage from './pages/Homepage/Homepage';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Stack from './pages/Stack/Stack';
import Github from './pages/Github/Github';
import { resolvePage } from './seo/routes';
import { WritingArticle, WritingIndex } from './pages/Writing/Writing';
import Breadcrumbs from './components/Breadcrumbs';

function App({ pathname = '/' }: { pathname?: string }) {
  const page = resolvePage(pathname);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header currentPage={page.type === 'home' ? undefined : page.type} />
      <main
        id="main"
        tabIndex={-1}
        className={page.type === 'home' ? undefined : 'document-page'}
      >
        {page.type === 'home' && (
          <>
            <HomePage />
            <About />
            <Experience />
            <Stack />
            <Projects />
            <Github />
            <Contact />
          </>
        )}
        {page.type === 'work' && (
          <>
            <div className="document-content work-intro container">
              <Breadcrumbs
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Engineering work' },
                ]}
              />
              <header className="document-heading">
                <p className="eyebrow">Projects & protocol contributions</p>
                <h1>Engineering work.</h1>
                <p>
                  Software engineering projects and contributions across
                  blockchain protocols, developer tooling, cloud infrastructure
                  and biotechnology research.
                </p>
              </header>
            </div>
            <Projects archive />
            <div className="container archive-contact">
              <a className="text-link" href="/#experience">
                Explore my experience
              </a>
              <a className="text-link" href="/#contact">
                Discuss a project
              </a>
            </div>
          </>
        )}
        {page.type === 'writing' && <WritingIndex />}
        {page.type === 'article' && <WritingArticle article={page.article} />}
        {page.type === 'not-found' && (
          <section className="document-content not-found container">
            <header className="document-heading">
              <p className="eyebrow">404</p>
              <h1>Page not found.</h1>
              <p>
                This page doesn't exist. You can return to my profile or explore
                my engineering work.
              </p>
            </header>
            <div className="not-found-links">
              <a className="button button-primary" href="/">
                Back to Samir Idris
              </a>
              <a className="text-link" href="/work">
                Engineering work
              </a>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
