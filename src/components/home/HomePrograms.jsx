import SectionHeader from '../SectionHeader';
import ProgramCard from '../ProgramCard';
import { programs } from '../../data/programs';

// Section 12 — Programs (Foundation / Intensive / Mock / Current Affairs).
// Each card links to its real route via programs.js data. No fees/dates invented.
export default function HomePrograms() {
  return (
    <section className="rrc-section rrc-section--light" aria-labelledby="rrc-programs-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Curricular Formats"
          title="Programmes Designed Around Your Needs"
        />
        <div className="rrc-grid-4 rrc-stagger">
          {programs.map((item) => (
            <ProgramCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
