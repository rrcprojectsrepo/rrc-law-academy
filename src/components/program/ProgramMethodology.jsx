import SectionHeader from '../SectionHeader';

export default function ProgramMethodology({ program }) {
  if (!program.methodology?.length) return null;

  return (
    <section id="rrc-program-methodology" className="rrc-section" aria-labelledby="rrc-program-methodology-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Preparation Methodology"
          title="The 5-Step Academic Preparation Cycle"
          description="Every concept is mastered through a disciplined progression from foundational understanding to exam execution."
          align="left"
        />
        <ol className="rrc-program-method-flow rrc-stagger">
          {program.methodology.map((item) => (
            <li key={item.id} className="rrc-card rrc-card--tint rrc-program-method-flow__step">
              <span className="rrc-badge rrc-badge--gold">{item.step}</span>
              <h3 className="rrc-card__title rrc-program-step-title">{item.title}</h3>
              <p className="rrc-card__text">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
