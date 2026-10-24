import SectionHeader from '../SectionHeader';

export default function ProgramStudentJourney({ program }) {
  if (!program.studentJourney?.length) return null;

  return (
    <section id="rrc-program-journey" className="rrc-section rrc-section--light" aria-labelledby="rrc-program-journey-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Student Progression"
          title="Your Preparation Journey"
          description="A structured path from diagnostic baseline evaluation to final entrance readiness."
          align="left"
        />
        <div className="rrc-program-journey__grid rrc-stagger">
          {program.studentJourney.map((phase) => (
            <article key={phase.id} className="rrc-card rrc-program-journey-card">
              <span className="rrc-badge rrc-badge--navy">{phase.step}</span>
              <h3 className="rrc-card__title rrc-program-step-title">{phase.title}</h3>
              <p className="rrc-card__text">{phase.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
