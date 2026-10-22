import { useEffect, useState } from 'react';
import './CourseNavigation.css';

// 03 — Sticky in-page navigation. Plain hash anchors.
// Anchor offsets are set via .rrc-course-anchor in CourseTemplate.css so
// the sticky header + this bar never cover a section heading.
const ALL_SECTIONS = [
  { id: 'rrc-course-overview', label: 'Overview' },
  { id: 'rrc-course-eligibility', label: 'Eligibility', check: (c) => Boolean(c?.eligibility) },
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
  const sections = ALL_SECTIONS.filter((section) =>
    section.check ? section.check(course) : true
  );

  const [activeId, setActiveId] = useState(sections[0]?.id || '');

  useEffect(() => {
    if (!course || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [course, sections]);

  if (!course) return null;

  return (
    <nav className="rrc-course-nav" aria-label={`${course.title} page sections`}>
      <div className="rrc-container rrc-course-nav__inner">
        <span className="rrc-course-nav__label">{course.shortTitle}</span>
        <ul className="rrc-course-nav__list">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  className={`rrc-course-nav__link${isActive ? ' is-active' : ''}`}
                  href={`#${section.id}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
