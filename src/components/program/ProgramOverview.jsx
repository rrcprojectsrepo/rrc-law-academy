import { Link } from 'react-router-dom';
import RrcIcon from '../RrcIcon';
import SectionHeader from '../SectionHeader';

export default function ProgramOverview({ program }) {
  const notice = program.admissionsNotice;

  return (
    <section id="rrc-program-overview" className="rrc-section">
      <div className="rrc-container">
        <div className={`rrc-program-overview${notice ? ' rrc-program-overview--split' : ''}`}>
          <div className="rrc-program-overview__body">
            <SectionHeader eyebrow="Programme Overview" title={`About ${program.title}`} align="left" />
            <div className="rrc-program-prose">
              {program.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          {notice ? (
            <aside className="rrc-card rrc-program-overview__aside" aria-label="Admissions & enrolment guidance">
              <span className="rrc-icon-badge rrc-program-overview__aside-icon" aria-hidden="true">
                <RrcIcon name="school" size={20} />
              </span>
              <h3 className="rrc-card__title">{notice.title}</h3>
              <p className="rrc-card__text">{notice.text}</p>
              {notice.points?.length ? (
                <ul className="rrc-program-overview__aside-list">
                  {notice.points.map((point) => (
                    <li key={point}>
                      <RrcIcon name="check_circle" size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {notice.cta ? (
                <div className="rrc-program-overview__aside-cta">
                  <Link to={notice.cta.link} className="rrc-btn rrc-btn--navy rrc-btn--sm">
                    {notice.cta.label}
                  </Link>
                </div>
              ) : null}
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}
