import SectionHeader from './SectionHeader';
import Button from './Button';
import RrcIcon from './RrcIcon';
import './CTASection.css';

// Reusable CTA: eyebrow + heading + text + primary/secondary CTAs.
// tone: navy (dark, default for final banner) | light.
export default function CTASection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  tone = 'navy',
  icon = 'balance',
}) {
  return (
    <section className={`rrc-cta rrc-cta--${tone}`} aria-label={title ?? 'Call to action'}>
      <div className="rrc-container rrc-cta__inner">
        {icon ? (
          <span className="rrc-cta__icon" aria-hidden="true">
            <RrcIcon name={icon} size={28} />
          </span>
        ) : null}
        <SectionHeader eyebrow={eyebrow} title={title} description={description} align="center" />
        {(primaryCta || secondaryCta) && (
          <div className="rrc-btn-row rrc-cta__actions">
            {primaryCta ? (
              <Button to={primaryCta.link} href={primaryCta.link ? undefined : primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button to={secondaryCta.link} href={secondaryCta.link ? undefined : secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}

