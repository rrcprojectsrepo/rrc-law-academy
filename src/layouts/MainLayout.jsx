import { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AIChatWidget from '../components/ai/AIChatWidget';
import WhatsAppFloatingButton from '../components/whatsapp/WhatsAppFloatingButton';
import useScrollReveal from '../hooks/useScrollReveal';

export default function MainLayout() {
  const location = useLocation();
  const mainRef = useRef(null);
  useScrollReveal(mainRef, location.pathname);

  return (
    <div className="rrc-layout">
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

