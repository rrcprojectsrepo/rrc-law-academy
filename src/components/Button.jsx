import { Link } from 'react-router-dom';
import RrcIcon from './RrcIcon';
import './Button.css';

// Reusable Button / Link.
// variant: primary (Bright Gold per system) | navy (Stitch hero/courses)
// | gold (Stitch batches) | secondary (white/navy border) | card (pale blue card CTA) | text (gold link)
// to -> React Router Link, href -> <a>, otherwise <button>.
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size,
  icon,
  external = false,
  className = '',
  ...rest
}) {
  const classes = ['rrc-btn', `rrc-btn--${variant}`, size === 'sm' ? 'rrc-btn--sm' : '', className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {children}
      {icon ? <RrcIcon name={icon} size={18} /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}

