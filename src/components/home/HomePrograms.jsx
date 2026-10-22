import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import ProgramCard from '../ProgramCard';
import { programs } from '../../data/programs';
import './HomePrograms.css';

// Section 12 — Programmes Designed Around Your Needs (Foundation / Intensive / Mock / Current Affairs).
// 4-column desktop, 2-column tablet, 1-column mobile grid with bottom-aligned CTAs.
export default function HomePrograms() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 0.61, 0.21, 1],
      },
    },
  };

  return (
    <section className="rrc-section rrc-section--light rrc-programs-section" aria-labelledby="rrc-programs-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Curricular Formats"
          title="Programmes Designed Around Your Needs"
          description="Targeted preparatory formats structured for foundational mastery, intensive revision, timed test practice, and current legal awareness."
        />
        <motion.div
          className="rrc-programs__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {programs.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="rrc-programs__motion-item"
            >
              <ProgramCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
