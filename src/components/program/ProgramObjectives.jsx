import { ProgramCards, ProgramSection } from './ProgramSection';

export default function ProgramObjectives({ program }) {
  return (
    <ProgramSection id="objectives" eyebrow="Programme Objectives" title="What You Will Work Toward">
      <ProgramCards items={program.objectives}>
        {(item) => <article key={item.id} className="rrc-card rrc-card--tint"><h3 className="rrc-card__title">{item.title}</h3><p className="rrc-card__text">{item.text}</p></article>}
      </ProgramCards>
    </ProgramSection>
  );
}
