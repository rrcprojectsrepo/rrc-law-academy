import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import { testimonials } from '../../data/homepage';
import './HomeTestimonials.css';

// Section 14 — Testimonials. Verified placeholders only; no names/ranks invented.
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
                <p>{item.quote}</p>
              </blockquote>
              <figcaption>
                <span className="rrc-testimonial-card__avatar" aria-hidden="true">
                  <RrcIcon name="person" size={20} />
                </span>
                <span>
                  <span className="rrc-testimonial-card__name">{item.name}</span>
                  <span className="rrc-testimonial-card__role">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
