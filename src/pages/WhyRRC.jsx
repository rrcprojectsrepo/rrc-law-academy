import { Link } from 'react-router-dom';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import { coursePageList } from '../data/coursePages';
import { programPageList } from '../data/programPages';
import './WhyRRC.css';

const METHODOLOGY = coursePageList[0]?.methodology ?? [];
const METHOD_COPY = {
  understand: 'Build conceptual clarity.',
  practise: 'Apply what you learn.',
  test: 'Work through structured assessments.',
  analyse: 'Review performance and identify improvement areas.',
  improve: 'Strengthen preparation through feedback and continued practice.',
};
const METHOD_ICONS = ['menu_book', 'edit_document', 'quiz', 'analytics', 'trending_up'];
const STRENGTHS = [
  { icon: 'schema', title: 'Structured Preparation', text: 'Follow a clear preparation process instead of approaching every topic in isolation.' },
  { icon: 'psychology', title: 'Strong Fundamentals', text: 'Build conceptual foundations before moving into more demanding practice.' },
  { icon: 'repeat', title: 'Focused Practice', text: 'Use deliberate practice to strengthen understanding and question-solving ability.' },
  { icon: 'timer', title: 'Testing & Assessment', text: 'Use structured testing to become familiar with timed practice and exam-oriented execution.' },
  { icon: 'analytics', title: 'Performance Analysis', text: 'Review practice and assessment performance to identify areas that need further attention.' },
  { icon: 'trending_up', title: 'Continuous Improvement', text: 'Use feedback, reflection, and repeated practice to strengthen preparation over time.' },
];
const LEARNING_AREA_ICONS = ['menu_book', 'newspaper', 'gavel', 'psychology', 'analytics', 'library_books'];
const LEARNING_AREAS = [
  ...(coursePageList[0]?.learningAreas ?? []),
  { id: 'legal-reading-analysis', title: 'Legal Reading & Analysis' },
];
const PROGRESSION = [
  { title: 'Learn', text: 'Start with understanding concepts.' },
  { title: 'Practise', text: 'Work with what you have learned.' },
  { title: 'Apply', text: 'Use concepts to approach questions.' },
  { title: 'Test', text: 'Try structured assessment.' },
  { title: 'Review', text: 'Look at performance and identify gaps.' },
  { title: 'Improve', text: 'Return to preparation with a clearer focus.' },
];
const AWARENESS = [
  'Current developments',
  'Legal and constitutional developments',
  'Important judgments',
  'Relevant national developments',
  'Static GK where appropriate',
  'Retention and revision',
];
const GUIDANCE = [
  { icon: 'manage_search', title: 'Understand Your Starting Point', text: 'Identify the areas that require attention and establish a practical preparation direction.' },
  { icon: 'schema', title: 'Build a Preparation Routine', text: 'Develop a consistent approach to learning, practice, revision, and testing.' },
  { icon: 'analytics', title: 'Review Progress', text: 'Use performance information and reflection to understand areas for improvement.' },
  { icon: 'trending_up', title: 'Prepare for the Next Stage', text: 'Build stronger habits and readiness for the next stage of academic or examination preparation.' },
];
const LEARNING_PRINCIPLES = [
  { icon: 'check_circle', title: 'Clarity', text: 'Clear learning goals and structured content.' },
  { icon: 'repeat', title: 'Consistency', text: 'Regular preparation and practice habits.' },
  { icon: 'edit', title: 'Practice', text: 'Opportunities to apply concepts and test understanding.' },
  { icon: 'analytics', title: 'Reflection', text: 'Review performance and identify what to improve.' },
];
const AUDIENCES = [
  { icon: 'school', title: 'School Students', text: 'Learners beginning their preparation journey.' },
  { icon: 'manage_search', title: 'Law Entrance Aspirants', text: 'Students preparing for law entrance examinations.' },
  { icon: 'menu_book', title: 'Law Students', text: 'Learners strengthening legal knowledge and preparation skills.' },
  { icon: 'workspace_premium', title: 'Law Graduates', text: 'Learners exploring further legal education and competitive preparation.' },
];
const PROGRAM_ICONS = {
  foundation: 'foundation',
  'intensive-revision': 'refresh',
  'mock-test': 'fact_check',
  'current-affairs': 'newspaper',
};

