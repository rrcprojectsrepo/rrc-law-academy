import './CourseNavigation.css';

// 03 — Sticky in-page navigation. Plain hash anchors (no routing).
// Anchor offsets are set once via .rrc-course-anchor in CourseTemplate.css so
// the sticky header + this bar never cover a section heading.
const COURSE_SECTIONS = [
  { id: 'rrc-course-overview', label: 'Overview' },
  { id: 'rrc-course-audience', label: "Who It's For" },
  { id: 'rrc-course-learning-areas', label: 'Learning Areas' },
  { id: 'rrc-course-methodology', label: 'Methodology' },
  { id: 'rrc-course-curriculum', label: 'Curriculum' },
  { id: 'rrc-course-practice', label: 'Practice' },
  { id: 'rrc-course-faculty', label: 'Faculty' },
  { id: 'rrc-course-batch', label: 'Batches' },
  { id: 'rrc-course-faq', label: 'FAQ' },
];

export default function CourseNavigation({ course }) {
  if (!course) return null;
  return (
    <nav className="rrc-course-nav" aria-label={`${course.title} page sections`}>
      <div className="rrc-container rrc-course-nav__inner">
        <span className="rrc-course-nav__label">{course.shortTitle}</span>
        <ul className="rrc-course-nav__list">
          {COURSE_SECTIONS.map((section) => (
            <li key={section.id}>
              <a className="rrc-course-nav__link" href={`#${section.id}`}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
