import { Link } from 'react-router-dom';
import Button from '../components/Button';
import FAQAccordion from '../components/FAQAccordion';
import FeatureCard from '../components/FeatureCard';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import WhyVisual from '../components/WhyVisual';
import { programPageList } from '../data/programPages';
import whyHeroImage from '../assets/why_rrc_hero_section.webp';
import whyNextSectionImage from '../assets/why_rrc_next_hero_inside_section.webp';
import './WhyRRC.css';

// Quick highlights strip in hero
const HERO_HIGHLIGHTS = [
  { icon: 'groups', text: 'Small Cohorts · 1-on-1 Mentorship' },
  { icon: 'school', text: 'Thanjavur Classroom & Hybrid' },
  { icon: 'menu_book', text: 'Passage-Based & Doctrinal Rigour' },
  { icon: 'library_books', text: 'Quiet Law Reference Library' },
];

// Core institutional advantages (Why Choose RRC)
const ADVANTAGES = [
  {
    icon: 'groups',
    title: 'Small-Cohort Mentorship',
    description: 'We keep batch sizes deliberately limited so faculty can mentor each student directly, tracking reading speed, accuracy, and conceptual progress without anyone getting lost in the crowd.',
  },
  {
    icon: 'menu_book',
    title: 'Passage-Based Curriculum',
    description: 'Our pedagogy directly mirrors the modern comprehension-heavy CLAT & AILET formats, training aspirants to analyze complex legal passages rapidly under timed examination pressure.',
  },
  {
    icon: 'fact_check',
    title: 'Diagnostic Mock Simulations',
    description: 'Full-length proctored tests designed to consortium standards, accompanied by question-level error diagnostics and negative-marking mitigation strategies.',
  },
  {
    icon: 'library_books',
    title: 'Dedicated Thanjavur Library',
    description: 'In-person students have daily access to a distraction-free study space stocked with legal commentaries, landmark judgments, Bare Acts, and past question archives.',
  },
  {
    icon: 'newspaper',
    title: 'Structured Current Affairs & GK',
    description: 'Curated monthly compendiums, constitutional updates, statutory analysis, and continuous revision loops that turn current affairs into high-scoring sections.',
  },
  {
    icon: 'refresh',
    title: 'Flexible Hybrid Learning',
    description: 'Tailored weekday and weekend batches enable Class 11 and 12 students and working graduates to balance school board exams or college academics with entrance drills.',
  },
];

// The 5-Step Academic Learning Loop
const PREPARATION_LOOP = [
  {
    step: '01',
    title: 'Understand',
    icon: 'menu_book',
    description: 'Master legal doctrines, constitutional foundations, logical structures, and quantitative concepts with clarity.',
  },
  {
    step: '02',
    title: 'Practise',
    icon: 'edit_document',
    description: 'Engage in daily passage-based reading drills, critical thinking exercises, and timed sectional problem sets.',
  },
  {
    step: '03',
    title: 'Test',
    icon: 'quiz',
    description: 'Take timed, full-length proctored mock examinations calibrated to official consortium patterns and difficulty.',
  },
  {
    step: '04',
    title: 'Analyse',
    icon: 'analytics',
    description: 'Deconstruct test scorecards with mentors to identify accuracy leaks, time wastage, and negative marks.',
  },
  {
    step: '05',
    title: 'Improve',
    icon: 'trending_up',
    description: 'Refine exam-taking strategy, address conceptual gaps with personalized drills, and build steady performance.',
  },
];

// Comprehensive Curriculum & Learning Areas
const CURRICULUM_AREAS = [
  {
    id: 'english-comprehension',
    icon: 'menu_book',
    title: 'English & Reading Comprehension',
    description: 'Passage-level critical reading, vocabulary in context, authorial stance, and inference extraction across contemporary editorial and literary texts.',
  },
  {
    id: 'current-affairs',
    icon: 'newspaper',
    title: 'Current Affairs & General Knowledge',
    description: 'National and international developments, landmark constitutional milestones, statutory amendments, and structured monthly thematic digests.',
  },
  {
    id: 'legal-reasoning',
    icon: 'gavel',
    title: 'Legal Reasoning',
    description: 'Application of statutory rules and legal doctrines to factual scenarios across constitutional law, torts, contracts, and criminal jurisprudence.',
  },
  {
    id: 'logical-reasoning',
    icon: 'psychology',
    title: 'Logical Reasoning',
    description: 'Syllogisms, statement-assumptions, argument strength evaluation, logical paradoxes, and analytical reasoning pattern drills.',
  },
  {
    id: 'quantitative-techniques',
    icon: 'analytics',
    title: 'Quantitative Techniques',
    description: 'Data interpretation, caselets, graphical analysis, ratios, percentages, and practical commercial mathematics applied to passage sets.',
  },
  {
    id: 'legal-reading-analysis',
    icon: 'library_books',
    title: 'Legal Reading & Doctrinal Analysis',
    description: 'In-depth analytical reading of judicial opinions, statutory texts, and academic commentaries designed for postgraduate and advanced entrance depth.',
  },
];

