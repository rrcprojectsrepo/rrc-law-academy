import Button from '../Button';

export default function ProgramCTA({ program }) {
  const { cta } = program;
  return (
    <section className="rrc-section rrc-section--navy rrc-program-cta" aria-labelledby="rrc-program-cta-title">
      <div className="rrc-container rrc-program-cta__inner">
        <div>
          <p className="rrc-eyebrow">Take the Next Step</p>
          <h2 id="rrc-program-cta-title" className="rrc-h2">{cta.title}</h2>
          <p className="rrc-lead">{cta.text}</p>
        </div>
        <div className="rrc-btn-row">
          {cta.primaryCta ? <Button to={cta.primaryCta.link} variant="primary">{cta.primaryCta.label}</Button> : null}
          {cta.secondaryCta ? <Button to={cta.secondaryCta.link} variant="secondary">{cta.secondaryCta.label}</Button> : null}
        </div>
      </div>
    </section>
  );
}
