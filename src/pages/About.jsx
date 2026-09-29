import { Link } from 'react-router-dom';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import { courses } from '../data/courses';
import { programPageList } from '../data/programPages';
import aboutHeroImage from '../assets/rrc-law-academy-about-hero.png';
import aboutLearningImage from '../assets/rrc-law-academy-about-learning.png';
import './About.css';

const APPROACH = programPageList[0]?.methodology ?? [];
const APPROACH_ICONS = ['menu_book', 'edit_document', 'quiz', 'analytics', 'refresh'];
const PROGRAM_ICONS = {
  foundation: 'foundation',
  'intensive-revision': 'refresh',
  'mock-test': 'fact_check',
  'current-affairs': 'newspaper',
};

const SKILLS = [
  { icon: 'foundation', title: 'Strong Fundamentals', text: 'Build a clear foundation across important areas of law entrance preparation.' },
  { icon: 'psychology', title: 'Critical Thinking', text: 'Develop the ability to read, reason, connect information, and approach questions logically.' },
  { icon: 'gavel', title: 'Legal Reasoning', text: 'Strengthen structured reasoning and the ability to work with legal principles.' },
  { icon: 'newspaper', title: 'Current Affairs Awareness', text: 'Develop awareness of important developments relevant to law entrance preparation.' },
  { icon: 'timer', title: 'Exam Readiness', text: 'Build familiarity with timed practice, structured testing, and performance review.' },
  { icon: 'trending_up', title: 'Confidence Through Practice', text: 'Develop confidence through consistent preparation and measurable practice.' },
];

const AUDIENCES = [
  { icon: 'school', title: 'School Students', text: 'For learners beginning their journey toward law entrance preparation.' },
  { icon: 'manage_search', title: 'Law Entrance Aspirants', text: 'For students preparing specifically for law entrance examinations.' },
  { icon: 'menu_book', title: 'Law Students', text: 'For learners looking to strengthen legal knowledge and preparation skills.' },
  { icon: 'workspace_premium', title: 'Law Graduates', text: 'For graduates pursuing further legal education or competitive opportunities.' },
];

const ECOSYSTEM = [
  { title: 'Courses', text: 'Explore the CLAT and AILET undergraduate and postgraduate courses.' },
  { title: 'Programs', text: 'Choose a preparation format suited to your current learning stage.' },
  { title: 'Practice', text: 'Apply concepts through structured questions and preparation activities.' },
  { title: 'Current Affairs & GK', text: 'Build awareness of important developments and general knowledge.' },
  { title: 'Performance Review', text: 'Review practice and assessment to identify areas for further attention.' },
  { title: 'Continued Improvement', text: 'Use reflection and feedback to strengthen preparation over time.' },
];

const JOURNEY = [
  { step: '01', title: 'Understand', text: 'Build the foundation.' },
  { step: '02', title: 'Prepare', text: 'Develop structured study habits.' },
  { step: '03', title: 'Practise', text: 'Apply concepts through focused practice.' },
  { step: '04', title: 'Test', text: 'Work through timed assessments.' },
  { step: '05', title: 'Analyse', text: 'Review performance and identify improvement areas.' },
  { step: '06', title: 'Progress', text: 'Strengthen preparation through continuous improvement.' },
];

const STRUCTURE_PILLARS = [
  { icon: 'psychology', title: 'Clarity', text: 'Know what you are preparing and why.' },
  { icon: 'repeat', title: 'Consistency', text: 'Build a sustainable preparation routine.' },
  { icon: 'analytics', title: 'Feedback', text: 'Use practice and analysis to identify areas for improvement.' },
];

function LegalStudyArtwork() {
  return (
    <img
      className="rrc-about-artwork"
      src={aboutHeroImage}
      alt="Law students studying together in a library"
      width="1536"
      height="1024"
    />
  );
}

function OpenBookArtwork() {
  return (
    <img
      className="rrc-about-book-art"
      src={aboutLearningImage}
      alt="Law students learning with an instructor in a library"
      width="1536"
      height="1024"
    />
  );
}

