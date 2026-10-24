import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollProgress.css';

/**
 * ScrollProgress — A slim, premium top-of-viewport scroll progress indicator.
 * Matches RRC Nexus design language:
 * - 3px slim bar fixed at the top edge of the browser viewport.
 * - Hardware-accelerated scaleX transform from 0 to 1 without React re-renders.
 * - Passive scroll and resize listeners with requestAnimationFrame throttling.
 * - Snaps cleanly to 0 at the top and 1 at the document bottom (accounting for sub-pixel delta).
 * - Handles short pages, dynamic height changes (ResizeObserver), and zero division.
 * - Clean visual hierarchy above sticky header without interfering with clicks or menus.
 */
export default function ScrollProgress() {
  const location = useLocation();
  const barRef = useRef(null);
  const containerRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    const container = containerRef.current;
    if (!bar || !container) return;

    const updateProgress = () => {
      const doc = document.documentElement;
      const scrollHeight = doc.scrollHeight;
      const clientHeight = window.innerHeight || doc.clientHeight;
      const scrollableHeight = scrollHeight - clientHeight;

      // Handle pages with no scrollable overflow (or short pages)
      if (scrollableHeight <= 0) {
        bar.style.transform = 'scaleX(0)';
        container.style.opacity = '0';
        return;
      }

      const currentScroll = Math.max(0, window.scrollY || window.pageYOffset || doc.scrollTop || 0);

      // Snap strictly to 0 at the top and 1 at the bottom (sub-pixel threshold)
      let clampedProgress;
      if (currentScroll <= 1) {
        clampedProgress = 0;
      } else if (currentScroll + clientHeight >= scrollHeight - 3) {
        clampedProgress = 1;
      } else {
        const rawProgress = currentScroll / scrollableHeight;
        clampedProgress = Math.min(Math.max(rawProgress, 0), 1);
      }

      bar.style.transform = `scaleX(${clampedProgress})`;
      container.style.opacity = '1';
    };

    const handleScroll = () => {
      if (rafIdRef.current) return;
      rafIdRef.current = requestAnimationFrame(() => {
        updateProgress();
        rafIdRef.current = null;
      });
    };

    // Calculate immediately on route mount and after DOM paints
    updateProgress();
    const frameId = requestAnimationFrame(updateProgress);
    const timerId = setTimeout(updateProgress, 100);

    // Passive event listeners for scroll & resize
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Handle dynamic DOM changes (e.g. accordion expansions, tab switches)
    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined' && document.body) {
      resizeObserver = new ResizeObserver(() => {
        handleScroll();
      });
      resizeObserver.observe(document.body);
    }

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      cancelAnimationFrame(frameId);
      clearTimeout(timerId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [location.pathname, location.key]);

  return (
    <div
      ref={containerRef}
      className="rrc-scroll-progress"
      aria-hidden="true"
      role="presentation"
    >
      <div ref={barRef} className="rrc-scroll-progress__bar" />
    </div>
  );
}
