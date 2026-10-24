import Button from '../components/Button';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import FAQAccordion from '../components/FAQAccordion';
import { programPageList } from '../data/programPages';
import programsHeroImage from '../assets/rrc-law-academy-about-learning.webp';
import './Programs.css';

const PROGRAM_ICONS = {
  foundation: 'foundation',
  'intensive-revision': 'refresh',
  'mock-test': 'fact_check',
  'current-affairs': 'newspaper',
};

const sharedMethodology = programPageList[0]?.methodology ?? [];

const PROGRAMS_PAGE_FAQS = [
  {
    id: 'programs-faq-diff',
    question: 'How do modular programs differ from full entrance courses?',
    answer:
      'Our entrance courses (CLAT UG, CLAT PG, AILET UG, AILET PG) are comprehensive cohorts that cover the complete entrance examination syllabus from end to end. In contrast, modular programs focus on a specific skill or preparation phase—such as early foundational skills, fast-track revision, timed test series, or ongoing legal general awareness.',
  },
  {
    id: 'programs-faq-school',
    question: 'Can school students in Class XI or XII join the Foundation Program?',
    answer:
      'Yes. The Foundation Program is specifically structured for Class XI and XII students as well as beginners, with weekend and after-school schedules designed to complement school academics without creating burnout.',
  },
  {
    id: 'programs-faq-self-study',
    question: 'Can self-study students join just the Mock Test Program or Current Affairs?',
    answer:
      'Yes, all modular programs can be enrolled in independently. Independent self-study aspirants and retakers regularly join our Mock Test Series for objective benchmarking and our Current Affairs track for curated legal updates.',
  },
  {
    id: 'programs-faq-location',
    question: 'Are programs conducted in person in Thanjavur or online?',
    answer:
      'RRC Law Academy conducts classroom sessions at our physical academy in Thanjavur, featuring air-conditioned classrooms and a quiet legal reference library. Hybrid learning access is also provided for students needing flexible scheduling.',
  },
  {
    id: 'programs-faq-combine',
    question: 'Can I combine multiple programs together?',
    answer:
      'Yes. Aspirants frequently combine the Mock Test Program with the Current Affairs & GK track, or pair Foundation modules with subject drills. Our academic counsellors can help design an optimal combination for your goals.',
  },
];

function ProgramOverviewCard({ program }) {
  const firstObjective = program.objectives?.[0];

  return (
    <article className="rrc-card rrc-programs-card">
      <div className="rrc-programs-card__media">
        <img
          src={program.heroImage}
          alt={`${program.title} at RRC Law Academy`}
          width="400"
          height="240"
          loading="lazy"
          decoding="async"
          className="rrc-programs-card__thumb"
        />
        <span className="rrc-programs-card__badge">{program.shortTitle}</span>
      </div>
      <div className="rrc-programs-card__body">
        <div className="rrc-programs-card__header">
          <span className="rrc-icon-badge rrc-programs-card__icon" aria-hidden="true">
            <RrcIcon name={PROGRAM_ICONS[program.slug]} size={20} />
          </span>
          <p className="rrc-eyebrow rrc-programs-card__eyebrow">{program.eyebrow}</p>
        </div>
        <h3 className="rrc-card__title rrc-programs-card__title">{program.title}</h3>
        <p className="rrc-card__text rrc-programs-card__description">{program.description}</p>
        {firstObjective ? (
          <p className="rrc-programs-card__focus">
            <strong>Key Focus:</strong> {firstObjective.text}
          </p>
        ) : null}
        <div className="rrc-programs-card__footer">
          <span className="rrc-programs-card__mode">
            <RrcIcon name="location_on" size={14} /> Classroom & Hybrid
          </span>
          <Button to={`/programs/${program.slug}`} variant="text" className="rrc-programs-card__link">
            Explore Program <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </article>
  );
}

