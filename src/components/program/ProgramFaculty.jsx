import FacultyCard from '../FacultyCard';
import SectionHeader from '../SectionHeader';

export default function ProgramFaculty({ program }) {
  if (!program.faculty?.length) return null;

  return (
    <section id="rrc-program-faculty" className="rrc-section" aria-labelledby="rrc-program-faculty-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Academic Mentorship"
          title={`Faculty & Mentors for ${program.title}`}
          description="Our experienced legal educators and subject mentors provide individual diagnostic reviews, concept clarification, and ongoing preparation support."
          align="left"
        />
        <div className="rrc-grid-2 rrc-stagger">
          {program.faculty.map((member) => (
            <FacultyCard key={member.id} faculty={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
