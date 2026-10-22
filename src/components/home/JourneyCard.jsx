import { Link } from 'react-router-dom';
import RrcIcon from '../RrcIcon';
import './JourneyCard.css';

// Section 3 card — badge, icon, title, text, checklist, pathway image, pathway link.
export default function JourneyCard({ item }) {
  if (!item) return null;
  return (
    <article className="rrc-journey-card">
      <div className="rrc-journey-card__header">
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

      <div className="rrc-journey-card__bottom">
        {item.image ? (
          <div className="rrc-journey-card__media">
            <img
              src={item.image}
              alt={item.alt || item.imageAlt || item.title}
              className="rrc-journey-card__image"
              loading="lazy"
            />
          </div>
        ) : null}
        {item.link ? (
          <div className="rrc-journey-card__foot">
            <Link to={item.link} className="rrc-journey-card__link">
              {item.linkLabel ?? 'View Pathway'} →
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  );
}
