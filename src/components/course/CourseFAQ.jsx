import SectionHeader from '../SectionHeader';
import FAQAccordion from '../FAQAccordion';
import Button from '../Button';
import './CourseFAQ.css';

// 16 — Course FAQ. course.faqs is intentionally empty in the approved data, so
// an explicit empty state is rendered rather than invented questions.
export default function CourseFAQ({ course }) {
  if (!course) return null;
  const hasFaqs = course.faqs.length > 0;

  return (
    <section
      id="rrc-course-faq"
      className="rrc-section rrc-course-anchor"
    >
      <div className="rrc-container rrc-course-faq">
        <SectionHeader eyebrow="FAQs" title={course.faqTitle || `${course.title} Questions`} />
        {hasFaqs ? (
          <FAQAccordion items={course.faqs} />
        ) : (
          <div className="rrc-course-faq__empty" role="status">
            <p className="rrc-course-faq__empty-title">
              Course-specific questions are not published yet.
            </p>
            <p className="rrc-course-faq__empty-text">
              Verified answers will be listed here. Until then, the general FAQ collection covers
              admissions, batches and preparation.
            </p>
            <div className="rrc-btn-row rrc-course-faq__empty-cta">
              <Button to="/faq" variant="secondary">
                View General FAQs
              </Button>
              <Button to="/registration" variant="primary">
                Ask a Question
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
