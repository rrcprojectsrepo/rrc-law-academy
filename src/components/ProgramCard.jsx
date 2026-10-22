import { Link } from 'react-router-dom';
import RrcIcon from './RrcIcon';
import './ProgramCard.css';

// Reusable programme card for quick strip + programmes sections.
// item: { icon, title, description, text, link, action, division?, badge? }.
export default function ProgramCard({ item, layout = 'card' }) {
  if (!item) return null;
  const { icon, title, description, text, link, action, division, badge } = item;
  const bodyText = description || text;
  const label = division ?? badge;
  const actionLabel = action || 'Explore';

  if (link && layout === 'strip') {
    return (
      <Link to={link} className="rrc-program-card rrc-program-card--strip">
        <div className="rrc-program-card__head">
          {icon ? (
            <span className="rrc-icon-badge rrc-program-card__icon" aria-hidden="true">
              <RrcIcon name={icon} size={20} />
            </span>
          ) : null}
          {label ? <span className="rrc-program-card__label">{label}</span> : null}
        </div>
        {title ? <h3 className="rrc-card__title">{title}</h3> : null}
        {bodyText ? <p className="rrc-card__text">{bodyText}</p> : null}
        <div className="rrc-program-card__foot">
          <span className="rrc-program-card__link">
            <span>{actionLabel}</span>
            <span className="rrc-program-card__arrow" aria-hidden="true"> →</span>
          </span>
        </div>
      </Link>
    );
  }

  return (
    <article className="rrc-program-card rrc-card">
      <div className="rrc-program-card__head">
        {icon ? (
          <span className="rrc-icon-badge rrc-program-card__icon" aria-hidden="true">
            <RrcIcon name={icon} size={20} />
          </span>
        ) : null}
        {label ? <span className="rrc-program-card__label">{label}</span> : null}
      </div>
      {title ? <h3 className="rrc-card__title">{title}</h3> : null}
      {bodyText ? <p className="rrc-card__text">{bodyText}</p> : null}
      {link ? (
        <div className="rrc-program-card__foot">
          <Link to={link} className="rrc-program-card__link">
            <span>{actionLabel}</span>
            <span className="rrc-program-card__arrow" aria-hidden="true"> →</span>
          </Link>
        </div>
      ) : null}
    </article>
  );
}

