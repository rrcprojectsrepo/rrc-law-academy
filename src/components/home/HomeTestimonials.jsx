import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import { testimonials } from '../../data/homepage';
import './HomeTestimonials.css';

// Section 14 — Law Entrance Preparation Focus (honest academic perspectives).
export default function HomeTestimonials() {
  return (
    <section className="rrc-section rrc-section--light" aria-labelledby="rrc-testimonials-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          description={testimonials.text}
        />
        <div className="rrc-grid-3 rrc-stagger">
          {testimonials.items.map((item) => (
            <figure key={item.id} className="rrc-testimonial-card">
              <span className="rrc-testimonial-card__quote" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>
                <p>{item.insight || item.quote}</p>
              </blockquote>
              <figcaption>
                <span className="rrc-testimonial-card__avatar" aria-hidden="true">
                  <RrcIcon name={item.icon || 'school'} size={20} />
                </span>
                <span className="rrc-testimonial-card__info">
                  <span className="rrc-testimonial-card__name">{item.title || item.name}</span>
                  <span className="rrc-testimonial-card__meta">
                    <span className="rrc-testimonial-card__course">{item.track || item.course}</span>
                    {(item.discipline || item.location) ? (
                      <>
                        <span className="rrc-testimonial-card__dot" aria-hidden="true">•</span>
                        <span className="rrc-testimonial-card__location">{item.discipline || item.location}</span>
                      </>
                    ) : null}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