export default function Programs() {
  return (
    <div className="rrc-programs-page">
      {/* Hero Section: 2-column with visual */}
      <section className="rrc-programs-hero rrc-section--navy" aria-labelledby="rrc-programs-title">
        <div className="rrc-container rrc-programs-hero__grid">
          <div className="rrc-programs-hero__copy">
            <p className="rrc-eyebrow">PROGRAMS • MODULAR PREPARATION</p>
            <h1 id="rrc-programs-title" className="rrc-display rrc-programs-hero__title">
              Structured Programs for Every Stage of Preparation
            </h1>
            <p className="rrc-lead">
              While our full entrance courses offer complete year-round cohorts for CLAT and AILET,
              our modular programs provide targeted skill-building tracks—from early foundational clarity
              and high-yield revision to exam-grade test simulations and legal GK mastery.
            </p>
            <div className="rrc-btn-row rrc-programs-hero__actions">
              <Button href="#program-options" variant="primary">Explore Programs ↓</Button>
              <Button to="/registration" variant="secondary">Talk to a Counsellor</Button>
            </div>
          </div>
          <div className="rrc-programs-hero__visual">
            <div className="rrc-programs-hero__frame">
              <img
                src={programsHeroImage}
                alt="Law entrance aspirants participating in structured academic learning at RRC Law Academy"
                width="640"
                height="480"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="rrc-programs-hero__image"
              />
              <span className="rrc-programs-hero__visual-note">
                Classroom in Thanjavur • Hybrid Mentorship
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Options Grid */}
      <section id="program-options" className="rrc-section rrc-section--light" aria-label="Program options">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Modular Academic Tracks"
            title="Choose the Program That Matches Your Preparation Stage"
            description="Review each modular track below to find the specific learning format aligned with your goals. Enrol independently or alongside full entrance coaching."
            align="left"
          />
          <div className="rrc-programs-grid rrc-stagger">
            {programPageList.map((program) => (
              <ProgramOverviewCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Pathways Comparison: Courses vs Programs */}
      <section className="rrc-section" aria-label="Understanding Programs vs Courses">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Preparation Pathways Guide"
            title="Understanding Courses vs. Modular Programs"
            description="Choose the right pathway based on where you are in your academic journey."
            align="left"
          />
          <div className="rrc-programs-pathways rrc-stagger">
            <article className="rrc-card rrc-programs-pathway-card">
              <span className="rrc-icon-badge rrc-badge--gold" aria-hidden="true">
                <RrcIcon name="school" size={22} />
              </span>
              <h3 className="rrc-card__title">Entrance Examination Courses</h3>
              <p className="rrc-card__text">
                Comprehensive, year-round cohorts designed for students targeting specific national law exams. Includes full syllabus coverage, study materials, mentoring, and test series.
              </p>
              <ul className="rrc-programs-pathway-list">
                <li><RrcIcon name="check_circle" size={16} /><span><strong>CLAT UG:</strong> 5-year integrated law entrance after Class 12</span></li>
                <li><RrcIcon name="check_circle" size={16} /><span><strong>CLAT PG:</strong> LL.M. entrance for law graduates</span></li>
                <li><RrcIcon name="check_circle" size={16} /><span><strong>AILET UG:</strong> National Law University Delhi B.A. LL.B.</span></li>
                <li><RrcIcon name="check_circle" size={16} /><span><strong>AILET PG:</strong> National Law University Delhi LL.M.</span></li>
              </ul>
              <div className="rrc-programs-pathway-card__footer">
                <Button to="/courses" variant="secondary" className="rrc-btn--sm">
                  Explore Full Courses →
                </Button>
              </div>
            </article>

            <article className="rrc-card rrc-programs-pathway-card rrc-card--tint">
              <span className="rrc-icon-badge" aria-hidden="true">
                <RrcIcon name="menu_book" size={22} />
              </span>
              <h3 className="rrc-card__title">Modular Preparation Programs</h3>
              <p className="rrc-card__text">
                Specialized pedagogical modules that target a specific phase of learning. Ideal for school beginners, self-study candidates, or students seeking focused skill reinforcement.
              </p>
              <ul className="rrc-programs-pathway-list">
                <li><RrcIcon name="check_circle" size={16} /><span><strong>Foundation:</strong> Core reading, logic, and habits for Class XI/XII</span></li>
                <li><RrcIcon name="check_circle" size={16} /><span><strong>Intensive Revision:</strong> High-yield consolidation & error reduction</span></li>
                <li><RrcIcon name="check_circle" size={16} /><span><strong>Mock Test Program:</strong> Timed simulations & diagnostic analytics</span></li>
                <li><RrcIcon name="check_circle" size={16} /><span><strong>Current Affairs:</strong> Constitutional updates & monthly digests</span></li>
              </ul>
              <div className="rrc-programs-pathway-card__footer">
                <Button to="/registration" variant="primary" className="rrc-btn--sm">
                  Enquire for Modular Programs →
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Preparation Methodology: 5-Step Loop */}
      <section className="rrc-section rrc-section--light" aria-label="Preparation approach">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Preparation Approach"
            title="One Proven Methodology Across Every Program"
            description="Our structured 5-step preparation loop ensures continuous improvement from initial concept to examination day."
            align="left"
          />
          <ol className="rrc-programs-method rrc-stagger">
            {sharedMethodology.map((step) => (
              <li className="rrc-card rrc-programs-method__step" key={step.id}>
                <span className="rrc-badge rrc-badge--gold">{step.step}</span>
                <h3 className="rrc-card__title">{step.title}</h3>
                <p className="rrc-card__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="rrc-section" aria-label="Frequently asked questions about programs">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Questions & Answers"
            title="Frequently Asked Questions About Our Programs"
            description="Find clear answers about admissions, delivery modes at our Thanjavur centre, and program schedules."
            align="left"
          />
          <FAQAccordion items={PROGRAMS_PAGE_FAQS} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="rrc-section rrc-section--navy rrc-programs-cta" aria-label="Build a structured preparation plan">
        <div className="rrc-container rrc-programs-cta__inner">
          <SectionHeader
            eyebrow="Plan Your Next Step"
            title="Build a Structured Preparation Plan With RRC"
            description="Connect with our academic team in Thanjavur to discuss your preparation stage, review batch schedules, or schedule a campus visit."
            align="center"
          />
          <div className="rrc-btn-row rrc-programs-cta__actions">
            <Button to="/registration" variant="primary">Enquire Now</Button>
            <Button to="/courses" variant="secondary">Explore Full Courses</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
