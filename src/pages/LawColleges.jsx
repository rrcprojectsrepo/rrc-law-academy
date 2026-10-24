import { useMemo, useState } from 'react';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import FAQAccordion from '../components/FAQAccordion';
import CollegeBreadcrumb from '../components/college/CollegeBreadcrumb';
import CollegeCard from '../components/college/CollegeCard';
import CollegeFilterBar from '../components/college/CollegeFilterBar';
import collegesHeroImage from '../assets/rrc-law-academy-about-hero.webp';
import {
  getAllColleges,
  getAllCourses,
  getAllEntranceExams,
  getAllInstitutionTypes,
  getAllStates,
} from '../data/collegesData';
import './LawColleges.css';

const COLLEGES_PAGE_FAQS = [
  {
    id: 'colleges-faq-exams',
    question: 'Which entrance exams are required for the top law colleges in India?',
    answer:
      'The primary entrance exam is CLAT (Common Law Admission Test), conducted by the Consortium of National Law Universities for 24 NLUs as well as the 5-year integrated law programme at the University of Delhi. NLU Delhi conducts AILET independently. Other prominent routes include SLAT for Symbiosis Law Schools, CUET PG for Delhi University 3-year LL.B., and TNDALU Merit Counselling for state honours law in Tamil Nadu.',
  },
  {
    id: 'colleges-faq-domicile',
    question: 'Are there state reservation quotas for Tamil Nadu students in NLUs?',
    answer:
      'Yes. Tamil Nadu National Law University (TNNLU) in Tiruchirappalli allocates 50% of its total seats to candidates who are residents of Tamil Nadu under the state domicile quota. Candidates must appear for CLAT UG or CLAT PG and claim the resident quota during counselling.',
  },
  {
    id: 'colleges-faq-5yr-vs-3yr',
    question: 'What is the difference between a 5-Year Integrated Law course and a 3-Year LL.B.?',
    answer:
      'A 5-Year Integrated programme (B.A. LL.B., B.B.A. LL.B., B.Com. LL.B., or B.Sc. LL.B.) is taken directly after Class 12 (10+2) and combines an undergraduate degree with professional law studies. A 3-Year LL.B. is a second degree pursued after graduation in any discipline from a recognized university.',
  },
  {
    id: 'colleges-faq-single-clat',
    question: 'Can I apply to multiple NLUs through a single CLAT score?',
    answer:
      'Yes. When you take the CLAT examination, your single all-India rank is submitted to centralized merit counselling by the Consortium of NLUs. You submit an institutional preference list and seats are allotted progressively across all 24 participating universities.',
  },
  {
    id: 'colleges-faq-rrc-guidance',
    question: 'How does RRC Law Academy help students choose their target college?',
    answer:
      'RRC Law Academy provides personalized diagnostic test analysis, historical cutoff trend guidance, and one-on-one counselling to help students and parents build their college preference lists for CLAT, AILET, and state admissions, backed by classroom coaching in Thanjavur.',
  },
];

