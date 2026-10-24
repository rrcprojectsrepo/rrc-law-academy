import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';

export default function ProgramBatchInformation({ program }) {
  const batch = program.batchInformation;
  const fields = [
    ['Programme', batch.programme],
    ['Start Date', batch.startDate],
    ['Mode', batch.mode],
    ['Session', batch.session],
    ['Timings', batch.timings],
  ];

  return (
    <section id="rrc-program-batch" className="rrc-section rrc-section--light" aria-labelledby="rrc-program-batch-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Admissions & Learning Culture"
          title={`${program.title} Batch Schedule & Environment`}
          description="Review upcoming cohort details and our disciplined academic learning environment in Thanjavur."
          align="left"
        />
        <div className="rrc-program-batch-layout">
          {/* Left Column: Batch Information Details */}
          <div className="rrc-card rrc-program-batch-card">
            <div className="rrc-program-batch-card__head">
              <span className="rrc-icon-badge" aria-hidden="true">
                <RrcIcon name="calendar_today" size={20} />
              </span>
              <h3 className="rrc-card__title">Upcoming Cohort Information</h3>
            </div>
            <dl className="rrc-program-batch__dl">
              {fields.map(([label, value]) => (
                <div className="rrc-program-batch__item" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right Column: Thanjavur Learning Environment */}
          {program.learningEnvironment?.length ? (
            <div className="rrc-card rrc-card--tint rrc-program-environment-card">
              <div className="rrc-program-batch-card__head">
                <span className="rrc-icon-badge rrc-badge--gold" aria-hidden="true">
                  <RrcIcon name="school" size={20} />
                </span>
                <h3 className="rrc-card__title">Learning Culture in Thanjavur</h3>
              </div>
              <p className="rrc-card__text">
                RRC Law Academy maintains an intellectually focused environment combining rigorous faculty mentoring, quiet study facilities, and small cohorts.
              </p>
              <ul className="rrc-program-bullets">
                {program.learningEnvironment.map((item) => (
                  <li key={item}>
                    <RrcIcon name="check_circle" size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
