import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import FAQAccordion from '../components/FAQAccordion';
import FeatureCard from '../components/FeatureCard';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import { coursePageList } from '../data/coursePages';
import { programPageList } from '../data/programPages';
import { prospectusDownload, studyResourceDownloads } from '../data/resourcesData';
import resourcesHeroImage from '../assets/resourses_hero.webp';
import './Resources.css';

// Quick anchor chips in Hero
const HERO_HIGHLIGHTS = [
  { icon: 'fact_check', text: 'Model Question Papers (PDF)' },
  { icon: 'school', text: 'Academy Prospectus 2026–27' },
  { icon: 'menu_book', text: '5-Step Legal Reading Guide' },
  { icon: 'newspaper', text: 'Current Affairs Compendiums' },
];

// All verified downloadable items
const ALL_DOWNLOADS = [
  ...studyResourceDownloads,
  prospectusDownload,
];

// Download filter categories
const DOWNLOAD_CATEGORIES = [
  { id: 'all', label: 'All Materials' },
  { id: 'CLAT UG', label: 'CLAT UG' },
  { id: 'CLAT PG', label: 'CLAT PG' },
  { id: 'AILET UG', label: 'AILET UG' },
  { id: 'Prospectus', label: 'Prospectus' },
];

// 6 Core Learning Areas
const RESOURCE_CATEGORIES = [
  {
    icon: 'newspaper',
    title: 'Legal Current Affairs & GK',
    description: 'Constitutional milestones, statutory amendments, international developments, and monthly structured digests.',
  },
  {
    icon: 'gavel',
    title: 'Case Law & Judicial Reasoning',
    description: 'Landmark judicial decisions, ratio decidendi extraction, and analytical interpretation of legal precedents.',
  },
  {
    icon: 'menu_book',
    title: 'Passage Reading & Comprehension',
    description: 'Critical inference, contextual vocabulary, editorial passage analysis, and authorial stance evaluation.',
  },
  {
    icon: 'balance',
    title: 'Legal Aptitude & Reasoning',
    description: 'Application of statutory rules to factual dispute matrices across contracts, torts, and criminal jurisprudence.',
  },
  {
    icon: 'psychology',
    title: 'Logical & Critical Reasoning',
    description: 'Statement-assumptions, syllogisms, argument deconstruction, paradoxes, and analytical reasoning sets.',
  },
  {
    icon: 'analytics',
    title: 'Quantitative Techniques',
    description: 'Data interpretation, numerical passage sets, graphical tables, ratios, percentages, and practical commercial math.',
  },
];

// 5-Step Analytical Reading Methodology
const READING_APPROACH = [
  { step: '01', title: 'Identify the Core Controversy', description: 'Determine the central legal dispute or constitutional question under adjudication.' },
  { step: '02', title: 'Contextualize Material Facts', description: 'Separate decisive facts from procedural background to clarify the dispute matrix.' },
  { step: '03', title: 'Trace the Judicial Reasoning', description: 'Follow the court’s logical progression, statutory interpretations, and distinguishing of precedents.' },
  { step: '04', title: 'Extract the Ratio Decidendi', description: 'Isolate the binding legal rule and authoritative principle established by the bench.' },
  { step: '05', title: 'Synthesize & Apply', description: 'Evaluate how the extracted principle governs factual variations in passage-based exam questions.' },
];

// 6 Current Affairs Thematic Focus Areas
const CURRENT_AFFAIRS_THEMES = [
  { icon: 'gavel', title: 'Landmark Judicial Rulings', text: 'Supreme Court & High Court constitutional bench judgments and evolving legal doctrines.' },
  { icon: 'balance', title: 'Constitutional Amendments & Bills', text: 'Key legislative enactments, parliamentary bills, and statutory changes.' },
  { icon: 'public', title: 'International Treaties & Relations', text: 'Global agreements, bilateral treaties, and international law developments.' },
  { icon: 'verified', title: 'Statutory Commissions & Panels', text: 'Recommendations of Law Commission, Election Commission, and national tribunals.' },
  { icon: 'analytics', title: 'Regulatory & Economic Policy', text: 'Financial regulations, competition law updates, and economic governance policies.' },
  { icon: 'newspaper', title: 'National Governance Milestones', text: 'Significant public policy initiatives, environmental mandates, and civic reforms.' },
];

