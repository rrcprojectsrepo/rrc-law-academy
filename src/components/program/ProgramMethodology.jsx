import { ProgramCards, ProgramSection } from './ProgramSection';

export default function ProgramMethodology({ program }) {
  return (
    <ProgramSection id="methodology" eyebrow="Preparation Methodology" title="A Clear Preparation Cycle">
      <ProgramCards items={program.methodology} className="rrc-grid-3">
        {(item) => <article key={item.id} className="rrc-card rrc-card--tint"><span className="rrc-badge rrc-badge--gold">{item.step}</span><h3 className="rrc-card__title rrc-program-step-title">{item.title}</h3><p className="rrc-card__text">{item.text}</p></article>}
      </ProgramCards>
    </ProgramSection>
  );
}
