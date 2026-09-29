import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import FeatureCard from '../components/FeatureCard';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import {
  createEnquiryWhatsAppMessage,
  createRrcWhatsAppUrl,
  isRrcWhatsAppConfigured,
} from '../config/whatsapp';
import { coursePageList } from '../data/coursePages';
import { programPageList } from '../data/programPages';
import { COURSE_OPTIONS, validateForm } from './registrationValidation';
import './Registration.css';

const INTRO_CARDS = [
  { icon: 'explore', title: 'Choose Your Path', text: 'Select the course or preparation program you are interested in.' },
  { icon: 'school', title: 'Share Your Background', text: 'Tell us your current class, qualification, city, and preparation stage.' },
  { icon: 'edit_document', title: 'Send Your Enquiry', text: 'Provide your details and message so your enquiry can be reviewed.' },
];

const ENQUIRY_STEPS = [
  { title: 'Choose', text: 'Select the course or program you are interested in.' },
  { title: 'Share', text: 'Provide your basic academic and contact details.' },
  { title: 'Connect', text: 'Review your prepared enquiry and choose whether to continue the conversation with our team in WhatsApp.' },
];

const REGISTRATION_FAQS = [
  { id: 'registration-courses', question: 'What courses can I enquire about?', answer: 'CLAT UG, CLAT PG, AILET UG, and AILET PG are available as course pathways in the current website structure.' },
  { id: 'registration-programs', question: 'What preparation programs can I enquire about?', answer: 'The current program structure includes Foundation Program, Intensive Revision, Mock Test Program, and Current Affairs & GK.' },
  { id: 'registration-required', question: 'Do I need to complete every field?', answer: 'Full Name, Phone Number, and Course / Programme are required. Other fields are optional.' },
  { id: 'registration-unsure', question: 'Can I choose Not Sure?', answer: 'Yes. Select Not Sure if you would like to enquire without choosing a specific course or program.' },
];

const INITIAL_FORM = {
  fullName: '',
  phone: '',
  email: '',
  course: '',
  qualification: '',
  city: '',
  preferredMode: 'Not Sure',
  message: '',
};

function getContextCourse(search) {
  const courseSlug = new URLSearchParams(search).get('course');
  if (!courseSlug) return '';

  const course = coursePageList.find((item) => item.slug === courseSlug);
  if (course) return course.shortTitle;

  const program = programPageList.find((item) => item.slug === courseSlug);
  return program?.title ?? '';
}

function getInitialForm(search) {
  return { ...INITIAL_FORM, course: getContextCourse(search) };
}

function RegistrationHeroVisual() {
  return (
    <svg className="rrc-registration-visual" viewBox="0 0 640 500" role="img" aria-labelledby="rrc-registration-visual-title">
      <title id="rrc-registration-visual-title">A study pathway leading from an enquiry document toward learning options</title>
      <rect x="12" y="12" width="616" height="476" rx="28" fill="#0e1c2f" />
      <path d="M152 102h220l74 74v215H152z" fill="#f9f9ff" stroke="#fed488" strokeWidth="4" strokeLinejoin="round" />
      <path d="M372 102v78h74" fill="#d8e3fb" stroke="#775a19" strokeWidth="4" strokeLinejoin="round" />
      <path d="M194 218h174M194 250h206M194 282h152" stroke="#aebbd0" strokeWidth="7" strokeLinecap="round" />
      <circle cx="218" cy="337" r="16" fill="#775a19" />
      <path d="M210 337h16M218 329v16" stroke="#fed488" strokeWidth="3" strokeLinecap="round" />
      <path d="M390 350h93v-63M483 287v-41" fill="none" stroke="#fed488" strokeWidth="4" strokeLinecap="round" />
      <circle cx="483" cy="225" r="20" fill="#fed488" />
      <circle cx="483" cy="225" r="38" fill="none" stroke="#fed488" strokeOpacity=".45" strokeWidth="2" />
      <path d="M80 436h480" stroke="#d8e3fb" strokeOpacity=".4" strokeWidth="3" />
    </svg>
  );
}

function FormField({ id, label, required = false, error, counter, className = '', children }) {
  const errorId = `${id}-error`;
  const counterId = `${id}-counter`;
  const describedBy = [error ? errorId : null, counter ? counterId : null].filter(Boolean).join(' ') || undefined;
  return (
    <div className={`rrc-registration-field ${className}`}>
      <label htmlFor={id}>
        {label}{required ? <span className="rrc-registration-required" aria-hidden="true"> *</span> : null}
      </label>
      {children({
        id,
        required,
        'aria-invalid': Boolean(error),
        'aria-describedby': describedBy,
      })}
      {error ? <p className="rrc-registration-error" id={errorId} role="alert">{error}</p> : null}
      {counter ? <p className="rrc-registration-counter" id={counterId} aria-live="off">{counter}</p> : null}
    </div>
  );
}

