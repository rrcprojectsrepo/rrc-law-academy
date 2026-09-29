import { MessageCircle, RotateCcw, X } from 'lucide-react';

export default function AIChatHeader({ onClose, onClear }) {
  return (
    <header className="rrc-ai-chat__header">
      <span className="rrc-ai-chat__header-icon" aria-hidden="true"><MessageCircle size={21} /></span>
      <div className="rrc-ai-chat__heading">
        <h2 id="rrc-ai-chat-title">RRC Law Academy Assistant</h2>
        <p id="rrc-ai-chat-subtitle">Ask about courses, programs, preparation, or registration.</p>
      </div>
      <div className="rrc-ai-chat__header-actions">
        <button type="button" className="rrc-ai-chat__icon-button" onClick={onClear} aria-label="Clear chat" title="Clear chat">
          <RotateCcw size={18} />
        </button>
        <button type="button" className="rrc-ai-chat__icon-button" onClick={onClose} aria-label="Close assistant" title="Close assistant">
          <X size={20} />
        </button>
      </div>
    </header>
  );
}
