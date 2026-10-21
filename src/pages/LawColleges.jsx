import { useMemo, useState } from 'react';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import RrcIcon from '../components/RrcIcon';
import CollegeBreadcrumb from '../components/college/CollegeBreadcrumb';
import CollegeCard from '../components/college/CollegeCard';
import CollegeFilterBar from '../components/college/CollegeFilterBar';
import {
  getAllColleges,
  getAllCourses,
  getAllEntranceExams,
  getAllInstitutionTypes,
  getAllStates,
} from '../data/collegesData';
import './LawColleges.css';

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
      // Free-text search matching name, fullName, city, or state
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchesName = college.name.toLowerCase().includes(query);
        const matchesFullName = college.fullName.toLowerCase().includes(query);
        const matchesCity = college.city.toLowerCase().includes(query);
        const matchesState = college.state.toLowerCase().includes(query);
        const matchesExam = college.entranceExams.some((exam) =>
          exam.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesFullName && !matchesCity && !matchesState && !matchesExam) {
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
      {/* Hero Section */}
      <section className="rrc-colleges-hero" aria-labelledby="rrc-colleges-hero-title">
        <div className="rrc-container rrc-colleges-hero__inner">
          <p className="rrc-eyebrow">Directory & Admissions</p>
          <h1 id="rrc-colleges-hero-title" className="rrc-display rrc-colleges-hero__title">
            Explore Law Colleges in India
          </h1>
          <p className="rrc-lead rrc-colleges-hero__desc">
            Discover premier National Law Universities, central law faculties, and top state
            institutions across India. Review verified entrance examinations, admission routes, and
            eligibility criteria, and connect with structured RRC preparation programs.
          </p>
          <div className="rrc-btn-row rrc-colleges-hero__actions">
            <Button to="/courses" variant="navy">
              Explore RRC Courses
            </Button>
            <Button to="/registration" variant="primary">
              Send an Enquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <CollegeBreadcrumb />

      {/* Main Directory Section */}
      <section className="rrc-section" aria-label="Law colleges directory">
        <div className="rrc-container">
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
              <span className="rrc-icon-badge rrc-icon-badge--gold" aria-hidden="true">
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

      {/* RRC Preparation Cross-Promotion Banner */}
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
