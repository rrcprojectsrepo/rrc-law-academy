import RrcIcon from '../RrcIcon';
import { ProgramSection } from './ProgramSection';

export default function ProgramCurrentAffairs({ program }) {
  return (
    <ProgramSection id="current-affairs" className="rrc-section--light" eyebrow="Current Affairs & GK" title={program.currentAffairs.title}>
      <div className="rrc-card rrc-program-panel rrc-card--tint">
        <p className="rrc-program-panel__intro">{program.currentAffairs.text}</p>
        <ul className="rrc-program-bullets rrc-program-bullets--columns">
          {program.currentAffairs.items.map((item) => <li key={item}><RrcIcon name="check_circle" size={17} /><span>{item}</span></li>)}
        </ul>
      </div>
    </ProgramSection>
  );
}
