import SectionHeader from '../SectionHeader';
import FeatureCard from '../FeatureCard';

// 05 — Who It's For. Composes the shared 4-up grid + FeatureCard.
export default function AudienceCards({ course }) {
  if (!course || course.audience.length === 0) return null;
  return (
    <section
      id="rrc-course-audience"
      className="rrc-section rrc-section--light rrc-course-anchor"
    >
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Who It's For"
          title={`Who Should Join ${course.title}`}
          description={course.audienceDescription || 'Targeted preparatory pathways structured for high schoolers, board exam candidates, and dedicated gap-year aspirants.'}
          align="left"
        />
        <div className="rrc-grid-4 rrc-stagger">
          {course.audience.map((item) => (
            <FeatureCard
              key={item.id}
              icon={item.icon || 'groups'}
              title={item.title}
              description={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
