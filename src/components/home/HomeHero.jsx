import Button from '../Button';
import RrcIcon from '../RrcIcon';
import { hero } from '../../data/homepage';
import homeHeroImage from '../../assets/rrc-law-academy-home-hero.png';
import './HomeHero.css';

// Section 1 — Home hero with course-focused copy and supporting preparation points.
export default function HomeHero() {
  return (
    <section className="rrc-hero" aria-labelledby="rrc-hero-title">
      <div className="rrc-container rrc-hero__grid">
        <div className="rrc-hero__copy">
          <p className="rrc-hero__eyebrow">
            <span className="rrc-hero__dot" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 id="rrc-hero-title" className="rrc-display rrc-hero__title">
            {hero.title}
          </h1>
          <p className="rrc-lead">{hero.text}</p>
          <div className="rrc-btn-row rrc-hero__ctas">
            <Button to={hero.primaryCta.link} variant="navy">
              {hero.primaryCta.label} →
            </Button>
            <Button to={hero.secondaryCta.link} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <ul className="rrc-hero__trust">
            {hero.trustItems.map((item) => (
              <li key={item.text}>
                <RrcIcon name={item.icon} size={18} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rrc-hero__visual">
          <span className="rrc-hero__watermark" aria-hidden="true">
            <RrcIcon name="balance" size={180} />
          </span>
          <div className="rrc-hero__frame">
            <img
              className="rrc-hero__image"
              src={homeHeroImage}
              alt="RRC Law Academy students preparing for legal education"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
