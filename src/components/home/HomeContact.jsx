import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader';
import Button from '../Button';
import { contact } from '../../data/homepage';
import './HomeContact.css';

// Section 16 — Contact / Visit. Counsellor details stay [TO CONFIRM];
// enquiry is a CTA pair to /contact + /registration (no fake form submit).
// The location block is a real keyless Google Maps embed of the confirmed address.
const ACADEMY_ADDRESS =
  "No 82/6B, Deen Complex, Mary's Corner, Parisutham Nagar, Thanjavur, Tamil Nadu 613001";
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ACADEMY_ADDRESS)}&output=embed`;
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ACADEMY_ADDRESS)}`;

export default function HomeContact() {
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
          <div className="rrc-contact__info">
            <article className="rrc-contact__card">
              <h3 className="rrc-card__title">{contact.counsellor.title}</h3>
              <p className="rrc-card__text">{contact.counsellor.text}</p>
              <dl className="rrc-contact__rows">
                <div>
                  <dt>Phone</dt>
                  <dd>{contact.counsellor.phone}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>{contact.counsellor.email}</dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>{contact.counsellor.hours}</dd>
                </div>
              </dl>
              <div className="rrc-btn-row">
                <Button to="/contact" variant="navy" size="sm">
                  Contact Us
                </Button>
                <Button to="/registration" variant="gold" size="sm">
                  Send an Enquiry
                </Button>
              </div>
            </article>
            <div className="rrc-contact__map">
              <div className="rrc-contact__map-frame">
                <iframe
                  title={`RRC Law Academy location map - ${ACADEMY_ADDRESS}`}
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="rrc-contact__map-footer">
                <p className="rrc-contact__map-address">{ACADEMY_ADDRESS}</p>
                <Button
                  href={MAP_DIRECTIONS_URL}
                  external
                  variant="secondary"
                  size="sm"
                  className="rrc-contact__map-directions"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

          <article className="rrc-contact__form-card">
            <h3 className="rrc-card__title">{contact.formTitle}</h3>
            <p className="rrc-card__text">{contact.formText}</p>
            <ul className="rrc-contact__exams">
              {contact.targetExams.map((exam) => (
                <li key={exam}>{exam}</li>
              ))}
            </ul>
            <Link to="/registration" className="rrc-btn rrc-btn--primary">
              Start Your Enquiry
            </Link>
            <p className="rrc-contact__note">
              Full enquiry form lives on the <Link to="/registration">Registration page</Link>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
