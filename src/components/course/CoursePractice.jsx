import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import './CoursePractice.css';

// 09 — Practice & Mocks. Split 2-col layout with assessment visual when provided.
export default function CoursePractice({ course }) {
  if (!course || !course.practice) return null;
  const { title, text, items, image, badge, tip, imageAlt } = course.practice;

  return (
    <section
      id="rrc-course-practice"
      className="rrc-section rrc-section--light rrc-course-anchor"
    >
      <div className="rrc-container">
        {image ? (
          <div className="rrc-practice-split">
            <div className="rrc-practice-split__content">
              <SectionHeader eyebrow="Practice & Assessment" title={title} description={text} align="left" />
              {items?.length > 0 ? (
                <ul className="rrc-practice-split__list">
                  {items.map((item) => (
                    <li key={item}>
                      <span className="rrc-practice-split__check" aria-hidden="true">
                        <RrcIcon name="check_circle" size={18} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="rrc-practice-split__tip">
                <RrcIcon name="lightbulb" size={18} />
                <p>
                  <strong>Exam Simulation Strategy:</strong>{' '}
                  {tip || '2-hour proctored mocks build reading stamina for navigating complex legal extracts and passage-based objective questions under timed conditions.'}
                </p>
              </div>
            </div>

            <div className="rrc-practice-split__visual">
              <div className="rrc-practice-split__frame">
                <img
                  src={image}
                  alt={imageAlt || `${course.title} mock test paper and test analytics`}
                  width="800"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="rrc-practice-split__image"
                />
                <span className="rrc-practice-split__badge">
                  <RrcIcon name="verified" size={16} />
                  <span>{badge || 'Consortium Pattern Mocks'}</span>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <SectionHeader eyebrow="Practice" title={title} description={text} align="left" />
            <div className="rrc-course-panel">
              {items?.length > 0 ? (
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
                  Practice frameworks for this course are updated as confirmed.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
