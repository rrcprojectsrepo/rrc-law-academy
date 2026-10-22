import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';
import { timeline } from '../../data/homepage';
import './HomeTimeline.css';

// Section 10 — Student Learning Journey (semantic <ol> timeline).
export default function HomeTimeline() {
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
    <section className="rrc-section rrc-section--light" aria-labelledby="rrc-timeline-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={timeline.eyebrow}
          title={timeline.title}
          description={timeline.text}
        />
        <motion.ol
          className="rrc-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {timeline.items.map((item) => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              className="rrc-timeline__item"
            >
              <div className="rrc-timeline__marker-wrap">
                <span className="rrc-timeline__marker" aria-hidden="true">
                  <RrcIcon name={item.icon} size={18} />
                </span>
              </div>
              <article className="rrc-timeline__card">
                <p className="rrc-timeline__step">{item.step}</p>
                <h3 className="rrc-card__title">{item.title}</h3>
                <p className="rrc-card__text">{item.text}</p>
              </article>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
