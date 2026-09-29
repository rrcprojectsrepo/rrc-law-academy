import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import './CourseCurriculum.css';

// 08 — Curriculum modules. Every module title and topic is rendered verbatim,
// including any "[TO CONFIRM]" placeholder, so nothing is presented as settled.
export default function CourseCurriculum({ course }) {
  if (!course || course.curriculum.length === 0) return null;

  const hasPlaceholder = course.curriculum.some(
    (module) =>
      module.title.includes('TO CONFIRM') ||
      module.topics.some((topic) => topic.includes('TO CONFIRM')),
  );

  return (
    <section
      id="rrc-course-curriculum"
      className="rrc-section rrc-course-anchor"
    >
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Curriculum"
          title={`${course.title} Syllabus Coverage`}
        />
        <div className="rrc-course-curriculum__list rrc-stagger">
          {course.curriculum.map((module, index) => (
            <article key={module.id} className="rrc-card rrc-course-curriculum__module">
              <span className="rrc-badge">Module {index + 1}</span>
              <h3 className="rrc-card__title rrc-course-curriculum__title">{module.title}</h3>
              {module.topics.length > 0 ? (
                <ul className="rrc-course-curriculum__topics">
                  {module.topics.map((topic) => (
                    <li key={topic}>
                      <RrcIcon name="check_circle" size={16} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="rrc-card__text">Topic-level breakdown not yet confirmed.</p>
              )}
            </article>
          ))}
        </div>
        {hasPlaceholder ? (
          <p className="rrc-course-curriculum__note">
            This section is reproduced from the approved data source. Entries marked
            &ldquo;[TO CONFIRM]&rdquo; are pending verification and have not been replaced with
            assumed values.
          </p>
        ) : null}
      </div>
    </section>
  );
}
