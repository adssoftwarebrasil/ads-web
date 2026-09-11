import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Quais tipos de espumas vocês trabalham?',
    answer:
      'Trabalhamos com ampla variedade de espumas premium: D18, D23, D28, D33, D45 e espumas especiais para diferentes aplicações. Todas com certificação de qualidade e disponíveis com corte sob medida.',
  },
  {
    question: 'Como funciona o corte sob medida?',
    answer:
      'Você nos informa as medidas exatas que precisa (comprimento, largura, altura) e a densidade desejada. Nosso maquinário de ponta corta com precisão milimétrica, entregando a peça pronta para aplicação no seu projeto.',
  },
  {
    question: 'Qual o prazo de entrega?',
    answer:
      'Para espumas em estoque com corte sob medida, o prazo é de 24 a 48 horas. Para projetos especiais ou grandes volumes, consulte-nos para um prazo personalizado.',
  },
  {
    question: 'Atendem em outras cidades além de Uberlândia?',
    answer:
      'Sim! Atendemos Uberlândia, Uberaba e Araguari. Para outras regiões, entre em contato para verificarmos a possibilidade de entrega.',
  },
  {
    question: 'Fazem reforma de colchões antigos?',
    answer:
      'Sim, somos especializados em reforma de colchões! Avaliamos seu colchão, substituímos as espumas internas por materiais novos e certificados, e devolvemos como novo. Sustentável e econômico.',
  },
  {
    question: 'Como solicitar um orçamento?',
    answer:
      'Você pode solicitar orçamento pelo WhatsApp (34) 99142-1598, ligação para (34) 3225-7936, ou visitando nossa loja na Av. João Pessoa nº 825, Bairro Martins, Uberlândia-MG.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="animate-slideUp delay-800">
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    className="w-full p-6 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="text-lg font-semibold text-gray-900 flex-1 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`lucide lucide-chevron-down text-[#00218b] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      width={24}
                      height={24}
                    />
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
