import SectionHeader from '../SectionHeader';
import Button from '../Button';
import './CourseBatchInformation.css';

// 13 — Batch Information. Values come from course.batchInformation only;
// programme / start date / mode are "[TO CONFIRM]" in data and shown verbatim.
export default function CourseBatchInformation({ course }) {
  if (!course || !course.batchInformation) return null;
  const info = course.batchInformation;

  return (
    <section
      id="rrc-course-batch"
      className="rrc-section rrc-section--light rrc-course-anchor"
    >
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Batches"
          title={`${course.title} Batch Information`}
          align="left"
        />
        <div className="rrc-course-batch">
          <dl className="rrc-course-batch__rows">
            <div>
              <dt>Programme</dt>
              <dd>{info.programme}</dd>
            </div>
            <div>
              <dt>Start Date</dt>
              <dd>{info.startDate}</dd>
            </div>
            <div>
              <dt>Mode</dt>
              <dd>{info.mode}</dd>
            </div>
            <div>
              <dt>Session</dt>
              <dd>{info.session}</dd>
            </div>
          </dl>
          <div className="rrc-course-batch__aside">
            <h3 className="rrc-card__title">Need confirmed dates?</h3>
            <p className="rrc-card__text">
              Batch schedules are shared only once verified. Reach out to the academy for the
              current intimation.
            </p>
            <Button to={`/registration?course=${course.slug}`} variant="gold">
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
