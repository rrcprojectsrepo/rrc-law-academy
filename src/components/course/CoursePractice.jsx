import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';

// 09 — Practice & Mocks. Layout comes from the shared .rrc-course-panel rules in
// CourseTemplate.css. practice.items is empty in data, so no counts are implied.
export default function CoursePractice({ course }) {
  if (!course || !course.practice) return null;
  const { title, text, items } = course.practice;

  return (
    <section
      id="rrc-course-practice"
      className="rrc-section rrc-section--light rrc-course-anchor"
    >
      <div className="rrc-container">
        <SectionHeader eyebrow="Practice" title={title} description={text} align="left" />
        <div className="rrc-course-panel">
          {items.length > 0 ? (
            <ul className="rrc-course-panel__list">
              {items.map((item) => (
                <li key={item}>
                  <RrcIcon name="check_circle" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rrc-course-panel__empty">
              Item-level practice details are not yet confirmed. Speak to a counsellor for the
              verified schedule.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
