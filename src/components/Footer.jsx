import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import rrcLawAcademyLogo from '../assets/rrc-law-academy-logo.png';
import './Footer.css';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Why RRC', to: '/why-rrc' },
  { label: 'Career in Law', to: '/career-in-law' },
  { label: 'Study Resources', to: '/resources' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

const COURSE_LINKS = [
  { label: 'CLAT UG', to: '/courses/clat-ug' },
  { label: 'CLAT PG', to: '/courses/clat-pg' },
  { label: 'AILET UG', to: '/courses/ailet-ug' },
  { label: 'AILET PG', to: '/courses/ailet-pg' },
  { label: 'All Courses', to: '/courses' },
];

export default function Footer() {
  return (
    <footer className="rrc-footer">
      <div className="rrc-container rrc-footer__grid">
        <div className="rrc-footer__brand">
          <p className="rrc-footer__logo">
            <img className="rrc-footer__logo-image" src={rrcLawAcademyLogo} alt="RRC Law Academy" />
            RRC LAW ACADEMY
          </p>
          <p className="rrc-footer__desc">
            Placeholder description only. Detailed academy information will be added after approval.
          </p>
          <Link to="/registration" className="rrc-btn rrc-btn--primary rrc-footer__cta">
            Enquire Now <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <nav className="rrc-footer__col" aria-label="Quick links">
          <h2 className="rrc-footer__heading">Quick Links</h2>
          <ul>
            {QUICK_LINKS.map((item) => (
              <li key={item.to + item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="rrc-footer__col" aria-label="Courses">
          <h2 className="rrc-footer__heading">Courses</h2>
          <ul>
            {COURSE_LINKS.map((item) => (
              <li key={item.to + item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="rrc-footer__col">
          <h2 className="rrc-footer__heading">Contact</h2>
          <ul className="rrc-footer__contact">
            <li>Phone: [TO CONFIRM]</li>
            <li>Email: [TO CONFIRM]</li>
            <li>Address: [TO CONFIRM]</li>
          </ul>
          <Link to="/contact" className="rrc-footer__contact-link">
            Go to Contact page <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="rrc-footer__bottom">
        <div className="rrc-container rrc-footer__bottom-inner">
          <p>© {new Date().getFullYear()} RRC Law Academy. All rights reserved.</p>
          <p className="rrc-footer__note">Content placeholders only — details to be confirmed.</p>
        </div>
      </div>
    </footer>
  );
}

