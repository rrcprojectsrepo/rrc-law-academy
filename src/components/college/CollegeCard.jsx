import { Link } from 'react-router-dom';
import Button from '../Button';
import RrcIcon from '../RrcIcon';
import './CollegeCard.css';

export default function CollegeCard({ college }) {
  if (!college) return null;

  const profileUrl = `/law-colleges/${college.slug}`;

  return (
    <article className="rrc-card rrc-college-card" aria-labelledby={`college-title-${college.slug}`}>
      <div className="rrc-college-card__header">
        <div className="rrc-college-card__identity">
          <div className="rrc-college-card__emblem" aria-hidden="true">
            <span className="rrc-college-card__emblem-code">{college.shortCode || 'LAW'}</span>
          </div>
          <div className="rrc-college-card__meta-tags">
            <span className="rrc-badge rrc-badge--navy">{college.type}</span>
            <span className="rrc-college-card__year">Est. {college.establishedYear}</span>
          </div>
        </div>
        <div className="rrc-college-card__location">
          <RrcIcon name="location_on" size={15} />
          <span>
            {college.city}, {college.state}
          </span>
        </div>
      </div>

      <div className="rrc-college-card__body">
        <h3 id={`college-title-${college.slug}`} className="rrc-card__title rrc-college-card__title">
          <Link to={profileUrl} className="rrc-college-card__title-link">
            {college.name}
          </Link>
        </h3>
        <p className="rrc-college-card__fullname">{college.fullName}</p>
        <p className="rrc-card__text rrc-college-card__tagline">{college.tagline}</p>

        <div className="rrc-college-card__section">
          <p className="rrc-college-card__section-label">Accepted Entrance Exams</p>
          <div className="rrc-college-card__tags">
            {college.entranceExams.map((exam) => (
              <span key={exam} className="rrc-badge rrc-badge--gold">
                {exam}
              </span>
            ))}
          </div>
        </div>

        <div className="rrc-college-card__section">
          <p className="rrc-college-card__section-label">Key Programmes Offered</p>
          <ul className="rrc-college-card__courses">
            {college.coursesOffered.map((course) => (
              <li key={course} className="rrc-college-card__course-item">
                <RrcIcon name="check_circle" size={14} />
                <span>{course}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rrc-college-card__footer">
        <Button to={profileUrl} variant="card" className="rrc-college-card__cta">
          View College Profile →
        </Button>
      </div>
    </article>
  );
}
