import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import { timeline } from '../../data/homepage';
import './HomeTimeline.css';

// Section 10 — Student Learning Journey (semantic <ol> timeline).
export default function HomeTimeline() {
  return (
    <section className="rrc-section rrc-section--light" aria-labelledby="rrc-timeline-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={timeline.eyebrow}
          title={timeline.title}
          description={timeline.text}
        />
        <ol className="rrc-timeline rrc-stagger">
          {timeline.items.map((item) => (
            <li key={item.id} className="rrc-timeline__item">
              <span className="rrc-timeline__marker" aria-hidden="true">
                <RrcIcon name={item.icon} size={18} />
              </span>
              <article className="rrc-timeline__card">
                <p className="rrc-timeline__step">{item.step}</p>
                <h3 className="rrc-card__title">{item.title}</h3>
                <p className="rrc-card__text">{item.text}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
