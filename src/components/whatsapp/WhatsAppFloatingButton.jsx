import {
  createRrcWhatsAppUrl,
  DIRECT_WHATSAPP_MESSAGE,
  isRrcWhatsAppConfigured,
} from '../../config/whatsapp';
import './WhatsAppFloatingButton.css';

export default function WhatsAppFloatingButton() {
  const whatsappUrl = createRrcWhatsAppUrl(DIRECT_WHATSAPP_MESSAGE);

  if (!isRrcWhatsAppConfigured || !whatsappUrl) return null;

  const openWhatsApp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      className="rrc-whatsapp-float"
      aria-label="Chat with RRC Law Academy on WhatsApp"
      data-tooltip="Chat with us on WhatsApp"
      onClick={openWhatsApp}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M16 3.2a12.2 12.2 0 0 0-10.4 18.6L4 28l6.4-1.7A12.2 12.2 0 1 0 16 3.2Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M12.1 10.1c-.3-.7-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.6-.4.4-1.5 1.5-1.5 3.6s1.5 4.1 1.7 4.4c.2.3 2.9 4.6 7.1 6.2 3.5 1.4 4.2 1.1 5 .9.8-.1 2.5-1 2.8-2 .3-1 .3-1.8.2-2-.1-.2-.4-.3-.9-.5s-2.5-1.2-2.9-1.3c-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.7-.8.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8l-1.7-2.9Z" />
      </svg>
    </button>
  );
}
