import { Link } from 'react-router-dom';
import RrcIcon from './RrcIcon';
import './ProgramCard.css';

// Reusable programme card for quick strip + programmes sections.
// item: { icon, title, description, link, division?, badge? }.
export default function ProgramCard({ item, layout = 'card' }) {
  if (!item) return null;
  const { icon, title, description, link, division, badge } = item;
  const label = division ?? badge;
  const inner = (
    <>
      <div className="rrc-program-card__head">
        {icon ? (
          <span className="rrc-icon-badge rrc-program-card__icon" aria-hidden="true">
            <RrcIcon name={icon} size={20} />
          </span>
        ) : null}
        {label ? <span className="rrc-program-card__label">{label}</span> : null}
      </div>
      {title ? <h3 className="rrc-card__title">{title}</h3> : null}
      {description ? <p className="rrc-card__text">{description}</p> : null}
      {link ? <span className="rrc-program-card__link">Explore →</span> : null}
    </>
  );
  if (link && layout === 'strip') {
    return (
      <Link to={link} className="rrc-program-card rrc-program-card--strip">
        {inner}
      </Link>
    );
  }
  return <article className="rrc-program-card rrc-card">{inner}</article>;
}

