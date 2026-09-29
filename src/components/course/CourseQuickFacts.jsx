import RrcIcon from '../RrcIcon';
import './CourseQuickFacts.css';

// 02 — Quick facts strip. Reads only existing course fields.
// mode / duration / batch hold literal "[TO CONFIRM]" in data and are
// rendered exactly as stored — nothing is inferred or filled in.
const FACTS = [
  { key: 'level', label: 'Level', icon: 'school' },
  { key: 'courseType', label: 'Course Type', icon: 'menu_book' },
  { key: 'mode', label: 'Mode', icon: 'public' },
  { key: 'duration', label: 'Duration', icon: 'timer' },
  { key: 'session', label: 'Session', icon: 'workspace_premium' },
  { key: 'batch', label: 'Batch', icon: 'groups' },
];

export default function CourseQuickFacts({ course }) {
  if (!course) return null;
  const examSources = course.examPattern?.sources || (course.examPattern?.sourceUrl ? [
    { label: course.examPattern.sourceLabel, url: course.examPattern.sourceUrl },
  ] : []);
  return (
    <section className="rrc-course-facts" aria-label={`${course.title} at a glance`}>
      <div className="rrc-container">
        <ul className="rrc-course-facts__list rrc-stagger">
          {FACTS.map((fact) => (
            <li key={fact.key} className="rrc-course-facts__item">
              <span className="rrc-course-facts__icon" aria-hidden="true">
                <RrcIcon name={fact.icon} size={18} />
              </span>
              <span className="rrc-course-facts__label">{fact.label}</span>
              <span className="rrc-course-facts__value">{course[fact.key]}</span>
            </li>
          ))}
        </ul>
        {course.examPattern ? (
          <div className="rrc-course-pattern" aria-labelledby="rrc-course-pattern-title">
            <h2 id="rrc-course-pattern-title" className="rrc-course-pattern__title">
              {course.examPattern.title}
            </h2>
            <dl className="rrc-course-pattern__facts">
              {course.examPattern.facts.map((fact) => (
                <div className="rrc-course-pattern__fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="rrc-course-pattern__note">{course.examPattern.note}</p>
            {examSources.map((source) => (
              <a
                className="rrc-course-pattern__source"
                href={source.url}
                target="_blank"
                rel="noreferrer"
                key={source.url}
              >
                {source.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
