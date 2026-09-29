import SectionHeader from '../SectionHeader';

export function ProgramSection({ id, className = '', eyebrow, title, description, children }) {
  return (
    <section id={`rrc-program-${id}`} className={`rrc-section ${className}`.trim()}>
      <div className="rrc-container">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} align="left" />
        {children}
      </div>
    </section>
  );
}

export function ProgramCards({ items, className = 'rrc-grid-2', children: renderItem }) {
  return (
    <div className={`${className} rrc-stagger`}>
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );
}

export function ProgramBulletList({ items, className = '' }) {
  return (
    <ul className={`rrc-program-bullets ${className}`.trim()}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
