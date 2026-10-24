import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import RrcIcon from '../components/RrcIcon';
import faqHeroImage from '../assets/faq_hero.webp';
import './FAQ.css';

const ABOUT_FAQS = [
  {
    id: 'about-what-is',
    question: 'What is RRC Law Academy?',
    answer:
      'RRC Law Academy is a premier legal entrance preparation institution dedicated to preparing aspirants for competitive law entrance examinations, including CLAT (UG & PG) and AILET (UG & PG). We provide structured classroom modules, expert mentoring, and comprehensive study ecosystems.',
  },
  {
    id: 'about-focus',
    question: 'What does RRC Law Academy focus on?',
    answer:
      'Our focus centers on rigorous law entrance pedagogy—combining core conceptual clarity, systematic passage comprehension, case-law and current affairs analysis, timed mock test simulations, and personalized performance mentorship.',
  },
  {
    id: 'about-who',
    question: "Who can explore RRC Law Academy's programs?",
    answer:
      'Our programs cater to secondary school students preparing for undergraduate five-year law entrances (CLAT UG / AILET UG), final-year undergraduates and law graduates targeting LL.M programs (CLAT PG / AILET PG), and working professionals seeking structured, flexible preparation.',
  },
];

const COURSE_FAQS = [
  {
    id: 'courses-available',
    question: 'Which law entrance courses are available?',
    answer:
      'RRC Law Academy provides four dedicated entrance courses: CLAT UG and AILET UG for undergraduate law aspirants, and CLAT PG and AILET PG for postgraduate LL.M aspirants. Each course features complete syllabus coverage, sectional practice, and full-length simulated tests.',
  },
  {
    id: 'course-clat-ug',
    question: 'What is CLAT UG preparation?',
    answer:
      'CLAT UG prepares 10+2 students for admission to 24 National Law Universities across India. The 120-question comprehension-based test spans English Language, Current Affairs & General Knowledge, Legal Reasoning, Logical Reasoning, and Quantitative Techniques.',
  },
  {
    id: 'course-clat-pg',
    question: 'What is CLAT PG preparation?',
    answer:
      'CLAT PG prepares law graduates (LL.B candidates) for master’s programs at NLUs. The examination tests advanced comprehension across Constitutional Law, Jurisprudence, Administrative Law, Law of Contracts, Torts, Family Law, Criminal Law, and Public International Law.',
  },
  {
    id: 'course-ailet-ug',
    question: 'What is AILET UG preparation?',
    answer:
      'AILET UG is the entrance examination conducted exclusively by National Law University Delhi for its five-year B.A. LL.B (Hons.) program. The 120-minute, 150-question test focuses heavily on English Language, Current Affairs & General Knowledge, and Logical Reasoning.',
  },
  {
    id: 'course-ailet-pg',
    question: 'What is AILET PG preparation?',
    answer:
      'AILET PG prepares LL.B graduates for the one-year LL.M program at NLU Delhi. The test assesses advanced legal comprehension and critical analysis across core and contemporary legal disciplines.',
  },
];

const PROGRAM_FAQS = [
  {
    id: 'programs-available',
    question: 'What specialized preparation programs are available?',
    answer:
      'In addition to entrance courses, RRC offers four targeted preparatory programs: the Foundation Program (early-stage concept building), Intensive Revision Program (high-yield rapid recall), Mock Test Program (timed exam simulations), and Current Affairs & GK Program (continuous awareness).',
  },
  {
    id: 'program-foundation',
    question: 'What is the Foundation Program?',
    answer:
      'Designed for early-stage aspirants (such as 11th grade students or early law undergraduates), the Foundation Program builds deep conceptual foundations, reading speed, and legal analytical thinking from the ground up over a structured 1-to-2 year horizon.',
  },
  {
    id: 'program-revision',
    question: 'What is the Intensive Revision Program?',
    answer:
      'A high-impact, fast-paced module designed for aspirants in the final 3–6 months before entrance exams, prioritizing high-yield topics, judgment analysis, revision drill sheets, and exam timing techniques.',
  },
  {
    id: 'program-mock-test',
    question: 'What is the Mock Test Program?',
    answer:
      'A full-simulation assessment series replicating official exam interfaces, sectional weightages, and negative marking. It provides detailed question-level analytics, percentile tracking, and faculty error-log review.',
  },
  {
    id: 'program-current-affairs',
    question: 'What is the Current Affairs & GK program?',
    answer:
      'A continuous awareness module covering monthly legal current affairs digests, landmark Supreme Court judgments, statutory amendments, international treaties, and editorial commentary vital for CLAT and AILET.',
  },
];

