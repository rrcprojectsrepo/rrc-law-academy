import Button from '../Button';
import './ProgramTemplate.css';

export default function ProgramHero({ program }) {
  const [primary, secondary] = [program.cta?.primaryCta, program.cta?.secondaryCta];

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
          <div className="rrc-program-hero__frame" role="img" aria-label={`${program.title} visual: [ASSET TO CONFIRM]`}>
            <span className="rrc-program-hero__mark" aria-hidden="true">RRC</span>
            <span className="rrc-program-hero__placeholder">[ASSET TO CONFIRM]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
