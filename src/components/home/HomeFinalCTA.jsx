import CTASection from '../CTASection';
import { finalCta } from '../../data/homepage';

// Section 17 — Final CTA banner (navy + gold, reused CTASection).
export default function HomeFinalCTA() {
  return (
    <CTASection
      title={finalCta.title}
      description={finalCta.text}
      primaryCta={finalCta.primaryCta}
      secondaryCta={finalCta.secondaryCta}
      tone="navy"
      icon="balance"
    />
  );
}
