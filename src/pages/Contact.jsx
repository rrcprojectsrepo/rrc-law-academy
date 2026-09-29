import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import { coursePageList } from '../data/coursePages';
import { programPageList } from '../data/programPages';
import { contact as contactData } from '../data/homepage';
import './Contact.css';

const CONTACT_ACTIONS = [
  { icon: 'school', title: 'Course Enquiry', description: 'Explore the available law entrance courses and choose the pathway relevant to your preparation.', link: '/courses', action: 'Explore Courses' },
  { icon: 'layers', title: 'Program Enquiry', description: 'Review the preparation programs and identify a pathway that matches your learning stage.', link: '/programs', action: 'Explore Programs' },
  { icon: 'edit_document', title: 'Registration / Enquiry', description: 'Submit your details and indicate the course or program you would like to enquire about.', link: '/registration', action: 'Go to Registration' },
];

const NEXT_STEPS = [
  { icon: 'menu_book', title: 'Explore Courses', description: 'Review CLAT UG, CLAT PG, AILET UG, and AILET PG preparation pathways.', link: '/courses', action: 'View Courses' },
  { icon: 'layers', title: 'Explore Programs', description: 'Review the Foundation, Intensive Revision, Mock Test, and Current Affairs & GK programs.', link: '/programs', action: 'View Programs' },
  { icon: 'edit_document', title: 'Submit an Enquiry', description: 'Share your details and tell us which course or program you are interested in.', link: '/registration', action: 'Submit an Enquiry' },
];

const ENQUIRY_DETAILS = [
  'Name',
  'Contact details',
  'Course or program of interest',
  'Current class or qualification',
  'City',
  'Preparation stage',
  'Question or message',
];

const CONTACT_FAQS = [
  { id: 'contact-course-enquiry', question: 'How can I enquire about a course?', answer: 'Visit the Registration page and provide the course or program you are interested in.' },
  { id: 'contact-courses', question: 'Where can I see the available courses?', answer: 'Visit the Courses page to explore CLAT UG, CLAT PG, AILET UG, and AILET PG.' },
  { id: 'contact-programs', question: 'Where can I see the preparation programs?', answer: 'Visit the Programs page to explore the available preparation pathways.' },
  { id: 'contact-question', question: 'Can I contact the academy about a question not answered on the website?', answer: 'Use the available contact or registration options to submit your enquiry.' },
];

const CONTACT_INFORMATION = [
  { icon: 'support_agent', label: 'Phone', value: contactData?.counsellor?.phone ?? '[TO CONFIRM]' },
  { icon: 'edit_document', label: 'Email', value: contactData?.counsellor?.email ?? '[TO CONFIRM]' },
  { icon: 'public', label: 'Location', value: '[TO CONFIRM]' },
  { icon: 'timer', label: 'Availability', value: contactData?.counsellor?.hours ?? '[TO CONFIRM]' },
];

function ContactHeroVisual() {
  return (
    <svg className="rrc-contact-visual" viewBox="0 0 640 500" role="img" aria-labelledby="rrc-contact-visual-title">
      <title id="rrc-contact-visual-title">An enquiry note and connected course and program pathways</title>
      <rect x="12" y="12" width="616" height="476" rx="28" fill="#0e1c2f" />
      <path d="M170 88h240l80 80v222H170z" fill="#f9f9ff" stroke="#fed488" strokeWidth="4" strokeLinejoin="round" />
      <path d="M410 88v82h80" fill="#d8e3fb" stroke="#775a19" strokeWidth="4" strokeLinejoin="round" />
      <circle cx="224" cy="221" r="22" fill="#775a19" />
      <path d="M215 221h18M224 212v18" stroke="#fed488" strokeWidth="4" strokeLinecap="round" />
      <path d="M266 208h160M266 238h130M208 284h220M208 314h190M208 344h150" stroke="#aebbd0" strokeWidth="7" strokeLinecap="round" />
      <path d="M128 161H94v42M512 281h34v-42" fill="none" stroke="#fed488" strokeWidth="4" strokeLinecap="round" />
      <circle cx="94" cy="220" r="17" fill="#fed488" />
      <circle cx="546" cy="222" r="17" fill="#775a19" stroke="#fed488" strokeWidth="3" />
      <path d="M72 430h496" stroke="#d8e3fb" strokeOpacity=".45" strokeWidth="3" />
    </svg>
  );
}

function ContactActionCard({ item }) {
  return (
    <article className="rrc-card rrc-contact-action-card">
      <span className="rrc-icon-badge" aria-hidden="true"><RrcIcon name={item.icon} size={20} /></span>
      <h3 className="rrc-card__title">{item.title}</h3>
      <p className="rrc-card__text">{item.description}</p>
      <Link className="rrc-contact-card-link" to={item.link}>{item.action}<span aria-hidden="true">→</span></Link>
    </article>
  );
}

