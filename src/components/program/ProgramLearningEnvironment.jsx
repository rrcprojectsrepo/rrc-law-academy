import { ProgramSection, ProgramBulletList } from './ProgramSection';

export default function ProgramLearningEnvironment({ program }) {
  return (
    <ProgramSection id="learning-environment" className="rrc-section--light" eyebrow="Learning Environment" title="Learning Environment">
      <div className="rrc-card rrc-program-panel rrc-card--tint">
        <ProgramBulletList items={program.learningEnvironment} />
      </div>
    </ProgramSection>
  );
}
