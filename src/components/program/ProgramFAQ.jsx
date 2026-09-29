import FAQAccordion from '../FAQAccordion';
import { ProgramSection } from './ProgramSection';

export default function ProgramFAQ({ program }) {
  const items = program.faqs.map((faq, index) => ({
    id: `${program.slug}-faq-${index + 1}`,
    question: faq.q,
    answer: faq.a,
  }));

  return (
    <ProgramSection id="faq" className="rrc-section--light" eyebrow="Frequently Asked Questions" title={`${program.title} Questions`}>
      <FAQAccordion items={items} />
    </ProgramSection>
  );
}
