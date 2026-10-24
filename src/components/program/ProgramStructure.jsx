import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';

export default function ProgramStructure({ program }) {
  const structure = program.structure;
  if (!structure) return null;

  return (
    <section id="rrc-program-structure" className="rrc-section" aria-labelledby="rrc-program-structure-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Curriculum & Modules"
          title={structure.title}
          description={structure.description}
          align="left"
        />
        <div className="rrc-program-modules rrc-stagger">
          {structure.modules.map((module, idx) => (
            <article key={module.id} className="rrc-card rrc-program-module">
              <div className="rrc-program-module__head">
                <span className="rrc-badge rrc-badge--gold">Module 0{idx + 1}</span>
                <h3 className="rrc-card__title rrc-program-module__title">{module.title}</h3>
              </div>
              <ul className="rrc-program-bullets">
                {module.topics.map((topic) => (
                  <li key={topic}>
                    <RrcIcon name="check_circle" size={17} />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
