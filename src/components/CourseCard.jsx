import Button from './Button';
import RrcIcon from './RrcIcon';
import './CourseCard.css';

// Reusable course card driven by src/data/courses.js.
// badgeVariant: light (pale blue) | navy (dark navy + bright gold text).
export default function CourseCard({ course, linkLabel }) {
  if (!course) return null;
  const title = course.shortTitle || course.title;
  const badge = course.badge || course.level;
  const badgeVariant = course.badgeVariant || (course.level === 'Postgraduate' ? 'navy' : 'light');
  const tag = course.tag || course.courseType;
  const description = course.description;
  const points = course.points || [];
  const link = course.link || (course.slug ? `/courses/${course.slug}` : null);
  const image = course.image || (course.heroImage && !String(course.heroImage).includes('ASSET TO CONFIRM')
    ? course.heroImage
    : null);
  const actionLabel = linkLabel || course.linkLabel || 'Learn More';

  return (
    <article className="rrc-course-card">
      {image ? (
        <div className="rrc-course-card__media">
          <img
            className="rrc-course-card__image"
            src={image}
            alt={course.imageAlt || `${title} students preparing for law entrance examinations`}
            loading="lazy"
          />
        </div>
      ) : null}
      <div className="rrc-course-card__body">
        <div className="rrc-course-card__top">
          {badge ? (
            <span className={`rrc-badge${badgeVariant === 'navy' ? ' rrc-badge--navy' : ''}`}>
              {badge}
            </span>
          ) : null}
          {tag ? <span className="rrc-course-card__tag">{tag}</span> : null}
        </div>
        {title ? <h3 className="rrc-card__title rrc-course-card__title">{title}</h3> : null}
        {description ? <p className="rrc-card__text">{description}</p> : null}
        {points.length > 0 ? (
          <ul className="rrc-course-card__points">
            {points.map((point) => (
              <li key={point}>
                <RrcIcon name="check_circle" size={18} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {link ? (
        <div className="rrc-course-card__foot">
          <Button to={link} variant="card">
            {actionLabel} →
          </Button>
        </div>
      ) : null}
    </article>
  );
}

