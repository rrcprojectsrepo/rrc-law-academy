import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import './CourseCurriculum.css';

// 08 — Curriculum modules. Structured 3-phase educational roadmap.
const MODULE_ICONS = ['menu_book', 'balance', 'analytics'];

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
          description={course.curriculumDescription || 'A structured three-phase syllabus progressing from foundational reading stamina to all-India full-length mock simulations.'}
          align="left"
        />
        <div className="rrc-course-curriculum__list rrc-stagger">
          {course.curriculum.map((module, index) => (
            <article key={module.id} className="rrc-card rrc-course-curriculum__module">
              <div className="rrc-course-curriculum__head">
                <span className="rrc-icon-badge rrc-course-curriculum__icon" aria-hidden="true">
                  <RrcIcon name={MODULE_ICONS[index % MODULE_ICONS.length]} size={20} />
                </span>
                <span className="rrc-badge rrc-badge--sm">Phase 0{index + 1}</span>
              </div>
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
