import CTASection from '../CTASection';

// 17 — Course CTA banner. Fully reuses the shared CTASection (navy tone),
// driven by course.cta. No stylesheet needed.
export default function CourseCTA({ course }) {
  if (!course || !course.cta) return null;
  const { title, text, primaryCta, secondaryCta } = course.cta;

  return (
    <CTASection
      title={title}
      description={text}
      primaryCta={primaryCta}
      secondaryCta={secondaryCta}
      tone="navy"
      icon="balance"
    />
  );
}
