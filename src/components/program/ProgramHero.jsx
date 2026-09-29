import Button from '../Button';
import './ProgramTemplate.css';

const PROGRAM_HERO_ALT = {
  foundation: 'Students building foundations for law entrance preparation',
  'intensive-revision': 'Students focused on intensive law entrance revision',
  'mock-test': 'Law entrance aspirants taking a mock test',
  'current-affairs': 'Law entrance aspirant studying current affairs and general knowledge',
};

export default function ProgramHero({ program }) {
  const [primary, secondary] = [program.cta?.primaryCta, program.cta?.secondaryCta];
  const hasHeroImage = program.heroImage && !String(program.heroImage).includes('ASSET TO CONFIRM');

  return (
    <section className="rrc-program-hero rrc-section--navy" aria-labelledby="rrc-program-title">
      <div className="rrc-container rrc-program-hero__grid">
        <div className="rrc-program-hero__copy">
          {program.eyebrow ? <p className="rrc-eyebrow">{program.eyebrow}</p> : null}
          <h1 id="rrc-program-title" className="rrc-display rrc-program-hero__title">{program.title}</h1>
          <p className="rrc-lead">{program.description}</p>
          <div className="rrc-btn-row rrc-program-hero__actions">
            {primary ? <Button to={primary.link} variant="primary">{primary.label}</Button> : null}
            {secondary ? <Button to={secondary.link} variant="secondary">{secondary.label}</Button> : null}
          </div>
        </div>
        <div className="rrc-program-hero__visual">
          <div className={`rrc-program-hero__frame${hasHeroImage ? ' rrc-program-hero__frame--image' : ''}`}>
            {hasHeroImage ? (
              <img
                className="rrc-program-hero__image"
                src={program.heroImage}
                alt={PROGRAM_HERO_ALT[program.slug] || `${program.title} students preparing for law entrance examinations`}
              />
            ) : (
              <div role="img" aria-label={`${program.title} visual: [ASSET TO CONFIRM]`}>
                <span className="rrc-program-hero__mark" aria-hidden="true">RRC</span>
                <span className="rrc-program-hero__placeholder">[ASSET TO CONFIRM]</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
