import { useEffect, useLayoutEffect, useRef } from 'react';
import Button from '../Button';
import { getCoursePage } from '../../data/coursePages';
import CourseHero from './CourseHero';
import CourseQuickFacts from './CourseQuickFacts';
import CourseNavigation from './CourseNavigation';
import CourseOverview from './CourseOverview';
import AudienceCards from './AudienceCards';
import LearningAreas from './LearningAreas';
import CourseMethodology from './CourseMethodology';
import CourseCurriculum from './CourseCurriculum';
import CoursePractice from './CoursePractice';
import CourseCurrentAffairs from './CourseCurrentAffairs';
import CourseStudyMaterial from './CourseStudyMaterial';
import CourseFaculty from './CourseFaculty';
import CourseBatchInformation from './CourseBatchInformation';
import CourseLearningEnvironment from './CourseLearningEnvironment';
import CourseStudentJourney from './CourseStudentJourney';
import CourseFAQ from './CourseFAQ';
import CourseCTA from './CourseCTA';
import './CourseTemplate.css';

// STEP 6B — reusable, data-driven Course Page Template.
// Renders exactly one of the four course records from data/coursePages.js.
// No business data lives here: every string comes from getCoursePage(slug),
// including the literal "[TO CONFIRM]" / "[ASSET TO CONFIRM]" placeholders.
// Routes are deliberately NOT wired yet (Step 6C).
export default function CourseTemplate({ slug }) {
  const course = getCoursePage(slug);
  const previousSlug = useRef(slug);
  const rootRef = useRef(null);

  // The sticky site header is content-driven, so its height is not always the
  // 4.5rem the sticky in-page nav assumes. Publish the measured height as a
  // course-scoped custom property so the nav sticks exactly beneath the header
  // and the anchor offsets stay aligned (see CourseNavigation.css).
  useLayoutEffect(() => {
    const root = rootRef.current;
    const header = document.querySelector('.rrc-header');
    if (!root || !header) return undefined;
    const sync = () => {
      const { height } = header.getBoundingClientRect();
      if (height > 0) root.style.setProperty('--rrc-course-header-h', `${height.toFixed(2)}px`);
    };
    sync();
    const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(sync) : null;
    if (observer) observer.observe(header);
    window.addEventListener('resize', sync);
    if (document.fonts?.ready) document.fonts.ready.then(sync).catch(() => {});
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, []);

  // When the slug changes (e.g. CLAT UG -> CLAT PG), start the new course page
  // from the top. Skipped on first mount so browser scroll restoration and
  // in-page #hash anchors keep working.
  useEffect(() => {
    if (previousSlug.current !== slug) {
      previousSlug.current = slug;
      if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [slug]);

  if (!course) {
    return (
      <section className="rrc-section" aria-labelledby="rrc-course-missing-title">
        <div className="rrc-container rrc-course-missing">
          <h1 id="rrc-course-missing-title" className="rrc-h1">
            Course not found
          </h1>
          <p className="rrc-lead">
            This course page is not available. Browse all courses to find the programme you are
            looking for.
          </p>
          <div className="rrc-btn-row">
            <Button to="/courses" variant="navy">
              View All Courses
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="rrc-course-template" ref={rootRef}>
      <CourseHero course={course} />
      <CourseQuickFacts course={course} />
      <CourseNavigation course={course} />
      <CourseOverview course={course} />
      <AudienceCards course={course} />
      <LearningAreas course={course} />
      <CourseMethodology course={course} />
      <CourseCurriculum course={course} />
      <CoursePractice course={course} />
      <CourseCurrentAffairs course={course} />
      <CourseStudyMaterial course={course} />
      <CourseFaculty course={course} />
      <CourseBatchInformation course={course} />
      <CourseLearningEnvironment course={course} />
      <CourseStudentJourney course={course} />
      <CourseFAQ course={course} />
      <CourseCTA course={course} />
    </div>
  );
}
