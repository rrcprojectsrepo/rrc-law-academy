import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import './CourseStudyMaterial.css';

// 11 — Study Material. Split visual layout with tangible kit items when image provided.
const MATERIAL_ICONS = ['menu_book', 'assignment', 'history_edu', 'newspaper'];

export default function CourseStudyMaterial({ course }) {
  if (!course || !course.studyMaterial) return null;
  const { title, text, items, image, badge, imageAlt } = course.studyMaterial;

  return (
    <section
      id="rrc-course-study-material"
      className="rrc-section rrc-section--light rrc-course-anchor"
    >
      <div className="rrc-container">
        {image ? (
          <div className="rrc-study-split">
            <div className="rrc-study-split__content">
              <SectionHeader eyebrow="Study Material & Books" title={title} description={text} align="left" />
              {items?.length > 0 ? (
                <div className="rrc-study-split__grid">
                  {items.map((item, idx) => (
                    <div key={item} className="rrc-study-split__item">
                      <span className="rrc-icon-badge rrc-study-split__icon" aria-hidden="true">
                        <RrcIcon name={MATERIAL_ICONS[idx % MATERIAL_ICONS.length]} size={18} />
                      </span>
                      <span className="rrc-study-split__text">{item}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="rrc-study-split__visual">
              <div className="rrc-study-split__frame">
                <img
                  src={image}
                  alt={imageAlt || `${course.title} legal study materials, books, and reference modules`}
                  width="800"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="rrc-study-split__image"
                />
                <span className="rrc-study-split__badge">
                  <RrcIcon name="library_books" size={16} />
                  <span>{badge || 'Curated Study Kit'}</span>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <SectionHeader eyebrow="Study Material" title={title} description={text} align="left" />
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
                  Study material lists are updated as confirmed.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
