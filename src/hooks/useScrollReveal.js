import { useEffect } from 'react';

export default function useScrollReveal(rootRef, routeKey) {
  useEffect(() => {
    const root = rootRef.current;
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (!root || prefersReducedMotion || typeof IntersectionObserver !== 'function') {
      if (root) {
        const sections = root.querySelectorAll(':scope > section, :scope > div > section');
        sections.forEach((section) => {
          section.dataset.rrcReveal = 'visible';
        });
      }
      return undefined;
    }

    const sections = Array.from(root.querySelectorAll(':scope > section, :scope > div > section'));
    if (sections.length === 0) return undefined;

    const revealSection = (section) => {
      if (section && section.dataset.rrcReveal !== 'visible') {
        section.dataset.rrcReveal = 'visible';
        observer.unobserve(section);
      }
    };

    // Use a proactive positive bottom margin (250px) so sections smoothly reveal before
    // they reach the viewport, ensuring bottom sections and fast scrolls never stay invisible.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealSection(entry.target);
        }
      });
    }, { rootMargin: '0px 0px 250px 0px', threshold: 0 });

    // Handle hash / anchor navigation: immediately reveal target section so users never jump to a blank section
    const revealHashTarget = () => {
      const hash = window.location.hash;
      if (!hash) return;
      try {
        const target = root.querySelector(hash);
        if (target) {
          const section = target.closest('section') || target;
          revealSection(section);
        }
      } catch {
        // Ignore invalid selector queries
      }
    };

    // Initial pass: sections already inside or near the viewport (top < window.innerHeight + 250)
    // should be visible immediately, without ever flashing 'pending' (opacity: 0).
    const viewportBottom = window.innerHeight + 250;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < viewportBottom && rect.bottom > -100) {
        section.dataset.rrcReveal = 'visible';
      } else {
        section.dataset.rrcReveal = 'pending';
        observer.observe(section);
      }
    });

    // If an anchor was targeted on mount, make sure it is revealed
    revealHashTarget();

    // Listen to hash changes (e.g. user clicks anchor link on page)
    window.addEventListener('hashchange', revealHashTarget);

    // Active scroll/resize listener: proactively reveals any section that enters the detection zone
    const handleScrollFailsafe = () => {
      const windowBottom = window.innerHeight + 250;
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const isNearDocBottom = scrollBottom >= docHeight - 350;

      sections.forEach((section) => {
        if (section.dataset.rrcReveal === 'pending') {
          if (isNearDocBottom) {
            revealSection(section);
          } else {
            const rect = section.getBoundingClientRect();
            if (rect.top <= windowBottom) {
              revealSection(section);
            }
          }
        }
      });
    };
    window.addEventListener('scroll', handleScrollFailsafe, { passive: true });
    window.addEventListener('resize', handleScrollFailsafe, { passive: true });

    // Progressive enhancement timer fallback: after 1.8 seconds, reveal all remaining pending sections
    // so no section can ever remain permanently invisible under any device, browser, or network condition.
    const timerFailsafe = setTimeout(() => {
      sections.forEach((section) => {
        if (section.dataset.rrcReveal === 'pending') {
          revealSection(section);
        }
      });
    }, 1800);

    return () => {
      clearTimeout(timerFailsafe);
      observer.disconnect();
      window.removeEventListener('hashchange', revealHashTarget);
      window.removeEventListener('scroll', handleScrollFailsafe);
      window.removeEventListener('resize', handleScrollFailsafe);
      sections.forEach((section) => delete section.dataset.rrcReveal);
    };
  }, [rootRef, routeKey]);
}
