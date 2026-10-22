import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import ResourceCard from '../ResourceCard';
import { resources } from '../../data/homepage';
import './HomeResources.css';

// Section 11 — Study Resources (compact 3-col desktop, 2-col tablet, 1-col mobile).
export default function HomeResources() {
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
    <section className="rrc-section rrc-resources-section" aria-labelledby="rrc-resources-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={resources.eyebrow}
          title={resources.title}
          description={resources.text}
          align="left"
        />
        <motion.div
          className="rrc-resources__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {resources.items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="rrc-resources__motion-item"
            >
              <ResourceCard resource={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
