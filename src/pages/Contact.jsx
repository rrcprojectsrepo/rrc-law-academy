import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import {
  createEnquiryWhatsAppMessage,
  createRrcWhatsAppUrl,
  RRC_WHATSAPP_NUMBER,
} from '../config/whatsapp';
import { COURSE_OPTIONS, isValidIndianPhone } from './registrationValidation';
import contactHeroImage from '../assets/contact_hero.webp';
import './Contact.css';

const ACADEMY_ADDRESS = "1st Floor, Deen Complex, Mary's Corner, Parisutham Nagar, Thanjavur, Tamil Nadu 613001";
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ACADEMY_ADDRESS)}&output=embed`;
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ACADEMY_ADDRESS)}`;

const CONTACT_FAQS = [
  {
    id: 'contact-visit',
    question: 'Can I visit the academy for in-person counselling and material inspection?',
    answer:
      'Yes. Aspirants and parents are welcome to visit our Thanjavur centre Monday through Saturday between 9:00 AM and 7:00 PM for face-to-face academic diagnostics, course walkthroughs, and sample study material review.',
  },
  {
    id: 'contact-response',
    question: 'How quickly does the admissions team respond to online enquiries?',
    answer:
      'Enquiries submitted via WhatsApp or our online form are typically addressed within 2 to 4 business hours during working hours. For immediate assistance, you may call our admissions desk directly at +91 97511 82452.',
  },
  {
    id: 'contact-batch-timings',
    question: 'Are flexible or weekend batches available for school and college students?',
    answer:
      'Yes. We operate separate weekday evening batches for local school students (Classes 11 and 12) as well as dedicated weekend intensive cohorts designed for outstation students and working professionals.',
  },
  {
    id: 'contact-outstation',
    question: 'How do outstation or non-local students prepare with RRC Law Academy?',
    answer:
      'Outstation students can participate in our hybrid and weekend intensive preparation tracks, complete with digital study material dispatches, online mock test series access, and scheduled one-on-one virtual mentorship sessions.',
  },
];

