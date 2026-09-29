import Button from '../components/Button';
import CTASection from '../components/CTASection';
import CourseCard from '../components/CourseCard';
import SectionHeader from '../components/SectionHeader';
import { coursePageList } from '../data/coursePages';
import './Courses.css';

const PREPARATION_STEP_IDS = ['learn', 'practise', 'test', 'analyse', 'improve'];
const preparationSteps = coursePageList[0]?.methodology?.filter((step) =>
  PREPARATION_STEP_IDS.includes(step.id)
  && coursePageList.every((course) => course.methodology?.some((courseStep) => courseStep.id === step.id)),
) ?? [];

export default function Courses() {
  return (
    <div className="rrc-courses-page">
      <section className="rrc-section rrc-section--light rrc-courses-page__hero" aria-labelledby="rrc-courses-title">
        <div className="rrc-container rrc-courses-page__hero-content">
          <p className="rrc-eyebrow">LAW ENTRANCE PREPARATION</p>
          <h1 id="rrc-courses-title" className="rrc-display rrc-courses-page__title">
            Explore Our Law Entrance Courses
          </h1>
          <p className="rrc-lead rrc-courses-page__intro">
            Explore CLAT and AILET preparation pathways for undergraduate and postgraduate law entrance exams. Compare the courses below, then open a course page or send an enquiry.
          </p>
          <div className="rrc-btn-row rrc-courses-page__hero-actions">
            <Button to="/registration" variant="navy">Enquire Now</Button>
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Course pathways">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Course Pathways"
            title="Choose Your Course"
            description="Explore undergraduate and postgraduate preparation options for CLAT and AILET."
          />
          <div className="rrc-grid-4 rrc-courses-page__grid rrc-stagger">
            {coursePageList.map((course) => (
              <CourseCard key={course.slug} course={course} linkLabel="Explore Course" />
            ))}
          </div>
        </div>
      </section>

      {preparationSteps.length > 0 ? (
        <section className="rrc-section rrc-section--light" aria-label="Preparation approach">
          <div className="rrc-container">
            <SectionHeader
              eyebrow="Preparation Approach"
              title="Learn, Practise, Test, Analyse, Improve"
              description="A concise preparation sequence reflected in the existing course methodologies."
            />
            <ol className="rrc-courses-approach__steps">
              {preparationSteps.map((step) => (
                <li className="rrc-card rrc-courses-approach__step" key={step.id}>
                  <span className="rrc-badge">{step.step}</span>
                  <h3 className="rrc-card__title">{step.title}</h3>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      <CTASection
        eyebrow="Your Next Step"
        title="Have a Course in Mind?"
        description="Send an enquiry to ask about the course pathway you would like to explore."
        primaryCta={{ label: 'Enquire Now', link: '/registration' }}
      />
    </div>
  );
}
