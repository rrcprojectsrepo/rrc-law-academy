import { Link } from 'react-router-dom';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import { courses } from '../data/courses';
import { programPageList } from '../data/programPages';
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
    <svg className="rrc-about-artwork" viewBox="0 0 640 560" role="img" aria-labelledby="rrc-about-artwork-title">
      <title id="rrc-about-artwork-title">Editorial illustration of legal study materials and a balance scale</title>
      <defs>
        <linearGradient id="about-art-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#172b46" />
          <stop offset="1" stopColor="#0e1c2f" />
        </linearGradient>
        <linearGradient id="about-book-cover" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d8e3fb" />
          <stop offset="1" stopColor="#aabbd8" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="620" height="540" rx="28" fill="url(#about-art-bg)" />
      <path d="M56 70h528M56 88h528" stroke="#fed488" strokeOpacity=".18" />
      <path d="M88 92v200M120 92v200M88 112h32M88 270h32M520 92v200M552 92v200M520 112h32M520 270h32" stroke="#d8e3fb" strokeOpacity=".38" strokeWidth="4" />
      <path d="M76 294h492" stroke="#fed488" strokeOpacity=".6" strokeWidth="3" />
      <circle cx="320" cy="171" r="16" fill="#fed488" />
      <path d="M320 187v156M264 218h112M320 202l-64 16M320 202l56 16" stroke="#fed488" strokeWidth="5" strokeLinecap="round" />
      <path d="M256 219l-28 65h56l-28-65ZM376 219l-28 65h56l-28-65Z" fill="#fed488" fillOpacity=".12" stroke="#fed488" strokeWidth="3" />
      <path d="M285 285c6 20 40 20 46 0M347 285c6 20 40 20 46 0" fill="none" stroke="#fed488" strokeWidth="3" />
      <path d="M294 345h52l18 20h-88l18-20Z" fill="#fed488" />
      <path d="M102 412h236v48H102z" fill="#775a19" />
      <path d="M116 400h236v48H116z" fill="url(#about-book-cover)" />
      <path d="M116 400h18v48h-18M134 410h202" stroke="#0e1c2f" strokeOpacity=".42" strokeWidth="3" />
      <path d="M156 422h132" stroke="#775a19" strokeOpacity=".72" strokeWidth="3" />
      <path d="M126 460h246v48H126z" fill="#775a19" />
      <path d="M140 448h246v48H140z" fill="#f9f9ff" />
      <path d="M140 448h18v48h-18M164 460h150M164 471h172" stroke="#0e1c2f" strokeOpacity=".35" strokeWidth="3" />
      <path d="M198 382h224v44H198z" fill="#0b1728" stroke="#fed488" strokeOpacity=".5" strokeWidth="2" />
      <path d="M212 393h192" stroke="#d8e3fb" strokeOpacity=".42" strokeWidth="3" />
      <circle cx="494" cy="404" r="38" fill="#fed488" fillOpacity=".1" stroke="#fed488" strokeOpacity=".5" strokeWidth="2" />
      <path d="M476 404h36M494 386v36" stroke="#fed488" strokeOpacity=".78" strokeWidth="2" />
      <path d="M62 512h516" stroke="#d8e3fb" strokeOpacity=".2" />
    </svg>
  );
}

function OpenBookArtwork() {
  return (
    <svg className="rrc-about-book-art" viewBox="0 0 520 360" role="img" aria-labelledby="rrc-about-book-title">
      <title id="rrc-about-book-title">Open book representing guided legal education</title>
      <rect x="10" y="10" width="500" height="340" rx="24" fill="#e7eeff" />
      <path d="M78 92c62-18 112-8 182 22v162c-64-28-122-37-182-18V92Z" fill="#fff" stroke="#0e1c2f" strokeWidth="4" strokeLinejoin="round" />
      <path d="M442 92c-62-18-112-8-182 22v162c64-28 122-37 182-18V92Z" fill="#f9f9ff" stroke="#0e1c2f" strokeWidth="4" strokeLinejoin="round" />
      <path d="M260 114v162" stroke="#775a19" strokeWidth="4" />
      <path d="M104 124c44-10 86-5 128 12M104 152c40-8 82-3 128 12M104 180c38-6 78 0 128 14M416 124c-44-10-86-5-128 12M416 152c-40-8-82-3-128 12M416 180c-38-6-78 0-128 14" fill="none" stroke="#9aa9c0" strokeWidth="5" strokeLinecap="round" />
      <path d="M58 286c74-22 140-14 202 15 62-29 128-37 202-15" fill="none" stroke="#fed488" strokeWidth="8" strokeLinecap="round" />
      <circle cx="260" cy="62" r="22" fill="#0e1c2f" />
      <path d="M260 84v34M246 67h28" stroke="#fed488" strokeWidth="4" strokeLinecap="round" />
    </svg>
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
