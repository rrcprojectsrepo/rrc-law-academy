export default function AIChatSuggestions({ items, onSelect }) {
  return (
    <div className="rrc-ai-chat__suggestions" aria-label="Suggested questions">
      {items.map((question) => (
        <button type="button" key={question} onClick={() => onSelect(question)}>{question}</button>
      ))}
    </div>
  );
}
