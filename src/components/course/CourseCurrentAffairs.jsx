import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';

// 10 — Current Affairs / Legal Updates. Same shared panel layout as Practice.
// currentAffairs.items is empty in data — no cadence or counts are invented.
export default function CourseCurrentAffairs({ course }) {
  if (!course || !course.currentAffairs) return null;
  const { title, text, items } = course.currentAffairs;

  return (
    <section
      id="rrc-course-current-affairs"
      className="rrc-section rrc-course-anchor"
    >
      <div className="rrc-container">
        <SectionHeader eyebrow="Current Affairs" title={title} description={text} align="left" />
        <div className="rrc-course-panel">
          {items.length > 0 ? (
            <ul className="rrc-course-panel__list">
              {items.map((item) => (
                <li key={item}>
                  <RrcIcon name="newspaper" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rrc-course-panel__empty">
              Update format and frequency are not yet confirmed. Speak to a counsellor for the
              verified schedule.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
