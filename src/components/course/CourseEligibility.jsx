import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import './CourseEligibility.css';

// 04B — Dedicated Eligibility Section.
// Driven by course.eligibility. Supports rich cards or structured criteria lists.
export default function CourseEligibility({ course }) {
  if (!course || !course.eligibility) return null;
  const { eligibility } = course;
  const hasCards = Array.isArray(eligibility.cards) && eligibility.cards.length > 0;
  const hasCriteria = Array.isArray(eligibility.criteria) && eligibility.criteria.length > 0;
  const hasNotes = Array.isArray(eligibility.importantNotes) && eligibility.importantNotes.length > 0;

  return (
    <section
      id="rrc-course-eligibility"
      className="rrc-section rrc-section--light rrc-course-anchor"
      aria-labelledby="rrc-course-eligibility-title"
    >
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Admissions & Eligibility"
          title={eligibility.title || `${course.title} Eligibility Criteria`}
          description={eligibility.intro}
          align="left"
        />

        {hasCards ? (
          <div className="rrc-course-eligibility__grid rrc-stagger">
            {eligibility.cards.map((card) => (
              <div key={card.id} className="rrc-course-eligibility__card">
                <div className="rrc-course-eligibility__card-top">
                  <span className="rrc-course-eligibility__card-icon" aria-hidden="true">
                    <RrcIcon name={card.icon || 'school'} size={22} />
                  </span>
                  {card.badge ? (
                    <span className="rrc-course-eligibility__card-badge">{card.badge}</span>
                  ) : null}
                </div>
                <h3 className="rrc-card__title">{card.title}</h3>
                <p className="rrc-card__text">{card.description}</p>
              </div>
            ))}
          </div>
        ) : null}

        {hasCriteria ? (
          <div className="rrc-course-eligibility__criteria-panel">
            <ul className="rrc-course-eligibility__criteria-list">
              {eligibility.criteria.map((criterion, idx) => (
                <li key={idx}>
                  <RrcIcon name="check_circle" size={18} />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasNotes ? (
          <div className="rrc-course-eligibility__notes-panel">
            <h4 className="rrc-course-eligibility__notes-heading">
              Key Considerations & Institutional Policies
            </h4>
            <div className="rrc-course-eligibility__notes-grid">
              {eligibility.importantNotes.map((note, idx) => (
                <div key={idx} className="rrc-course-eligibility__note-item">
                  <h5>{note.title}</h5>
                  <p>{note.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {eligibility.sourceUrl ? (
          <div className="rrc-course-eligibility__footer">
            <a
              href={eligibility.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="rrc-course-eligibility__source-link"
            >
              <span>{eligibility.sourceLabel || 'Official Examination Eligibility Guidelines'}</span>
              <RrcIcon name="open_in_new" size={16} />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
