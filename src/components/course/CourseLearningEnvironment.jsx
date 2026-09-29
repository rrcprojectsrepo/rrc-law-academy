import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';

// 14 — Learning Environment. Plain string list from course.learningEnvironment
// (values such as "Small cohorts [TO CONFIRM]" are rendered verbatim).
// Uses the shared .rrc-course-panel layout from CourseTemplate.css.
export default function CourseLearningEnvironment({ course }) {
  if (!course || course.learningEnvironment.length === 0) return null;

  return (
    <section
      id="rrc-course-environment"
      className="rrc-section rrc-course-anchor"
    >
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Learning Environment"
          title="How Classes and Mentorship Are Delivered"
          align="left"
        />
        <div className="rrc-course-panel">
          <ul className="rrc-course-panel__list">
            {course.learningEnvironment.map((item) => (
              <li key={item}>
                <RrcIcon name="school" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