// Campus & Infrastructure Facilities in Thanjavur
const CAMPUS_FACILITIES = [
  {
    icon: 'library_books',
    title: 'Quiet Reference Library',
    text: 'Access to physical law commentaries, legal dictionaries, Bare Acts, and past entrance archives in a calm, focused atmosphere.',
  },
  {
    icon: 'school',
    title: 'Interactive Classrooms',
    text: 'Modern, well-lit spaces equipped for collaborative debate, legal reasoning workshops, and direct mentor-led drills.',
  },
  {
    icon: 'groups',
    title: 'Dedicated Doubt Hours',
    text: 'Scheduled faculty consultation slots after every session to ensure questions are resolved immediately without delay.',
  },
  {
    icon: 'schema',
    title: 'Parent-Mentor Updates',
    text: 'Transparent academic progress tracking, attendance monitoring, and periodic diagnostic review sessions for families.',
  },
];

// Tailored Pathways for Different Learner Groups
const AUDIENCES = [
  {
    icon: 'school',
    title: 'High School Students (Classes 11 & 12)',
    badge: '2-Year & 1-Year Cohorts',
    text: 'Balanced weekend and evening batches designed to build entrance mastery alongside school board examination excellence.',
  },
  {
    icon: 'manage_search',
    title: 'Undergraduate Entrance Aspirants',
    badge: 'CLAT & AILET UG',
    text: 'Targeted preparation for CLAT UG, AILET UG, SLAT, and state law entrances through intensive passage reading and mock drills.',
  },
  {
    icon: 'workspace_premium',
    title: 'Law Students & LL.B Graduates',
    badge: 'CLAT & AILET PG',
    text: 'Doctrinal curriculum covering constitutional law, jurisprudence, criminal law, and commercial law for LL.M entrance success.',
  },
  {
    icon: 'repeat',
    title: 'Dedicated Full-Year Aspirants',
    badge: 'Intensive Cohorts',
    text: 'Rigorous daytime preparation with full-length mocks, sectional speed drills, and personalized error review to maximize ranks.',
  },
];

