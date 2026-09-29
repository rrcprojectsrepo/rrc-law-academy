import RrcIcon from './RrcIcon';
import './ResourceCard.css';

// Reusable study-resource card from homepage.js resources items.
export default function ResourceCard({ resource }) {
  if (!resource) return null;
  const { icon, title, description } = resource;
  return (
    <article className="rrc-resource-card">
      <div className="rrc-resource-card__head">
        {icon ? (
          <span className="rrc-icon-badge rrc-resource-card__icon" aria-hidden="true">
            <RrcIcon name={icon} size={20} />
          </span>
        ) : null}
      </div>
      {title ? <h3 className="rrc-card__title">{title}</h3> : null}
      {description ? <p className="rrc-card__text">{description}</p> : null}
    </article>
  );
}

