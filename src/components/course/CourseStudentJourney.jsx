import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import './CourseStudentJourney.css';

// 15 — Student Journey. Four phases from course.studentJourney (shared data).
export default function CourseStudentJourney({ course }) {
  if (!course || course.studentJourney.length === 0) return null;

  return (
    <section
      id="rrc-course-journey"
      className="rrc-section rrc-section--light rrc-course-anchor"
    >
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Student Journey"
          title={`Your Path Through ${course.title}`}
          description="A phased route from first principles to final exam readiness."
        />
        <ol className="rrc-course-journey__list rrc-stagger">
          {course.studentJourney.map((phase) => (
            <li key={phase.id} className="rrc-course-journey__item">
              <span className="rrc-course-journey__step">{phase.step}</span>
              <h3 className="rrc-card__title">{phase.title}</h3>
              <p className="rrc-card__text">{phase.text}</p>
              <span className="rrc-course-journey__mark" aria-hidden="true">
                <RrcIcon name="trending_up" size={18} />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