// FAQ items addressing prospective students and parents
const WHY_FAQS = [
  {
    id: 'batch-size',
    question: 'How is RRC Law Academy different from large commercial coaching centres?',
    answer: 'Unlike mass commercial coaching institutes that seat 100+ students in a single lecture, RRC Law Academy intentionally restricts batch sizes. This ensures our faculty knows every aspirant individually, tracks their sectional speed and accuracy through diagnostic scorecards, and provides direct, one-on-one doubt clearing.',
  },
  {
    id: 'board-balance',
    question: 'Can high school students balance board exams with RRC law entrance preparation?',
    answer: 'Yes. Our Foundation and 2-Year cohorts feature flexible weekend and evening schedules created specifically for Class 11 and 12 students. Academic milestones are planned to accommodate school term exams and board preparation without disrupting law entrance continuity.',
  },
  {
    id: 'passage-pattern',
    question: 'How does RRC prepare students for the modern passage-based CLAT and AILET patterns?',
    answer: 'CLAT and AILET reward critical reading and rapid comprehension over rote memorization. Our curriculum trains students through daily passage-based reading drills, case-law interpretation, authorial perspective analysis, and timed sectional sets calibrated to Consortium standards.',
  },
  {
    id: 'thanjavur-library',
    question: 'Is classroom coaching available in Thanjavur, and what are the library facilities?',
    answer: 'Yes. RRC Law Academy operates a dedicated classroom facility and reference library in Thanjavur. Enrolled students have access to quiet study desks, legal reference commentaries, Bare Acts, past examination papers, and an undisturbed environment for self-study.',
  },
  {
    id: 'mock-diagnostics',
    question: 'How are mock test results evaluated and shared with students and parents?',
    answer: 'Every mock examination produces a granular diagnostic report identifying sectional scores, accuracy percentage, time spent per passage, and negative-marking penalties. Mentors review these reports with students to adjust study plans, and updates are shared with parents.',
  },
  {
    id: 'counselling-visit',
    question: 'How can prospective students or parents schedule an academic counselling session?',
    answer: 'Students and parents are welcome to visit our Thanjavur academy or book a counselling session online through our registration page. Our mentors provide honest academic diagnostic assessments and advise on the most suitable preparation cohort for the student.',
  },
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
      {/* 1. HERO SECTION */}
      <section className="rrc-why-hero" aria-labelledby="rrc-why-title">
        <div className="rrc-container rrc-why-hero__grid">
          <div className="rrc-why-hero__copy rrc-anim-fade-up">
            <p className="rrc-eyebrow">Why Choose RRC Law Academy</p>
            <h1 id="rrc-why-title" className="rrc-display rrc-why-hero__title">
              Structured Law Entrance Preparation Built on Mentorship &amp; Rigour
            </h1>
            <p className="rrc-lead">
              Cracking competitive law entrance examinations like CLAT and AILET demands more than generic lectures. RRC Law Academy brings together rigorous passage-based coaching, small-cohort faculty mentorship, full-length diagnostic mocks, and dedicated Thanjavur library facilities to help aspirants build lasting exam readiness.
            </p>
            <div className="rrc-btn-row rrc-why-hero__actions">
              <Button to="/courses" variant="navy">Explore All Courses</Button>
              <Button to="/registration" variant="secondary">Book Academic Counselling</Button>
            </div>
            <div className="rrc-why-hero__chips" aria-label="Key academy highlights">
              {HERO_HIGHLIGHTS.map((item) => (
                <span className="rrc-why-chip" key={item.text}>
                  <RrcIcon name={item.icon} size={16} />
                  <span>{item.text}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="rrc-why-hero__visual">
            <div className="rrc-why-hero__visual-wrap">
              <WhyVisual
                src={whyHeroImage}
                alt="A focused law aspirant studying legal preparation material at a desk in a modern law academy study room."
                focus="70% 50%"
                priority
                illustration={<AcademicVisual />}
              />
              <div className="rrc-why-hero__badge" aria-hidden="true">
                <RrcIcon name="school" size={18} />
                <span>Classroom &amp; Hybrid · Thanjavur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE RRC ADVANTAGE / DIFFERENTIATORS */}
      <section className="rrc-section rrc-section--light" aria-labelledby="rrc-why-advantages-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="The RRC Advantage"
            id="rrc-why-advantages-title"
            title="Why Aspirants &amp; Parents Choose RRC Law Academy"
            description="Our personalized academic model delivers structured, disciplined preparation designed to outperform impersonal mass-coaching centres."
          />
          <div className="rrc-why-advantages rrc-stagger">
            {ADVANTAGES.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE 5-STEP ACADEMIC LEARNING LOOP */}
      <section className="rrc-section rrc-why-loop-section" aria-labelledby="rrc-why-loop-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Proven Methodology"
            id="rrc-why-loop-title"
            title="Our 5-Step Academic Learning Loop"
            description="Preparation is an iterative loop that moves methodically from foundational legal doctrine to timed precision under full-length exam pressure."
          />
          <ol className="rrc-why-loop rrc-stagger">
            {PREPARATION_LOOP.map((step) => (
              <li className="rrc-card rrc-why-loop__card" key={step.step}>
                <div className="rrc-why-loop__header">
                  <span className="rrc-badge rrc-badge--gold">{step.step}</span>
                  <span className="rrc-icon-badge rrc-why-loop__icon" aria-hidden="true">
                    <RrcIcon name={step.icon} size={20} />
                  </span>
                </div>
                <h3 className="rrc-card__title">{step.title}</h3>
                <p className="rrc-card__text">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. COMPREHENSIVE CURRICULUM & LEARNING AREAS */}
      <section className="rrc-section rrc-section--light" aria-labelledby="rrc-why-curriculum-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Curriculum Scope"
            id="rrc-why-curriculum-title"
            title="Comprehensive Coverage Across All Entrance Domains"
            description="Every section of modern law entrance exams demands specific cognitive skills. Our curriculum builds mastery across all tested areas."
          />
          <div className="rrc-why-curriculum rrc-stagger">
            {CURRICULUM_AREAS.map((area) => (
              <article className="rrc-card rrc-why-curriculum__card" key={area.id}>
                <span className="rrc-icon-badge rrc-why-curriculum__icon" aria-hidden="true">
                  <RrcIcon name={area.icon} size={22} />
                </span>
                <h3 className="rrc-card__title">{area.title}</h3>
                <p className="rrc-card__text">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THANJAVUR CAMPUS & LEARNING ENVIRONMENT */}
      <section className="rrc-section rrc-why-campus-section" aria-labelledby="rrc-why-campus-title">
        <div className="rrc-container rrc-why-campus__grid">
          <div className="rrc-why-campus__visual-col">
            <div className="rrc-why-campus__visual-wrap">
              <WhyVisual
                className="rrc-why-media--notes"
                src={whyNextSectionImage}
                alt="Organised study notes, legal preparation books, and mock-test material on a study desk."
                illustration={<StudyNotesVisual />}
              />
              <div className="rrc-why-campus__visual-badge" aria-hidden="true">
                <RrcIcon name="library_books" size={18} />
                <span>Thanjavur Study Center &amp; Library</span>
              </div>
            </div>
          </div>
          <div className="rrc-why-campus__copy-col">
            <SectionHeader
              eyebrow="Campus &amp; Facilities"
              id="rrc-why-campus-title"
              title="An Academic Environment Designed for Deep Focus"
              align="left"
            />
            <p className="rrc-why-campus__lead">
              Quiet study habits and direct mentor access make all the difference during demanding entrance preparation. Our Thanjavur centre combines classroom instruction with dedicated library resources.
            </p>
            <div className="rrc-why-campus__features">
              {CAMPUS_FACILITIES.map((facility) => (
                <div className="rrc-card rrc-why-campus__facility" key={facility.title}>
                  <span className="rrc-icon-badge rrc-why-campus__icon" aria-hidden="true">
                    <RrcIcon name={facility.icon} size={20} />
                  </span>
                  <div>
                    <h4 className="rrc-why-campus__facility-title">{facility.title}</h4>
                    <p className="rrc-why-campus__facility-text">{facility.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEARNER PATHWAYS (WHO CAN BENEFIT) */}
      <section className="rrc-section rrc-section--light" aria-labelledby="rrc-why-pathways-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Tailored Programs"
            id="rrc-why-pathways-title"
            title="Who Can Benefit from RRC Law Academy?"
            description="Structured preparatory pathways configured around distinct academic timelines and entrance goals."
          />
          <div className="rrc-why-audiences rrc-stagger">
            {AUDIENCES.map((item) => (
              <article className="rrc-card rrc-why-audience-card" key={item.title}>
                <div className="rrc-why-audience-card__header">
                  <span className="rrc-icon-badge rrc-why-audience-card__icon" aria-hidden="true">
                    <RrcIcon name={item.icon} size={22} />
                  </span>
                  <span className="rrc-badge rrc-badge--gold">{item.badge}</span>
                </div>
                <h3 className="rrc-card__title">{item.title}</h3>
                <p className="rrc-card__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONNECTED PREPARATION PROGRAMS */}
      <section className="rrc-section" aria-labelledby="rrc-why-programs-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Preparation Programs"
            id="rrc-why-programs-title"
            title="Programs Suited to Your Preparation Needs"
            description="Choose the preparation format suited to your current learning stage and examination timeline."
          />
          <div className="rrc-why-programs rrc-stagger">
            {programPageList.map((program) => (
              <article className="rrc-card rrc-why-program-card" key={program.slug}>
                <span className="rrc-icon-badge rrc-why-program-card__icon" aria-hidden="true">
                  <RrcIcon name={PROGRAM_ICONS[program.slug]} size={20} />
                </span>
                <h3 className="rrc-card__title">{program.title}</h3>
                <p className="rrc-card__text">{program.description}</p>
                <Link className="rrc-why-program-card__link" to={`/programs/${program.slug}`}>
                  View {program.shortTitle} Details <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="rrc-section rrc-section--light rrc-why-faq-section" aria-labelledby="rrc-why-faq-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Decision Guide"
            id="rrc-why-faq-title"
            title="Frequently Asked Questions About Choosing RRC"
            description="Clear answers to help students and parents make an informed decision about law entrance coaching."
          />
          <div className="rrc-why-faq-wrapper">
            <FAQAccordion items={WHY_FAQS} />
          </div>
        </div>
      </section>

      {/* 9. HIGH-IMPACT CONVERSION CTA */}
      <section className="rrc-section rrc-section--navy rrc-why-cta" aria-labelledby="rrc-why-cta-title">
        <div className="rrc-container rrc-why-cta__inner">
          <SectionHeader
            eyebrow="Begin Your Legal Journey"
            id="rrc-why-cta-title"
            title="Build Your Path Toward a Top National Law University"
            description="Speak with an academic counsellor, explore our upcoming classroom and hybrid cohorts, or visit our Thanjavur academy to review our curriculum and facilities."
          />
          <div className="rrc-btn-row rrc-why-cta__actions">
            <Button to="/courses" variant="primary">Explore All Courses</Button>
            <Button to="/registration" variant="secondary">Book Academic Counselling</Button>
          </div>
          <div className="rrc-why-cta__reassurance" aria-label="Admissions reassurance">
            <span>✓ Dedicated Thanjavur Classroom &amp; Library</span>
            <span>✓ Transparent Academic Mentorship</span>
            <span>✓ Direct One-on-One Diagnostic Guidance</span>
          </div>
        </div>
      </section>
    </div>
  );
}
