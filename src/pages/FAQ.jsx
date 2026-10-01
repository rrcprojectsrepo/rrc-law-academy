import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SectionHeader from '../components/SectionHeader';
import { coursePageList } from '../data/coursePages';
import { programPageList } from '../data/programPages';
import faqHeroImage from '../assets/faq_hero.jpg';
import './FAQ.css';

const FAQ_CATEGORIES = ['Courses', 'Programs', 'Preparation', 'Resources', 'Enquiry'];

const ABOUT_FAQS = [
  { id: 'about-what-is', question: 'What is RRC Law Academy?', answer: 'RRC Law Academy is presented as a law entrance preparation platform focused on supporting learners preparing for examinations such as CLAT and AILET.' },
  { id: 'about-focus', question: 'What does RRC Law Academy focus on?', answer: 'The website focuses on structured law entrance preparation, including courses, preparation programs, current-affairs awareness, practice, revision, and related learning support.' },
  { id: 'about-who', question: "Who can explore RRC Law Academy's programs?", answer: 'Students and learners exploring law entrance preparation can review the available courses and programs and choose a pathway that matches their preparation stage.' },
];

const COURSE_FAQS = [
  { id: 'courses-available', question: 'Which law entrance courses are available?', answer: `The current course structure includes ${coursePageList.map((course) => course.shortTitle).join(', ')}.` },
  { id: 'course-clat-ug', question: 'What is CLAT UG preparation?', answer: 'CLAT UG is the undergraduate law entrance preparation pathway represented on the RRC Law Academy website. Visit the CLAT UG course page for the detailed preparation structure.' },
  { id: 'course-clat-pg', question: 'What is CLAT PG preparation?', answer: 'CLAT PG is the postgraduate law entrance preparation pathway represented on the RRC Law Academy website. Visit the CLAT PG course page for its detailed preparation structure.' },
  { id: 'course-ailet-ug', question: 'What is AILET UG preparation?', answer: 'AILET UG is the undergraduate law entrance preparation pathway represented on the RRC Law Academy website. Visit the AILET UG course page for its detailed preparation structure.' },
  { id: 'course-ailet-pg', question: 'What is AILET PG preparation?', answer: 'AILET PG is the postgraduate law entrance preparation pathway represented on the RRC Law Academy website. Visit the AILET PG course page for its detailed preparation structure.' },
];

const PROGRAM_FAQS = [
  { id: 'programs-available', question: 'What preparation programs are available?', answer: `The current program structure includes ${programPageList.map((program) => program.title).join(', ')}.` },
  { id: 'program-foundation', question: 'What is the Foundation Program?', answer: 'The Foundation Program is presented as an early-stage preparation pathway within the RRC Law Academy program structure. Review the program page for its detailed learning areas and structure.' },
  { id: 'program-revision', question: 'What is the Intensive Revision Program?', answer: 'The Intensive Revision Program is presented as a revision-focused preparation pathway. Review its program page for the detailed structure.' },
  { id: 'program-mock-test', question: 'What is the Mock Test Program?', answer: 'The Mock Test Program is part of the RRC Law Academy preparation ecosystem and focuses on practice and assessment. Review the program page for its detailed structure.' },
  { id: 'program-current-affairs', question: 'What is the Current Affairs & GK program?', answer: 'The Current Affairs & GK program is part of the preparation ecosystem and focuses on current-affairs and general-awareness preparation. Review the program page for more information.' },
];

const PREPARATION_FAQS = [
  { id: 'approach', question: 'What preparation approach does RRC Law Academy use?', answer: 'The website uses a structured approach represented as Understand → Practise → Test → Analyse → Improve.' },
  { id: 'practice', question: 'Why is practice important in law entrance preparation?', answer: 'Practice provides opportunities to apply concepts, work through questions, develop reasoning, and identify areas that need further attention.' },
  { id: 'analysis', question: 'Why is analysis important?', answer: 'Reviewing mistakes and performance can help learners identify gaps and decide what to practise or revise next.' },
  { id: 'current-affairs-prep', question: 'Is current affairs part of the preparation ecosystem?', answer: "Current affairs and general awareness are included within the site's preparation ecosystem through the Current Affairs & GK program and related learning areas." },
];

const RESOURCE_FAQS = [
  { id: 'resource-types', question: 'What types of study areas can learners explore?', answer: 'The Study Resources page covers areas such as legal current affairs, case-law awareness, legal reading, law entrance practice, legal knowledge, reading and comprehension, and reasoning and analytical skills.' },
  { id: 'resource-downloads', question: 'Does the website provide downloadable PDFs?', answer: 'Resource availability depends on the materials currently offered by the academy. The Study Resources page describes learning areas and preparation guidance and does not claim access to unverified downloadable materials.' },
  { id: 'study-habits', question: 'How can I build better study habits?', answer: 'A consistent routine can include reading, revision, practice, current-affairs awareness, and reflection on areas that need improvement.' },
];

