import SectionHeader from '../SectionHeader';
import FacultyCard from '../FacultyCard';
import { facultyPlaceholders } from '../../data/homepage';

// Section 9 — Faculty & Mentors (placeholder-safe, no invented faculty).
export default function HomeFaculty() {
  return (
    <section className="rrc-section" aria-labelledby="rrc-faculty-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={facultyPlaceholders.eyebrow}
          title={facultyPlaceholders.title}
          description={facultyPlaceholders.text}
        />
        <p className="rrc-faculty__asset-note">[ASSET TO CONFIRM — faculty photos pending; avatar icons are placeholders]</p>
        <div className="rrc-grid-3 rrc-stagger">
          {facultyPlaceholders.items.map((person) => (
            <FacultyCard key={person.id} faculty={person} />
          ))}
        </div>
      </div>
    </section>
  );
}
