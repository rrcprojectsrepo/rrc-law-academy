import { useEffect } from 'react';

export default function useScrollReveal(rootRef, routeKey) {
  useEffect(() => {
    const root = rootRef.current;
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (!root || prefersReducedMotion || typeof IntersectionObserver !== 'function') return undefined;

    const sections = root.querySelectorAll(':scope > section, :scope > div > section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.dataset.rrcReveal = 'visible';
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -48px 0px', threshold: 0.01 });

    sections.forEach((section) => {
      observer.observe(section);
      section.dataset.rrcReveal = 'pending';
    });

    return () => {
      observer.disconnect();
      sections.forEach((section) => delete section.dataset.rrcReveal);
    };
  }, [rootRef, routeKey]);
}
