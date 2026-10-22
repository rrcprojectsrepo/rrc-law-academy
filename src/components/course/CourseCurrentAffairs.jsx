import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import './CourseCurrentAffairs.css';

// 10 — Current Affairs / Legal Updates. Alternating split visual layout when image provided.
export default function CourseCurrentAffairs({ course }) {
  if (!course || !course.currentAffairs) return null;
  const { title, text, items, image, badge, note, imageAlt, eyebrow } = course.currentAffairs;

  return (
    <section
      id="rrc-course-current-affairs"
      className="rrc-section rrc-course-anchor"
    >
      <div className="rrc-container">
        {image ? (
          <div className="rrc-ca-split">
            <div className="rrc-ca-split__visual">
              <div className="rrc-ca-split__frame">
                <img
                  src={image}
                  alt={imageAlt || `${course.title} legal developments and case analysis materials`}
                  width="800"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="rrc-ca-split__image"
                />
                <span className="rrc-ca-split__badge">
                  <RrcIcon name="newspaper" size={16} />
                  <span>{badge || 'Weekly & Monthly Compendiums'}</span>
                </span>
              </div>
            </div>

            <div className="rrc-ca-split__content">
              <SectionHeader eyebrow={eyebrow || 'Legal Developments & GK'} title={title} description={text} align="left" />
              {items?.length > 0 ? (
                <ul className="rrc-ca-split__list">
                  {items.map((item) => (
                    <li key={item}>
                      <span className="rrc-ca-split__check" aria-hidden="true">
                        <RrcIcon name="check_circle" size={18} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="rrc-ca-split__note">
                <RrcIcon name="gavel" size={18} />
                <p>
                  <strong>Legal Developments Focus:</strong>{' '}
                  {note || 'Contemporary constitutional amendments, judicial pronouncements, and statutory developments are contextualized directly into passage formats.'}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <SectionHeader eyebrow={eyebrow || 'Current Affairs'} title={title} description={text} align="left" />
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
                  Current affairs and legal updates will be published once verified.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
