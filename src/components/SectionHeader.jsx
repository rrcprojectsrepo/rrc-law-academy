import './SectionHeader.css';

// Reusable section heading: eyebrow + Playfair heading + optional description.
// align: center (default, with gold divider) | left (no divider, like Stitch).
export default function SectionHeader({ eyebrow, title, description, align = 'center', level = 2 }) {
  const HeadingTag = level === 1 ? 'h1' : 'h2';
  return (
    <div className={`rrc-section-head rrc-section-head--${align}`}>
      {eyebrow ? <p className="rrc-section-head__eyebrow">{eyebrow}</p> : null}
      {title ? <HeadingTag className="rrc-h2 rrc-section-head__title">{title}</HeadingTag> : null}
      {align === 'center' ? <span className="rrc-section-head__rule" aria-hidden="true" /> : null}
      {description ? <p className="rrc-lead rrc-section-head__desc">{description}</p> : null}
    </div>
  );
}

