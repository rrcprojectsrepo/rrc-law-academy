import { useEffect, useState, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import './BackToTop.css';

const SCROLL_THRESHOLD = 300;

const checkScrollThreshold = () => {
  if (typeof window === 'undefined') return false;
  const scrollY = window.scrollY || window.pageYOffset || document.documentElement?.scrollTop || 0;
  return scrollY > SCROLL_THRESHOLD;
};

/**
 * BackToTop — Floating scroll-to-top button fixed at the bottom-left corner of the viewport.
 * 
 * Design specifications:
 * - Positioned at bottom-left with safe-area inset accounting on mobile.
 * - Perfectly separated from bottom-right controls (AI Chat Widget & WhatsApp button).
 * - Smooth scroll behavior with instantaneous state check to prevent redundant re-renders.
 * - Respects prefers-reduced-motion for both scroll animation and CSS transitions.
 * - Accessible: semantic button, aria-label, title, focus-visible ring, aria-hidden & tabIndex toggling.
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(checkScrollThreshold);

  const handleScroll = useCallback(() => {
    const shouldShow = checkScrollThreshold();
    setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={`rrc-back-to-top${isVisible ? ' is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      data-tooltip="Back to top"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
    >
      <ArrowUp size={20} strokeWidth={2.2} aria-hidden="true" className="rrc-back-to-top__icon" />
    </button>
  );
}
