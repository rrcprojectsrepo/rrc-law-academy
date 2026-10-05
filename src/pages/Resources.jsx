import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import FeatureCard from '../components/FeatureCard';
import RrcIcon from '../components/RrcIcon';
import ResourceCard from '../components/ResourceCard';
import SectionHeader from '../components/SectionHeader';
import { coursePageList } from '../data/coursePages';
import { programPageList } from '../data/programPages';
import resourcesHeroImage from '../assets/resourses_hero.jpg';
import './Resources.css';

const RESOURCE_CATEGORIES = [
  { icon: 'newspaper', title: 'Legal Current Affairs', description: 'Explore developments, events, institutions, legal developments, and issues that can contribute to current-affairs awareness.' },
  { icon: 'gavel', title: 'Case Law Awareness', description: 'Develop familiarity with important judicial decisions and understand how legal reasoning can be studied through cases.' },
  { icon: 'fact_check', title: 'Law Entrance Practice', description: 'Strengthen preparation through question practice, reasoning exercises, reading, and revision.' },
  { icon: 'balance', title: 'Legal Knowledge', description: 'Explore foundational legal concepts, terminology, constitutional ideas, and areas of legal awareness.' },
  { icon: 'menu_book', title: 'Reading & Comprehension', description: 'Develop the ability to read, understand, interpret, and analyse information carefully.' },
  { icon: 'psychology', title: 'Reasoning & Analytical Skills', description: 'Practise structured thinking, logical reasoning, and analytical problem solving.' },
];

const CURRENT_AFFAIRS_AREAS = [
  'Legal developments',
  'Important judgments',
  'Constitutional developments',
  'Government and public-policy developments',
  'National and international events',
  'Important institutions',
  'Social and economic developments',
];

const READING_APPROACH = [
  'Identify the issue',
  'Understand the context',
  'Read the reasoning',
  'Note important principles',
  'Reflect on the outcome',
];

const PREPARATION_FOCUS = [
  { icon: 'menu_book', title: 'Read', description: 'Build reading consistency and comprehension.' },
  { icon: 'edit_document', title: 'Practise', description: 'Apply concepts through questions and exercises.' },
  { icon: 'quiz', title: 'Test', description: 'Use assessments and mock practice to understand performance.' },
  { icon: 'analytics', title: 'Analyse', description: 'Review mistakes and identify areas for improvement.' },
];

const SUGGESTED_HABITS = [
  { icon: 'menu_book', title: 'Read', description: 'Regular reading and comprehension practice.' },
  { icon: 'repeat', title: 'Review', description: 'Revise previously learned concepts.' },
  { icon: 'edit_document', title: 'Practise', description: 'Work through relevant questions and exercises.' },
  { icon: 'newspaper', title: 'Current Affairs', description: 'Follow relevant developments and verify information.' },
  { icon: 'analytics', title: 'Reflect', description: 'Review mistakes and identify areas for improvement.' },
];

const LEARNER_STAGES = [
  { icon: 'explore', title: 'Exploring Law', text: 'For students beginning to explore legal education and law entrance pathways.', link: '/career-in-law', action: 'Learn About Law' },
  { icon: 'foundation', title: 'Building Foundations', text: 'For learners developing reading, reasoning, general awareness, and foundational preparation.', link: '/programs/foundation', action: 'Foundation Program' },
  { icon: 'school', title: 'Focused Preparation', text: 'For learners working toward structured law entrance preparation.', link: '/courses', action: 'Explore Courses' },
  { icon: 'refresh', title: 'Revision & Practice', text: 'For learners focusing on revision, testing, and performance review.', link: '/programs/intensive-revision', action: 'View Revision Program' },
];

const METHODOLOGY = coursePageList[0]?.methodology ?? [];

const FAQ_ITEMS = [
  { id: 'resource-types', question: 'What types of resources can support law entrance preparation?', answer: 'Reading, current-affairs awareness, reasoning practice, legal awareness, revision, and structured testing can all contribute to preparation.' },
  { id: 'legal-subjects', question: 'Should I focus only on legal subjects?', answer: 'Law entrance preparation can involve multiple areas depending on the examination and preparation pathway. Students should follow the relevant examination requirements and build broad reading and reasoning skills.' },
  { id: 'reading-skills', question: 'How can I improve my reading skills?', answer: 'Regular reading, comprehension practice, summarising information, and reviewing unfamiliar terminology can help build reading confidence.' },
  { id: 'current-affairs', question: 'Why is current affairs awareness important?', answer: 'Current affairs can contribute to general awareness and understanding of developments relevant to law and society. The exact relevance depends on the examination.' },
  { id: 'downloads', question: 'Does RRC provide downloadable study materials?', answer: 'Resource availability depends on the materials currently offered by the academy. This page focuses on learning areas and preparation guidance rather than claiming access to unverified downloadable resources.' },
  { id: 'programs', question: "Where can I learn more about RRC's preparation programs?", answer: 'Explore the Programs section to review the available preparation pathways.' },
];

