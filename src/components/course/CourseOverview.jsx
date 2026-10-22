import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import { Link } from 'react-router-dom';
import './CourseOverview.css';

// 04 — Overview. Narrative copy from course.overview (rendered verbatim).
// Aside lists unverified fields if pending, or admissions/cohort guidance if confirmed.
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
  const showAside = hasNotice || Boolean(course.admissionsNotice);

  return (
    <section
      id="rrc-course-overview"
      className="rrc-section rrc-course-anchor"
    >
      <div className="rrc-container">
        <div className={`rrc-course-overview${showAside ? '' : ' rrc-course-overview--single'}`}>
          <div className="rrc-course-overview__body">
            <SectionHeader eyebrow="Course Overview" title={`About ${course.title}`} align="left" />
            {course.overview.map((paragraph) => (
              <p key={paragraph} className="rrc-course-overview__para">
                {paragraph}
              </p>
            ))}
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
          ) : course.admissionsNotice ? (
            <aside className="rrc-course-overview__notice rrc-course-overview__notice--admissions" aria-label="Admissions & Programme Guidance">
              <span className="rrc-icon-badge rrc-course-overview__notice-icon" aria-hidden="true">
                <RrcIcon name="school" size={20} />
              </span>
              <h3 className="rrc-card__title">{course.admissionsNotice.title || 'Admissions & Enquiries'}</h3>
              <p className="rrc-card__text">{course.admissionsNotice.text}</p>
              {course.admissionsNotice.points?.length ? (
                <ul className="rrc-course-overview__notice-list">
                  {course.admissionsNotice.points.map((pt, i) => (
                    <li key={i}>
                      <RrcIcon name="check_circle" size={16} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {course.admissionsNotice.cta ? (
                <div className="rrc-course-overview__notice-cta">
                  <Link to={course.admissionsNotice.cta.link} className="rrc-btn rrc-btn--navy rrc-btn--sm">
                    {course.admissionsNotice.cta.label}
                  </Link>
                </div>
              ) : null}
            </aside>
          ) : null}
        </div>

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
    </section>
  );
}
