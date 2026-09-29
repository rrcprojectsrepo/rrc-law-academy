import RrcIcon from './RrcIcon';
import Button from './Button';
import './FeatureCard.css';

// Reusable pillar/feature card: number OR icon, title, text.
// tone: light (default) | navy (Why RRC section) | highlight (gold-tinted full-span).
export default function FeatureCard({ number, icon, title, description, text, tone = 'light', cta }) {
  const body = description ?? text;
  return (
    <article className={`rrc-feature-card rrc-feature-card--${tone}`}>
      {number ? (
        <p className="rrc-feature-card__number" aria-hidden="true">
          {number}
        </p>
      ) : null}
      {icon ? (
        <span className="rrc-icon-badge rrc-feature-card__icon" aria-hidden="true">
          <RrcIcon name={icon} size={20} />
        </span>
      ) : null}
      {title ? <h3 className="rrc-feature-card__title">{title}</h3> : null}
      {body ? <p className="rrc-feature-card__text">{body}</p> : null}
      {cta ? (
        <div className="rrc-feature-card__cta">
          <Button to={cta.link} href={cta.link ? undefined : cta.href} variant="gold" size="sm">
            {cta.label}
          </Button>
        </div>
      ) : null}
    </article>
  );
}

