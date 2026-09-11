import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: 'Quem vai realizar a negociação do meu contrato?',
    a: 'Nossa equipe jurídica especializada realiza toda a negociação diretamente com as financeiras, representando você em cada etapa do processo.',
  },
  {
    q: 'O que é preciso para começar a análise do meu contrato?',
    a: 'Basta enviar uma cópia do seu contrato de financiamento. A análise inicial é 100% gratuita e sem compromisso.',
  },
  {
    q: 'O banco não para de me cobrar. Posso atender e negociar com o banco diretamente?',
    a: 'A partir do momento em que você é representado por nós, todas as tratativas passam a ser conduzidas pela nossa equipe. Recomendamos que qualquer contato do banco seja encaminhado para nós.',
  },
  {
    q: 'Vou depositar as parcelas para o banco ou para a empresa?',
    a: 'Durante a negociação orientamos exatamente para onde e como os valores devem ser direcionados, sempre de forma segura e transparente.',
  },
  {
    q: 'Em quanto tempo meu contrato será resolvido?',
    a: 'O prazo varia conforme cada caso e a resposta das financeiras, mas trabalhamos para resolver seu contrato no menor tempo possível.',
  },
  {
    q: 'E caso o meu veículo sofra mandado de busca e apreensão?',
    a: 'Nossa equipe jurídica atua para proteger seus direitos e evitar a busca e apreensão do seu veículo durante todo o processo.',
  },
  {
    q: 'Qual a garantia de que meu contrato será resolvido?',
    a: 'Atuamos de forma técnica e transparente, e você acompanha cada etapa do processo pelo nosso portal exclusivo do cliente.',
  },
  {
    q: 'Como saberei que meu contrato foi resolvido?',
    a: 'Você recebe toda a documentação e comprovantes da quitação, além de poder acompanhar o status em tempo real pelo portal do cliente.',
  },
  {
    q: 'Vou conseguir financiamentos após meu contrato ser resolvido?',
    a: 'Sim. Com o seu nome regularizado e a dívida quitada, você volta a ter acesso a novos financiamentos e crédito.',
  },
];

const WA_DUVIDA =
  'https://wa.me/556185009000?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20meu%20financiamento.';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="duvidas" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B2447]/8 border border-[#0B2447]/20 rounded-full text-[#0B2447] text-sm font-semibold mb-4">
            <HelpCircle className="lucide lucide-help-circle text-amber-500" width={14} height={14} />
            Perguntas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2447] mb-4">
            Dúvidas <span className="text-amber-500">Frequentes</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Listamos as perguntas mais comuns dos nossos clientes. Caso ainda tenha dúvidas, entre em
            contato conosco!
          </p>
        </div>
        <div className="space-y-3 md:space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm ${
                  isOpen ? 'border-amber-300' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        isOpen ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <span
                      className={`font-semibold text-sm md:text-base transition-colors ${
                        isOpen ? 'text-[#0B2447]' : 'text-slate-800'
                      }`}
                    >
                      {item.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`lucide lucide-chevron-down flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    width={20}
                    height={20}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pl-16 md:pl-[4.5rem] text-slate-600 text-sm md:text-base leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-10 md:mt-12 bg-[#0B2447] rounded-3xl p-8 md:p-10 text-center">
          <p className="text-white font-bold text-xl md:text-2xl mb-3">Ainda tem dúvidas?</p>
          <p className="text-slate-300 mb-6">
            Fale diretamente com nossa equipe pelo WhatsApp. Respondemos o mais breve possível!
          </p>
          <a
            href={WA_DUVIDA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold text-base md:text-lg rounded-2xl shadow-xl shadow-amber-500/30 transition-all hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