export default function About() {
  return (
    <div className="rrc-about-page">
      <section className="rrc-about-hero" aria-labelledby="rrc-about-title">
        <div className="rrc-container rrc-about-hero__grid">
          <div className="rrc-about-hero__copy rrc-anim-fade-up">
            <p className="rrc-eyebrow">About RRC Law Academy</p>
            <h1 id="rrc-about-title" className="rrc-display rrc-about-hero__title">
              Building Strong Foundations for a Future in Law
            </h1>
            <p className="rrc-lead">
              RRC Law Academy is designed around structured law entrance preparation and legal
              education, helping learners develop strong foundations, critical thinking, disciplined
              preparation habits, and confidence for their next stage in law.
            </p>
            <div className="rrc-btn-row rrc-about-hero__actions">
              <Button to="/courses" variant="navy">Explore Courses</Button>
              <Button to="/registration" variant="secondary">Talk to a Counsellor</Button>
            </div>
          </div>
          <div className="rrc-about-hero__visual">
            <LegalStudyArtwork />
            <span className="rrc-about-hero__visual-note">Legal education · Structured preparation</span>
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Who we are">
        <div className="rrc-container rrc-about-who">
          <div className="rrc-about-who__visual">
            <OpenBookArtwork />
            <aside className="rrc-card rrc-about-highlight">
              <p className="rrc-about-highlight__title">Structured Preparation</p>
              <p className="rrc-card__text">From understanding concepts to analysing performance.</p>
            </aside>
          </div>
          <div className="rrc-about-who__copy">
            <SectionHeader eyebrow="Who We Are" title="Who We Are" align="left" />
            <p>
              RRC Law Academy brings together structured preparation, guided practice, current
              affairs awareness, reasoning development, and continuous performance review to help
              learners approach law entrance preparation with greater clarity and discipline.
            </p>
            <p>
              Preparation is treated as a connected learning process, with space to understand,
              practise, review, and keep improving.
            </p>
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Our approach to legal education">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Our Approach"
            title="Our Approach to Legal Education"
            description="Preparation becomes more meaningful when learners understand concepts, practise deliberately, test themselves, analyse performance, and improve continuously."
          />
          <div className="rrc-about-approach-grid rrc-stagger">
            {APPROACH.map((step, index) => (
              <FeatureCard key={step.id} number={step.step} icon={APPROACH_ICONS[index]} title={step.title} description={step.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Skills developed through preparation">
        <div className="rrc-container">
          <SectionHeader eyebrow="Skills & Foundations" title="More Than Preparation. Build the Skills Behind It." />
          <div className="rrc-about-skill-grid rrc-stagger">
            {SKILLS.map((skill) => <FeatureCard key={skill.title} icon={skill.icon} title={skill.title} description={skill.text} />)}
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Who we support">
        <div className="rrc-container">
          <SectionHeader eyebrow="Who We Support" title="Who We Support" />
          <div className="rrc-about-audience-grid rrc-stagger">
            {AUDIENCES.map((audience) => <FeatureCard key={audience.title} icon={audience.icon} title={audience.title} description={audience.text} />)}
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Our preparation ecosystem">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Our Preparation Ecosystem"
            title="A Structured Learning Ecosystem"
            description="Connected learning formats support preparation from course selection through review and continued improvement."
          />
          <ol className="rrc-about-ecosystem rrc-stagger">
            {ECOSYSTEM.map((step, index) => (
              <li className="rrc-about-ecosystem__item" key={step.title}>
                <span className="rrc-about-ecosystem__marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="rrc-card rrc-about-ecosystem__card">
                  <h3 className="rrc-card__title">{step.title}</h3>
                  <p className="rrc-card__text">{step.text}</p>
                  {index === 0 ? (
                    <ul className="rrc-about-link-chips" aria-label="Courses">
                      {courses.map((course) => <li key={course.id}><Link to={course.link}>{course.title}</Link></li>)}
                    </ul>
                  ) : null}
                  {index === 1 ? (
                    <ul className="rrc-about-link-chips" aria-label="Programs">
                      {programPageList.map((program) => <li key={program.slug}><Link to={`/programs/${program.slug}`}>{program.shortTitle}</Link></li>)}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Learning journey">
        <div className="rrc-container">
          <SectionHeader eyebrow="Learning Journey" title="From Preparation to Progress" />
          <ol className="rrc-about-journey rrc-stagger">
            {JOURNEY.map((step) => (
              <li className="rrc-about-journey__item" key={step.step}>
                <span className="rrc-about-journey__marker" aria-hidden="true">{step.step}</span>
                <article className="rrc-card rrc-about-journey__card">
                  <h3 className="rrc-card__title">{step.title}</h3>
                  <p className="rrc-card__text">{step.text}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rrc-section rrc-section--navy rrc-about-structure" aria-label="Why structured preparation matters">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Why Structure Matters"
            title="Preparation Works Best When It Has Structure"
            description="Law entrance preparation involves more than covering topics. Learners need conceptual understanding, reasoning practice, current affairs awareness, testing, review, and disciplined preparation."
          />
          <div className="rrc-about-structure-grid rrc-stagger">
            {STRUCTURE_PILLARS.map((item) => <FeatureCard key={item.title} tone="navy" icon={item.icon} title={item.title} description={item.text} />)}
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Our programs">
        <div className="rrc-container">
          <SectionHeader eyebrow="Our Programs" title="Programs Designed Around Different Preparation Needs" />
          <div className="rrc-about-programs rrc-stagger">
            {programPageList.map((program) => (
              <article className="rrc-card rrc-about-program-card" key={program.slug}>
                <span className="rrc-icon-badge rrc-about-program-card__icon" aria-hidden="true">
                  <RrcIcon name={PROGRAM_ICONS[program.slug]} size={21} />
                </span>
                <h3 className="rrc-card__title">{program.title}</h3>
                <p className="rrc-card__text">{program.description}</p>
                <Link className="rrc-about-program-card__link" to={`/programs/${program.slug}`}>
                  View Program <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--navy rrc-about-cta" aria-label="Build your path toward law">
        <div className="rrc-container rrc-about-cta__inner">
          <SectionHeader
            eyebrow="Take the Next Step"
            title="Build Your Path Toward Law"
            description="Explore the courses and preparation programs available through RRC Law Academy."
          />
          <div className="rrc-btn-row rrc-about-cta__actions">
            <Button to="/courses" variant="primary">Explore Courses</Button>
            <Button to="/registration" variant="secondary">Enquire Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
