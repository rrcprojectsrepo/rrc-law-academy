import { Link } from 'react-router-dom';
import RrcIcon from './RrcIcon';
import './ResourceCard.css';

// Reusable study-resource card from homepage.js resources items or Resources page categories.
export default function ResourceCard({ resource }) {
  if (!resource) return null;
  const { icon, title, description, text, link, action, badge } = resource;
  const bodyText = description || text;

  return (
    <article className="rrc-resource-card">
      <div className="rrc-resource-card__head">
        {icon ? (
          <span className="rrc-icon-badge rrc-resource-card__icon" aria-hidden="true">
            <RrcIcon name={icon} size={20} />
          </span>
        ) : null}
        {badge ? (
          <span className="rrc-resource-card__badge">{badge}</span>
        ) : null}
      </div>
      {title ? <h3 className="rrc-card__title">{title}</h3> : null}
      {bodyText ? <p className="rrc-card__text">{bodyText}</p> : null}
      {link ? (
        <div className="rrc-resource-card__foot">
          <Link to={link} className="rrc-resource-card__link">
            <span>{action || 'Explore Resource'}</span>
            <span className="rrc-resource-card__arrow" aria-hidden="true"> →</span>
          </Link>
        </div>
      ) : null}
    </article>
  );
}

