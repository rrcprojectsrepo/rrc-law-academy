import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import RrcIcon from '../components/RrcIcon';
import SectionHeader from '../components/SectionHeader';
import CollegeBreadcrumb from '../components/college/CollegeBreadcrumb';
import { getCollegeBySlug } from '../data/collegesData';
import './CollegeProfile.css';

export default function CollegeProfile() {
  const { slug } = useParams();
  const college = getCollegeBySlug(slug);

  if (!college) {
    return (
      <div className="rrc-colleges-page">
        <CollegeBreadcrumb items={[{ label: 'College Not Found' }]} />
        <section className="rrc-section" aria-labelledby="rrc-college-not-found-title">
          <div className="rrc-container rrc-college-missing">
            <span className="rrc-icon-badge rrc-icon-badge--gold" aria-hidden="true">
              <RrcIcon name="manage_search" size={28} />
            </span>
            <h1 id="rrc-college-not-found-title" className="rrc-h2">
              Law College Not Found
            </h1>
            <p className="rrc-lead">
              The requested college profile does not exist or may have been updated. Explore the
              complete law colleges directory to find your target institution.
            </p>
            <div className="rrc-btn-row">
              <Button to="/law-colleges" variant="navy">
                Browse All Law Colleges
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="rrc-college-profile-page">
      {/* Breadcrumb Navigation */}
      <CollegeBreadcrumb items={[{ label: college.name }]} />

      {/* College Profile Hero */}
      <section className="rrc-college-profile-hero" aria-labelledby="rrc-college-name">
        <div className="rrc-container rrc-college-profile-hero__inner">
          <div className="rrc-college-profile-hero__badges">
            <span className="rrc-badge rrc-badge--navy">{college.type}</span>
            <span className="rrc-badge rrc-badge--gold">Est. {college.establishedYear}</span>
            <span className="rrc-college-profile-hero__location">
              <RrcIcon name="public" size={16} />
              {college.city}, {college.state}
            </span>
          </div>

          <h1 id="rrc-college-name" className="rrc-display rrc-college-profile-hero__title">
            {college.name}
          </h1>
          <p className="rrc-college-profile-hero__fullname">{college.fullName}</p>
          <p className="rrc-lead rrc-college-profile-hero__tagline">{college.tagline}</p>

          <div className="rrc-btn-row rrc-college-profile-hero__actions">
            <Button to="/registration" variant="primary">
              Enquire for Entrance Coaching
            </Button>
            <Button
              href={college.officialWebsite}
              external
              variant="secondary"
              aria-label={`Visit official website of ${college.name} (opens in new tab)`}
            >
              Visit Official Website ↗
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts Strip */}
      <section className="rrc-college-facts-strip" aria-label="College Quick Facts">
        <div className="rrc-container">
          <div className="rrc-college-facts-grid">
            <div className="rrc-college-fact-card">
              <span className="rrc-college-fact-card__label">Location</span>
              <p className="rrc-college-fact-card__value">
                {college.city}, {college.state}
              </p>
            </div>
            <div className="rrc-college-fact-card">
              <span className="rrc-college-fact-card__label">Institution Type</span>
              <p className="rrc-college-fact-card__value">{college.type}</p>
            </div>
            <div className="rrc-college-fact-card">
              <span className="rrc-college-fact-card__label">Established Year</span>
              <p className="rrc-college-fact-card__value">{college.establishedYear}</p>
            </div>
            <div className="rrc-college-fact-card">
              <span className="rrc-college-fact-card__label">Accepted Entrance Exams</span>
              <p className="rrc-college-fact-card__value">{college.entranceExams.join(', ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About & Institutional Highlights */}
      <section className="rrc-section" aria-labelledby="rrc-college-about-heading">
        <div className="rrc-container">
          <div className="rrc-college-about-grid">
            <div className="rrc-college-about-copy">
              <SectionHeader
                eyebrow="Institution Overview"
                title={`About ${college.name}`}
                align="left"
              />
              <p className="rrc-college-about-text">{college.description}</p>
            </div>

            <div className="rrc-card rrc-college-highlights-card">
              <h3 className="rrc-card__title rrc-college-highlights-title">Key Highlights</h3>
              <ul className="rrc-college-highlights-list">
                {college.highlights.map((highlight) => (
                  <li key={highlight} className="rrc-college-highlights-item">
                    <RrcIcon name="check_circle" size={18} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes & Admission Routes */}
      <section className="rrc-section rrc-section--light" aria-labelledby="rrc-college-programmes-heading">
        <div className="rrc-container">
          <SectionHeader
            eyebrow="Academics & Admissions"
            title="Verified Programmes & Admission Pathways"
            description="Review verified degrees offered, specific entrance exam routes, and basic eligibility criteria for this institution."
          />

          <div className="rrc-college-programmes-list rrc-stagger">
            {college.programmes.map((prog) => (
              <article key={prog.name} className="rrc-card rrc-college-programme-card">
                <div className="rrc-college-programme-card__header">
                  <div>
                    <span className="rrc-badge rrc-badge--navy">{prog.level}</span>
                    <h3 className="rrc-card__title rrc-college-programme-card__title">
                      {prog.name}
                    </h3>
                  </div>
                  <div className="rrc-college-programme-card__route">
                    <span className="rrc-college-programme-card__route-label">
                      Admission Route:
                    </span>
                    <span className="rrc-badge rrc-badge--gold">{prog.admissionRoute}</span>
                  </div>
                </div>

                <div className="rrc-college-programme-card__details">
                  <div className="rrc-college-programme-card__meta-item">
                    <strong>Duration:</strong> <span>{prog.duration}</span>
                  </div>
                  <div className="rrc-college-programme-card__meta-item">
                    <strong>Eligibility:</strong> <span>{prog.eligibility}</span>
                  </div>
                </div>

                {prog.rrcCourseLink ? (
                  <div className="rrc-college-programme-card__rrc-bridge">
                    <div className="rrc-college-programme-card__rrc-bridge-text">
                      <RrcIcon name="school" size={20} />
                      <div>
                        <p className="rrc-college-programme-card__rrc-bridge-title">
                          Preparing for {prog.admissionRoute}?
                        </p>
                        <p className="rrc-college-programme-card__rrc-bridge-desc">
                          RRC Law Academy offers dedicated classroom coaching and test series
                          tailored for this examination.
                        </p>
                      </div>
                    </div>
                    <Button
                      to={prog.rrcCourseLink}
                      variant="primary"
                      className="rrc-college-programme-card__rrc-bridge-btn"
                    >
                      {prog.rrcCourseLabel} →
                    </Button>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Official Data Source & Verification Notice */}
      <section className="rrc-section" aria-labelledby="rrc-verification-heading">
        <div className="rrc-container">
          <div className="rrc-card rrc-college-verification-card">
            <div className="rrc-college-verification-card__head">
              <span className="rrc-icon-badge" aria-hidden="true">
                <RrcIcon name="verified" size={24} />
              </span>
              <div>
                <h2 id="rrc-verification-heading" className="rrc-h3 rrc-college-verification-card__title">
                  Official Verification & Data Sources
                </h2>
                <p className="rrc-college-verification-card__timestamp">
                  Verified as of: <strong>{college.lastVerified}</strong>
                </p>
              </div>
            </div>

            <p className="rrc-card__text rrc-college-verification-card__text">
              All programme details, admission channels, and eligibility criteria published on this
              page have been individually verified against the institution's official website and
              the designated national entrance examination authorities (including the Consortium of
              National Law Universities and NLU Delhi). Fee amounts, cutoffs, and application dates
              are subject to annual notification by the respective university and have been omitted
              where not officially confirmed for the current academic session.
            </p>

            <div className="rrc-college-verification-card__links">
              <a
                className="rrc-college-verification-card__source-link"
                href={college.officialWebsite}
                target="_blank"
                rel="noreferrer"
              >
                Official Institution Portal ({college.officialWebsite}) ↗
              </a>
              <a
                className="rrc-college-verification-card__source-link"
                href={college.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                Admissions Information Source ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Promotion Call to Action */}
      <CTASection
        eyebrow="Targeting Law Admissions?"
        title={`Plan Your Law Entrance Journey with RRC`}
        description={`Learn with experienced mentors, comprehensive study materials, and rigorous mock test series for ${college.entranceExams.join(', ')} at RRC Law Academy.`}
        primaryCta={{ label: 'Explore All Courses', link: '/courses' }}
        secondaryCta={{ label: 'Send an Enquiry', link: '/registration' }}
        tone="navy"
        icon="balance"
      />
    </div>
  );
}