// FAQ items addressing student and parent resource questions
const FAQ_ITEMS = [
  {
    id: 'downloads-available',
    question: 'What downloadable study resources are available on this page?',
    answer: 'Aspirants can download official model practice papers for CLAT UG, CLAT PG, and AILET UG, as well as the comprehensive RRC Academy School of Law Prospectus 2026–27. All PDFs can be viewed directly in your browser or downloaded for offline self-study.',
  },
  {
    id: 'model-papers-usage',
    question: 'How should students utilize the model question papers for CLAT and AILET?',
    answer: 'We recommend attempting model question papers under strictly timed conditions (120 minutes) without interruptions. After completion, conduct a question-by-question error analysis to identify accuracy leaks, time sinks, and concepts needing revision.',
  },
  {
    id: 'reading-skills',
    question: 'How can aspirants improve their reading speed and comprehension for passage-based tests?',
    answer: 'Daily reading of diverse, high-quality editorial articles, judicial summaries, and legal commentaries builds vocabulary in context and analytical reading stamina. Focus on isolating the author’s primary argument, identifying assumptions, and noting key legal principles.',
  },
  {
    id: 'current-affairs-prep',
    question: 'How are current affairs compilations structured at RRC Law Academy?',
    answer: 'RRC curates monthly thematic digests focusing on constitutional developments, landmark Supreme Court rulings, statutory amendments, international treaties, and key governance milestones. Information is structured to aid retention and quick revision.',
  },
  {
    id: 'physical-library',
    question: 'Does RRC provide printed study materials and a physical reference library?',
    answer: 'Yes. Students enrolled in our Thanjavur classroom and hybrid cohorts receive comprehensive printed study modules, sectional question banks, and daily access to our quiet reference library stocked with Bare Acts, commentaries, and legal dictionaries.',
  },
  {
    id: 'structured-programs',
    question: 'Where can students find structured classroom and hybrid coaching programs?',
    answer: 'Explore the Courses and Programs sections of our website to view 1-Year, 2-Year, Foundation, Intensive Revision, and Mock Test cohorts. You can also visit our Thanjavur academy or book an academic diagnostic counselling session online.',
  },
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter downloads by active tab and search text
  const filteredDownloads = useMemo(() => {
    return ALL_DOWNLOADS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="rrc-resources-page">
      {/* 1. HERO SECTION */}
      <section className="rrc-resources-hero" aria-labelledby="rrc-resources-title">
        <div className="rrc-container rrc-resources-hero__grid">
          <div className="rrc-resources-hero__copy rrc-anim-fade-up">
            <p className="rrc-eyebrow">Study Resources</p>
            <h1 id="rrc-resources-title" className="rrc-display rrc-resources-hero__title">
              Curated Study Materials &amp; Reference Resources for Law Entrance Preparation
            </h1>
            <p className="rrc-lead">
              Access official model papers, academy prospectus, reading methodologies, current affairs compilations, and structured guidance to support your CLAT and AILET journey.
            </p>
            <div className="rrc-btn-row rrc-resources-hero__actions">
              <Button to="/courses" variant="navy">Explore Courses</Button>
              <a className="rrc-btn rrc-btn--secondary" href="#downloadable-materials">
                View Downloads
              </a>
            </div>
            <div className="rrc-resources-hero__chips" aria-label="Key resource highlights">
              {HERO_HIGHLIGHTS.map((item) => (
                <span className="rrc-resources-chip" key={item.text}>
                  <RrcIcon name={item.icon} size={16} />
                  <span>{item.text}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="rrc-resources-hero__visual">
            <div className="rrc-resources-hero__visual-wrap">
              <img
                className="rrc-resources-visual"
                src={resourcesHeroImage}
                alt="Law student studying legal reference materials and preparation notes in a modern study room."
                width="1024"
                height="572"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="rrc-resources-hero__badge" aria-hidden="true">
                <RrcIcon name="verified" size={18} />
                <span>Verified Preparation Materials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DOWNLOADABLE PDF MATERIALS & PROSPECTUS */}
      <section className="rrc-section" id="downloadable-materials" aria-labelledby="rrc-downloads-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Verified Downloads"
            id="rrc-downloads-title"
            title="Model Question Papers &amp; Academy Prospectus"
            description="Download official sample question papers and institutional prospectus brochures prepared for law aspirants."
          />

          {/* Filter Bar & Search */}
          <div className="rrc-resources-filter-bar">
            <div className="rrc-resources-filter-tabs" role="tablist" aria-label="Filter resources by category">
              {DOWNLOAD_CATEGORIES.map((cat) => (
                <button
                  type="button"
                  role="tab"
                  key={cat.id}
                  className={`rrc-resources-filter-tab${activeCategory === cat.id ? ' is-active' : ''}`}
                  aria-selected={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="rrc-resources-search">
              <RrcIcon name="manage_search" size={18} />
              <input
                type="search"
                className="rrc-resources-search__input"
                placeholder="Search sample papers, prospectus..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search downloadable resources"
              />
              {searchQuery ? (
                <button
                  type="button"
                  className="rrc-resources-search__clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              ) : null}
            </div>
          </div>

          {/* Download Grid / Empty state */}
          {filteredDownloads.length > 0 ? (
            <div className="rrc-resources-download-grid rrc-stagger">
              {filteredDownloads.map((resource) => (
                <article
                  className={`rrc-card rrc-resources-download-card${
                    resource.category === 'Prospectus' ? ' rrc-resources-download-card--prospectus' : ''
                  }`}
                  key={resource.file}
                >
                  <div className="rrc-resources-download-card__meta">
                    <span className="rrc-badge rrc-badge--gold">{resource.category}</span>
                    <span className="rrc-resources-download-card__type">
                      <RrcIcon name="description" size={14} />
                      {resource.type} · PDF
                    </span>
                  </div>
                  <h3 className="rrc-card__title">{resource.title}</h3>
                  <p className="rrc-card__text">{resource.description}</p>
                  <div className="rrc-resources-download-card__actions">
                    <a
                      className="rrc-btn rrc-btn--primary rrc-resources-download-card__action"
                      href={resource.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${resource.title} in new tab`}
                    >
                      <RrcIcon name="open_in_new" size={16} />
                      <span>View PDF</span>
                    </a>
                    <a
                      className="rrc-btn rrc-btn--secondary rrc-resources-download-card__action"
                      href={resource.file}
                      download={resource.downloadName}
                      aria-label={`Download ${resource.title} file`}
                    >
                      <RrcIcon name="update" size={16} />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rrc-card rrc-resources-empty-state">
              <RrcIcon name="manage_search" size={32} />
              <h3>No resources found</h3>
              <p>No materials matched your filter or search query. Try selecting another category or clearing your search.</p>
              <button
                type="button"
                className="rrc-btn rrc-btn--secondary"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. CORE LEARNING AREAS */}
      <section className="rrc-section rrc-section--light" aria-labelledby="rrc-domains-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Curriculum Scope"
            id="rrc-domains-title"
            title="Explore Key Subject-Wise Resource Areas"
            description="Targeted resource areas and practice methodologies across the essential sections evaluated in law entrance tests."
          />
          <div className="rrc-resources-category-grid rrc-stagger">
            {RESOURCE_CATEGORIES.map((item) => (
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

      {/* 4. LEGAL READING FRAMEWORK & METHODOLOGY */}
      <section className="rrc-section" aria-labelledby="rrc-reading-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Reading Methodology"
            id="rrc-reading-title"
            title="How to Read Legal Texts &amp; Judicial Opinions"
            description="Modern comprehension-based entrance exams evaluate how you analyze legal passages. Follow our structured 5-step analytical reading approach."
          />
          <div className="rrc-resources-reading-split">
            {/* Left Column: Conceptual Pillars */}
            <div className="rrc-resources-reading-cards">
              <article className="rrc-card rrc-resources-reading-card">
                <span className="rrc-icon-badge" aria-hidden="true">
                  <RrcIcon name="gavel" size={20} />
                </span>
                <h3 className="rrc-card__title">Reading Judicial Decisions</h3>
                <p className="rrc-card__text">
                  Judicial opinions teach ratio decidendi extraction, the structure of legal arguments, and the delicate application of constitutional doctrine to disputed facts.
                </p>
              </article>
              <article className="rrc-card rrc-resources-reading-card">
                <span className="rrc-icon-badge" aria-hidden="true">
                  <RrcIcon name="menu_book" size={20} />
                </span>
                <h3 className="rrc-card__title">Interpreting Bare Acts &amp; Statutes</h3>
                <p className="rrc-card__text">
                  Statutory reading builds familiarity with legal terminology, definitions, legislative provisos, exceptions, and the precise textual language evaluated in law entrances.
                </p>
              </article>
            </div>

            {/* Right Column: 5-Step Stepper */}
            <div className="rrc-card rrc-resources-stepper">
              <h3 className="rrc-resources-stepper__heading">5-Step Analytical Reading Approach</h3>
              <ol className="rrc-resources-stepper__list">
                {READING_APPROACH.map((step) => (
                  <li className="rrc-resources-stepper__item" key={step.step}>
                    <span className="rrc-resources-stepper__num">{step.step}</span>
                    <div className="rrc-resources-stepper__body">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CURRENT AFFAIRS & GENERAL AWARENESS FRAMEWORK */}
      <section className="rrc-section rrc-section--light" aria-labelledby="rrc-current-title">
        <div className="rrc-container rrc-resources-current-grid">
          <div className="rrc-resources-current__copy">
            <SectionHeader
              eyebrow="Context &amp; Awareness"
              id="rrc-current-title"
              title="Staying Connected with Current Affairs &amp; Legal GK"
              align="left"
            />
            <p className="rrc-resources-current__lead">
              Current affairs preparation requires balancing daily reading with structured thematic review. Focus on constitutional events, landmark judgments, and major national/international institutional policies.
            </p>
            <div className="rrc-resources-current__note">
              <RrcIcon name="verified" size={18} />
              <span>Always verify legal news through authoritative official gazettes, PIB releases, and court judgments.</span>
            </div>
            <div className="rrc-resources-current__action">
              <Button to="/programs/current-affairs" variant="navy">
                Explore Current Affairs &amp; GK Program <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          <div className="rrc-resources-current__themes">
            {CURRENT_AFFAIRS_THEMES.map((theme) => (
              <div className="rrc-card rrc-resources-theme-card" key={theme.title}>
                <span className="rrc-icon-badge rrc-resources-theme-card__icon" aria-hidden="true">
                  <RrcIcon name={theme.icon} size={18} />
                </span>
                <div>
                  <h4 className="rrc-resources-theme-card__title">{theme.title}</h4>
                  <p className="rrc-resources-theme-card__text">{theme.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACADEMIC PREPARATION PATHWAYS AT RRC */}
      <section className="rrc-section" aria-labelledby="rrc-pathways-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Structured Pathways"
            id="rrc-pathways-title"
            title="Connect Self-Study Resources With Structured Coaching"
            description="Self-study materials are most effective when supported by faculty mentorship, timed diagnostic mock tests, and regular review."
          />
          <div className="rrc-resources-offerings-grid">
            {/* Courses column */}
            <div className="rrc-resources-offerings-col">
              <h3 className="rrc-resources-offerings-col__title">
                <RrcIcon name="school" size={20} />
                <span>Entrance Coaching Courses</span>
              </h3>
              <div className="rrc-resources-offerings-list">
                {coursePageList.map((course) => (
                  <Link
                    className="rrc-card rrc-resources-offerings-card"
                    key={course.slug}
                    to={`/courses/${course.slug}`}
                  >
                    <div className="rrc-resources-offerings-card__header">
                      <span className="rrc-icon-badge" aria-hidden="true">
                        <RrcIcon name="school" size={18} />
                      </span>
                      <span className="rrc-badge rrc-badge--gold">{course.shortTitle}</span>
                    </div>
                    <h4 className="rrc-resources-offerings-card__title">{course.title}</h4>
                    <p className="rrc-resources-offerings-card__desc">{course.description}</p>
                    <span className="rrc-resources-card-link">
                      Explore course <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Programs column */}
            <div className="rrc-resources-offerings-col">
              <h3 className="rrc-resources-offerings-col__title">
                <RrcIcon name="layers" size={20} />
                <span>Specialized Prep Programs</span>
              </h3>
              <div className="rrc-resources-offerings-list">
                {programPageList.map((program) => (
                  <Link
                    className="rrc-card rrc-resources-offerings-card"
                    key={program.slug}
                    to={`/programs/${program.slug}`}
                  >
                    <div className="rrc-resources-offerings-card__header">
                      <span className="rrc-icon-badge" aria-hidden="true">
                        <RrcIcon name="layers" size={18} />
                      </span>
                      <span className="rrc-badge rrc-badge--gold">{program.shortTitle}</span>
                    </div>
                    <h4 className="rrc-resources-offerings-card__title">{program.title}</h4>
                    <p className="rrc-resources-offerings-card__desc">{program.description}</p>
                    <span className="rrc-resources-card-link">
                      Explore program <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="rrc-section rrc-section--light rrc-resources-faq-section" aria-labelledby="rrc-faq-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Decision Guide"
            id="rrc-faq-title"
            title="Frequently Asked Questions About Study Resources"
            description="Clear guidance on accessing model papers, developing reading habits, and utilizing preparation materials."
          />
          <div className="rrc-resources-faq-wrapper">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* 8. HIGH-IMPACT CONVERSION CTA */}
      <section className="rrc-section rrc-section--navy rrc-resources-cta" aria-labelledby="rrc-cta-title">
        <div className="rrc-container rrc-resources-cta__inner">
          <SectionHeader
            eyebrow="Your Next Step"
            id="rrc-cta-title"
            title="Build Stronger Habits With Structured Guidance"
            description="Explore RRC Law Academy's classroom and hybrid cohorts. Connect with our academic desk in Thanjavur for prospectus details, cohort schedules, and diagnostic mock evaluations."
          />
          <div className="rrc-btn-row rrc-resources-cta__actions">
            <Button to="/courses" variant="primary">Explore All Courses</Button>
            <Button to="/registration" variant="secondary">Book Academic Counselling</Button>
          </div>
          <div className="rrc-resources-cta__reassurance" aria-label="Admissions reassurance">
            <span>✓ Dedicated Thanjavur Classroom &amp; Library</span>
            <span>✓ Transparent Academic Mentorship</span>
            <span>✓ Verified Practice Papers &amp; Diagnostic Feedback</span>
          </div>
        </div>
      </section>
    </div>
  );
}
