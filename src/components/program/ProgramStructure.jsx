import RrcIcon from '../RrcIcon';
import { ProgramSection } from './ProgramSection';

export default function ProgramStructure({ program }) {
  const structure = program.structure;
  return (
    <ProgramSection id="structure" className="rrc-section--light" eyebrow="Programme Structure" title={structure.title} description={structure.description}>
      <div className="rrc-program-modules rrc-stagger">
        {structure.modules.map((module) => (
          <article key={module.id} className="rrc-card rrc-program-module">
            <h3 className="rrc-card__title">{module.title}</h3>
            <ul className="rrc-program-bullets">
              {module.topics.map((topic) => <li key={topic}><RrcIcon name="check_circle" size={17} /><span>{topic}</span></li>)}
            </ul>
          </article>
        ))}
      </div>
    </ProgramSection>
  );
}
