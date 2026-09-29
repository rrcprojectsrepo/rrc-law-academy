import { Link } from 'react-router-dom';

export default function AIChatMessage({ message }) {
  const messageClass = 'rrc-ai-chat__message rrc-ai-chat__message--' + message.role;
  return (
    <article className={messageClass}>
      {message.role === 'assistant' && <span className="rrc-ai-chat__message-label">RRC Assistant</span>}
      <p>{message.text}</p>
      {message.links?.length > 0 && (
        <div className="rrc-ai-chat__message-links">
          {message.links.map((link) => <Link key={link.to + '-' + link.label} to={link.to}>{link.label}</Link>)}
        </div>
      )}
    </article>
  );
}
