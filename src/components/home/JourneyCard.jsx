import { Link } from 'react-router-dom';
import RrcIcon from '../RrcIcon';
import './JourneyCard.css';

// Section 3 card — badge, icon, title, text, gold checklist, pathway link.
export default function JourneyCard({ item }) {
  if (!item) return null;
  return (
    <article className="rrc-journey-card">
      <div>
        <div className="rrc-journey-card__top">
          <span className="rrc-badge">{item.badge}</span>
          {item.icon ? (
            <span className="rrc-icon-badge rrc-journey-card__icon" aria-hidden="true">
              <RrcIcon name={item.icon} size={20} />
            </span>
          ) : null}
        </div>
        <h3 className="rrc-card__title">{item.title}</h3>
        <p className="rrc-card__text">{item.text}</p>
        {item.points?.length ? (
          <ul className="rrc-journey-card__points">
            {item.points.map((point) => (
              <li key={point}>
                <RrcIcon name="check_circle" size={16} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {item.link ? (
        <Link to={item.link} className="rrc-journey-card__link">
          {item.linkLabel ?? 'View Pathway'} →
        </Link>
      ) : null}
    </article>
  );
}