const INITIAL_FORM = {
  fullName: '',
  phone: '',
  email: '',
  course: 'CLAT UG',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const nextErrors = {};
    const trimmedName = formData.fullName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      nextErrors.fullName = 'Please enter your full name.';
    } else if (trimmedName.length < 2) {
      nextErrors.fullName = 'Full name must be at least 2 characters.';
    } else if (trimmedName.length > 100) {
      nextErrors.fullName = 'Full name must be under 100 characters.';
    }

    if (!isValidIndianPhone(formData.phone)) {
      nextErrors.phone = 'Please enter a valid 10-digit Indian phone number.';
    }

    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.course) {
      nextErrors.course = 'Please select a course or programme.';
    }

    if (trimmedMessage.length > 500) {
      nextErrors.message = 'Message must be under 500 characters.';
    }

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(`contact-form-${firstErrorField}`);
      el?.focus();
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    const payload = {
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      course: formData.course,
      qualification: '',
      city: 'Thanjavur & Regional Direct',
      preferredMode: 'Classroom / Hybrid',
      message: formData.message.trim(),
    };

    const url = createRrcWhatsAppUrl(createEnquiryWhatsAppMessage(payload));
    setWhatsAppUrl(url || '');
    setIsSubmitted(true);
    setIsSubmitting(false);

    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setIsSubmitted(false);
    setWhatsAppUrl('');
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="rrc-contact-page">
      {/* 1. Hero Section */}
      <section className="rrc-contact-hero" aria-label="Contact RRC Law Academy">
        <div className="rrc-container rrc-contact-hero__grid">
          <div className="rrc-contact-hero__copy rrc-anim-fade-up">
            <span className="rrc-eyebrow">Admissions Desk &amp; Campus Direct</span>
            <h1 className="rrc-display rrc-contact-hero__title">Contact RRC Law Academy</h1>
            <p className="rrc-lead">
              Connect directly with our academic counsellors in Thanjavur for law entrance enquiries, batch schedules,
              course selection, and 1-on-1 diagnostic consultations.
            </p>
            <div className="rrc-contact-hero__chips">
              <a href="tel:+919751182452" className="rrc-contact-chip">
                <RrcIcon name="support_agent" size={16} /> Phone: +91 97511 82452
              </a>
              <a
                href={`https://wa.me/${RRC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rrc-contact-chip"
              >
                <RrcIcon name="edit_document" size={16} /> WhatsApp: +91 90255 96694
              </a>
              <span className="rrc-contact-chip">
                <RrcIcon name="public" size={16} /> Thanjavur, Tamil Nadu
              </span>
            </div>
            <div className="rrc-btn-row rrc-contact-hero__actions">
              <a href="#contact-channels" className="rrc-btn rrc-btn--navy">Direct Channels</a>
              <a href="#enquiry-form" className="rrc-btn rrc-btn--secondary">Send Online Enquiry</a>
            </div>
          </div>
          <div className="rrc-contact-hero__visual">
            <img
              className="rrc-contact-visual"
              src={contactHeroImage}
              alt="An applicant speaking with an RRC Law Academy academic advisor at the campus reception desk."
              width={540}
              height={360}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 2. Unified Contact Channels & Interactive Enquiry Form */}
      <section id="contact-channels" className="rrc-section rrc-contact-main" aria-label="Direct contact channels and enquiry form">
        <div className="rrc-container rrc-contact-main__grid">
          {/* Left Column: Direct Communication Channels */}
          <div className="rrc-contact-channels">
            <div className="rrc-contact-channels__head">
              <span className="rrc-eyebrow">Direct Communication</span>
              <h2 className="rrc-contact-channels__title">Get in Touch Directly</h2>
              <p className="rrc-contact-channels__desc">
                Whether you have questions about CLAT, AILET, or specialized preparatory programs, our academic team is ready to guide you.
              </p>
            </div>

            <div className="rrc-contact-channel-cards">
              {/* Phone Card */}
              <article className="rrc-card rrc-channel-card">
                <span className="rrc-channel-card__icon" aria-hidden="true">
                  <RrcIcon name="support_agent" size={24} />
                </span>
                <div className="rrc-channel-card__content">
                  <h3 className="rrc-channel-card__label">Admissions Phone Desk</h3>
                  <a href="tel:+919751182452" className="rrc-channel-card__value rrc-channel-card__link">
                    +91 97511 82452
                  </a>
                  <p className="rrc-channel-card__hint">Direct line for admissions, batch schedules &amp; fee structure.</p>
                </div>
              </article>

              {/* WhatsApp Card */}
              <article className="rrc-card rrc-channel-card">
                <span className="rrc-channel-card__icon rrc-channel-card__icon--whatsapp" aria-hidden="true">
                  <RrcIcon name="edit_document" size={24} />
                </span>
                <div className="rrc-channel-card__content">
                  <h3 className="rrc-channel-card__label">Instant WhatsApp Chat</h3>
                  <a
                    href={`https://wa.me/${RRC_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rrc-channel-card__value rrc-channel-card__link"
                  >
                    +91 90255 96694
                  </a>
                  <p className="rrc-channel-card__hint">Quick messaging for course brochures, eligibility &amp; quick queries.</p>
                </div>
              </article>

              {/* Email Card */}
              <article className="rrc-card rrc-channel-card">
                <span className="rrc-channel-card__icon" aria-hidden="true">
                  <RrcIcon name="description" size={24} />
                </span>
                <div className="rrc-channel-card__content">
                  <h3 className="rrc-channel-card__label">Admissions Email</h3>
                  <a href="mailto:rrclawacademy@gmail.com" className="rrc-channel-card__value rrc-channel-card__link">
                    rrclawacademy@gmail.com
                  </a>
                  <p className="rrc-channel-card__hint">Official email for institutional correspondence &amp; admissions.</p>
                </div>
              </article>

              {/* Campus Location Card */}
              <article className="rrc-card rrc-channel-card">
                <span className="rrc-channel-card__icon" aria-hidden="true">
                  <RrcIcon name="public" size={24} />
                </span>
                <div className="rrc-channel-card__content">
                  <h3 className="rrc-channel-card__label">Campus Location</h3>
                  <p className="rrc-channel-card__value">{ACADEMY_ADDRESS}</p>
                  <Button href={MAP_DIRECTIONS_URL} external variant="navy" className="rrc-channel-card__btn">
                    Get Driving Directions
                  </Button>
                </div>
              </article>

              {/* Office Hours Card */}
              <article className="rrc-card rrc-channel-card rrc-channel-card--hours">
                <span className="rrc-channel-card__icon" aria-hidden="true">
                  <RrcIcon name="timer" size={24} />
                </span>
                <div className="rrc-channel-card__content">
                  <h3 className="rrc-channel-card__label">Admissions Office Hours</h3>
                  <p className="rrc-channel-card__value">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                  <p className="rrc-channel-card__hint">Sunday: By Prior Appointment for Parent-Student Consultations</p>
                </div>
              </article>
            </div>
          </div>

          {/* Right Column: Functional Interactive Enquiry Form */}
          <div id="enquiry-form" className="rrc-contact-form-container" ref={formRef}>
            <div className="rrc-card rrc-contact-form-card">
              <div className="rrc-contact-form-card__head">
                <span className="rrc-eyebrow">Online Consultation</span>
                <h2 className="rrc-contact-form-card__title">Send an Admissions Enquiry</h2>
                <p className="rrc-contact-form-card__desc">
                  Provide your contact details and preferred course. An academic mentor will connect with you via phone or WhatsApp.
                </p>
              </div>

              {isSubmitted ? (
                <div className="rrc-contact-form__success" role="status" aria-live="polite">
                  <div className="rrc-contact-form__success-icon" aria-hidden="true">
                    <RrcIcon name="check_circle" size={36} />
                  </div>
                  <h3 className="rrc-contact-form__success-title">Enquiry Successfully Prepared</h3>
                  <p className="rrc-contact-form__success-desc">
                    Thank you, <strong>{formData.fullName}</strong>. Your enquiry for <strong>{formData.course}</strong> has been formatted for direct dispatch to our admissions desk.
                  </p>
                  <div className="rrc-contact-form__success-actions">
                    {whatsAppUrl ? (
                      <a
                        href={whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rrc-btn rrc-btn--primary rrc-contact-form__wa-btn"
                      >
                        <RrcIcon name="edit_document" size={18} /> Continue in WhatsApp
                      </a>
                    ) : null}
                    <a href="tel:+919751182452" className="rrc-btn rrc-btn--navy">
                      <RrcIcon name="support_agent" size={18} /> Call Admissions Desk
                    </a>
                    <button type="button" className="rrc-btn rrc-btn--text" onClick={handleReset}>
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form className="rrc-contact-form" onSubmit={handleSubmit} noValidate>
                  {/* Full Name */}
                  <div className="rrc-form-group">
                    <label htmlFor="contact-form-fullName" className="rrc-form-label">
                      Full Name <span className="rrc-form-required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-form-fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Aditi Sharma"
                      className={`rrc-form-input ${errors.fullName ? 'is-invalid' : ''}`}
                      value={formData.fullName}
                      onChange={handleInputChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'contact-error-fullName' : undefined}
                      maxLength={100}
                    />
                    {errors.fullName ? (
                      <p id="contact-error-fullName" className="rrc-form-error" role="alert">
                        {errors.fullName}
                      </p>
                    ) : null}
                  </div>

                  {/* Phone Number */}
                  <div className="rrc-form-group">
                    <label htmlFor="contact-form-phone" className="rrc-form-label">
                      Phone Number <span className="rrc-form-required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-form-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="e.g. 98765 43210"
                      className={`rrc-form-input ${errors.phone ? 'is-invalid' : ''}`}
                      value={formData.phone}
                      onChange={handleInputChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'contact-error-phone' : undefined}
                      maxLength={15}
                    />
                    {errors.phone ? (
                      <p id="contact-error-phone" className="rrc-form-error" role="alert">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>

                  {/* Email Address */}
                  <div className="rrc-form-group">
                    <label htmlFor="contact-form-email" className="rrc-form-label">
                      Email Address <span className="rrc-form-optional">(Optional)</span>
                    </label>
                    <input
                      id="contact-form-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="e.g. aditi.sharma@example.com"
                      className={`rrc-form-input ${errors.email ? 'is-invalid' : ''}`}
                      value={formData.email}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-error-email' : undefined}
                      maxLength={254}
                    />
                    {errors.email ? (
                      <p id="contact-error-email" className="rrc-form-error" role="alert">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  {/* Course / Programme */}
                  <div className="rrc-form-group">
                    <label htmlFor="contact-form-course" className="rrc-form-label">
                      Course or Programme of Interest <span className="rrc-form-required" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="contact-form-course"
                      name="course"
                      className={`rrc-form-select ${errors.course ? 'is-invalid' : ''}`}
                      value={formData.course}
                      onChange={handleInputChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.course)}
                      aria-describedby={errors.course ? 'contact-error-course' : undefined}
                    >
                      {COURSE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.course ? (
                      <p id="contact-error-course" className="rrc-form-error" role="alert">
                        {errors.course}
                      </p>
                    ) : null}
                  </div>

                  {/* Message */}
                  <div className="rrc-form-group">
                    <div className="rrc-form-label-row">
                      <label htmlFor="contact-form-message" className="rrc-form-label">
                        Your Query or Message <span className="rrc-form-optional">(Optional)</span>
                      </label>
                      <span className="rrc-form-counter" id="contact-counter-message" aria-live="off">
                        {formData.message.length} / 500
                      </span>
                    </div>
                    <textarea
                      id="contact-form-message"
                      name="message"
                      rows={4}
                      placeholder="Describe your current preparation stage, target exam year, or specific questions..."
                      className={`rrc-form-textarea ${errors.message ? 'is-invalid' : ''}`}
                      value={formData.message}
                      onChange={handleInputChange}
                      maxLength={500}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby="contact-counter-message"
                    />
                    {errors.message ? (
                      <p id="contact-error-message" className="rrc-form-error" role="alert">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="rrc-contact-form__submit">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rrc-btn rrc-btn--primary rrc-contact-form__btn"
                    >
                      {isSubmitting ? 'Processing Enquiry...' : 'Connect with Academic Advisor'}
                    </button>
                    <p className="rrc-contact-form__disclaimer">
                      Direct WhatsApp &amp; phone connection. Your details are used strictly for academic guidance.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Campus Location Map Section */}
      <section className="rrc-section rrc-section--light rrc-contact-map-section" aria-label="Campus location map">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Campus Centre"
            title="Visit Our Thanjavur Centre"
            description="Centrally located in Parisutham Nagar at Mary's Corner, our campus features fully equipped lecture halls, student reading libraries, and private diagnostic counselling suites."
          />
          <div className="rrc-card rrc-contact-map-card">
            <div className="rrc-contact-map-card__info">
              <div className="rrc-contact-map-card__address">
                <span className="rrc-contact-map-card__icon" aria-hidden="true">
                  <RrcIcon name="public" size={20} />
                </span>
                <div>
                  <h3 className="rrc-contact-map-card__name">RRC Academy School of Law</h3>
                  <p className="rrc-contact-map-card__text">{ACADEMY_ADDRESS}</p>
                </div>
              </div>
              <div className="rrc-contact-map-card__actions">
                <Button href={MAP_DIRECTIONS_URL} external variant="navy">
                  Open in Google Maps
                </Button>
                <Button to="/law-colleges" variant="secondary">
                  Explore Law Colleges
                </Button>
              </div>
            </div>
            <div className="rrc-contact-map-frame">
              <iframe
                title="RRC Law Academy location in Thanjavur, Tamil Nadu"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Admissions FAQs */}
      <section className="rrc-section rrc-contact-faq-section" aria-label="Admissions and contact questions">
        <div className="rrc-container rrc-contact-faq-inner">
          <SectionHeader
            eyebrow="Admissions Guidance"
            title="Frequently Asked Contact Questions"
            description="Quick answers about visiting our campus, response times, and scheduling consultations."
          />
          <FAQAccordion items={CONTACT_FAQS} />
          <nav className="rrc-contact-faq-links" aria-label="Related academic pathways">
            <span className="rrc-contact-faq-links__label">Related Resources:</span>
            <Link to="/courses">Entrance Courses</Link>
            <Link to="/programs">Preparation Programs</Link>
            <Link to="/resources">Download Sample Papers</Link>
            <Link to="/faq">All 27 Knowledge Base FAQs</Link>
            <Link to="/why-rrc">Why RRC Pedagogy</Link>
          </nav>
        </div>
      </section>

      {/* 5. Final CTA */}
      <CTASection
        eyebrow="Take the First Step"
        title="Ready to Begin Your Law Entrance Preparation?"
        description="Speak with our admissions counsellors today to identify the right course pathway and secure your place in upcoming classroom and hybrid cohorts."
        primaryCta={{ label: 'Enquire on WhatsApp', link: '/registration' }}
        secondaryCta={{ label: 'Explore All Courses', link: '/courses' }}
      />
    </div>
  );
}
