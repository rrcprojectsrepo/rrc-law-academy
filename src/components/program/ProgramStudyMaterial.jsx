import RrcIcon from '../RrcIcon';
import { ProgramSection } from './ProgramSection';

export default function ProgramStudyMaterial({ program }) {
  return (
    <ProgramSection id="study-material" eyebrow="Study Material & Resources" title={program.studyMaterial.title}>
      <div className="rrc-card rrc-program-panel">
        <p className="rrc-program-panel__intro">{program.studyMaterial.text}</p>
        <ul className="rrc-program-bullets rrc-program-bullets--columns">
          {program.studyMaterial.items.map((item) => <li key={item}><RrcIcon name="check_circle" size={17} /><span>{item}</span></li>)}
        </ul>
      </div>
    </ProgramSection>
  );
}
