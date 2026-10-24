import SectionHeader from '../SectionHeader';
import RrcIcon from '../RrcIcon';

export default function ProgramInclusions({ program }) {
  const practice = program.practice;
  const studyMaterial = program.studyMaterial;
  const currentAffairs = program.currentAffairs;

  return (
    <section id="rrc-program-inclusions" className="rrc-section rrc-section--light" aria-labelledby="rrc-program-inclusions-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Academic Inclusions"
          title="What Is Included in the Programme"
          description="Comprehensive learning resources, guided practice drills, and awareness briefings curated for structured success."
          align="left"
        />
        <div className="rrc-program-inclusions__grid rrc-stagger">
          {/* Practice Card */}
          {practice ? (
            <article className="rrc-card rrc-program-inclusions__card">
              <span className="rrc-icon-badge" aria-hidden="true">
                <RrcIcon name="edit_document" size={22} />
              </span>
              <h3 className="rrc-card__title">{practice.title}</h3>
              <p className="rrc-card__text">{practice.text}</p>
              <ul className="rrc-program-bullets">
                {practice.items.map((item) => (
                  <li key={item}>
                    <RrcIcon name="check_circle" size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ) : null}

          {/* Study Material Card */}
          {studyMaterial ? (
            <article className="rrc-card rrc-program-inclusions__card rrc-card--tint">
              <span className="rrc-icon-badge rrc-badge--gold" aria-hidden="true">
                <RrcIcon name="menu_book" size={22} />
              </span>
              <h3 className="rrc-card__title">{studyMaterial.title}</h3>
              <p className="rrc-card__text">{studyMaterial.text}</p>
              <ul className="rrc-program-bullets">
                {studyMaterial.items.map((item) => (
                  <li key={item}>
                    <RrcIcon name="check_circle" size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ) : null}

          {/* Current Affairs / Awareness Card */}
          {currentAffairs ? (
            <article className="rrc-card rrc-program-inclusions__card">
              <span className="rrc-icon-badge" aria-hidden="true">
                <RrcIcon name="newspaper" size={22} />
              </span>
              <h3 className="rrc-card__title">{currentAffairs.title}</h3>
              <p className="rrc-card__text">{currentAffairs.text}</p>
              <ul className="rrc-program-bullets">
                {currentAffairs.items.map((item) => (
                  <li key={item}>
                    <RrcIcon name="check_circle" size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
