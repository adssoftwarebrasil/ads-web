import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface Pergunta {
  numero: string;
  pergunta: string;
  resposta: string;
}

const perguntas: Pergunta[] = [
  {
    numero: '01',
    pergunta: 'Vocês entregam fora de Luzimangues?',
    resposta:
      'Sim! Entregamos em Palmas, Paraíso do Tocantins e Porto Nacional. Entre em contato para verificar prazo e frete para seu endereço.',
  },
  {
    numero: '02',
    pergunta: 'Como solicitar um orçamento?',
    resposta:
      'É simples: fale com a gente pelo WhatsApp ou preencha o formulário desta página informando o produto, as medidas e a quantidade que precisa. Retornamos com o orçamento detalhado o mais rápido possível.',
  },
  {
    numero: '03',
    pergunta: 'Vocês trabalham com venda para pessoa física?',
    resposta:
      'Sim. Atendemos construtoras, serralheiros e calheiros, mas também vendemos para clientes finais e pessoa física. Fale com a nossa equipe e faça o seu pedido.',
  },
  {
    numero: '04',
    pergunta: 'Qual o prazo de entrega?',
    resposta:
      'O prazo depende do produto e da cidade de entrega. Após a confirmação do pedido informamos o prazo exato — normalmente entregamos com agilidade em Luzimangues, Palmas, Paraíso e Porto Nacional.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
            Tire suas dúvidas antes de falar com a gente.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {perguntas.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.numero}
                className={
                  isOpen
                    ? 'rounded-2xl border transition-all duration-200 overflow-hidden bg-white border-accent/30 shadow-md shadow-accent/5'
                    : 'rounded-2xl border transition-all duration-200 overflow-hidden bg-white border-gray-200 hover:border-gray-300'
                }
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    <span className="w-7 h-7 rounded-lg bg-accent/10 text-accent text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {item.numero}
                    </span>
                    <span className="font-semibold text-primary text-sm md:text-base leading-snug">
                      {item.pergunta}
                    </span>
                  </div>
                  <span
                    className={
                      isOpen
                        ? 'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors bg-accent text-white'
                        : 'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors bg-gray-100 text-gray-500'
                    }
                  >
                    {isOpen ? (
                      <Minus width={15} height={15} aria-hidden="true" />
                    ) : (
                      <Plus width={15} height={15} aria-hidden="true" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pl-[4.25rem] text-secondary text-sm leading-relaxed">
                    {item.resposta}
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