const PREPARATION_FAQS = [
  {
    id: 'approach',
    question: 'What preparation methodology does RRC Law Academy follow?',
    answer:
      'We implement a 5-stage progressive learning framework: Understand (conceptual foundations) → Practise (passage-based sectional drills) → Test (timed simulated mocks) → Analyse (gap and error diagnosis) → Improve (targeted mentoring and revision).',
  },
  {
    id: 'practice',
    question: 'Why is timed passage-based practice essential for law entrances?',
    answer:
      'Both CLAT and AILET are reading-intensive, passage-based examinations. Regular timed practice builds the rapid comprehension, inference extraction, and cognitive stamina required to answer 120–150 questions accurately within 120 minutes.',
  },
  {
    id: 'analysis',
    question: 'How does mock test performance analysis work?',
    answer:
      'Post-test analysis breaks down scores across speed, accuracy, question selection, negative marks, and conceptual traps. This enables students and mentors to refine exam strategy and prioritize weak areas rather than guessing.',
  },
  {
    id: 'current-affairs-prep',
    question: 'How are current affairs integrated into daily preparation?',
    answer:
      'Current affairs are taught through daily curated news analysis, weekly legal updates, monthly compilations, and dedicated passage-based practice questions reflecting current national and global developments.',
  },
];

const RESOURCE_FAQS = [
  {
    id: 'resource-types',
    question: 'What study materials and learning domains are covered?',
    answer:
      'Our study ecosystem spans 6 core domains: Constitutional & Statutory Law, Jurisprudence, Legal Reading & Passage Analysis, Current Legal Affairs, Logical & Critical Reasoning, and Quantitative Analysis.',
  },
  {
    id: 'resource-downloads',
    question: 'Does RRC Law Academy provide downloadable PDFs and sample papers?',
    answer:
      'Yes. The Resources section provides verified downloadable PDF materials, including model question papers for CLAT UG, sample papers for CLAT PG and AILET UG, and the official RRC Law Academy Prospectus.',
  },
  {
    id: 'study-habits',
    question: 'How can aspirants build an effective law entrance study routine?',
    answer:
      'We recommend balancing 3 daily pillars: 60–90 minutes of editorial and legal reading, 2 hours of conceptual study and note-making, and 1 hour of timed question practice followed by error log review.',
  },
];

const CAREER_FAQS = [
  {
    id: 'career-pathways',
    question: 'What career opportunities are available after graduating from an NLU?',
    answer:
      'NLU graduates pursue diverse high-impact careers, including litigation in High Courts and the Supreme Court, corporate law firms, in-house counsel roles, judicial clerkships, civil services, academic research, and policy think tanks.',
  },
  {
    id: 'career-options',
    question: 'Does law study only lead to courtroom practice?',
    answer:
      'No. While litigation remains a cornerstone, modern legal education opens doors to corporate M&A, intellectual property, arbitration, international human rights, fintech compliance, environmental governance, and legal journalism.',
  },
  {
    id: 'career-training',
    question: 'Does RRC Law Academy provide judicial services or bar practice training?',
    answer:
      'RRC Law Academy specializes in competitive law entrance preparation (undergraduate and postgraduate LL.M pathways). For professional bar practice or judicial services, specialized advanced training pathways can be explored upon graduation.',
  },
];