const CAREER_FAQS = [
  { id: 'career-pathways', question: 'Where can I learn about legal career pathways?', answer: 'Visit the Career in Law page for an overview of legal education, career pathways, professional skills, and continued learning.' },
  { id: 'career-options', question: 'Does studying law lead to one specific career?', answer: 'Legal education can connect with different areas of professional work. The Career in Law page provides an overview of several legal practice and professional areas.' },
  { id: 'career-training', question: 'Does RRC Law Academy provide professional legal practice training?', answer: "RRC Law Academy's current website structure focuses on law entrance preparation and related educational programs. Do not assume professional legal practice training unless specifically stated on an individual program page." },
];

const ENQUIRY_FAQS = [
  { id: 'enquiry-how', question: 'How can I enquire about a course or program?', answer: 'Use the Enquiry / Registration page to submit your details and indicate the course or program you are interested in.' },
  { id: 'enquiry-help', question: 'Can I ask for help choosing a course?', answer: 'You can use the enquiry process to provide your current qualification or preparation stage and the course or program you are considering.' },
  { id: 'enquiry-register', question: 'Where can I register?', answer: 'Visit the Registration page to begin an enquiry.' },
  { id: 'enquiry-contact', question: 'Can I contact RRC Law Academy directly?', answer: 'Visit the Contact page for the currently configured contact options.' },
];

function FAQHeroVisual() {
  return (
    <img
      className="rrc-faq-visual"
      src={faqHeroImage}
      alt="A legal mentor guiding a law student through documents at a desk."
    />
  );
}

function FAQCategory({ title, items, tone = 'white', links = [] }) {
  return (
    <section className={`rrc-section rrc-faq-category rrc-faq-category--${tone}`} aria-label={title}>
      <div className="rrc-container rrc-faq-category__inner">
        <SectionHeader eyebrow="Frequently Asked Questions" title={title} align="left" />
        <FAQAccordion items={items} />
        {links.length > 0 ? (
          <nav className="rrc-faq-category__links" aria-label={`${title} pages`}>
            {links.map((item) => <Link className="rrc-faq-page-link" key={item.to} to={item.to}>{item.label}<span aria-hidden="true">→</span></Link>)}
          </nav>
        ) : null}
      </div>
    </section>
  );
}

export default function FAQ() {
  const courseLinks = coursePageList.map((course) => ({ label: course.shortTitle, to: `/courses/${course.slug}` }));
  const programLinks = programPageList.map((program) => ({ label: program.title, to: `/programs/${program.slug}` }));

  return (
    <div className="rrc-faq-page">
      <section className="rrc-faq-hero" aria-label="Frequently asked questions introduction">
        <div className="rrc-container rrc-faq-hero__grid">
          <div className="rrc-faq-hero__copy rrc-anim-fade-up">
            <p className="rrc-eyebrow">Frequently Asked Questions</p>
            <h1 className="rrc-display rrc-faq-hero__title">Questions About RRC Law Academy</h1>
            <p className="rrc-lead">Find answers about our law entrance courses, preparation programs, learning approach, resources, and enquiry process.</p>
            <div className="rrc-btn-row rrc-faq-hero__actions">
              <Button to="/courses" variant="navy">Explore Courses</Button>
              <Button to="/registration" variant="secondary">Enquire Now</Button>
            </div>
          </div>
          <div className="rrc-faq-hero__visual"><FAQHeroVisual /></div>
        </div>
      </section>

      <section className="rrc-section rrc-faq-intro" aria-label="Find the information you need">
        <div className="rrc-container rrc-faq-intro__inner">
          <div>
            <SectionHeader eyebrow="Information Hub" title="Find the Information You Need" align="left" />
            <p>Explore common questions about law entrance preparation and the learning pathways available through RRC Law Academy.</p>
          </div>
          <ul className="rrc-faq-category-labels" aria-label="FAQ topics">
            {FAQ_CATEGORIES.map((category) => <li key={category}>{category}</li>)}
          </ul>
        </div>
      </section>

      <FAQCategory title="About RRC Law Academy" items={ABOUT_FAQS} tone="light" />
      <FAQCategory title="Courses" items={COURSE_FAQS} links={courseLinks} />
      <FAQCategory title="Preparation Programs" items={PROGRAM_FAQS} tone="light" links={programLinks} />
      <FAQCategory title="Learning & Preparation Approach" items={PREPARATION_FAQS} links={[
        { label: 'Browse All Programs', to: '/programs' },
        { label: 'Current Affairs & GK Program', to: '/programs/current-affairs' },
      ]} />
      <FAQCategory title="Study Resources" items={RESOURCE_FAQS} tone="light" links={[{ label: 'Explore Study Resources', to: '/resources' }]} />
      <FAQCategory title="Career in Law" items={CAREER_FAQS} links={[{ label: 'Explore Career in Law', to: '/career-in-law' }]} />
      <FAQCategory title="Registration & Enquiries" items={ENQUIRY_FAQS} tone="light" links={[
        { label: 'Registration & Enquiry', to: '/registration' },
        { label: 'Contact RRC Law Academy', to: '/contact' },
      ]} />

      <CTASection
        eyebrow="Need More Information?"
        title="Still Have a Question?"
        description="If you cannot find the information you need, submit an enquiry and provide the details of what you would like to know."
        primaryCta={{ label: 'Enquire Now', link: '/registration' }}
        secondaryCta={{ label: 'Contact Us', link: '/contact' }}
      />
    </div>
  );
}