export default function LawColleges() {
  const allColleges = useMemo(() => getAllColleges(), []);
  const states = useMemo(() => getAllStates(), []);
  const courses = useMemo(() => getAllCourses(), []);
  const types = useMemo(() => getAllInstitutionTypes(), []);
  const exams = useMemo(() => getAllEntranceExams(), []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedExam, setSelectedExam] = useState('');

  const filteredColleges = useMemo(() => {
    return allColleges.filter((college) => {
      // Free-text search matching name, shortCode, fullName, city, state, exams, or courses
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchesName = college.name.toLowerCase().includes(query);
        const matchesShortCode = (college.shortCode || '').toLowerCase().includes(query);
        const matchesFullName = college.fullName.toLowerCase().includes(query);
        const matchesCity = college.city.toLowerCase().includes(query);
        const matchesState = college.state.toLowerCase().includes(query);
        const matchesExam = college.entranceExams.some((exam) =>
          exam.toLowerCase().includes(query)
        );
        const matchesCourse = college.coursesOffered.some((course) =>
          course.toLowerCase().includes(query)
        );
        if (
          !matchesName &&
          !matchesShortCode &&
          !matchesFullName &&
          !matchesCity &&
          !matchesState &&
          !matchesExam &&
          !matchesCourse
        ) {
          return false;
        }
      }

      // State filter
      if (selectedState && college.state !== selectedState) {
        return false;
      }

      // Course filter
      if (selectedCourse && !college.coursesOffered.includes(selectedCourse)) {
        return false;
      }

      // Institution type filter
      if (selectedType && college.type !== selectedType) {
        return false;
      }

      // Entrance exam filter
      if (selectedExam && !college.entranceExams.includes(selectedExam)) {
        return false;
      }

      return true;
    });
  }, [allColleges, searchQuery, selectedState, selectedCourse, selectedType, selectedExam]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedState('');
    setSelectedCourse('');
    setSelectedType('');
    setSelectedExam('');
  };

  return (
    <div className="rrc-colleges-page">
      {/* 01 — Hero Section (Balanced 2-Column Split) */}
      <section className="rrc-colleges-hero rrc-section--navy" aria-labelledby="rrc-colleges-hero-title">
        <div className="rrc-container rrc-colleges-hero__grid">
          <div className="rrc-colleges-hero__copy">
            <p className="rrc-eyebrow">DIRECTORY & ADMISSION PATHWAYS</p>
            <h1 id="rrc-colleges-hero-title" className="rrc-display rrc-colleges-hero__title">
              Explore Premier Law Colleges in India
            </h1>
            <p className="rrc-lead rrc-colleges-hero__desc">
              Discover top National Law Universities, premier central law faculties, and renowned
              state institutions across India. Compare entrance exam routes, verified degree programmes,
              and eligibility criteria, and connect with structured RRC preparation cohorts in Thanjavur.
            </p>
            <div className="rrc-btn-row rrc-colleges-hero__actions">
              <Button href="#colleges-directory" variant="primary">
                Explore Directory ↓
              </Button>
              <Button to="/registration" variant="secondary">
                Talk to a Counsellor
              </Button>
            </div>
          </div>
          <div className="rrc-colleges-hero__visual">
            <div className="rrc-colleges-hero__frame">
              <img
                src={collegesHeroImage}
                alt="Premier law university architecture and legal education campus in India"
                width="640"
                height="480"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="rrc-colleges-hero__image"
              />
              <span className="rrc-colleges-hero__visual-note">
                12+ Verified Premier Institutions • CLAT & AILET Gateways
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Breadcrumb Navigation */}
      <CollegeBreadcrumb />

      {/* 03 — Main Directory & Filter Section */}
      <section id="colleges-directory" className="rrc-section" aria-label="Law colleges directory">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Institution Directory"
            title="Search & Filter Law Colleges"
            description="Filter by state, offered law degrees, entrance examination routes, or institution type to find your target law school."
            align="left"
          />

          <CollegeFilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedState={selectedState}
            onStateChange={setSelectedState}
            selectedCourse={selectedCourse}
            onCourseChange={setSelectedCourse}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            selectedExam={selectedExam}
            onExamChange={setSelectedExam}
            onResetFilters={handleResetFilters}
            states={states}
            courses={courses}
            types={types}
            exams={exams}
            totalCount={allColleges.length}
            filteredCount={filteredColleges.length}
          />

          {filteredColleges.length > 0 ? (
            <div className="rrc-grid-3 rrc-stagger" aria-label="College directory listings">
              {filteredColleges.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
          ) : (
            <div className="rrc-card rrc-colleges-empty" role="region" aria-label="No results found">
              <span className="rrc-icon-badge rrc-badge--gold" aria-hidden="true">
                <RrcIcon name="manage_search" size={28} />
              </span>
              <h2 className="rrc-h3 rrc-colleges-empty__title">No Law Colleges Found</h2>
              <p className="rrc-card__text rrc-colleges-empty__desc">
                We couldn't find any law colleges matching your current filter combination. Try
                clearing active filters or broadening your search criteria.
              </p>
              <div className="rrc-colleges-empty__actions">
                <button
                  type="button"
                  className="rrc-btn rrc-btn--secondary"
                  onClick={handleResetFilters}
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 04 — College Selection Framework & Guidance */}
      <section className="rrc-section rrc-section--light" aria-labelledby="rrc-selection-guide-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Admissions Guidance"
            title="How to Choose the Right Law College in India"
            description="Evaluate institutional structures, entrance exam mappings, and state reservation quotas to make informed decisions."
            align="left"
          />

          <div className="rrc-colleges-guidance-grid rrc-stagger">
            <article className="rrc-card rrc-colleges-guidance-card">
              <span className="rrc-icon-badge" aria-hidden="true">
                <RrcIcon name="school" size={22} />
              </span>
              <h3 className="rrc-card__title">National Law Universities (NLUs)</h3>
              <p className="rrc-card__text">
                Autonomous statutory universities established on the NLSIU five-year integrated law
                model. They feature trimester or semester systems, intense research cultures, global
                moot court records, and top corporate and judicial clerkship placements.
              </p>
              <ul className="rrc-colleges-guidance-list">
                <li>
                  <RrcIcon name="check_circle" size={15} />
                  <span><strong>CLAT Gateway:</strong> 24 participating NLUs across India</span>
                </li>
                <li>
                  <RrcIcon name="check_circle" size={15} />
                  <span><strong>AILET Gateway:</strong> Dedicated entrance for NLU Delhi</span>
                </li>
              </ul>
            </article>

            <article className="rrc-card rrc-card--tint rrc-colleges-guidance-card">
              <span className="rrc-icon-badge rrc-badge--gold" aria-hidden="true">
                <RrcIcon name="account_balance" size={22} />
              </span>
              <h3 className="rrc-card__title">Central Faculties & Traditional Universities</h3>
              <p className="rrc-card__text">
                Historic faculties such as the Faculty of Law, University of Delhi (CLC, LC-I, LC-II),
                renowned for constitutional jurisprudence, prolific judges and senior advocates,
                and exceptionally affordable government fee structures.
              </p>
              <ul className="rrc-colleges-guidance-list">
                <li>
                  <RrcIcon name="check_circle" size={15} />
                  <span><strong>5-Year Law:</strong> Admitted via CLAT UG scores at DU</span>
                </li>
                <li>
                  <RrcIcon name="check_circle" size={15} />
                  <span><strong>3-Year LL.B.:</strong> National admission via CUET PG</span>
                </li>
              </ul>
            </article>

            <article className="rrc-card rrc-colleges-guidance-card">
              <span className="rrc-icon-badge" aria-hidden="true">
                <RrcIcon name="verified" size={22} />
              </span>
              <h3 className="rrc-card__title">State Excellence & Tamil Nadu Quotas</h3>
              <p className="rrc-card__text">
                Institutions of high relevance to students from Tamil Nadu: TNNLU in Tiruchirappalli
                offers a dedicated 50% resident quota, while TNDALU School of Excellence in Law
                in Chennai offers prestigious honours law degrees via state single-window counselling.
              </p>
              <ul className="rrc-colleges-guidance-list">
                <li>
                  <RrcIcon name="check_circle" size={15} />
                  <span><strong>TNNLU (Trichy):</strong> 50% resident quota for TN domicile</span>
                </li>
                <li>
                  <RrcIcon name="check_circle" size={15} />
                  <span><strong>TNDALU SOEL:</strong> Higher secondary merit admission</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 05 — Frequently Asked Questions */}
      <section className="rrc-section" aria-labelledby="rrc-colleges-faq-title">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Questions & Answers"
            title="Frequently Asked Questions About Law Colleges"
            description="Clear answers on entrance examination mappings, Tamil Nadu reservation policies, and degree options."
            align="left"
          />
          <FAQAccordion items={COLLEGES_PAGE_FAQS} />
        </div>
      </section>

      {/* 06 — RRC Preparation Cross-Promotion Banner */}
      <CTASection
        eyebrow="Targeting Admissions at Top Law Schools?"
        title="Prepare for Law Entrances with RRC Law Academy"
        description="Comprehensive classroom coaching, mentorship, test series, and study materials for CLAT UG, CLAT PG, AILET UG, and AILET PG aspirants in Thanjavur and across Tamil Nadu."
        primaryCta={{ label: 'Explore Courses', link: '/courses' }}
        secondaryCta={{ label: 'Book Counselling', link: '/contact' }}
        tone="navy"
        icon="school"
      />
    </div>
  );
}
