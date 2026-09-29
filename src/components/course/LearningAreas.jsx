import SectionHeader from '../SectionHeader';
import FeatureCard from '../FeatureCard';
import './LearningAreas.css';

// 06 — Learning Areas. Icons are presentational only and cycle by position;
// every title/text comes verbatim from course.learningAreas.
const AREA_ICONS = ['menu_book', 'newspaper', 'gavel', 'psychology', 'analytics'];

export default function LearningAreas({ course }) {
  if (!course || course.learningAreas.length === 0) return null;
  return (
    <section
      id="rrc-course-learning-areas"
      className="rrc-section rrc-course-anchor"
    >
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Learning Areas"
          title={`What You Will Study in ${course.title}`}
          description={course.learningAreasDescription}
        />
        <div className="rrc-course-areas__list rrc-stagger">
          {course.learningAreas.map((area, index) => (
            <FeatureCard
              key={area.id}
              icon={AREA_ICONS[index % AREA_ICONS.length]}
              title={area.title}
              description={area.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
