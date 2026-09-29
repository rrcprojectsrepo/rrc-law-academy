import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';

// 11 — Study Material. Shared panel layout. studyMaterial.items carries
// "[TO CONFIRM]" suffixes from data and is rendered exactly as stored.
export default function CourseStudyMaterial({ course }) {
  if (!course || !course.studyMaterial) return null;
  const { title, text, items } = course.studyMaterial;

  return (
    <section
      id="rrc-course-study-material"
      className="rrc-section rrc-section--light rrc-course-anchor"
    >
      <div className="rrc-container">
        <SectionHeader eyebrow="Study Material" title={title} description={text} align="left" />
        <div className="rrc-course-panel">
          {items.length > 0 ? (
            <ul className="rrc-course-panel__list">
              {items.map((item) => (
                <li key={item}>
                  <RrcIcon name="library_books" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rrc-course-panel__empty">
              Material inventory is not yet confirmed. Speak to a counsellor for verified
              inclusions.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
