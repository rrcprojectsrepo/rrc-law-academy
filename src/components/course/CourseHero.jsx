import Button from '../Button';
import RrcIcon from '../RrcIcon';
import './CourseHero.css';

// 1. Course Hero — two-column: copy + course visual.
export default function CourseHero({ course }) {
  if (!course) return null;
  const hasHeroImage = course.heroImage && !String(course.heroImage).includes('ASSET TO CONFIRM');
  return (
    <section className="rrc-course-hero" aria-labelledby="rrc-course-title">
      <div className="rrc-container rrc-course-hero__grid">
        <div className="rrc-course-hero__copy">
          {course.eyebrow ? <p className="rrc-eyebrow">{course.eyebrow}</p> : null}
          <h1 id="rrc-course-title" className="rrc-display rrc-course-hero__title">
            {course.title}
          </h1>
          <p className="rrc-lead">{course.description}</p>
          <div className="rrc-btn-row rrc-course-hero__ctas">
            <Button to={course.heroPrimaryCta?.link || '/registration'} variant="navy">
              {course.heroPrimaryCta?.label || 'Enquire Now →'}
            </Button>
            <Button to={course.heroSecondaryCta?.link || '/registration'} variant="secondary">
              {course.heroSecondaryCta?.label || 'Talk to a Counsellor'}
            </Button>
          </div>
          <ul className="rrc-course-hero__meta">
            <li>
              <RrcIcon name="workspace_premium" size={18} />
              <span>{course.level}</span>
            </li>
            <li>
              <RrcIcon name="verified" size={18} />
              <span>{course.session}</span>
            </li>
          </ul>
        </div>

        <div className="rrc-course-hero__visual">
          <div className={`rrc-course-hero__frame${hasHeroImage ? ' rrc-course-hero__frame--image' : ''}`}>
            {hasHeroImage ? (
              <img
                className="rrc-course-hero__image"
                src={course.heroImage}
                alt={course.heroImageAlt || (course.slug === 'clat-ug'
                  ? 'Indian students preparing for CLAT and law entrance examinations'
                  : `${course.title} students preparing for law entrance examinations`)}
              />
            ) : (
              <span
                className="rrc-course-hero__placeholder"
                role="img"
                aria-label={`${course.title} visual: ${course.heroImage}`}
              >
                [ASSET TO CONFIRM — {course.title} hero image]
              </span>
            )}
            <span className="rrc-course-hero__tag">{course.courseType}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
