import SectionHeader from '../SectionHeader';
import FAQAccordion from '../FAQAccordion';

export default function ProgramFAQ({ program }) {
  if (!program.faqs?.length) return null;

  const items = program.faqs.map((faq, index) => ({
    id: `${program.slug}-faq-${index + 1}`,
    question: faq.q,
    answer: faq.a,
  }));

  return (
    <section id="rrc-program-faq" className="rrc-section" aria-labelledby="rrc-program-faq-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title={`${program.title} Admissions & Details`}
          description="Find answers to common questions about schedules, study materials, and classroom learning in Thanjavur."
          align="left"
        />
        <FAQAccordion items={items} />
      </div>
    </section>
  );
}
