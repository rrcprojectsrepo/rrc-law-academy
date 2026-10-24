import { Link } from 'react-router-dom';
import Button from '../components/Button';
import FAQAccordion from '../components/FAQAccordion';
import FeatureCard from '../components/FeatureCard';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import { coursePageList } from '../data/coursePages';
import { programPageList } from '../data/programPages';
import careerLawHeroImage from '../assets/career-law-hero.webp';
import './CareerInLaw.css';

// Hero domain highlight chips
const HERO_HIGHLIGHTS = [
  { icon: 'balance', text: 'Litigation & Courtroom Advocacy' },
  { icon: 'work', text: 'Corporate Advisory & In-House' },
  { icon: 'gavel', text: 'Judicial Services & Civil Judge' },
  { icon: 'verified', text: 'IP, Cyber & Technology Law' },
];

// Why pursue legal education (Field Orientation)
const ORIENTATION_PILLARS = [
  {
    icon: 'psychology',
    title: 'Intellectual Rigour & Reasoning',
    description: 'Legal education trains the mind to deconstruct complex statutes, analyze competing arguments, and synthesize reasoned conclusions under scrutiny.',
  },
  {
    icon: 'balance',
    title: 'Direct Societal Impact & Justice',
    description: 'Lawyers uphold constitutional principles, protect individual rights, resolve commercial disputes, and help shape public governance.',
  },
  {
    icon: 'trending_up',
    title: 'Exceptional Professional Mobility',
    description: 'A law degree provides versatile career agility across trial chambers, multinational law firms, corporate legal teams, and public administration.',
  },
];

// 6 Core Legal Career Pathways (Balanced 3-column grid)
const CAREER_PATHWAYS = [
  {
    icon: 'balance',
    title: 'Litigation & Dispute Resolution',
    description: 'Advocacy in Trial Courts, High Courts, and the Supreme Court, alongside representation in commercial arbitration, mediation, and tribunals.',
  },
  {
    icon: 'work',
    title: 'Corporate & Commercial Law',
    description: 'Advising corporations, financial institutions, and startups on mergers & acquisitions, joint ventures, banking, contracts, and regulatory compliance.',
  },
  {
    icon: 'gavel',
    title: 'Judicial Services & Public Administration',
    description: 'Appointments as Civil Judge Junior Division through state judicial examinations, public prosecution, and legal advisory roles across government bodies.',
  },
  {
    icon: 'verified',
    title: 'Intellectual Property & Tech Law',
    description: 'Protection and commercialization of patents, trademarks, and copyrights, alongside emerging data privacy regulations, AI governance, and cyber law.',
  },
  {
    icon: 'groups',
    title: 'Constitutional, Human Rights & Policy',
    description: 'Public interest litigation (PIL), legal aid representation, legislative drafting, human rights advocacy, and policy research with think-tanks.',
  },
  {
    icon: 'description',
    title: 'Legal Academia, Research & Consulting',
    description: 'University professorships, judicial clerkships at appellate courts, legal journalism, jurisprudential research, and international policy analysis.',
  },
];

// 4-Stage Educational & Professional Trajectory
const CAREER_JOURNEY = [
  {
    step: '01',
    title: 'Entrance Preparation',
    badge: 'CLAT & AILET',
    description: 'Mastering reading comprehension, legal reasoning, logical deduction, and current affairs to secure admission to top National Law Universities.',
  },
  {
    step: '02',
    title: 'Law School Education',
    badge: '5-Yr / 3-Yr LL.B',
    description: 'Building deep doctrinal knowledge, participating in national moot court competitions, legal aid clinics, and securing legal internships.',
  },
  {
    step: '03',
    title: 'Bar Enrolment & Specialization',
    badge: 'AIBE & LL.M',
    description: 'Enrolling with State Bar Councils, clearing the All India Bar Examination, or pursuing postgraduate LL.M specializations via CLAT PG.',
  },
  {
    step: '04',
    title: 'Professional Practice & Growth',
    badge: 'Career Launch',
    description: 'Starting independent chamber practice, joining law firms as associates, stepping into corporate legal counsel, or entering judicial service.',
  },
];

