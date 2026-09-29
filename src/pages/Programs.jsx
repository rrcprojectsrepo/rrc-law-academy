import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import { programPageList } from '../data/programPages';
import './Programs.css';

const PROGRAM_ICONS = {
  foundation: 'foundation',
  'intensive-revision': 'refresh',
  'mock-test': 'fact_check',
  'current-affairs': 'newspaper',
};

const sharedMethodology = programPageList[0]?.methodology ?? [];

function ProgramOverviewCard({ program }) {
  const firstObjective = program.objectives[0];

  return (
    <article className="rrc-card rrc-programs-card">
      <span className="rrc-icon-badge rrc-programs-card__icon" aria-hidden="true">
        <RrcIcon name={PROGRAM_ICONS[program.slug]} size={22} />
      </span>
      <p className="rrc-eyebrow rrc-programs-card__eyebrow">{program.eyebrow}</p>
      <h3 className="rrc-card__title">{program.title}</h3>
      <p className="rrc-card__text rrc-programs-card__description">{program.description}</p>
      {firstObjective ? (
        <p className="rrc-programs-card__focus">
          <strong>Focus:</strong> {firstObjective.text}
        </p>
      ) : null}
      <Button to={`/programs/${program.slug}`} variant="text" className="rrc-programs-card__link">
        View Program <span aria-hidden="true">→</span>
      </Button>
    </article>
  );
}

export default function Programs() {
  return (
    <div className="rrc-programs-page">
      <section className="rrc-programs-hero rrc-section--navy" aria-labelledby="rrc-programs-title">
        <div className="rrc-container rrc-programs-hero__inner">
          <p className="rrc-eyebrow">PROGRAMS • STRUCTURED PREPARATION</p>
          <h1 id="rrc-programs-title" className="rrc-display rrc-programs-hero__title">
            Structured Programs for Every Stage of Preparation
          </h1>
          <p className="rrc-lead">
            Explore structured preparation programs designed to help learners build fundamentals,
            strengthen concepts, practise consistently, and improve exam readiness.
          </p>
          <div className="rrc-btn-row rrc-programs-hero__actions">
            <Button to="#program-options" variant="primary">Explore Programs</Button>
            <Button to="/registration" variant="secondary">Talk to a Counsellor</Button>
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Program introduction">
        <div className="rrc-container rrc-programs-intro">
          <SectionHeader
            eyebrow="Find Your Starting Point"
            title="Choose the Program That Matches Your Preparation Stage"
            align="left"
          />
          <p>
            RRC Law Academy offers different preparation formats for different stages of learning
            and exam preparation.
          </p>
        </div>
      </section>

      <section id="program-options" className="rrc-section rrc-section--light" aria-label="Program options">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Explore Programs"
            title="Preparation Options"
            description="Review each program overview to find the format that fits your current preparation focus."
            align="left"
          />
          <div className="rrc-programs-grid rrc-stagger">
            {programPageList.map((program) => <ProgramOverviewCard key={program.slug} program={program} />)}
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Preparation approach">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Preparation Approach"
            title="One Structured Approach. Multiple Stages of Preparation."
            align="left"
          />
          <ol className="rrc-programs-method rrc-stagger">
            {sharedMethodology.map((step) => (
              <li className="rrc-card rrc-programs-method__step" key={step.id}>
                <span className="rrc-badge rrc-badge--gold">{step.step}</span>
                <h3 className="rrc-card__title">{step.title}</h3>
                <p className="rrc-card__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Program selection guide">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Program Selection Guide"
            title="Find a Relevant Preparation Focus"
            description="Each overview reflects the audience and focus described in that program’s details."
            align="left"
          />
          <div className="rrc-programs-guide rrc-stagger">
            {programPageList.map((program) => {
              const audience = program.targetAudience[0];
              return (
                <article className="rrc-card rrc-programs-guide__card" key={program.slug}>
                  <h3 className="rrc-card__title">{program.title}</h3>
                  {audience ? <p className="rrc-programs-guide__audience">{audience.title}</p> : null}
                  {audience ? <p className="rrc-card__text">{audience.text}</p> : null}
                  <Link className="rrc-programs-guide__link" to={`/programs/${program.slug}`}>
                    View {program.shortTitle} details <span aria-hidden="true">→</span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--navy rrc-programs-cta" aria-label="Build a structured preparation plan">
        <div className="rrc-container rrc-programs-cta__inner">
          <SectionHeader
            eyebrow="Plan Your Next Step"
            title="Build a Structured Preparation Plan"
            description="Explore the available courses or contact the academy to discuss your next step."
            align="center"
          />
          <div className="rrc-btn-row rrc-programs-cta__actions">
            <Button to="/courses" variant="primary">Explore Courses</Button>
            <Button to="/registration" variant="secondary">Enquire Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
