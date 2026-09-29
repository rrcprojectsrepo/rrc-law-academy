import { getProgramPage } from '../../data/programPages';
import ProgramHero from './ProgramHero';
import ProgramOverview from './ProgramOverview';
import ProgramAudience from './ProgramAudience';
import ProgramObjectives from './ProgramObjectives';
import ProgramFeatures from './ProgramFeatures';
import ProgramMethodology from './ProgramMethodology';
import ProgramStructure from './ProgramStructure';
import ProgramPractice from './ProgramPractice';
import ProgramCurrentAffairs from './ProgramCurrentAffairs';
import ProgramStudyMaterial from './ProgramStudyMaterial';
import ProgramFaculty from './ProgramFaculty';
import ProgramBatchInformation from './ProgramBatchInformation';
import ProgramLearningEnvironment from './ProgramLearningEnvironment';
import ProgramStudentJourney from './ProgramStudentJourney';
import ProgramFAQ from './ProgramFAQ';
import ProgramCTA from './ProgramCTA';
import './ProgramTemplate.css';

export default function ProgramTemplate({ slug }) {
  const program = getProgramPage(slug);

  if (!program) {
    return (
      <section className="rrc-section" aria-labelledby="rrc-program-missing-title">
        <div className="rrc-container rrc-program-missing">
          <h1 id="rrc-program-missing-title" className="rrc-h1">Programme not found</h1>
          <p className="rrc-lead">This programme page is not available.</p>
        </div>
      </section>
    );
  }

  return (
    <div className="rrc-program-template">
      <ProgramHero program={program} />
      <ProgramOverview program={program} />
      <ProgramAudience program={program} />
      <ProgramObjectives program={program} />
      <ProgramFeatures program={program} />
      <ProgramMethodology program={program} />
      <ProgramStructure program={program} />
      <ProgramPractice program={program} />
      <ProgramCurrentAffairs program={program} />
      <ProgramStudyMaterial program={program} />
      <ProgramFaculty program={program} />
      <ProgramBatchInformation program={program} />
      <ProgramLearningEnvironment program={program} />
      <ProgramStudentJourney program={program} />
      <ProgramFAQ program={program} />
      <ProgramCTA program={program} />
    </div>
  );
}
