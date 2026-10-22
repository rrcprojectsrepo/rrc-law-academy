import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Navigation,
  Send,
  CheckCircle2,
} from 'lucide-react';
import SectionHeader from '../SectionHeader';
import Button from '../Button';
import { contact } from '../../data/homepage';
import { isValidIndianPhone } from '../../pages/registrationValidation';
import {
  createRrcWhatsAppUrl,
  createEnquiryWhatsAppMessage,
} from '../../config/whatsapp';
import './HomeContact.css';

const ACADEMY_ADDRESS =
  "1st Floor, Deen Complex, Mary's Corner, Parisutham Nagar, Thanjavur, Tamil Nadu 613001";
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ACADEMY_ADDRESS)}&output=embed`;
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ACADEMY_ADDRESS)}`;

const PROGRAMMES = [
  { id: 'clat-ug', label: 'CLAT UG', slug: 'clat-ug', registrationCourse: 'CLAT UG' },
  { id: 'clat-pg', label: 'CLAT PG', slug: 'clat-pg', registrationCourse: 'CLAT PG' },
  { id: 'ailet-ug', label: 'AILET UG', slug: 'ailet-ug', registrationCourse: 'AILET UG' },
  { id: 'ailet-pg', label: 'AILET PG', slug: 'ailet-pg', registrationCourse: 'AILET PG' },
  { id: 'foundation', label: 'Foundation', slug: 'foundation', registrationCourse: 'Foundation Program' },
  { id: 'not-sure', label: 'Not Sure Yet', slug: 'not-sure', registrationCourse: 'Not Sure' },
];