export default function Contact() {
  return (
    <div className="rrc-contact-page">
      <section className="rrc-contact-hero" aria-label="Contact RRC Law Academy">
        <div className="rrc-container rrc-contact-hero__grid">
          <div className="rrc-contact-hero__copy rrc-anim-fade-up">
            <p className="rrc-eyebrow">Contact RRC Law Academy</p>
            <h1 className="rrc-display rrc-contact-hero__title">Let's Start Your Law Entrance Journey</h1>
            <p className="rrc-lead">Have a question about our courses or preparation programs? Explore the available options or submit an enquiry to share what you are looking for.</p>
            <div className="rrc-btn-row rrc-contact-hero__actions">
              <Button to="/registration" variant="navy">Enquire Now</Button>
              <Button to="/courses" variant="secondary">Explore Courses</Button>
            </div>
          </div>
          <div className="rrc-contact-hero__visual"><ContactHeroVisual /></div>
        </div>
      </section>

      <section className="rrc-section" aria-label="How can we help">
        <div className="rrc-container rrc-contact-intro">
          <div className="rrc-contact-intro__copy">
            <SectionHeader eyebrow="Enquiry Options" title="How Can We Help?" align="left" />
            <p>Use this page to find the contact options currently available. For course or program enquiries, visit the Registration page and share what you would like to know.</p>
          </div>
          <div className="rrc-contact-action-grid rrc-contact-action-grid--intro rrc-stagger">
            {CONTACT_ACTIONS.map((item) => <ContactActionCard key={item.title} item={item} />)}
          </div>
        </div>
      </section>

      <section id="contact-information" className="rrc-section rrc-section--light" aria-label="Contact information">
        <div className="rrc-container">
          <SectionHeader eyebrow="Contact Information" title="Contact Information" description="Contact details will be updated once confirmed. No unverified phone, email, address, or availability details are listed here." />
          <div className="rrc-contact-info-grid">
            {CONTACT_INFORMATION.map((item) => (
              <article className="rrc-card rrc-contact-info-card" key={item.label}>
                <span className="rrc-icon-badge" aria-hidden="true"><RrcIcon name={item.icon} size={20} /></span>
                <h3 className="rrc-card__title">{item.label}</h3>
                <p className="rrc-card__text">{item.value}</p>
              </article>
            ))}
          </div>
          <a className="rrc-contact-card-link rrc-contact-info-link" href="#contact-information">View contact information <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="rrc-section" aria-label="Choose the right next step">
        <div className="rrc-container">
          <SectionHeader eyebrow="Choose the Right Next Step" title="Choose the Right Next Step" />
          <div className="rrc-contact-next-grid rrc-stagger">
            {NEXT_STEPS.map((item) => <ContactActionCard key={item.title} item={item} />)}
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Course contact paths">
        <div className="rrc-container">
          <SectionHeader eyebrow="Course Contact Path" title="Looking for a Specific Course?" description="Choose a course to review its preparation structure and details." />
          <div className="rrc-contact-course-grid rrc-stagger">
            {coursePageList.map((course) => (
              <Link className="rrc-card rrc-contact-path-card" key={course.slug} to={`/courses/${course.slug}`}>
                <span className="rrc-icon-badge" aria-hidden="true"><RrcIcon name="school" size={20} /></span>
                <h3 className="rrc-card__title">{course.shortTitle}</h3>
                <p className="rrc-card__text">{course.description}</p>
                <span className="rrc-contact-card-link">View Course <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Preparation program contact paths">
        <div className="rrc-container">
          <SectionHeader eyebrow="Program Contact Path" title="Need Help Choosing a Preparation Program?" description="Review the existing program descriptions and follow a link to the pathway you want to explore." />
          <div className="rrc-contact-program-grid rrc-stagger">
            {programPageList.map((program) => (
              <Link className="rrc-card rrc-contact-path-card" key={program.slug} to={`/programs/${program.slug}`}>
                <span className="rrc-icon-badge" aria-hidden="true"><RrcIcon name="layers" size={20} /></span>
                <h3 className="rrc-card__title">{program.title}</h3>
                <p className="rrc-card__text">{program.description}</p>
                <span className="rrc-contact-card-link">View Program <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Enquiry guidance">
        <div className="rrc-container rrc-contact-guidance">
          <div className="rrc-contact-guidance__copy">
            <SectionHeader eyebrow="Enquiry Guidance" title="What Information Can You Share?" align="left" />
            <p>When submitting an enquiry, you can provide details that help describe your preparation context. This is guidance only and does not describe required fields in the Registration form.</p>
            <Button to="/registration" variant="navy">Go to Registration</Button>
          </div>
          <ul className="rrc-card rrc-contact-guidance__list">
            {ENQUIRY_DETAILS.map((item) => <li key={item}><RrcIcon name="check_circle" size={18} /><span>{item}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="rrc-section" aria-label="Location details">
        <div className="rrc-container">
          <article className="rrc-card rrc-contact-location">
            <span className="rrc-icon-badge" aria-hidden="true"><RrcIcon name="public" size={20} /></span>
            <div>
              <SectionHeader eyebrow="Location Details" title="Location Details" align="left" />
              <p>Location information will be updated once confirmed.</p>
              <span className="rrc-contact-location__placeholder">[TO CONFIRM]</span>
            </div>
          </article>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Before you contact us">
        <div className="rrc-container rrc-contact-faq">
          <SectionHeader eyebrow="Before You Contact Us" title="Before You Contact Us" />
          <FAQAccordion items={CONTACT_FAQS} />
          <nav className="rrc-contact-faq__links" aria-label="Related pages">
            <Link to="/registration">Registration and enquiries</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/faq">Frequently asked questions</Link>
            <Link to="/career-in-law">Career in Law</Link>
            <Link to="/resources">Study Resources</Link>
          </nav>
        </div>
      </section>

      <CTASection
        eyebrow="Your Next Step"
        title="Ready to Take the Next Step?"
        description="Explore the courses and preparation programs or submit an enquiry to begin your next step toward law entrance preparation."
        primaryCta={{ label: 'Enquire Now', link: '/registration' }}
        secondaryCta={{ label: 'Explore Courses', link: '/courses' }}
      />
    </div>
  );
}
