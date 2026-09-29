import { ProgramCards, ProgramSection } from './ProgramSection';

export default function ProgramFeatures({ program }) {
  return (
    <ProgramSection id="features" className="rrc-section--light" eyebrow="Programme Features" title="A Structured Preparation Experience">
      <ProgramCards items={program.features}>
        {(item) => <article key={item.id} className="rrc-card"><span className="rrc-icon-badge" aria-hidden="true">{String(item.id).replace('feat-', '').padStart(2, '0')}</span><h3 className="rrc-card__title">{item.title}</h3><p className="rrc-card__text">{item.text}</p></article>}
      </ProgramCards>
    </ProgramSection>
  );
}
