import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../lib/actions';

const faqs = [
  {
    q: 'As fórmulas manipuladas substituem uma alimentação saudável?',
    a: 'Não. As fórmulas manipuladas são um complemento ao tratamento nutricional, potencializando os resultados quando bem indicadas. Uma alimentação equilibrada e hábitos saudáveis continuam sendo a base fundamental do processo de emagrecimento.',
  },
  {
    q: 'Quanto tempo leva para ver os resultados?',
    a: 'Os primeiros resultados geralmente aparecem nas primeiras semanas, mas cada pessoa é única. O tempo varia de acordo com o metabolismo, adesão ao tratamento e objetivos individuais. O importante é que os resultados sejam sustentáveis e saudáveis.',
  },
  {
    q: 'Preciso fazer exercício físico junto com o tratamento?',
    a: 'A atividade física é altamente recomendada pois potencializa os resultados e traz inúmeros benefícios para a saúde. Porém, o plano nutricional será adaptado à sua realidade e possibilidades. Juntos, vamos encontrar o melhor caminho para você.',
  },
  {
    q: 'O tratamento é indicado para qualquer pessoa?',
    a: 'O tratamento é personalizado e adaptado para cada paciente. Durante a consulta inicial, fazemos uma avaliação completa para entender suas necessidades, histórico de saúde e objetivos. Assim, criamos um plano seguro e eficaz especialmente para você.',
  },
  {
    q: 'Como funciona o acompanhamento?',
    a: 'O acompanhamento é feito através de consultas regulares, que podem ser presenciais ou online. Nelas, avaliamos sua evolução, ajustamos o plano conforme necessário e tiramos todas as suas dúvidas. Você nunca estará sozinha nessa jornada!',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-[#121212]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
            Perguntas <span className="text-[rgb(157,111,88)] font-normal italic">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-400 font-light">Tire suas dúvidas sobre o tratamento</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border transition-all duration-300 bg-[#161616] border-white/5 hover:border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`font-normal text-lg pr-8 transition-colors ${
                      isOpen ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[rgb(157,111,88)] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed">{faq.a}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 mb-6 font-light">Tem outra dúvida que não foi respondida aqui?</p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-3 bg-[rgb(157,111,88)] text-white px-8 py-4 rounded-full hover:bg-[rgb(137,91,68)] transition-all duration-300 font-medium shadow-[0_4px_20px_rgba(157,111,88,0.25)] hover:shadow-[0_4px_30px_rgba(157,111,88,0.4)]"
          >
            <MessageCircle width={20} height={20} />
            Fale Comigo no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
