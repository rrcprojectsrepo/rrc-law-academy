import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';

export default function ProgramAudience({ program }) {
  if (!program.targetAudience?.length) return null;

  return (
    <section id="rrc-program-audience" className="rrc-section rrc-section--light" aria-labelledby="rrc-program-audience-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Target Aspirants"
          title={`Who Is the ${program.shortTitle || program.title} For?`}
          description="This programme is carefully structured to address the distinct learning needs of candidates at different points in their academic journey."
          align="left"
        />
        <div className="rrc-program-audience__grid rrc-stagger">
          {program.targetAudience.map((item) => (
            <article key={item.id} className="rrc-card rrc-program-audience-card">
              <span className="rrc-icon-badge rrc-program-audience-card__icon" aria-hidden="true">
                <RrcIcon name="check_circle" size={20} />
              </span>
              <h3 className="rrc-card__title">{item.title}</h3>
              <p className="rrc-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
