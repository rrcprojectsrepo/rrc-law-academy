import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './PageProgress.css';

// Centralized top page-loading progress indicator.
// Triggers on internal route changes (pathname changes).
// Uses CSS animation entirely — avoids Framer Motion WAAPI conflicts with
// the global prefers-reduced-motion rule in design-system.css.
export default function PageProgress() {
  const location = useLocation();
  const barRef = useRef(null);
  const timersRef = useRef([]);

  useEffect(() => {
    // Cancel any in-flight timers from a previous navigation
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    const bar = barRef.current;
    if (!bar) return;

    // Reset to start state instantly (no transition)
    bar.classList.remove('rrc-page-progress--completing', 'rrc-page-progress--done');
    bar.classList.add('rrc-page-progress--active');

    // After 600ms in the "loading" state, snap to 100% and begin fade-out
    const finishTimer = setTimeout(() => {
      bar.classList.add('rrc-page-progress--completing');
    }, 600);

    // After fade-out completes, remove from visual flow entirely
    const doneTimer = setTimeout(() => {
      bar.classList.remove('rrc-page-progress--active', 'rrc-page-progress--completing');
      bar.classList.add('rrc-page-progress--done');
    }, 1050);

    timersRef.current = [finishTimer, doneTimer];

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [location.pathname]);

  return (
    <div
      ref={barRef}
      className="rrc-page-progress"
      aria-hidden="true"
    />
  );
}