function AcademicVisual() {
  return (
    <svg className="rrc-why-visual" viewBox="0 0 640 500" role="img" aria-labelledby="rrc-why-visual-title">
      <title id="rrc-why-visual-title">A study desk with law books and a balanced learning pathway</title>
      <rect x="12" y="12" width="616" height="476" rx="28" fill="#0e1c2f" />
      <path d="M72 72h496M72 88h496" stroke="#fed488" strokeOpacity=".2" />
      <path d="M116 102v172M145 102v172M116 122h29M116 250h29M495 102v172M524 102v172M495 122h29M495 250h29" stroke="#d8e3fb" strokeOpacity=".4" strokeWidth="4" />
      <path d="M92 282h456" stroke="#fed488" strokeOpacity=".65" strokeWidth="3" />
      <circle cx="320" cy="160" r="15" fill="#fed488" />
      <path d="M320 176v128M272 204h96M320 190l-55 14M320 190l55 14" fill="none" stroke="#fed488" strokeWidth="4" strokeLinecap="round" />
      <path d="M265 205l-22 53h44l-22-53ZM375 205l-22 53h44l-22-53Z" fill="#fed488" fillOpacity=".12" stroke="#fed488" strokeWidth="3" />
      <path d="M294 306h52l16 18h-84l16-18Z" fill="#fed488" />
      <path d="M104 366h256v44H104z" fill="#775a19" />
      <path d="M120 354h256v44H120z" fill="#d8e3fb" />
      <path d="M120 354h18v44h-18M154 369h190" stroke="#0e1c2f" strokeOpacity=".5" strokeWidth="3" />
      <path d="M144 410h286v44H144z" fill="#775a19" />
      <path d="M160 398h286v44H160z" fill="#f9f9ff" />
      <path d="M160 398h18v44h-18M194 412h218M194 423h168" stroke="#0e1c2f" strokeOpacity=".38" strokeWidth="3" />
      <circle cx="500" cy="372" r="38" fill="#fed488" fillOpacity=".12" stroke="#fed488" strokeOpacity=".55" strokeWidth="2" />
      <path d="M480 372h40M500 352v40" stroke="#fed488" strokeOpacity=".8" strokeWidth="2" />
      <path d="M70 458h500" stroke="#d8e3fb" strokeOpacity=".2" />
    </svg>
  );
}

