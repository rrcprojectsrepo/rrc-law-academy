import FacultyCard from '../FacultyCard';
import { ProgramCards, ProgramSection } from './ProgramSection';

export default function ProgramFaculty({ program }) {
  return (
    <ProgramSection id="faculty" className="rrc-section--light" eyebrow="Faculty / Academic Guidance" title={`Faculty for ${program.title}`}>
      <ProgramCards items={program.faculty} className="rrc-grid-2">
        {(member) => <FacultyCard key={member.id} faculty={member} />}
      </ProgramCards>
    </ProgramSection>
  );
}
