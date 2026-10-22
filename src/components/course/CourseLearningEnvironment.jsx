import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import './CourseLearningEnvironment.css';

// 14 — Learning Environment. Alternating split visual layout with classroom photo.
const ENV_ICONS = ['groups', 'psychology', 'menu_book', 'verified'];

export default function CourseLearningEnvironment({ course }) {
  if (!course || !course.learningEnvironment || course.learningEnvironment.length === 0) return null;
  const image = course.learningEnvironmentImage;
  const badge = course.learningEnvironmentBadge;

  return (
    <section
      id="rrc-course-environment"
      className="rrc-section rrc-course-anchor"
    >
      <div className="rrc-container">
        {image ? (
          <div className="rrc-env-split">
            <div className="rrc-env-split__visual">
              <div className="rrc-env-split__frame">
                <img
                  src={image}
                  alt={course.learningEnvironmentImageAlt || `${course.title} study environment and academic facilities`}
                  width="1536"
                  height="960"
                  loading="lazy"
                  decoding="async"
                  className="rrc-env-split__image"
                />
                <span className="rrc-env-split__badge">
                  <RrcIcon name="school" size={16} />
                  <span>{badge || 'Dedicated Academic Culture'}</span>
                </span>
              </div>
            </div>

            <div className="rrc-env-split__content">
              <SectionHeader
                eyebrow="Learning Environment"
                title="How Classes and Mentorship Are Delivered"
                description={course.learningEnvironmentDescription || 'We maintain a disciplined academic atmosphere combining personal mentoring, interactive doctrinal discussions, and focused individual research.'}
                align="left"
              />
              <div className="rrc-env-split__grid">
                {course.learningEnvironment.map((item, idx) => (
                  <div key={item} className="rrc-env-split__item">
                    <span className="rrc-icon-badge rrc-env-split__icon" aria-hidden="true">
                      <RrcIcon name={ENV_ICONS[idx % ENV_ICONS.length]} size={18} />
                    </span>
                    <span className="rrc-env-split__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <SectionHeader
              eyebrow="Learning Environment"
              title="How Classes and Mentorship Are Delivered"
              description="How classes are structured and academic mentorship is delivered."
              align="left"
            />
            <div className="rrc-course-panel">
              <ul className="rrc-course-panel__list">
                {course.learningEnvironment.map((item) => (
                  <li key={item}>
                    <RrcIcon name="check_circle" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
