import RrcIcon from '../RrcIcon';
import './CollegeFilterBar.css';

export default function CollegeFilterBar({
  searchQuery,
  onSearchChange,
  selectedState,
  onStateChange,
  selectedCourse,
  onCourseChange,
  selectedType,
  onTypeChange,
  selectedExam,
  onExamChange,
  onResetFilters,
  states = [],
  courses = [],
  types = [],
  exams = [],
  totalCount = 0,
  filteredCount = 0,
}) {
  const hasActiveFilters =
    Boolean(searchQuery.trim()) ||
    Boolean(selectedState) ||
    Boolean(selectedCourse) ||
    Boolean(selectedType) ||
    Boolean(selectedExam);

  return (
    <div className="rrc-filter-bar" role="search" aria-label="Filter law colleges">
      <div className="rrc-filter-bar__top">
        {/* Search input */}
        <div className="rrc-filter-bar__search">
          <label htmlFor="college-search-input" className="rrc-filter-bar__label">
            Search Colleges or Cities
          </label>
          <div className="rrc-filter-bar__search-wrap">
            <span className="rrc-filter-bar__search-icon" aria-hidden="true">
              <RrcIcon name="manage_search" size={20} />
            </span>
            <input
              id="college-search-input"
              type="search"
              className="rrc-filter-bar__search-input"
              placeholder="e.g. NLSIU, Delhi, Bengaluru, CLAT..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label="Search by college name, abbreviation, city, or state"
            />
            {searchQuery ? (
              <button
                type="button"
                className="rrc-filter-bar__search-clear"
                onClick={() => onSearchChange('')}
                aria-label="Clear search text"
              >
                ×
              </button>
            ) : null}
          </div>
        </div>

        {/* Dropdowns row */}
        <div className="rrc-filter-bar__selects">
          <div className="rrc-filter-bar__select-group">
            <label htmlFor="filter-state" className="rrc-filter-bar__label">
              State
            </label>
            <select
              id="filter-state"
              className="rrc-filter-bar__select"
              value={selectedState}
              onChange={(e) => onStateChange(e.target.value)}
            >
              <option value="">All States</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="rrc-filter-bar__select-group">
            <label htmlFor="filter-course" className="rrc-filter-bar__label">
              Course
            </label>
            <select
              id="filter-course"
              className="rrc-filter-bar__select"
              value={selectedCourse}
              onChange={(e) => onCourseChange(e.target.value)}
            >
              <option value="">All Courses</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div className="rrc-filter-bar__select-group">
            <label htmlFor="filter-exam" className="rrc-filter-bar__label">
              Entrance Exam
            </label>
            <select
              id="filter-exam"
              className="rrc-filter-bar__select"
              value={selectedExam}
              onChange={(e) => onExamChange(e.target.value)}
            >
              <option value="">All Entrance Exams</option>
              {exams.map((exam) => (
                <option key={exam} value={exam}>
                  {exam}
                </option>
              ))}
            </select>
          </div>

          <div className="rrc-filter-bar__select-group">
            <label htmlFor="filter-type" className="rrc-filter-bar__label">
              Institution Type
            </label>
            <select
              id="filter-type"
              className="rrc-filter-bar__select"
              value={selectedType}
              onChange={(e) => onTypeChange(e.target.value)}
            >
              <option value="">All Types</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Filter metrics & active chips bar */}
      <div className="rrc-filter-bar__meta">
        <p className="rrc-filter-bar__count" aria-live="polite">
          Showing <strong>{filteredCount}</strong> of <strong>{totalCount}</strong> law colleges
        </p>

        {hasActiveFilters ? (
          <div className="rrc-filter-bar__active-chips" aria-label="Active filters">
            {searchQuery ? (
              <span className="rrc-filter-chip">
                Search: "{searchQuery}"
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  aria-label="Remove search filter"
                >
                  ×
                </button>
              </span>
            ) : null}

            {selectedState ? (
              <span className="rrc-filter-chip">
                State: {selectedState}
                <button
                  type="button"
                  onClick={() => onStateChange('')}
                  aria-label="Remove state filter"
                >
                  ×
                </button>
              </span>
            ) : null}

            {selectedCourse ? (
              <span className="rrc-filter-chip">
                Course: {selectedCourse}
                <button
                  type="button"
                  onClick={() => onCourseChange('')}
                  aria-label="Remove course filter"
                >
                  ×
                </button>
              </span>
            ) : null}

            {selectedExam ? (
              <span className="rrc-filter-chip">
                Exam: {selectedExam}
                <button
                  type="button"
                  onClick={() => onExamChange('')}
                  aria-label="Remove entrance exam filter"
                >
                  ×
                </button>
              </span>
            ) : null}

            {selectedType ? (
              <span className="rrc-filter-chip">
                Type: {selectedType}
                <button
                  type="button"
                  onClick={() => onTypeChange('')}
                  aria-label="Remove institution type filter"
                >
                  ×
                </button>
              </span>
            ) : null}

            <button
              type="button"
              className="rrc-filter-bar__reset-btn"
              onClick={onResetFilters}
            >
              Clear All Filters
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
