import SectionHeader from '../SectionHeader';
import FAQAccordion from '../FAQAccordion';
import Button from '../Button';
import { faqs } from '../../data/faq';

// Section 15 — FAQ preview (existing data + accordion, single-open).
export default function HomeFAQ() {
  return (
    <section className="rrc-section" aria-labelledby="rrc-faq-title">
      <div className="rrc-container rrc-faq-preview">
        <SectionHeader
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
        />
        <FAQAccordion items={faqs} />
        <div className="rrc-btn-row rrc-faq-preview__cta">
          <Button to="/faq" variant="secondary">
            View All FAQs
          </Button>
        </div>
      </div>
    </section>
  );
}
