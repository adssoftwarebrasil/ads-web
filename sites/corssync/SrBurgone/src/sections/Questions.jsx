import { Plus } from 'lucide-react';
import { questions } from '../data/site';

export default function Questions() {
  return (
    <section className="questions section-space" aria-labelledby="questions-title">
      <div className="container questions__grid">
        <div>
          <p className="eyebrow">ANTES DE PEDIR</p>
          <h2 id="questions-title">
            FICOU ALGUMA
            <br />
            <span className="text-red">DÚVIDA?</span>
          </h2>
        </div>
        <div className="accordion">
          {questions.map((item, index) => (
            <details key={item.question} name="burgone-faq">
              <summary>
                {item.question}
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p id={`answer-${index}`}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
