import { useLayoutEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AIChatWidget from '../components/ai/AIChatWidget';
import WhatsAppFloatingButton from '../components/whatsapp/WhatsAppFloatingButton';
import PageProgress from '../components/PageProgress';
import useScrollReveal from '../hooks/useScrollReveal';

export default function MainLayout() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const mainRef = useRef(null);
  const scrollPositions = useRef(new Map());
  const previousLocationKey = useRef(location.key);

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const saveScrollPosition = () => {
      scrollPositions.current.set(previousLocationKey.current, window.scrollY);
    };
    window.addEventListener('scroll', saveScrollPosition, { passive: true });
    return () => window.removeEventListener('scroll', saveScrollPosition);
  }, []);

  useLayoutEffect(() => {
    const previousKey = previousLocationKey.current;
    if (previousKey === location.key) return;

    if (!scrollPositions.current.has(previousKey)) {
      scrollPositions.current.set(previousKey, window.scrollY);
    }
    previousLocationKey.current = location.key;

    if (navigationType === 'POP') {
      const savedPosition = scrollPositions.current.get(location.key);
      if (savedPosition !== undefined) {
        window.scrollTo({ top: savedPosition, left: 0, behavior: 'instant' });
      } else if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
      return;
    }

    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.key, navigationType]);

  useScrollReveal(mainRef, location.pathname);

  return (
    <div className="rrc-layout">
      <PageProgress />
      <a className="rrc-skip-link" href="#rrc-main-content">
        Skip to main content
      </a>
      <Header />
      <main key={location.pathname} ref={mainRef} id="rrc-main-content" className="rrc-main">
        <Outlet />
      </main>
      <WhatsAppFloatingButton />
      <AIChatWidget />
      <Footer />
    </div>
  );
}

