import RrcIcon from '../RrcIcon';
import { ProgramSection } from './ProgramSection';

export default function ProgramPractice({ program }) {
  return (
    <ProgramSection id="practice" eyebrow="Practice / Application" title={program.practice.title}>
      <div className="rrc-card rrc-program-panel">
        <p className="rrc-program-panel__intro">{program.practice.text}</p>
        <ul className="rrc-program-bullets rrc-program-bullets--columns">
          {program.practice.items.map((item) => <li key={item}><RrcIcon name="check_circle" size={17} /><span>{item}</span></li>)}
        </ul>
      </div>
    </ProgramSection>
  );
}
