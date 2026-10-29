import { FiArrowUp } from 'react-icons/fi';
import './styles.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="footer-name" href="/#homepage">
          Samir Idris<span>.</span>
        </a>
        <p>Software / Systems / Science</p>
        <span className="footer-copyright">&copy; {__BUILD_YEAR__}</span>
        <a
          className="icon-button footer-top"
          href="/#homepage"
          aria-label="Back to top"
          title="Back to top"
        >
          <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
