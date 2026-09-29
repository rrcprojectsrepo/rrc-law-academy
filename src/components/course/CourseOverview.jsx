import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import { Link } from 'react-router-dom';
import './CourseOverview.css';

// 04 — Overview. Narrative copy from course.overview (rendered verbatim).
// Aside lists the exact fields still holding "[TO CONFIRM]" / "[ASSET TO CONFIRM]"
// so no unverified claim is presented as fact.
const PENDING_FIELDS = [
  { key: 'mode', label: 'Mode' },
  { key: 'duration', label: 'Duration' },
  { key: 'batch', label: 'Batch' },
];

export default function CourseOverview({ course }) {
  if (!course) return null;

  const pending = PENDING_FIELDS.filter((field) =>
    String(course[field.key] ?? '').includes('TO CONFIRM'),
  );
  const imagePending = String(course.heroImage ?? '').includes('ASSET TO CONFIRM');
  const hasNotice = pending.length > 0 || imagePending;

  return (
    <section
      id="rrc-course-overview"
      className="rrc-section rrc-course-anchor"
    >
      <div className="rrc-container">
        <div className={`rrc-course-overview${hasNotice ? '' : ' rrc-course-overview--single'}`}>
          <div>
            <SectionHeader eyebrow="Course Overview" title={`About ${course.title}`} align="left" />
            {course.overview.map((paragraph) => (
              <p key={paragraph} className="rrc-course-overview__para">
                {paragraph}
              </p>
            ))}
            {course.eligibility ? (
              <section className="rrc-course-eligibility" aria-labelledby="rrc-course-eligibility-title">
                <h3 id="rrc-course-eligibility-title">{course.eligibility.title}</h3>
                <p>{course.eligibility.intro}</p>
                <ul>
                  {course.eligibility.criteria.map((criterion) => (
                    <li key={criterion}>{criterion}</li>
                  ))}
                </ul>
                <a href={course.eligibility.sourceUrl} target="_blank" rel="noreferrer">
                  {course.eligibility.sourceLabel}
                </a>
              </section>
            ) : null}
            {course.relatedLinkGroups?.length ? (
              <nav className="rrc-course-related" aria-label={`Related pathways for ${course.title}`}>
                <h3 className="rrc-course-related__heading">Explore Related Pathways</h3>
                <div className="rrc-course-related__groups">
                  {course.relatedLinkGroups.map((group) => (
                    <section className="rrc-course-related__group" key={group.title}>
                      <h4>{group.title}</h4>
                      <ul>
                        {group.links.map((link) => (
                          <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </nav>
            ) : null}
          </div>

          {hasNotice ? (
            <aside className="rrc-course-overview__notice" aria-label="Details awaiting confirmation">
              <span className="rrc-icon-badge rrc-course-overview__notice-icon" aria-hidden="true">
                <RrcIcon name="fact_check" size={20} />
              </span>
              <h3 className="rrc-card__title">Awaiting Confirmation</h3>
              <p className="rrc-card__text">
                The following details are not yet verified, so they are displayed exactly as
                provided in the data source.
              </p>
              <ul className="rrc-course-overview__notice-list">
                {pending.map((field) => (
                  <li key={field.key}>
                    <RrcIcon name="update" size={16} />
                    <span>
                      {field.label}: {course[field.key]}
                    </span>
                  </li>
                ))}
                {imagePending ? (
                  <li>
                    <RrcIcon name="update" size={16} />
                    <span>Hero image: {course.heroImage}</span>
                  </li>
                ) : null}
              </ul>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}