const ENQUIRY_FAQS = [
  {
    id: 'enquiry-how',
    question: 'How do I enquire about course admissions and batch schedules?',
    answer:
      'You can submit an online enquiry through our Registration & Enquiry page, call our academic desk directly, or visit our academy. An academic advisor will guide you through batch timings, fee structures, and scholarship options.',
  },
  {
    id: 'enquiry-help',
    question: 'Can I receive guidance on choosing between CLAT UG, AILET UG, or specific programs?',
    answer:
      'Yes. Our experienced academic counsellors provide free one-on-one diagnostic sessions to assess your academic background, target universities, and preparation timeline to recommend the ideal pathway.',
  },
  {
    id: 'enquiry-register',
    question: 'Where can I begin the registration process?',
    answer:
      'You can initiate registration directly on our website via the Registration page by providing your contact information and selecting your course of interest.',
  },
  {
    id: 'enquiry-contact',
    question: 'How can I contact RRC Law Academy for immediate assistance?',
    answer:
      'Reach out via our Contact page for telephone lines, official email correspondence, and physical campus location details.',
  },
];

const CATEGORIES_CONFIG = [
  {
    id: 'about',
    label: 'About RRC',
    title: 'About RRC Law Academy',
    eyebrow: 'Academy Foundations',
    description: 'Learn about our mission, entrance preparation focus, and the student profiles we support.',
    items: ABOUT_FAQS,
    links: [
      { label: 'Why Choose RRC?', to: '/why-rrc' },
      { label: 'About the Academy', to: '/about' },
    ],
  },
  {
    id: 'courses',
    label: 'Courses',
    title: 'Entrance Courses (UG & PG)',
    eyebrow: 'Targeted Entrance Pathways',
    description: 'Detailed insights into our flagship entrance courses for CLAT and AILET.',
    items: COURSE_FAQS,
    links: [
      { label: 'CLAT UG Course', to: '/courses/clat-ug' },
      { label: 'CLAT PG Course', to: '/courses/clat-pg' },
      { label: 'AILET UG Course', to: '/courses/ailet-ug' },
      { label: 'AILET PG Course', to: '/courses/ailet-pg' },
      { label: 'Explore All Courses', to: '/courses' },
    ],
  },
  {
    id: 'programs',
    label: 'Programs',
    title: 'Specialized Preparation Programs',
    eyebrow: 'Focused Preparation Formats',
    description: 'Explore specialized modules engineered for every preparation timeline and student need.',
    items: PROGRAM_FAQS,
    links: [
      { label: 'Foundation Program', to: '/programs/foundation' },
      { label: 'Intensive Revision', to: '/programs/intensive-revision' },
      { label: 'Mock Test Series', to: '/programs/mock-test' },
      { label: 'Current Affairs & GK', to: '/programs/current-affairs' },
      { label: 'Explore All Programs', to: '/programs' },
    ],
  },
  {
    id: 'approach',
    label: 'Methodology',
    title: 'Learning & Preparation Methodology',
    eyebrow: 'Systematic Pedagogy',
    description: 'Understand how our 5-stage learning cycle turns conceptual knowledge into high exam scores.',
    items: PREPARATION_FAQS,
    links: [
      { label: 'Why RRC Pedagogy', to: '/why-rrc' },
      { label: 'Current Affairs Module', to: '/programs/current-affairs' },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    title: 'Study Resources & Downloadable Papers',
    eyebrow: 'Learning Materials & Practice',
    description: 'Verified sample papers, syllabus coverage, reading guides, and study frameworks.',
    items: RESOURCE_FAQS,
    links: [
      { label: 'Download Model Papers & Prospectus', to: '/resources' },
    ],
  },
  {
    id: 'career',
    label: 'Career in Law',
    title: 'Career in Law & Professional Horizons',
    eyebrow: 'Post-NLU Opportunities',
    description: 'Understand career possibilities spanning corporate practice, litigation, public policy, and judiciary.',
    items: CAREER_FAQS,
    links: [
      { label: 'Legal Careers Guide', to: '/career-in-law' },
      { label: 'Top Law Colleges Directory', to: '/law-colleges' },
    ],
  },
  {
    id: 'enquiries',
    label: 'Admissions',
    title: 'Registration, Admissions & Enquiries',
    eyebrow: 'Admissions & Assistance',
    description: 'Next steps for counselling, registration, fee consultations, and campus contact.',
    items: ENQUIRY_FAQS,
    links: [
      { label: 'Register / Enquire Online', to: '/registration' },
      { label: 'Contact Academic Desk', to: '/contact' },
    ],
  },
];

const TOTAL_QUESTION_COUNT = CATEGORIES_CONFIG.reduce((sum, cat) => sum + cat.items.length, 0);

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return CATEGORIES_CONFIG.map((cat) => {
      if (activeCategory !== 'all' && cat.id !== activeCategory) {
        return null;
      }

      let matchingItems = cat.items;
      if (query) {
        matchingItems = cat.items.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query) ||
            cat.title.toLowerCase().includes(query)
        );
      }

      if (matchingItems.length === 0) return null;

      return {
        ...cat,
        items: matchingItems,
      };
    }).filter(Boolean);
  }, [activeCategory, searchQuery]);

  const totalMatchingCount = useMemo(() => {
    return filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  }, [filteredCategories]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };

  return (
    <div className="rrc-faq-page">
      {/* 1. FAQ Hero */}
      <section className="rrc-faq-hero" aria-label="Frequently asked questions introduction">
        <div className="rrc-container rrc-faq-hero__grid">
          <div className="rrc-faq-hero__copy rrc-anim-fade-up">
            <span className="rrc-eyebrow">Knowledge &amp; Guidance Base</span>
            <h1 className="rrc-display rrc-faq-hero__title">Frequently Asked Questions</h1>
            <p className="rrc-lead">
              Clear, comprehensive answers about RRC Law Academy&apos;s entrance courses, preparatory programs,
              learning methodology, study resources, and admissions process.
            </p>
            <div className="rrc-faq-hero__chips">
              <span className="rrc-faq-chip">
                <RrcIcon name="description" size={15} /> {TOTAL_QUESTION_COUNT} Verified Questions
              </span>
              <span className="rrc-faq-chip">
                <RrcIcon name="school" size={15} /> 7 Preparation Domains
              </span>
              <span className="rrc-faq-chip">
                <RrcIcon name="balance" size={15} /> UG &amp; PG Law Guidance
              </span>
            </div>
            <div className="rrc-btn-row rrc-faq-hero__actions">
              <Button to="/courses" variant="navy">Explore Courses</Button>
              <Button to="/registration" variant="secondary">Enquire Now</Button>
            </div>
          </div>
          <div className="rrc-faq-hero__visual">
            <img
              className="rrc-faq-visual"
              src={faqHeroImage}
              alt="An experienced legal mentor guiding a law student through case documents and study material."
              width={540}
              height={360}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 2. Unified FAQ Main Directory */}
      <section className="rrc-section rrc-faq-main" aria-label="Frequently asked questions directory">
        <div className="rrc-container rrc-faq-main__inner">
          {/* Controls Bar: Search & Category Filter Tabs */}
          <div className="rrc-faq-controls">
            <div className="rrc-faq-search-wrap">
              <label htmlFor="faq-search-input" className="sr-only">Search frequently asked questions</label>
              <div className="rrc-faq-search-box">
                <span className="rrc-faq-search-icon" aria-hidden="true">
                  <RrcIcon name="search" size={18} />
                </span>
                <input
                  id="faq-search-input"
                  type="text"
                  className="rrc-faq-search-input"
                  placeholder="Search questions by exam, topic, or keyword (e.g. CLAT, mock, revision, PDF)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery ? (
                  <button
                    type="button"
                    className="rrc-faq-search-clear"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search query"
                  >
                    ×
                  </button>
                ) : null}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="rrc-faq-filter-tabs" role="tablist" aria-label="Filter questions by category">
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'all'}
                className={`rrc-faq-tab ${activeCategory === 'all' ? 'is-active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Questions <span className="rrc-faq-tab__count">({TOTAL_QUESTION_COUNT})</span>
              </button>
              {CATEGORIES_CONFIG.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`rrc-faq-tab ${activeCategory === cat.id ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label} <span className="rrc-faq-tab__count">({cat.items.length})</span>
                </button>
              ))}
            </div>

            {/* Live Status indicator */}
            <div className="rrc-faq-status-bar" aria-live="polite">
              <p className="rrc-faq-status-text">
                Showing <strong>{totalMatchingCount}</strong> of <strong>{TOTAL_QUESTION_COUNT}</strong> questions
                {activeCategory !== 'all' ? ` in ${CATEGORIES_CONFIG.find((c) => c.id === activeCategory)?.label}` : ''}
                {searchQuery ? ` matching "${searchQuery}"` : ''}
              </p>
              {(searchQuery || activeCategory !== 'all') && (
                <button
                  type="button"
                  className="rrc-faq-reset-link"
                  onClick={handleResetFilters}
                >
                  Reset filters
                </button>
              )}
            </div>
          </div>

          {/* FAQ Category Groups or Empty State */}
          {filteredCategories.length > 0 ? (
            <div className="rrc-faq-groups">
              {filteredCategories.map((cat) => (
                <div key={cat.id} className="rrc-faq-group" id={`faq-${cat.id}`}>
                  <div className="rrc-faq-group__header">
                    <span className="rrc-faq-group__eyebrow">{cat.eyebrow}</span>
                    <div className="rrc-faq-group__title-row">
                      <h2 className="rrc-faq-group__title">{cat.title}</h2>
                      <span className="rrc-faq-group__badge">{cat.items.length} {cat.items.length === 1 ? 'Question' : 'Questions'}</span>
                    </div>
                    <p className="rrc-faq-group__desc">{cat.description}</p>
                  </div>

                  <div className="rrc-faq-group__body">
                    <FAQAccordion items={cat.items} allowMultiple={true} />
                  </div>

                  {cat.links && cat.links.length > 0 ? (
                    <nav className="rrc-faq-group__links" aria-label={`Related pages for ${cat.title}`}>
                      <span className="rrc-faq-group__links-label">Related Pathways:</span>
                      <div className="rrc-faq-group__links-list">
                        {cat.links.map((link) => (
                          <Link key={link.to} to={link.to} className="rrc-faq-page-link">
                            {link.label} <span aria-hidden="true">→</span>
                          </Link>
                        ))}
                      </div>
                    </nav>
                  ) : null}
                </div>
              ))}
            </div>
          ) : (
            <div className="rrc-faq-empty">
              <div className="rrc-faq-empty__icon" aria-hidden="true">
                <RrcIcon name="search" size={32} />
              </div>
              <h2 className="rrc-faq-empty__title">No matching questions found</h2>
              <p className="rrc-faq-empty__desc">
                We couldn&apos;t find any questions matching <strong>&ldquo;{searchQuery}&rdquo;</strong>.
                Try adjusting your search terms or browse our question categories.
              </p>
              <Button type="button" variant="primary" onClick={handleResetFilters}>
                View All {TOTAL_QUESTION_COUNT} Questions
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Final FAQ CTA */}
      <CTASection
        eyebrow="Have a Specific Question?"
        title="Speak with an Academic Advisor"
        description="Cannot find the specific entrance or admission information you need? Connect with our dedicated law counselling team for personalized guidance."
        primaryCta={{ label: 'Enquire Online', link: '/registration' }}
        secondaryCta={{ label: 'Contact Academic Desk', link: '/contact' }}
      />
    </div>
  );
}
