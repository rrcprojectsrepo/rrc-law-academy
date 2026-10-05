import { Link } from 'react-router-dom';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import { coursePageList } from '../data/coursePages';
import { programPageList } from '../data/programPages';
import careerLawHeroImage from '../assets/career-law-hero.png';
import './CareerInLaw.css';

const JOURNEY = [
  { title: 'Explore', text: 'Discover an interest in law and understand different legal education pathways.' },
  { title: 'Prepare', text: 'Build foundations and prepare for relevant law entrance examinations.' },
  { title: 'Enter Law School', text: 'Develop legal knowledge, analytical ability, research skills, and professional awareness.' },
  { title: 'Develop Practical Skills', text: 'Strengthen research, drafting, communication, reasoning, and application of legal concepts.' },
  { title: 'Explore a Career Path', text: 'Learn about different areas of legal work and identify areas that align with individual interests and strengths.' },
  { title: 'Continue Learning', text: 'Legal professionals continue learning as laws, regulations, technologies, and professional practices evolve.' },
];

const PATHWAYS = [
  { icon: 'balance', title: 'Litigation', text: 'Legal professionals may work on dispute resolution, court proceedings, case preparation, and related legal work.' },
  { icon: 'work', title: 'Corporate & Commercial Law', text: 'Work can involve businesses, transactions, contracts, compliance, and commercial legal matters.' },
  { icon: 'gavel', title: 'Constitutional & Public Law', text: 'This area involves legal questions relating to constitutional principles, public institutions, rights, and governance.' },
  { icon: 'verified', title: 'Intellectual Property', text: 'Work may involve legal protection and management of intellectual property such as trademarks, copyrights, and patents.' },
  { icon: 'gavel', title: 'Criminal Law', text: 'Legal work can involve criminal proceedings, defence, prosecution-related work, and legal research.' },
  { icon: 'groups', title: 'Family & Personal Law', text: 'This area can involve legal matters relating to family relationships, personal rights, and related disputes.' },
  { icon: 'description', title: 'Legal Research & Policy', text: 'Legal professionals and researchers may analyse legislation, judgments, legal developments, and policy questions.' },
  { icon: 'public', title: 'Legal Technology', text: 'Technology is increasingly relevant to legal research, document workflows, information management, automation, and legal services.' },
];

const SKILLS = [
  { icon: 'manage_search', title: 'Legal Research', text: 'Learn to locate, examine, and organise relevant legal information.' },
  { icon: 'psychology', title: 'Critical Thinking', text: 'Develop the ability to evaluate information and construct reasoned conclusions.' },
  { icon: 'edit_document', title: 'Legal Writing', text: 'Develop clarity and structure in legal and professional writing.' },
  { icon: 'forum', title: 'Communication', text: 'Build clear written and verbal communication skills.' },
  { icon: 'schema', title: 'Reasoning & Analysis', text: 'Strengthen logical and legal reasoning through structured problem solving.' },
  { icon: 'update', title: 'Professional Technology Skills', text: 'Understand how digital tools, information systems, and emerging technologies can support legal work.' },
];

const PROGRESSION = [
  { title: 'Learn', text: 'Understand concepts and legal foundations.' },
  { title: 'Practise', text: 'Apply knowledge through exercises, research, writing, and problem solving.' },
  { title: 'Reflect', text: 'Review work, identify gaps, and seek improvement.' },
  { title: 'Progress', text: 'Continue developing knowledge and professional skills.' },
];

const TECHNOLOGY_AREAS = [
  'Legal research',
  'Document organisation',
  'Information retrieval',
  'Workflow automation',
  'Knowledge management',
  'Document analysis',
  'Professional productivity',
];

const CAREER_STEPS = [
  'LAW ENTRANCE PREPARATION',
  'LAW SCHOOL',
  'LEGAL KNOWLEDGE',
  'PRACTICAL SKILLS',
  'PROFESSIONAL EXPLORATION',
  'CONTINUOUS LEARNING',
];

const REFLECTION_QUESTIONS = [
  'What areas of law interest me?',
  'Which skills do I enjoy developing?',
  'Do I enjoy reading, research, reasoning, writing, or advocacy?',
  'What kind of legal environment interests me?',
  'What legal education pathway should I explore?',
  'Which skills should I start building now?',
];

