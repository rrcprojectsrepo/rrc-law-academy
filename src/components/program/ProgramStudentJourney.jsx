import { ProgramCards, ProgramSection } from './ProgramSection';

export default function ProgramStudentJourney({ program }) {
  return (
    <ProgramSection id="student-journey" eyebrow="Student Journey" title="Your Preparation Journey">
      <ProgramCards items={program.studentJourney} className="rrc-grid-4">
        {(phase) => <article key={phase.id} className="rrc-card"><span className="rrc-badge">{phase.step}</span><h3 className="rrc-card__title rrc-program-step-title">{phase.title}</h3><p className="rrc-card__text">{phase.text}</p></article>}
      </ProgramCards>
    </ProgramSection>
  );
}
