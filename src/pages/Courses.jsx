import Button from '../components/Button';
import CTASection from '../components/CTASection';
import CourseCard from '../components/CourseCard';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import { coursePageList } from '../data/coursePages';
import coursesHeroImage from '../assets/rrc-courses-hero.webp';
import './Courses.css';

const PREPARATION_STEP_IDS = ['learn', 'practise', 'test', 'analyse', 'improve'];
const preparationSteps = coursePageList[0]?.methodology?.filter((step) =>
  PREPARATION_STEP_IDS.includes(step.id)
  && coursePageList.every((course) => course.methodology?.some((courseStep) => courseStep.id === step.id)),
) ?? [];

const APPROACH_ICONS = {
  learn: 'menu_book',
  practise: 'edit_document',
  test: 'timer',
  analyse: 'analytics',
  improve: 'trending_up',
};

export default function Courses() {
  return (
    <div className="rrc-courses-page">
      {/* Section 1: Hero */}
      <section className="rrc-section rrc-section--light rrc-courses-hero" aria-labelledby="rrc-courses-title">
        <div className="rrc-container rrc-courses-hero__grid">
          <div className="rrc-courses-hero__copy rrc-anim-fade-up">
            <p className="rrc-eyebrow">Law Entrance Preparation</p>
            <h1 id="rrc-courses-title" className="rrc-display rrc-courses-hero__title">
              Explore Our Law Entrance Courses
            </h1>
            <p className="rrc-lead rrc-courses-hero__intro">
              Explore CLAT and AILET preparation pathways for undergraduate and postgraduate law entrance exams. Compare the courses below, then open a course page or send an enquiry.
            </p>
            <div className="rrc-btn-row rrc-courses-hero__actions">
              <Button to="/registration" variant="navy">Enquire Now</Button>
              <Button href="#course-pathways" variant="secondary">Explore Courses ↓</Button>
            </div>
          </div>
          <div className="rrc-courses-hero__visual">
            <img
              className="rrc-courses-hero__image"
              src={coursesHeroImage}
              alt="Law entrance aspirants studying legal reasoning and exam materials in an academy library"
              width="1376"
              height="768"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
            <span className="rrc-courses-hero__visual-note">CLAT & AILET · Structured Pathways</span>
          </div>
        </div>
      </section>

      {/* Section 2: Course Pathways */}
      <section id="course-pathways" className="rrc-section" aria-label="Course pathways">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Course Pathways"
            title="Choose Your Course"
            description="Explore undergraduate and postgraduate preparation options for CLAT and AILET."
          />
          <div className="rrc-courses-page__grid rrc-stagger">
            {coursePageList.map((course) => (
              <CourseCard key={course.slug} course={course} linkLabel="Explore Course" />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Preparation Approach */}
      {preparationSteps.length > 0 ? (
        <section className="rrc-section rrc-section--light" aria-label="Preparation approach">
          <div className="rrc-container">
            <SectionHeader
              eyebrow="Preparation Approach"
              title="Learn, Practise, Test, Analyse, Improve"
              description="A concise preparation sequence reflected across all RRC Law Academy course methodologies."
            />
            <ol className="rrc-courses-approach__steps rrc-stagger">
              {preparationSteps.map((step) => (
                <li className="rrc-card rrc-courses-approach__step" key={step.id}>
                  <div className="rrc-courses-approach__step-top">
                    <span className="rrc-badge rrc-badge--gold">{step.step}</span>
                    <span className="rrc-icon-badge rrc-courses-approach__icon" aria-hidden="true">
                      <RrcIcon name={APPROACH_ICONS[step.id] || 'check_circle'} size={20} />
                    </span>
                  </div>
                  <h3 className="rrc-card__title rrc-courses-approach__title">{step.title}</h3>
                  <p className="rrc-card__text">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* Section 4: Final CTA */}
      <CTASection
        eyebrow="Your Next Step"
        title="Have a Course in Mind?"
        description="Send an enquiry to ask about the course pathway you would like to explore, or explore our structured preparation programs."
        primaryCta={{ label: 'Enquire Now', link: '/registration' }}
        secondaryCta={{ label: 'Explore Preparation Programs', link: '/programs' }}
      />
    </div>
  );
}
