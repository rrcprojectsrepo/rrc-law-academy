import { useState } from 'react';
import RrcIcon from './RrcIcon';

import './FAQAccordion.css';

// Accessible accordion: <button aria-expanded> + region, keyboard native.
// items: [{ id, question, answer }]. allowMultiple: single-open by default.
export default function FAQAccordion({ items = [], allowMultiple = false }) {
  const [openIds, setOpenIds] = useState([]);

  const toggle = (id) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) return prev.filter((openId) => openId !== id);
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  if (items.length === 0) return null;

  return (
    <div className="rrc-faq">
      {items.map((item) => {
        const open = openIds.includes(item.id);
        return (
          <div key={item.id} className={`rrc-faq__item${open ? ' is-open' : ''}`}>
            <h3 className="rrc-faq__heading">
              <button
                type="button"
                className="rrc-faq__button"
                aria-expanded={open}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-button-${item.id}`}
                onClick={() => toggle(item.id)}
              >
                <span>{item.question}</span>
                <span className="rrc-faq__icon" aria-hidden="true">
                  <RrcIcon name={open ? 'update' : 'description'} size={18} />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-button-${item.id}`}
              className="rrc-faq__panel"
              aria-hidden={!open}
            >
              <div className="rrc-faq__panel-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

