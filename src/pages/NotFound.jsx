// Dedicated 404 page — rendered only by the "*" route in App.jsx.
// Follows the existing page-hero pattern (Courses.jsx): eyebrow + h1 +
// lead + CTA row, then a link grid built from existing routes only.
// No business facts invented; uses design tokens and shared components.
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import RrcIcon from '../components/RrcIcon';
import './NotFound.css';

const NOT_FOUND_LINKS = [
  { to: '/', title: 'Home', text: 'Return to the homepage and start again.' },
  { to: '/courses', title: 'Courses', text: 'Explore CLAT and AILET preparation pathways.' },
  { to: '/programs', title: 'Programs', text: 'Review structured preparation programs.' },
  { to: '/registration', title: 'Enquiry', text: 'Send an enquiry about a course or program.' },
];

export default function NotFound() {
  return (
    <div className="rrc-not-found-page">
      <section className="rrc-section rrc-section--light" aria-labelledby="rrc-not-found-title">
        <div className="rrc-container rrc-not-found__inner">
          <span className="rrc-icon-badge rrc-icon-badge--gold" aria-hidden="true">
            <RrcIcon name="manage_search" size={24} />
          </span>
          <p className="rrc-eyebrow">Error 404</p>
          <h1 id="rrc-not-found-title" className="rrc-display rrc-not-found__title">
            Page Not Found
          </h1>
          <p className="rrc-lead rrc-not-found__intro">
            The page you are looking for does not exist or has moved. Use the links below to
            continue exploring RRC Law Academy.
          </p>
          <div className="rrc-btn-row rrc-not-found__actions">
            <Button to="/" variant="navy">
              Go to Home
            </Button>
            <Button to="/registration" variant="primary">
              Send an Enquiry
            </Button>
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Continue exploring">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Continue Exploring"
            title="Where Would You Like To Go?"
          />
          <div className="rrc-not-found__grid rrc-stagger">
            {NOT_FOUND_LINKS.map((item) => (
              <Link className="rrc-card rrc-not-found__card" key={item.to + item.title} to={item.to}>
                <h2 className="rrc-card__title">{item.title}</h2>
                <p className="rrc-card__text">{item.text}</p>
                <span className="rrc-not-found__link">
                  Open {item.title} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
