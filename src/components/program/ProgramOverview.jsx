import { ProgramSection } from './ProgramSection';

export default function ProgramOverview({ program }) {
  return (
    <ProgramSection id="overview" eyebrow="Programme Overview" title={`About ${program.title}`}>
      <div className="rrc-program-prose">
        {program.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </ProgramSection>
  );
}
