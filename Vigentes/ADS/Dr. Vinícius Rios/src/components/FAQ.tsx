import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Toda Hérnia de Disco é cirúrgica?',
    answer:
      'Não! A maioria das hérnias de disco tem tratamento conservador, sem necessidade de cirurgia. Utilizamos medicamentos para alívio da dor, fisioterapia, pilates, acupuntura e infiltrações. A cirurgia é indicada apenas quando o tratamento conservador não traz resultados satisfatórios.',
  },
  {
    question: 'Como sei que minha Hérnia de Disco é cirúrgica?',
    answer:
      'Existem três principais indicações cirúrgicas: 1) Dor intratável que requer internação hospitalar e uso de analgésicos potentes intravenosos; 2) Déficit neurológico, como perda de força ou sensibilidade em membros superiores ou inferiores; 3) Dor persistente entre 4-6 meses sem melhora com tratamento clínico adequado.',
  },
  {
    question: 'Eu tenho Escoliose, é caso cirúrgico?',
    answer:
      'Geralmente indicamos cirurgia para escoliose acima de 40-45 graus. Abaixo disso, o tratamento conservador com fisioterapia, RPG, coletes e exercícios como natação pode evitar a necessidade de cirurgia.',
  },
  {
    question: 'Tenho dor na Coluna, quando devo me preocupar?',
    answer:
      'Procure atendimento médico se apresentar: dor que não melhora com analgésicos simples, dor noturna, dor acompanhada de febre, perda de sensibilidade nas mãos, pernas ou pés, histórico de câncer (pessoal ou familiar), ou se está nos extremos de idade (menores de 18 ou maiores de 70 anos).',
  },
  {
    question: 'Cirurgia de Coluna é muito arriscada?',
    answer:
      'A cirurgia de coluna evoluiu significativamente nos últimos anos, oferecendo segurança satisfatória. Minimizamos riscos realizando procedimentos em hospitais especializados com UTI, fazendo avaliação pré-operatória completa com cardiologista e exames de sangue.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre tratamentos e cirurgias de coluna
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-b border-gray-200 bg-white hover:bg-gray-50 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-4 px-6 flex justify-between items-center text-left"
                >
                  <span className="font-semibold text-lg text-black pr-4">{faq.question}</span>
                  <ChevronDown
                    size={24}
                    className={`text-[#2563eb] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
