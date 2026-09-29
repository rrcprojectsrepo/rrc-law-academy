import SectionHeader from '../SectionHeader';
import FacultyCard from '../FacultyCard';
import Button from '../Button';

// 12 — Faculty. Reuses the shared 3-up grid + FacultyCard (placeholder-safe:
// data holds "[Faculty Profile To Be Announced]", which is rendered as-is).
export default function CourseFaculty({ course }) {
  if (!course || course.faculty.length === 0) return null;

  return (
    <section
      id="rrc-course-faculty"
      className="rrc-section rrc-course-anchor"
    >
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Faculty"
          title={`Faculty for ${course.title}`}
          description="Individual profiles are listed as provided in the approved data source and are updated as confirmations arrive."
          align="left"
        />
        <div className="rrc-grid-3 rrc-stagger">
          {course.faculty.map((member) => (
            <FacultyCard key={member.id} faculty={member} />
          ))}
        </div>
        <div className="rrc-btn-row rrc-course-faculty__cta">
          <Button to="/about" variant="secondary">
            Academy Overview
          </Button>
        </div>
      </div>
    </section>
  );
}