export default function CareerInLaw() {
  return (
    <div className="rrc-career-page">
      <section className="rrc-career-hero" aria-label="Career in Law introduction">
        <div className="rrc-container rrc-career-hero__grid">
          <div className="rrc-career-hero__copy rrc-anim-fade-up">
            <p className="rrc-eyebrow">Career in Law</p>
            <h1 className="rrc-display rrc-career-hero__title">Explore the Journey From Legal Education to a Career in Law</h1>
            <p className="rrc-lead">Law is a broad field that combines legal knowledge, reasoning, communication, research, analysis, and professional judgement. Building these foundations begins with purposeful learning and continues throughout a legal career.</p>
            <div className="rrc-btn-row rrc-career-hero__actions">
              <Button to="/courses" variant="navy">Explore Courses</Button>
              <Button to="/registration" variant="secondary">Talk to a Counsellor</Button>
            </div>
          </div>
          <div className="rrc-career-hero__visual">
            <img
              className="rrc-career-visual"
              src={careerLawHeroImage}
              alt="Young law graduate in a professional legal environment"
            />
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Why consider a career in law">
        <div className="rrc-container rrc-career-intro">
          <div className="rrc-career-intro__ornament" aria-hidden="true">
            <span className="rrc-career-intro__rule" />
            <RrcIcon name="balance" size={72} />
            <span className="rrc-career-intro__caption">Knowledge · Reasoning · Responsibility</span>
          </div>
          <div className="rrc-career-intro__copy">
            <SectionHeader eyebrow="A Broad Field of Learning" title="Law Opens a Wide Range of Professional Pathways" align="left" />
            <p>Legal education offers a way to study how rules, institutions, rights, and responsibilities shape society. Along the way, learners can develop structured reasoning, legal research, reading and interpretation, communication, writing, analytical thinking, problem solving, and an understanding of legal frameworks.</p>
            <p>These foundations can be useful across different areas of legal work. The paths people explore vary with their interests, education, and experience.</p>
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Legal education journey">
        <div className="rrc-container">
          <SectionHeader eyebrow="The Legal Education Journey" title="From Aspirant to Legal Professional" />
          <ol className="rrc-career-timeline rrc-stagger">
            {JOURNEY.map((step, index) => (
              <li className="rrc-career-timeline__item" key={step.title}>
                <span className="rrc-career-timeline__number">{String(index + 1).padStart(2, '0')}</span>
                <div className="rrc-career-timeline__card">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rrc-section" aria-label="Career pathways in law">
        <div className="rrc-container">
          <SectionHeader eyebrow="Career Pathways" title="Areas of Legal Practice and Professional Work" description="These are examples of areas people may explore; they are not guaranteed career outcomes." />
          <div className="rrc-career-pathways rrc-stagger">
            {PATHWAYS.map((item) => <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.text} />)}
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Skills for a future in law">
        <div className="rrc-container">
          <SectionHeader eyebrow="Skills for a Future in Law" title="Build Skills That Support Legal Thinking" description="These are areas learners can develop or explore; this overview does not describe a list of formal academy courses." />
          <div className="rrc-career-skills rrc-stagger">
            {SKILLS.map((item) => <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.text} />)}
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-career-bridge" aria-label="From law entrance preparation to law school">
        <div className="rrc-container">
          <SectionHeader eyebrow="A Longer Learning Journey" title="Your Preparation Is Only the Beginning" description="Entrance preparation develops the habits of reading, reasoning, analysis, and disciplined practice that can support the broader journey into legal education." />
          <ol className="rrc-career-bridge__steps rrc-stagger">
            {CAREER_STEPS.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rrc-section rrc-section--navy rrc-career-technology" aria-label="Legal technology and AI">
        <div className="rrc-container rrc-career-technology__grid">
          <div>
            <SectionHeader eyebrow="Legal Technology & AI" title="Understanding the Future of Legal Work" align="left" />
            <p className="rrc-career-technology__lead">Technology is becoming increasingly relevant to how legal information is found, organised, reviewed, and used in professional workflows.</p>
            <div className="rrc-career-tech-grid">
              {TECHNOLOGY_AREAS.map((item) => <span className="rrc-career-tech-chip" key={item}><RrcIcon name="check_circle" size={18} />{item}</span>)}
            </div>
          </div>
          <aside className="rrc-career-technology__note">
            <span className="rrc-icon-badge rrc-icon-badge--gold" aria-hidden="true"><RrcIcon name="verified" size={22} /></span>
            <h3>Judgement Still Matters</h3>
            <p>Technology and AI can support legal work, but legal professionals still need sound judgement, verification, confidentiality awareness, and responsibility when using technology.</p>
          </aside>
        </div>
      </section>

      <section className="rrc-section" aria-label="Skills that develop over time">
        <div className="rrc-container">
          <SectionHeader eyebrow="A Lifelong Practice" title="Build, Practise, Reflect, Improve" description="This progression echoes the learning cycle used in preparation: learning continues through application, review, and adjustment." />
          <ol className="rrc-career-growth rrc-stagger">
            {PROGRESSION.map((step, index) => (
              <li className="rrc-card rrc-career-growth__step" key={step.title}>
                <span className="rrc-icon-badge rrc-career-growth__icon" aria-hidden="true"><RrcIcon name={['menu_book', 'edit_document', 'analytics', 'trending_up'][index]} size={20} /></span>
                <h3 className="rrc-card__title">{step.title}</h3>
                <p className="rrc-card__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="How RRC supports early preparation">
        <div className="rrc-container">
          <SectionHeader eyebrow="Early Preparation" title="Start With Strong Foundations" description="Explore the academy’s courses and preparation programs as options for the early stages of legal education. These offerings support preparation and do not represent professional legal training." />
          <div className="rrc-career-ecosystem">
            <div>
              <h3 className="rrc-career-ecosystem__heading">Courses</h3>
              <div className="rrc-career-ecosystem__grid rrc-career-ecosystem__grid--courses">
                {coursePageList.map((course) => (
                  <Link className="rrc-card rrc-career-ecosystem-card" key={course.slug} to={`/courses/${course.slug}`}>
                    <span className="rrc-icon-badge rrc-career-ecosystem-card__icon" aria-hidden="true"><RrcIcon name="school" size={20} /></span>
                    <h4>{course.shortTitle}</h4>
                    <p>{course.description}</p>
                    <span className="rrc-career-ecosystem-card__action">Explore course <span aria-hidden="true">→</span></span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="rrc-career-ecosystem__heading">Programs</h3>
              <div className="rrc-career-ecosystem__grid rrc-career-ecosystem__grid--programs">
                {programPageList.map((program) => (
                  <Link className="rrc-card rrc-career-ecosystem-card" key={program.slug} to={`/programs/${program.slug}`}>
                    <span className="rrc-icon-badge rrc-career-ecosystem-card__icon" aria-hidden="true"><RrcIcon name="layers" size={20} /></span>
                    <h4>{program.shortTitle}</h4>
                    <p>{program.description}</p>
                    <span className="rrc-career-ecosystem-card__action">Explore program <span aria-hidden="true">→</span></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Career exploration questions">
        <div className="rrc-container">
          <SectionHeader eyebrow="Reflect & Explore" title="Questions to Ask When Exploring a Career in Law" description="Use these prompts to reflect on your interests and areas you may want to learn more about." />
          <ul className="rrc-career-questions rrc-stagger">
            {REFLECTION_QUESTIONS.map((question) => (
              <li className="rrc-card rrc-career-question" key={question}>
                <RrcIcon name="check_circle" size={20} />
                <span>{question}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rrc-section rrc-section--navy rrc-career-cta" aria-label="Begin your journey toward legal education">
        <div className="rrc-container rrc-career-cta__inner">
          <SectionHeader eyebrow="Your Next Step" title="Begin Your Journey Toward Legal Education" description="Explore RRC Law Academy’s courses and preparation programs as you take the next step toward legal education." />
          <div className="rrc-btn-row rrc-career-cta__actions">
            <Button to="/courses" variant="primary">Explore Courses</Button>
            <Button to="/registration" variant="secondary">Enquire Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
