import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Vocês fazem entregas?',
    answer: 'Sim! Consulte nossa equipe para saber sobre prazos e regiões atendidas.',
  },
  { question: 'A DobrAço atende apenas empresas?', answer: '' },
  { question: 'Quais tipos de produtos são vendidos?', answer: '' },
  { question: 'Posso solicitar projetos sob medida?', answer: '' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">Para Profissionais e Clientes</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-[rgb(139,0,2)] transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-black pr-4">{faq.question}</h3>
                  {isOpen ? (
                    <ChevronUp
                      width={24}
                      height={24}
                      className="text-[rgb(139,0,2)] flex-shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      width={24}
                      height={24}
                      className="text-gray-400 flex-shrink-0"
                    />
                  )}
                </button>
                {isOpen && faq.answer && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