function ResourceHeroVisual() {
  return (
    <img
      className="rrc-resources-visual"
      src={resourcesHeroImage}
      alt="A law student studying legal documents beside a laptop in a bright library."
    />
  );
}

function LearningPathVisual() {
  const steps = ['Read', 'Understand', 'Practise', 'Revise', 'Reflect'];
  return (
    <ol className="rrc-resources-learning-path" aria-label="Suggested learning process">
      {steps.map((step, index) => (
        <li key={step}>
          <span className="rrc-resources-learning-path__number">0{index + 1}</span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}

export default function Resources() {
  return (
    <div className="rrc-resources-page">
      <section className="rrc-resources-hero" aria-label="Study resources introduction">
        <div className="rrc-container rrc-resources-hero__grid">
          <div className="rrc-resources-hero__copy rrc-anim-fade-up">
            <p className="rrc-eyebrow">Study Resources</p>
            <h1 className="rrc-display rrc-resources-hero__title">Resources to Support Your Law Entrance Preparation</h1>
            <p className="rrc-lead">Build stronger preparation habits through purposeful reading, current affairs awareness, reasoning practice, legal knowledge, and structured revision.</p>
            <div className="rrc-btn-row rrc-resources-hero__actions">
              <Button to="/courses" variant="navy">Explore Courses</Button>
              <Button to="/programs" variant="secondary">View Programs</Button>
            </div>
          </div>
          <div className="rrc-resources-hero__visual"><ResourceHeroVisual /></div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Learn with purpose">
        <div className="rrc-container rrc-resources-intro">
          <div className="rrc-resources-intro__copy">
            <SectionHeader eyebrow="A Purposeful Approach" title="Learn With Purpose" align="left" />
            <p>Effective preparation is not limited to completing a syllabus. Students can strengthen their learning through regular reading, practice, revision, analysis, and awareness of developments relevant to law and society.</p>
          </div>
          <div className="rrc-resources-intro__visual"><LearningPathVisual /></div>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Resource categories">
        <div className="rrc-container">
          <SectionHeader eyebrow="Preparation Focus" title="Explore Key Learning Areas" description="These categories describe areas to explore as part of law entrance preparation; they are not downloadable resource listings." />
          <div className="rrc-resources-category-grid rrc-stagger">
            {RESOURCE_CATEGORIES.map((resource) => <ResourceCard key={resource.title} resource={resource} />)}
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Current affairs awareness">
        <div className="rrc-container rrc-resources-current">
          <div className="rrc-resources-current__copy">
            <SectionHeader eyebrow="Awareness & Context" title="Stay Connected With Legal and Current Affairs" align="left" />
            <p>Current-affairs preparation can involve following developments in law, public life, and society. The relevance of particular topics varies by examination, so verify important information through reliable and current sources.</p>
            <Button to="/programs/current-affairs" variant="text">Explore Current Affairs Program <span aria-hidden="true">→</span></Button>
          </div>
          <ul className="rrc-card rrc-resources-current__list">
            {CURRENT_AFFAIRS_AREAS.map((item) => <li key={item}><RrcIcon name="check_circle" size={18} /><span>{item}</span></li>)}
          </ul>
          <p className="rrc-resources-current__note"><RrcIcon name="verified" size={18} /><span>Always verify important information through reliable and current sources.</span></p>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Case law and legal reading">
        <div className="rrc-container">
          <SectionHeader eyebrow="Read With Context" title="Develop a Habit of Legal Reading" />
          <div className="rrc-resources-reading-grid">
            <article className="rrc-card rrc-resources-reading-card">
              <span className="rrc-icon-badge" aria-hidden="true"><RrcIcon name="gavel" size={20} /></span>
              <h3 className="rrc-card__title">Case Law</h3>
              <p className="rrc-card__text">Reading judicial decisions can help learners understand legal reasoning, interpretation, arguments, and the application of legal principles.</p>
            </article>
            <article className="rrc-card rrc-resources-reading-card">
              <span className="rrc-icon-badge" aria-hidden="true"><RrcIcon name="menu_book" size={20} /></span>
              <h3 className="rrc-card__title">Legal Reading</h3>
              <p className="rrc-card__text">Regular reading can help build familiarity with legal terminology, structured arguments, constitutional ideas, and developments in law.</p>
            </article>
            <div className="rrc-resources-reading-approach">
              <h3>Reading Approach</h3>
              <ol>{READING_APPROACH.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}</ol>
            </div>
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Law entrance preparation">
        <div className="rrc-container">
          <SectionHeader eyebrow="Structured Preparation" title="Use Resources as Part of a Structured Preparation Plan" description="Reading and practice can work alongside a preparation process that includes the existing RRC methodology." />
          <div className="rrc-resources-preparation-grid rrc-stagger">
            {PREPARATION_FOCUS.map((item) => <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />)}
          </div>
          <ol className="rrc-resources-methodology" aria-label="RRC preparation methodology">
            {METHODOLOGY.map((step) => <li key={step.id}><span>{step.step}</span><strong>{step.title}</strong></li>)}
          </ol>
          <div className="rrc-resources-section-action"><Button to="/programs" variant="secondary">Explore Preparation Programs</Button></div>
        </div>
      </section>

      <section className="rrc-section rrc-section--navy rrc-resources-routine" aria-label="Suggested learning habit">
        <div className="rrc-container">
          <SectionHeader eyebrow="Suggested Learning Habit" title="Build Your Own Study Routine" description="A flexible set of habits to adapt to your preparation stage. This is a learning suggestion, not an official RRC schedule." />
          <ol className="rrc-resources-habits rrc-stagger">
            {SUGGESTED_HABITS.map((habit, index) => (
              <li key={habit.title}>
                <span className="rrc-resources-habits__number">0{index + 1}</span>
                <span className="rrc-icon-badge rrc-icon-badge--gold" aria-hidden="true"><RrcIcon name={habit.icon} size={20} /></span>
                <h3>{habit.title}</h3>
                <p>{habit.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rrc-section" aria-label="Resources for different preparation stages">
        <div className="rrc-container">
          <SectionHeader eyebrow="Find a Starting Point" title="Choose Resources Based on Your Preparation Stage" description="Explore the options that best fit what you are learning now; these are not formal eligibility categories." />
          <div className="rrc-resources-learner-grid rrc-stagger">
            {LEARNER_STAGES.map((item) => (
              <article className="rrc-card rrc-resources-learner-card" key={item.title}>
                <span className="rrc-icon-badge" aria-hidden="true"><RrcIcon name={item.icon} size={20} /></span>
                <h3 className="rrc-card__title">{item.title}</h3>
                <p className="rrc-card__text">{item.text}</p>
                <Link className="rrc-resources-card-link" to={item.link}>{item.action}<span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Courses and programs">
        <div className="rrc-container">
          <SectionHeader eyebrow="Structured Pathways" title="Connect Resources With Structured Preparation" description="Independent reading and practice can become more effective when combined with a structured preparation pathway." />
          <div className="rrc-resources-pathways">
            <div>
              <h3 className="rrc-resources-pathways__heading">Courses</h3>
              <div className="rrc-resources-pathways__grid">
                {coursePageList.map((course) => (
                  <Link className="rrc-card rrc-resources-pathway-card" key={course.slug} to={`/courses/${course.slug}`}>
                    <span className="rrc-icon-badge" aria-hidden="true"><RrcIcon name="school" size={20} /></span>
                    <h4>{course.shortTitle}</h4>
                    <p>{course.description}</p>
                    <span className="rrc-resources-card-link">Explore course <span aria-hidden="true">→</span></span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="rrc-resources-pathways__heading">Programs</h3>
              <div className="rrc-resources-pathways__grid">
                {programPageList.map((program) => (
                  <Link className="rrc-card rrc-resources-pathway-card" key={program.slug} to={`/programs/${program.slug}`}>
                    <span className="rrc-icon-badge" aria-hidden="true"><RrcIcon name="layers" size={20} /></span>
                    <h4>{program.shortTitle}</h4>
                    <p>{program.description}</p>
                    <span className="rrc-resources-card-link">Explore program <span aria-hidden="true">→</span></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Resource ecosystem">
        <div className="rrc-container rrc-resources-availability">
          <span className="rrc-badge rrc-badge--gold">Resource Ecosystem</span>
          <div>
            <SectionHeader eyebrow="Learning Can Grow Over Time" title="More Learning Resources Can Be Added Over Time" align="left" />
            <p>RRC Law Academy can continue expanding its learning ecosystem with additional preparation resources, reading materials, practice content, and student-focused learning tools.</p>
          </div>
          <span className="rrc-resources-availability__mark" aria-hidden="true"><RrcIcon name="layers" size={34} /></span>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Study resources frequently asked questions">
        <div className="rrc-container rrc-resources-faq">
          <SectionHeader eyebrow="Study Resources" title="Study Resources — Common Questions" />
          <FAQAccordion items={FAQ_ITEMS} />
          <p className="rrc-resources-faq__link">To review the preparation pathways, <Link to="/programs">explore the Programs section</Link>.</p>
        </div>
      </section>

      <CTASection
        eyebrow="Your Next Step"
        title="Build Better Preparation Habits"
        description="Explore RRC Law Academy's courses and programs and develop a structured approach to your law entrance preparation."
        primaryCta={{ label: 'Explore Courses', link: '/courses' }}
        secondaryCta={{ label: 'Enquire Now', link: '/registration' }}
      />
    </div>
  );
}
