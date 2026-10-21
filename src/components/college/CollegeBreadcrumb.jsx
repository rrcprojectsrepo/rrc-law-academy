import { Link } from 'react-router-dom';
import './CollegeBreadcrumb.css';

export default function CollegeBreadcrumb({ items = [] }) {
  // Default base: Home -> Law Colleges
  const allItems = [
    { label: 'Home', to: '/' },
    { label: 'Law Colleges', to: '/law-colleges' },
    ...items,
  ];

  return (
    <nav className="rrc-breadcrumb" aria-label="Breadcrumb">
      <div className="rrc-container">
        <ol className="rrc-breadcrumb__list">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li
                key={item.label}
                className={`rrc-breadcrumb__item${isLast ? ' is-current' : ''}`}
                {...(isLast ? { 'aria-current': 'page' } : {})}
              >
                {!isLast && item.to ? (
                  <Link to={item.to} className="rrc-breadcrumb__link">
                    {item.label}
                  </Link>
                ) : (
                  <span className="rrc-breadcrumb__text">{item.label}</span>
                )}
                {!isLast ? (
                  <span className="rrc-breadcrumb__separator" aria-hidden="true">
                    /
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
