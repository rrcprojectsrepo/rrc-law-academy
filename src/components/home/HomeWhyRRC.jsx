import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import { whyRRC } from '../../data/homepage';
import './HomeWhyRRC.css';

// Section 8 — Why RRC Law Academy (6 benefit cards, icon-based, navy & gold).
export default function HomeWhyRRC() {
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
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 0.61, 0.21, 1],
      },
    },
  };

  return (
    <section className="rrc-section rrc-section--navy rrc-why" aria-labelledby="rrc-why-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={whyRRC.eyebrow}
          title={whyRRC.title}
          description={whyRRC.text}
        />
        <motion.div
          className="rrc-why__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {whyRRC.items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="rrc-why-card__motion-wrap"
            >
              <article className="rrc-why-card">
                <div className="rrc-why-card__header">
                  <span className="rrc-why-card__icon-wrap" aria-hidden="true">
                    <RrcIcon name={item.icon} size={22} />
                  </span>
                  <span className="rrc-why-card__index" aria-hidden="true">
                    {String(item.number).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="rrc-why-card__title">{item.title}</h3>
                <p className="rrc-why-card__text">{item.text}</p>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