function RegistrationForm({ search }) {
  const [formData, setFormData] = useState(() => getInitialForm(search));
  const [errors, setErrors] = useState({});
  const [submissionState, setSubmissionState] = useState('idle');
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
    setWhatsAppUrl('');
    setSubmissionState('idle');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    setSubmissionState('idle');
    setWhatsAppUrl('');

    const firstInvalidField = Object.keys(nextErrors)[0];
    if (firstInvalidField) {
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    const payload = {
      ...formData,
      fullName: formData.fullName.trim(),
      // Preserve the phone exactly as entered; normalization is used only for validation.
      phone: formData.phone,
      email: formData.email.trim(),
      qualification: formData.qualification.trim(),
      city: formData.city.trim(),
      message: formData.message.trim(),
    };

    setFormData(payload);
    if (!isRrcWhatsAppConfigured) {
      setSubmissionState('unconfigured');
      return;
    }

    const nextWhatsAppUrl = createRrcWhatsAppUrl(createEnquiryWhatsAppMessage(payload));
    if (!nextWhatsAppUrl) {
      setSubmissionState('unconfigured');
      return;
    }

    setWhatsAppUrl(nextWhatsAppUrl);
    setSubmissionState('ready');
    window.open(nextWhatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  const editEnquiry = () => {
    setSubmissionState('idle');
    setWhatsAppUrl('');
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const startNewEnquiry = () => {
    setFormData(getInitialForm(search));
    setErrors({});
    setWhatsAppUrl('');
    setSubmissionState('idle');
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (submissionState === 'ready') {
    return (
      <div id="registration-form" className="rrc-card rrc-registration-ready">
        <span className="rrc-icon-badge rrc-icon-badge--gold" aria-hidden="true"><RrcIcon name="check_circle" size={24} /></span>
        <h3>Enquiry Ready</h3>
        <p role="status" aria-live="polite">Your enquiry is ready. Continue to WhatsApp to discuss your course requirements with our team.</p>
        <p className="rrc-registration-ready__note">Your enquiry details have been prepared for WhatsApp. They will be sent only if you choose to send the message in WhatsApp.</p>
        <div className="rrc-btn-row rrc-registration-ready__actions">
          {whatsAppUrl ? (
            <a className="rrc-btn rrc-btn--primary" href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
              Continue to WhatsApp
            </a>
          ) : null}
          <Button to="/courses" variant="navy">Explore Courses</Button>
          <Button to="/contact" variant="secondary">Back to Contact</Button>
          <Button variant="text" onClick={editEnquiry}>Edit Enquiry</Button>
          <Button variant="text" onClick={startNewEnquiry}>Start a New Enquiry</Button>
        </div>
      </div>
    );
  }

  return (
    <form className="rrc-card rrc-registration-form" id="registration-form" onSubmit={handleSubmit} noValidate>
      <div className="rrc-registration-form__grid">
        <FormField id="fullName" label="Full Name" required error={errors.fullName}>
          {(props) => <input {...props} name="fullName" type="text" autoComplete="name" placeholder="Enter your full name" maxLength={100} value={formData.fullName} onChange={updateField} />}
        </FormField>

        <FormField id="phone" label="Phone Number" required error={errors.phone}>
          {(props) => <input {...props} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Enter your phone number" maxLength={20} value={formData.phone} onChange={updateField} />}
        </FormField>

        <FormField id="email" label="Email Address" error={errors.email}>
          {(props) => <input {...props} name="email" type="email" inputMode="email" autoComplete="email" placeholder="Enter your email address" maxLength={254} value={formData.email} onChange={updateField} />}
        </FormField>

        <FormField id="course" label="Course / Programme" required error={errors.course}>
          {(props) => (
            <select {...props} name="course" value={formData.course} onChange={updateField}>
              <option value="">Select a course or programme</option>
              {COURSE_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          )}
        </FormField>

        <FormField id="qualification" label="Current Class / Qualification" error={errors.qualification}>
          {(props) => <input {...props} name="qualification" type="text" autoComplete="off" placeholder="e.g. Class XI, Class XII, LL.B., Graduate" maxLength={120} value={formData.qualification} onChange={updateField} />}
        </FormField>

        <FormField id="city" label="City" error={errors.city}>
          {(props) => <input {...props} name="city" type="text" autoComplete="address-level2" placeholder="Enter your city" maxLength={100} value={formData.city} onChange={updateField} />}
        </FormField>

        <FormField id="preferredMode" label="Preferred Mode">
          {(props) => (
            <select {...props} name="preferredMode" value={formData.preferredMode} onChange={updateField}>
              <option value="Not Sure">Not Sure</option>
            </select>
          )}
        </FormField>

        <FormField id="message" label="Message" className="rrc-registration-field--wide" error={errors.message} counter={`${formData.message.length} / 500 characters`}>
          {(props) => <textarea {...props} name="message" placeholder="Tell us what you would like to know..." maxLength={500} rows={5} value={formData.message} onChange={updateField} />}
        </FormField>
      </div>

      {submissionState === 'unconfigured' ? (
        <p className="rrc-registration-whatsapp-notice" role="status" aria-live="polite">
          WhatsApp contact is being configured. Please use the contact option for assistance.
        </p>
      ) : null}

      <div className="rrc-registration-form__footer">
        <p className="rrc-registration-privacy">Your details are used to prepare a WhatsApp message after you submit this form. They are not stored or sent automatically.</p>
        <Button type="submit" variant="primary">
          Submit Enquiry
        </Button>
      </div>
    </form>
  );
}

export default function Registration() {
  const location = useLocation();

  return (
    <div className="rrc-registration-page">
      <section className="rrc-registration-hero" aria-label="Registration and enquiry introduction">
        <div className="rrc-container rrc-registration-hero__grid">
          <div className="rrc-registration-hero__copy rrc-anim-fade-up">
            <p className="rrc-eyebrow">Registration & Enquiry</p>
            <h1 className="rrc-display rrc-registration-hero__title">Start Your Law Entrance Preparation Journey</h1>
            <p className="rrc-lead">Share your details and tell us which course or preparation program you are interested in. Your enquiry helps identify the preparation pathway you would like to explore.</p>
            <div className="rrc-btn-row rrc-registration-hero__actions">
              <Button href="#registration-form" variant="navy">Complete Enquiry</Button>
              <Button to="/courses" variant="secondary">Explore Courses</Button>
            </div>
          </div>
          <div className="rrc-registration-hero__visual"><RegistrationHeroVisual /></div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Tell us what you are looking for">
        <div className="rrc-container">
          <SectionHeader eyebrow="Registration / Enquiry" title="Tell Us What You Are Looking For" description="Use the enquiry form to share your current academic stage, area of interest, and preferred learning option." />
          <div className="rrc-registration-intro-grid rrc-stagger">
            {INTRO_CARDS.map((item) => <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.text} />)}
          </div>
        </div>
      </section>

      <section className="rrc-section rrc-section--light rrc-registration-form-section" aria-label="Registration enquiry form">
        <div className="rrc-container rrc-registration-form-container">
          <SectionHeader eyebrow="Share Your Interest" title="Registration / Enquiry Form" description="Fields marked with * are required." />
          <RegistrationForm key={location.search} search={location.search} />
        </div>
      </section>

      <section className="rrc-section" aria-label="Your enquiry journey">
        <div className="rrc-container">
          <SectionHeader eyebrow="What Happens After Enquiry" title="Your Enquiry Journey" description="After validation, your details are prepared in a WhatsApp draft. You decide whether to send the message and continue the conversation." />
          <ol className="rrc-registration-journey rrc-stagger">
            {ENQUIRY_STEPS.map((step, index) => (
              <li className="rrc-card rrc-registration-journey__step" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Explore courses before enquiring">
        <div className="rrc-container">
          <SectionHeader eyebrow="Course Quick Links" title="Explore Before You Enquire" />
          <div className="rrc-registration-course-grid">
            {coursePageList.map((course) => (
              <Link className="rrc-card rrc-registration-path-card" key={course.slug} to={`/courses/${course.slug}`}>
                <h3 className="rrc-card__title">{course.shortTitle}</h3>
                <p className="rrc-card__text">{course.description}</p>
                <span>View Course <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rrc-section" aria-label="Preparation programs">
        <div className="rrc-container">
          <SectionHeader eyebrow="Program Quick Links" title="Preparation Programs" />
          <div className="rrc-registration-program-grid">
            {programPageList.map((program) => (
              <Link className="rrc-card rrc-registration-path-card" key={program.slug} to={`/programs/${program.slug}`}>
                <h3 className="rrc-card__title">{program.title}</h3>
                <p className="rrc-card__text">{program.description}</p>
                <span>View Program <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
          <div className="rrc-registration-program-index"><Link to="/programs">View all preparation programs <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="rrc-section rrc-section--light" aria-label="Registration guidance questions">
        <div className="rrc-container rrc-registration-faq">
          <SectionHeader eyebrow="Form Guidance" title="Questions About Enquiry" />
          <FAQAccordion items={REGISTRATION_FAQS} />
          <nav className="rrc-registration-faq__links" aria-label="More enquiry help">
            <Link to="/contact">Visit the Contact page</Link>
            <Link to="/faq">Browse all frequently asked questions</Link>
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
