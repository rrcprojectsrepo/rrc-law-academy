import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { assistantSuggestions } from '../../data/ai/rrcKnowledge';
import { getAssistantResponse } from '../../services/aiAssistantService';
import AIChatHeader from './AIChatHeader';
import AIChatInput from './AIChatInput';
import AIChatMessage from './AIChatMessage';
import AIChatSuggestions from './AIChatSuggestions';
import './AIChatWidget.css';

const WELCOME_MESSAGES = [
  {
    role: 'assistant',
    text: 'Hello! I’m the RRC Law Academy Assistant. I can help you explore our courses, preparation programs, study resources, career information, and registration process.\n\nChoose a question below or type your own question.',
  },
];

let messageSequence = 0;
function withId(message) {
  messageSequence += 1;
  return { ...message, id: 'rrc-ai-' + messageSequence };
}

function initialMessages() {
  return WELCOME_MESSAGES.map(withId);
}

export default function AIChatWidget({ initiallyOpen = false }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);
  const welcomeOnly = messages.length === 1 && messages[0].role === 'assistant';

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        launcherRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const closePanel = () => {
    setIsOpen(false);
    launcherRef.current?.focus();
  };

  const clearChat = () => {
    setMessages(initialMessages());
    setInput('');
  };

  const submitMessage = async (eventOrQuestion) => {
    if (isLoading) return;
    const message = typeof eventOrQuestion === 'string' ? eventOrQuestion.trim() : input.trim();
    if (!message) return;
    if (typeof eventOrQuestion !== 'string') eventOrQuestion.preventDefault();
    setMessages((current) => [...current, withId({ role: 'user', text: message })]);
    setInput('');
    setIsLoading(true);
    try {
      const response = await getAssistantResponse(message, { currentPath: window.location.pathname });
      setMessages((current) => [...current, withId({ role: 'assistant', ...response })]);
    } catch {
      setMessages((current) => [...current, withId({
        role: 'assistant',
        text: "I couldn't process that question right now. Please try again or use the Contact or Registration page.",
        links: [
          { label: 'Contact', to: '/contact' },
          { label: 'Registration', to: '/registration' },
        ],
      })]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rrc-ai-widget">
      <section className={`rrc-ai-chat${isOpen ? ' is-open' : ''}`} role="dialog" aria-labelledby="rrc-ai-chat-title" aria-describedby="rrc-ai-chat-subtitle" id="rrc-ai-chat-panel" aria-hidden={!isOpen} inert={!isOpen}>
        <AIChatHeader onClose={closePanel} onClear={clearChat} />
        <div className="rrc-ai-chat__body">
          <div className="rrc-ai-chat__messages" aria-live="polite" aria-relevant="additions" aria-label="Chat messages">
            {messages.map((message) => <AIChatMessage key={message.id} message={message} />)}
            {isLoading && <p className="rrc-ai-chat__thinking" role="status">Thinking<span aria-hidden="true">…</span></p>}
          </div>
          {welcomeOnly && <AIChatSuggestions items={assistantSuggestions} onSelect={submitMessage} />}
        </div>
        <AIChatInput inputRef={inputRef} value={input} onChange={setInput} onSubmit={submitMessage} disabled={isLoading} />
      </section>
      <button
        ref={launcherRef}
        type="button"
        className={'rrc-ai-launcher' + (isOpen ? ' is-open' : '')}
        aria-label={isOpen ? 'Close RRC Law Academy AI Assistant' : 'Open RRC Law Academy AI Assistant'}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-controls="rrc-ai-chat-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <MessageCircle size={22} aria-hidden="true" />}
        <span>{isOpen ? 'Close assistant' : 'Ask RRC Assistant'}</span>
      </button>
    </div>
  );
}