// 6 Core Legal Competencies (Balanced 3-column grid)
const CORE_SKILLS = [
  {
    icon: 'manage_search',
    title: 'Statutory Interpretation',
    description: 'Deconstructing statutes, Bare Acts, constitutional amendments, and administrative regulations with precision.',
  },
  {
    icon: 'library_books',
    title: 'Precedent & Case-Law Research',
    description: 'Navigating law reports, legal databases, and judicial precedents to construct compelling, authoritative arguments.',
  },
  {
    icon: 'edit_document',
    title: 'Drafting & Contractual Precision',
    description: 'Structuring clear commercial agreements, court pleadings, writ petitions, legal notices, and conveyance documents.',
  },
  {
    icon: 'forum',
    title: 'Oral Advocacy & Presentation',
    description: 'Articulating reasoned legal positions clearly and persuasively before judicial benches, arbitration panels, and clients.',
  },
  {
    icon: 'schema',
    title: 'Analytical Problem Solving',
    description: 'Isolating the critical legal issues within complex factual matrices and formulating practical, compliant solutions.',
  },
  {
    icon: 'update',
    title: 'Legal Informatics & Digital Tools',
    description: 'Leveraging modern e-discovery, digital research platforms, automated document workflows, and online court filing systems.',
  },
];

// Tech focus chips
const TECHNOLOGY_AREAS = [
  'AI-Assisted Legal Research',
  'Automated Contract Review & Drafting',
  'Predictive Case Analytics & Precedents',
  'E-Discovery & Digital Due Diligence',
  'Online Dispute Resolution (ODR)',
  'Data Privacy & Cyber Compliance',
];

// FAQ items addressing student and parent career decisions
const CAREER_FAQS = [
  {
    id: 'career-options',
    question: 'What are the main career paths after graduating with a law degree in India?',
    answer: 'Law graduates have diverse professional paths: courtroom litigation (High Courts, Supreme Court, District Courts), corporate law firm practice, in-house legal counsel for corporations, state judicial services (becoming a Civil Judge), public prosecutor roles, legal research, civil services, and specialized fields like IP and cyber law.',
  },
  {
    id: 'corporate-vs-litigation',
    question: 'How does corporate law practice differ from court litigation?',
    answer: 'Litigation is primarily dispute-oriented and takes place in courtrooms, tribunals, and arbitration chambers, focusing on oral advocacy, evidence, and procedural law. Corporate law practice focuses on transactional advisory, drafting contracts, mergers and acquisitions, cross-border investments, and regulatory compliance within corporate and law firm environments.',
  },
  {
    id: 'judicial-services',
    question: 'What is the path to becoming a judge (Judicial Services) in India?',
    answer: 'Graduates with a recognized LL.B degree are eligible to sit for state-level Judicial Service Examinations (Civil Judge Junior Division). The examination consists of Preliminary, Mains, and Interview stages testing constitutional law, civil and criminal procedural codes, evidence law, and local state laws.',
  },
  {
    id: 'first-generation',
    question: 'Do I need a family background in law to succeed in the legal profession?',
    answer: 'No. While a legal background previously provided early professional contacts, the expansion of National Law Universities, institutional law firms, corporate legal teams, and merit-based judicial services has made the modern legal profession highly meritocratic and accessible to first-generation lawyers.',
  },
  {
    id: 'nlu-importance',
    question: 'How important are National Law Universities (NLUs) for career placements?',
    answer: 'Graduating from a premier NLU (such as NLSIU, NALSAR, WBNUJS, or NLU Delhi) provides significant advantages in tier-1 law firm campus recruitments, corporate placements, international LL.M scholarships, and prestigious judicial clerkships, primarily due to rigorous academic training and extensive alumni networks.',
  },
  {
    id: 'rrc-preparation',
    question: 'How does RRC Law Academy help students prepare for law admissions?',
    answer: 'RRC Law Academy provides structured coaching for CLAT UG, CLAT PG, and AILET entrance examinations through dedicated classroom cohorts in Thanjavur and hybrid options. Our methodology combines passage-based comprehension drills, doctrinal concept clarity, proctored mock exams with diagnostic error review, and personalized faculty mentorship.',
  },
];

