import SectionHeader from '../SectionHeader';
import Button from '../Button';
import { batches } from '../../data/homepage';
import './HomeBatches.css';

// Section 13 — Upcoming Batches. All programme/date/mode values are
// [To Confirm] in data; rendered as-is, never invented.
export default function HomeBatches() {
  return (
    <section className="rrc-section" aria-labelledby="rrc-batches-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={batches.eyebrow}
          title={batches.title}
          description={batches.text}
          align="left"
        />
        <div className="rrc-grid-3 rrc-stagger">
          {batches.items.map((batch) => (
            <article key={batch.id} className="rrc-batch-card">
              <div className="rrc-batch-card__top">
                <span className="rrc-badge">Cohort</span>
                <span className="rrc-batch-card__session">{batches.session}</span>
              </div>
              <h3 className="rrc-card__title">{batch.title}</h3>
              <dl className="rrc-batch-card__rows">
                <div>
                  <dt>Programme:</dt>
                  <dd>{batch.programme}</dd>
                </div>
                <div>
                  <dt>Start Date:</dt>
                  <dd>{batch.startDate}</dd>
                </div>
                <div>
                  <dt>Mode:</dt>
                  <dd>{batch.mode}</dd>
                </div>
              </dl>
              <div className="rrc-batch-card__foot">
                <Button to={batch.cta.link} variant="gold">
                  {batch.cta.label}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
