import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import JourneyCard from './JourneyCard';
import { journey } from '../../data/homepage';
import './HomeJourney.css';

// Section 3 — Legal Learning Journey (4 audience cards).
export default function HomeJourney() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 0.61, 0.21, 1] },
    },
  };

  return (
    <section className="rrc-section" aria-labelledby="rrc-journey-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={journey.eyebrow}
          title={journey.title}
          description="Identify your current stage and explore a focused pathway designed for your academic needs and goals."
        />
        <motion.div
          className="rrc-grid-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {journey.items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              style={{ display: 'flex', width: '100%', height: '100%' }}
            >
              <JourneyCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