export default function CareerInLaw() {
  return (
    <div className="rrc-career-page">
      {/* 1. HERO SECTION */}
      <section className="rrc-career-hero" aria-labelledby="rrc-career-title">
        <div className="rrc-container rrc-career-hero__grid">
          <div className="rrc-career-hero__copy rrc-anim-fade-up">
            <p className="rrc-eyebrow">Career in Law</p>
            <h1 id="rrc-career-title" className="rrc-display rrc-career-hero__title">
              Explore Pathways, Practice Areas &amp; Careers in Modern Law
            </h1>
            <p className="rrc-lead">
              From courtroom litigation and corporate transactional advisory to judicial services and emerging technology law, a degree in legal education opens diverse, impactful career paths. Explore the domains, essential skills, and preparation required to succeed.
            </p>
            <div className="rrc-btn-row rrc-career-hero__actions">
              <Button to="/courses" variant="navy">Explore Courses</Button>
              <Button to="/registration" variant="secondary">Talk to a Counsellor</Button>
            </div>
            <div className="rrc-career-hero__chips" aria-label="Key legal career pathways">
              {HERO_HIGHLIGHTS.map((item) => (
                <span className="rrc-career-chip" key={item.text}>
                  <RrcIcon name={item.icon} size={16} />
                  <span>{item.text}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="rrc-career-hero__visual">
            <div className="rrc-career-hero__visual-wrap">
              <img
                className="rrc-career-visual"
                src={careerLawHeroImage}
                alt="Law students and young graduates engaged in professional legal discussions"
                width="1672"
                height="941"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="rrc-career-hero__badge" aria-hidden="true">
                <RrcIcon name="school" size={18} />
                <span>Professional Legal Pathways</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY PURSUE LAW (FIELD ORIENTATION) */}
      <section className="rrc-section rrc-section--light" aria-labelledby="rrc-career-orientation-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Field Orientation"
            id="rrc-career-orientation-title"
            title="Why Pursue a Career in Legal Education?"
            description="Legal education offers a transformative foundation in how rules, institutions, rights, and commercial responsibilities govern society."
          />
          <div className="rrc-career-orientation-grid rrc-stagger">
            {ORIENTATION_PILLARS.map((pillar) => (
              <FeatureCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SIX CORE PRACTICE PATHWAYS */}
      <section className="rrc-section" aria-labelledby="rrc-career-pathways-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Career Domains"
            id="rrc-career-pathways-title"
            title="Six Primary Practice Pathways in Modern Law"
            description="Explore the diverse fields where law graduates apply their knowledge across public institutions, courts, corporations, and advisory practices."
          />
          <div className="rrc-career-pathways-grid rrc-stagger">
            {CAREER_PATHWAYS.map((pathway) => (
              <FeatureCard
                key={pathway.title}
                icon={pathway.icon}
                title={pathway.title}
                description={pathway.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. EDUCATIONAL & PROFESSIONAL TRAJECTORY */}
      <section className="rrc-section rrc-section--light" aria-labelledby="rrc-career-journey-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Educational Trajectory"
            id="rrc-career-journey-title"
            title="From Law Aspirant to Practising Professional"
            description="A clear four-stage pathway mapping how academic preparation translates into professional practice."
          />
          <ol className="rrc-career-journey-grid rrc-stagger">
            {CAREER_JOURNEY.map((item) => (
              <li className="rrc-card rrc-career-journey-card" key={item.step}>
                <div className="rrc-career-journey-card__header">
                  <span className="rrc-badge rrc-badge--gold">{item.step}</span>
                  <span className="rrc-career-journey-card__tag">{item.badge}</span>
                </div>
                <h3 className="rrc-card__title">{item.title}</h3>
                <p className="rrc-card__text">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. ESSENTIAL COMPETENCIES */}
      <section className="rrc-section" aria-labelledby="rrc-career-skills-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Core Competencies"
            id="rrc-career-skills-title"
            title="Foundational Skills That Drive Success in Law"
            description="Technical legal knowledge must be paired with sharp analytical, communication, drafting, and research capabilities."
          />
          <div className="rrc-career-skills-grid rrc-stagger">
            {CORE_SKILLS.map((skill) => (
              <FeatureCard
                key={skill.title}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. EMERGING HORIZONS: LEGAL TECHNOLOGY & AI */}
      <section className="rrc-section rrc-section--navy rrc-career-technology" aria-labelledby="rrc-career-tech-title">
        <div className="rrc-container rrc-career-technology__grid">
          <div className="rrc-career-technology__copy">
            <SectionHeader
              eyebrow="Emerging Frontiers"
              id="rrc-career-tech-title"
              title="The Future of Legal Work: Technology &amp; AI"
              align="left"
            />
            <p className="rrc-career-technology__lead">
              Digital technology, automated research, and intelligent document systems are transforming legal operations, accelerating due diligence, and optimizing litigation workflows.
            </p>
            <div className="rrc-career-tech-chips">
              {TECHNOLOGY_AREAS.map((item) => (
                <span className="rrc-career-tech-chip" key={item}>
                  <RrcIcon name="check_circle" size={16} />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
          <aside className="rrc-career-technology__note">
            <span className="rrc-icon-badge rrc-icon-badge--gold" aria-hidden="true">
              <RrcIcon name="verified" size={22} />
            </span>
            <h3>Human Judgement Remains Paramount</h3>
            <p>
              While artificial intelligence accelerates information retrieval and document drafting, legal professionals remain essential for strategic discretion, ethical advocacy, courtroom presence, and nuanced client counsel.
            </p>
          </aside>
        </div>
      </section>

      {/* 7. CONNECTED ACADEMIC PATHWAYS AT RRC */}
      <section className="rrc-section rrc-section--light" aria-labelledby="rrc-career-offerings-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Academic Pathways"
            id="rrc-career-offerings-title"
            title="Start Your Preparation Journey With RRC Law Academy"
            description="Explore our entrance coaching courses and targeted preparatory programs offered in classroom and hybrid formats."
          />
          <div className="rrc-career-offerings-grid">
            {/* Courses column */}
            <div className="rrc-career-offerings-col">
              <h3 className="rrc-career-offerings-col__title">
                <RrcIcon name="school" size={20} />
                <span>Entrance Coaching Courses</span>
              </h3>
              <div className="rrc-career-offerings-list">
                {coursePageList.map((course) => (
                  <Link
                    className="rrc-card rrc-career-offerings-card"
                    key={course.slug}
                    to={`/courses/${course.slug}`}
                  >
                    <div className="rrc-career-offerings-card__header">
                      <span className="rrc-icon-badge rrc-career-offerings-card__icon" aria-hidden="true">
                        <RrcIcon name="school" size={18} />
                      </span>
                      <span className="rrc-badge rrc-badge--gold">{course.shortTitle}</span>
                    </div>
                    <h4 className="rrc-career-offerings-card__title">{course.title}</h4>
                    <p className="rrc-career-offerings-card__desc">{course.description}</p>
                    <span className="rrc-career-offerings-card__action">
                      Explore course <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Programs column */}
            <div className="rrc-career-offerings-col">
              <h3 className="rrc-career-offerings-col__title">
                <RrcIcon name="layers" size={20} />
                <span>Specialized Prep Programs</span>
              </h3>
              <div className="rrc-career-offerings-list">
                {programPageList.map((program) => (
                  <Link
                    className="rrc-card rrc-career-offerings-card"
                    key={program.slug}
                    to={`/programs/${program.slug}`}
                  >
                    <div className="rrc-career-offerings-card__header">
                      <span className="rrc-icon-badge rrc-career-offerings-card__icon" aria-hidden="true">
                        <RrcIcon name="layers" size={18} />
                      </span>
                      <span className="rrc-badge rrc-badge--gold">{program.shortTitle}</span>
                    </div>
                    <h4 className="rrc-career-offerings-card__title">{program.title}</h4>
                    <p className="rrc-career-offerings-card__desc">{program.description}</p>
                    <span className="rrc-career-offerings-card__action">
                      Explore program <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CAREER IN LAW FAQ ACCORDION */}
      <section className="rrc-section rrc-career-faq-section" aria-labelledby="rrc-career-faq-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Decision Guide"
            id="rrc-career-faq-title"
            title="Frequently Asked Questions About Legal Careers"
            description="Clear, factual answers to help students and parents evaluate career paths and entrance preparation."
          />
          <div className="rrc-career-faq-wrapper">
            <FAQAccordion items={CAREER_FAQS} />
          </div>
        </div>
      </section>

      {/* 9. HIGH-IMPACT CONVERSION CTA */}
      <section className="rrc-section rrc-section--navy rrc-career-cta" aria-labelledby="rrc-career-cta-title">
        <div className="rrc-container rrc-career-cta__inner">
          <SectionHeader
            eyebrow="Take the First Step"
            id="rrc-career-cta-title"
            title="Begin Your Journey Toward a Future in Law"
            description="Speak with our academic mentors, explore our classroom and hybrid cohorts, or visit our Thanjavur academy to review preparatory options."
          />
          <div className="rrc-btn-row rrc-career-cta__actions">
            <Button to="/courses" variant="primary">Explore All Courses</Button>
            <Button to="/registration" variant="secondary">Book Academic Counselling</Button>
          </div>
          <div className="rrc-career-cta__reassurance" aria-label="Admissions reassurance">
            <span>✓ Dedicated Thanjavur Classroom &amp; Library</span>
            <span>✓ Transparent Academic Mentorship</span>
            <span>✓ Structured CLAT &amp; AILET Preparation</span>
          </div>
        </div>
      </section>
    </div>
  );
}