function StudyNotesVisual() {
  return (
    <svg className="rrc-why-notes-visual" viewBox="0 0 520 360" role="img" aria-labelledby="rrc-why-notes-title">
      <title id="rrc-why-notes-title">Open study notes representing focused learning</title>
      <rect x="10" y="10" width="500" height="340" rx="24" fill="#e7eeff" />
      <path d="M78 82h164v216H78z" fill="#fff" stroke="#0e1c2f" strokeWidth="4" />
      <path d="M278 82h164v216H278z" fill="#f9f9ff" stroke="#0e1c2f" strokeWidth="4" />
      <path d="M102 122h112M102 150h112M102 178h82M302 122h112M302 150h112M302 178h82M102 224h112M302 224h112" stroke="#9aa9c0" strokeWidth="5" strokeLinecap="round" />
      <path d="M260 62v250" stroke="#775a19" strokeWidth="5" />
      <circle cx="260" cy="62" r="20" fill="#0e1c2f" stroke="#fed488" strokeWidth="3" />
      <path d="M54 314h412" stroke="#fed488" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export default function WhyRRC() {
  return (
    <div className="rrc-why-page">
      <section className="rrc-why-hero" aria-labelledby="rrc-why-title">
        <div className="rrc-container rrc-why-hero__grid">
          <div className="rrc-why-hero__copy rrc-anim-fade-up">
            <p className="rrc-eyebrow">Why RRC Law Academy</p>
            <h1 id="rrc-why-title" className="rrc-display rrc-why-hero__title">Structured Preparation for a Clearer Path Toward Law</h1>
            <p className="rrc-lead">RRC Law Academy brings together structured learning, focused practice, testing, analysis, and continuous improvement to help learners approach law entrance preparation with clarity and discipline.</p>
            <div className="rrc-btn-row rrc-why-hero__actions">
              <Button to="/courses" variant="navy">Explore Courses</Button>
              <Button to="/registration" variant="secondary">Enquire Now</Button>
            </div>
          </div>
          <div className="rrc-why-hero__visual"><AcademicVisual /></div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Why structured preparation matters">
        <div className="rrc-container rrc-why-intro">
          <div className="rrc-why-intro__visual"><StudyNotesVisual /></div>
          <div className="rrc-why-intro__copy">
            <SectionHeader eyebrow="A Clearer Preparation Process" title="Why Structured Preparation Matters" align="left" />
            <p>Law entrance preparation involves more than covering topics. Learners need conceptual understanding, reasoning practice, current affairs awareness, regular testing, performance review, and a consistent preparation routine.</p>
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Core strengths">
        <div className="rrc-container">
          <SectionHeader eyebrow="Core Strengths" title="What the RRC Approach Focuses On" />
          <div className="rrc-why-strengths rrc-stagger">
            {STRENGTHS.map((item) => <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.text} />)}
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Preparation cycle">
        <div className="rrc-container">
          <SectionHeader eyebrow="Preparation Cycle" title="A Preparation Cycle Built Around Progress" />
          <ol className="rrc-why-cycle rrc-stagger">
            {METHODOLOGY.map((step, index) => (
              <li className="rrc-card rrc-why-cycle__step" key={step.id}>
                <span className="rrc-badge rrc-badge--gold">{step.step}</span>
                <span className="rrc-icon-badge rrc-why-cycle__icon" aria-hidden="true"><RrcIcon name={METHOD_ICONS[index]} size={20} /></span>
                <h3 className="rrc-card__title">{step.title}</h3>
                <p className="rrc-card__text">{METHOD_COPY[step.id] ?? step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Learning areas">
        <div className="rrc-container">
          <SectionHeader eyebrow="Learning Areas" title="Areas That Support Law Entrance Preparation" description="This is a high-level overview. Emphasis can differ across examinations and courses." />
          <div className="rrc-why-learning-areas rrc-stagger">
            {LEARNING_AREAS.map((area, index) => (
              <article className="rrc-card rrc-why-learning-area" key={area.id}>
                <span className="rrc-icon-badge rrc-why-learning-area__icon" aria-hidden="true"><RrcIcon name={LEARNING_AREA_ICONS[index % LEARNING_AREA_ICONS.length]} size={20} /></span>
                <h3 className="rrc-card__title">{area.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--navy rrc-why-application" aria-label="From knowledge to performance">
        <div className="rrc-container">
          <SectionHeader eyebrow="From Knowledge to Performance" title="Learning Should Lead to Application" description="Understanding concepts is the starting point. Structured practice and review help learners apply what they learn and identify areas for improvement." />
          <ol className="rrc-why-progression rrc-stagger">
            {PROGRESSION.map((step, index) => (
              <li className="rrc-why-progression__step" key={step.title}>
                <span className="rrc-why-progression__number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rrc-section" aria-label="Current affairs and awareness">
        <div className="rrc-container rrc-why-awareness">
          <div className="rrc-why-awareness__copy">
            <SectionHeader eyebrow="Awareness & Context" title="Stay Connected to Current Affairs" align="left" />
            <p>Current affairs and general awareness help learners connect legal and constitutional developments with the wider context of law entrance preparation. Retention and revision support continued familiarity with important topics.</p>
            <Button to="/programs/current-affairs" variant="text">Explore Current Affairs &amp; GK <span aria-hidden="true">→</span></Button>
          </div>
          <ul className="rrc-card rrc-why-awareness__list">
            {AWARENESS.map((item) => <li key={item}><RrcIcon name="check_circle" size={18} /><span>{item}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Academic guidance">
        <div className="rrc-container">
          <SectionHeader eyebrow="Academic Guidance" title="Guidance Across the Learning Journey" />
          <div className="rrc-why-guidance rrc-stagger">
            {GUIDANCE.map((item) => <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.text} />)}
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Programs for different stages">
        <div className="rrc-container">
          <SectionHeader eyebrow="Preparation Programs" title="Programs for Different Stages of Preparation" />
          <div className="rrc-why-programs rrc-stagger">
            {programPageList.map((program) => (
              <article className="rrc-card rrc-why-program-card" key={program.slug}>
                <span className="rrc-icon-badge rrc-why-program-card__icon" aria-hidden="true"><RrcIcon name={PROGRAM_ICONS[program.slug]} size={20} /></span>
                <h3 className="rrc-card__title">{program.title}</h3>
                <p className="rrc-card__text">{program.description}</p>
                <Link className="rrc-why-program-card__link" to={`/programs/${program.slug}`}>View {program.shortTitle} <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Learning environment">
        <div className="rrc-container">
          <SectionHeader eyebrow="Learning Environment" title="An Environment Built for Focused Learning" />
          <div className="rrc-why-environment rrc-stagger">
            {LEARNING_PRINCIPLES.map((item) => <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.text} />)}
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Who can benefit">
        <div className="rrc-container">
          <SectionHeader eyebrow="Who Can Benefit" title="Who Can Explore RRC Law Academy?" description="These groups are a general guide, not formal eligibility criteria." />
          <div className="rrc-why-audience rrc-stagger">
            {AUDIENCES.map((item) => <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.text} />)}
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--navy rrc-why-cta" aria-label="Start with a structured preparation plan">
        <div className="rrc-container rrc-why-cta__inner">
          <SectionHeader eyebrow="Your Next Step" title="Start With a Structured Preparation Plan" description="Explore the courses and programs available through RRC Law Academy and choose the preparation path that fits your current stage." />
          <div className="rrc-btn-row rrc-why-cta__actions">
            <Button to="/courses" variant="primary">Explore Courses</Button>
            <Button to="/registration" variant="secondary">Enquire Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
