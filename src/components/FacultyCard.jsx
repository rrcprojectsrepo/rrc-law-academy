import { Link } from 'react-router-dom';
import RrcIcon from './RrcIcon';
import './FacultyCard.css';

// Faculty/mentor card — placeholder-safe. Never invents names/bios.
// faculty: { name, role, bio, link }.
export default function FacultyCard({ faculty }) {
  if (!faculty) return null;
  const { name, role, bio, link = '/about' } = faculty;
  return (
    <article className="rrc-faculty-card">
      <span className="rrc-faculty-card__avatar" aria-hidden="true">
        <RrcIcon name="person" size={24} />
      </span>
      {name ? <h3 className="rrc-card__title rrc-faculty-card__name">{name}</h3> : null}
      {role ? <p className="rrc-faculty-card__role">{role}</p> : null}
      {bio ? <p className="rrc-card__text">{bio}</p> : null}
      <Link to={link} className="rrc-faculty-card__link">
        View Full Profile →
      </Link>
    </article>
  );
}

