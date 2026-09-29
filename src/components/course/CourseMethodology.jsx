import SectionHeader from '../SectionHeader';
import FeatureCard from '../FeatureCard';
import './CourseMethodology.css';

// 07 — Methodology. Ordered list of the shared Understand → Improve sequence
// (course.methodology). Same shape as HomeMethodology, course-scoped classnames.
export default function CourseMethodology({ course }) {
  if (!course || course.methodology.length === 0) return null;
  return (
    <section
      id="rrc-course-methodology"
      className="rrc-section rrc-section--light rrc-course-anchor"
    >
      <div className="rrc-container">
        <SectionHeader
          eyebrow="How We Teach"
          title={course.methodologyTitle || `${course.title} Learning Methodology`}
          description={course.methodologyDescription || `A ${course.methodology.length}-step cycle followed for every learning area of this course.`}
        />
        <ol className={`rrc-course-method__list rrc-stagger${course.methodology.length === 6 ? ' rrc-course-method__list--six-step' : ''}`}>
          {course.methodology.map((step) => (
            <li key={step.id}>
              <FeatureCard
                number={step.step}
                title={step.title}
                description={step.text}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