export default function HomeContact() {
  const [selectedProgramme, setSelectedProgramme] = useState(PROGRAMMES[0]);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedUrl, setSubmittedUrl] = useState('');

  // Office hours row is shown only if confirmed/verified; omitted when [TO CONFIRM]
  const hasVerifiedHours = Boolean(
    contact.counsellor?.hours &&
    !contact.counsellor.hours.includes('[TO CONFIRM]') &&
    contact.counsellor.hours.trim().length > 0
  );

  const handleProgrammeSelect = (prog) => {
    setSelectedProgramme(prog);
  };

  const handleInputChange = (field, value) => {
    if (field === 'fullName') setFullName(value);
    if (field === 'phone') setPhone(value);
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    const trimmedName = fullName.trim();

    if (trimmedName.length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    } else if (trimmedName.length > 100) {
      nextErrors.fullName = 'Please keep your name within 100 characters.';
    }

    if (!isValidIndianPhone(phone)) {
      nextErrors.phone = 'Please enter a valid 10-digit Indian phone number.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalid = Object.keys(nextErrors)[0];
      const el = document.getElementById(`home-enquiry-${firstInvalid}`);
      el?.focus();
      return;
    }

    setErrors({});

    const payload = {
      fullName: trimmedName,
      phone: phone.trim(),
      email: '',
      course: selectedProgramme.registrationCourse,
      qualification: '',
      city: '',
      preferredMode: 'Not Sure',
      message: `Direct enquiry from homepage for ${selectedProgramme.label}`,
    };

    const waUrl = createRrcWhatsAppUrl(createEnquiryWhatsAppMessage(payload));
    if (waUrl) {
      setSubmittedUrl(waUrl);
      setIsSubmitted(true);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedUrl('');
  };

  return (
    <section id="contact" className="rrc-section rrc-section--light" aria-labelledby="rrc-contact-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.text}
          align="left"
        />

        <div className="rrc-contact__grid">
          {/* Card 1: Counsellor Contact Details */}
          <article className="rrc-contact__card rrc-contact__card--counsellor">
            <div className="rrc-contact__card-head">
              <span className="rrc-contact__card-badge">Direct Line</span>
              <h3 className="rrc-card__title">{contact.counsellor.title}</h3>
              <p className="rrc-card__text">{contact.counsellor.text}</p>
            </div>

            <div className="rrc-contact__channels">
              <a
                href={`tel:+91${contact.counsellor.phone.replace(/\s+/g, '')}`}
                className="rrc-contact__channel-item"
                aria-label={`Call RRC Law Academy counsellor at +91 ${contact.counsellor.phone}`}
              >
                <div className="rrc-contact__channel-icon" aria-hidden="true">
                  <Phone size={18} />
                </div>
                <div className="rrc-contact__channel-details">
                  <span className="rrc-contact__channel-label">Phone Consultation</span>
                  <span className="rrc-contact__channel-val">+91 {contact.counsellor.phone}</span>
                </div>
                <span className="rrc-contact__channel-action" aria-hidden="true">Call Now →</span>
              </a>

              <a
                href={`mailto:${contact.counsellor.email}`}
                className="rrc-contact__channel-item"
                aria-label={`Email RRC Law Academy at ${contact.counsellor.email}`}
              >
                <div className="rrc-contact__channel-icon" aria-hidden="true">
                  <Mail size={18} />
                </div>
                <div className="rrc-contact__channel-details">
                  <span className="rrc-contact__channel-label">Email Advisory</span>
                  <span className="rrc-contact__channel-val">{contact.counsellor.email}</span>
                </div>
                <span className="rrc-contact__channel-action" aria-hidden="true">Email Us →</span>
              </a>

              {hasVerifiedHours ? (
                <div className="rrc-contact__channel-item rrc-contact__channel-item--static">
                  <div className="rrc-contact__channel-icon" aria-hidden="true">
                    <Clock size={18} />
                  </div>
                  <div className="rrc-contact__channel-details">
                    <span className="rrc-contact__channel-label">Office Hours</span>
                    <span className="rrc-contact__channel-val">{contact.counsellor.hours}</span>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="rrc-contact__counsellor-footer">
              <Button to="/contact" variant="secondary" size="sm" className="rrc-contact__counsellor-btn">
                View All Contact Options
              </Button>
            </div>
          </article>

          {/* Card 2: Primary Enquiry Conversion Card */}
          <article className="rrc-contact__card rrc-contact__card--enquiry">
            <div className="rrc-contact__card-head">
              <span className="rrc-contact__card-badge rrc-contact__card-badge--gold">Fast Track</span>
              <h3 className="rrc-card__title">{contact.formTitle}</h3>
              <p className="rrc-card__text">{contact.formText}</p>
            </div>

            {isSubmitted ? (
              <div className="rrc-contact__submitted" role="status" aria-live="polite">
                <div className="rrc-contact__submitted-icon" aria-hidden="true">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="rrc-contact__submitted-title">Enquiry Ready</h4>
                <p className="rrc-contact__submitted-desc">
                  Your enquiry for <strong>{selectedProgramme.label}</strong> is prepared. Continue in WhatsApp to discuss batch timings and admissions with our counsellors.
                </p>
                <div className="rrc-contact__submitted-actions">
                  {submittedUrl ? (
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rrc-btn rrc-btn--primary rrc-contact__submitted-btn"
                    >
                      <Send size={16} aria-hidden="true" />
                      <span>Continue to WhatsApp</span>
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={handleReset}
                    className="rrc-contact__reset-btn"
                  >
                    Edit Details
                  </button>
                </div>
                <p className="rrc-contact__submitted-note">
                  Need full registration with school marks and city?{' '}
                  <Link to={`/registration?course=${selectedProgramme.slug}`}>
                    Go to Full Registration →
                  </Link>
                </p>
              </div>
            ) : (
              <form className="rrc-contact__form" onSubmit={handleSubmit} noValidate>
                <div className="rrc-contact__form-group">
                  <label className="rrc-contact__label" id="programme-selector-label">
                    Select Programme <span className="rrc-contact__required" aria-hidden="true">*</span>
                  </label>
                  <div
                    className="rrc-contact__exams"
                    role="radiogroup"
                    aria-labelledby="programme-selector-label"
                  >
                    {PROGRAMMES.map((prog) => {
                      const isSelected = selectedProgramme.id === prog.id;
                      return (
                        <button
                          key={prog.id}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          className={`rrc-contact__exam-btn ${isSelected ? 'rrc-contact__exam-btn--active' : ''}`}
                          onClick={() => handleProgrammeSelect(prog)}
                        >
                          {prog.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rrc-contact__fields-grid">
                  <div className="rrc-contact__field">
                    <label htmlFor="home-enquiry-fullName" className="rrc-contact__label">
                      Full Name <span className="rrc-contact__required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="home-enquiry-fullName"
                      name="fullName"
                      type="text"
                      className={`rrc-contact__input ${errors.fullName ? 'rrc-contact__input--error' : ''}`}
                      placeholder="e.g. Aditi Sundaram"
                      value={fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      aria-required="true"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'home-enquiry-fullName-error' : undefined}
                    />
                    {errors.fullName ? (
                      <p id="home-enquiry-fullName-error" className="rrc-contact__error" role="alert">
                        {errors.fullName}
                      </p>
                    ) : null}
                  </div>

                  <div className="rrc-contact__field">
                    <label htmlFor="home-enquiry-phone" className="rrc-contact__label">
                      Phone Number <span className="rrc-contact__required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="home-enquiry-phone"
                      name="phone"
                      type="tel"
                      className={`rrc-contact__input ${errors.phone ? 'rrc-contact__input--error' : ''}`}
                      placeholder="e.g. 98765 43210"
                      value={phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      aria-required="true"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'home-enquiry-phone-error' : undefined}
                    />
                    {errors.phone ? (
                      <p id="home-enquiry-phone-error" className="rrc-contact__error" role="alert">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>
                </div>

                <button type="submit" className="rrc-btn rrc-btn--primary rrc-contact__submit-btn">
                  <Send size={16} aria-hidden="true" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <p className="rrc-contact__note">
                  Full academic registration with city &amp; qualification lives on the{' '}
                  <Link to={`/registration?course=${selectedProgramme.slug}`}>
                    Registration page <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </form>
            )}
          </article>

          {/* Card 3: Location Map Card */}
          <article className="rrc-contact__card rrc-contact__card--map">
            <div className="rrc-contact__map-inner">
              <div className="rrc-contact__map-details">
                <div className="rrc-contact__map-header">
                  <div className="rrc-contact__map-title-wrap">
                    <MapPin size={20} className="rrc-contact__map-icon" aria-hidden="true" />
                    <h3 className="rrc-card__title">Visit Our Academy</h3>
                  </div>
                  <span className="rrc-contact__map-tag">Thanjavur Center</span>
                </div>
                <p className="rrc-contact__map-desc">
                  Our coaching facility is centrally located in Thanjavur for in-person admissions, academic counselling, and classroom batches.
                </p>
                <div className="rrc-contact__map-footer">
                  <p className="rrc-contact__map-address">
                    <strong>RRC Law Academy</strong>, {ACADEMY_ADDRESS}
                  </p>
                  <Button
                    href={MAP_DIRECTIONS_URL}
                    external
                    variant="secondary"
                    size="sm"
                    className="rrc-contact__map-directions"
                  >
                    <Navigation size={14} aria-hidden="true" />
                    <span>Get Directions</span>
                  </Button>
                </div>
              </div>

              <div className="rrc-contact__map-frame">
                <iframe
                  title={`RRC Law Academy location map - ${ACADEMY_ADDRESS}`}
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
