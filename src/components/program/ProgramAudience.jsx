import { ProgramCards, ProgramSection } from './ProgramSection';

export default function ProgramAudience({ program }) {
  return (
    <ProgramSection id="audience" className="rrc-section--light" eyebrow="Who Is This Programme For?" title="Who Is This Programme For?">
      <ProgramCards items={program.targetAudience}>
        {(item) => <article key={item.id} className="rrc-card"><h3 className="rrc-card__title">{item.title}</h3><p className="rrc-card__text">{item.text}</p></article>}
      </ProgramCards>
    </ProgramSection>
  );
}
