import { useState } from 'react';
import './WhyVisual.css';

// WhyVisual — progressive cinematic visual slot for the "Why RRC" page.
//
// The approved vector illustration always renders as the base layer. When a
// cinematic photograph is available it crossfades in on top; if the file is not
// present yet (HTTP 404) the slot simply keeps the illustration, so there is
// never a broken-image icon and the page never regresses.
//
// Asset convention: drop files into `public/why-rrc/` and pass the public path,
// e.g. src="/why-rrc/why-rrc-hero.png" — see
// design_reference/why-rrc/WHY-RRC-VISUALS.md for the full filename map and the
// matching image-generation prompts.
export default function WhyVisual({
  src,
  alt,
  illustration,
  focus,
  className = '',
  priority = false,
}) {
  const [status, setStatus] = useState('pending'); // pending | loaded | failed
  const hasPhoto = Boolean(src) && status !== 'failed';

  return (
    <div
      className={`rrc-why-media${className ? ` ${className}` : ''}`}
      data-status={status}
      style={focus ? { '--rrc-why-focus': focus } : undefined}
    >
      <div className="rrc-why-media__base" aria-hidden={hasPhoto ? 'true' : undefined}>
        {illustration}
      </div>
      {hasPhoto ? (
        <img
          className="rrc-why-media__photo"
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('failed')}
        />
      ) : null}
    </div>
  );
}
