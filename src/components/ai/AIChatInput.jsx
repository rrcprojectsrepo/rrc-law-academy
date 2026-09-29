import { Send } from 'lucide-react';

export default function AIChatInput({ value, onChange, onSubmit, disabled, inputRef }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault();
      onSubmit(event);
    }
  };

  return (
    <form className="rrc-ai-chat__composer" onSubmit={onSubmit}>
      <label className="rrc-ai-chat__sr-only" htmlFor="rrc-ai-chat-input">Ask RRC Law Academy Assistant</label>
      <textarea
        id="rrc-ai-chat-input"
        ref={inputRef}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about courses, programs, or preparation..."
        rows={1}
        maxLength={1000}
        autoComplete="off"
        disabled={disabled}
      />
      <button type="submit" aria-label="Send message" disabled={disabled || !value.trim()}>
        <Send size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
