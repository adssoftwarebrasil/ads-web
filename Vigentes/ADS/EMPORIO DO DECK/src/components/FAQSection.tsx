import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Quais tipos de madeira vocês trabalham?',
    answer: 'Trabalhamos com diversas madeiras nobres como Cumaru, Ipê, Garapeira, Jatobá, entre outras, sempre selecionadas para garantir durabilidade e beleza.',
  },
  {
    question: 'Fazem entrega? Qual a área de cobertura?',
    answer: 'Sim, fazemos entregas agilizadas em toda a região. Entre em contato para verificar disponibilidade para sua localidade.',
  },
  {
    question: 'Quanto tempo demora para receber o orçamento?',
    answer: 'Respondemos todas as solicitações em até 24 horas úteis com orçamento detalhado e sem compromisso.',
  },
  {
    question: 'As madeiras vêm tratadas?',
    answer: 'Sim, todas as madeiras para áreas externas recebem tratamento adequado contra umidade, cupins e intempéries.',
  },
  {
    question: 'Vocês fazem instalação?',
    answer: 'Podemos indicar profissionais especializados e de confiança para instalação dos produtos.',
  },
  {
    question: 'Qual o prazo de entrega?',
    answer: 'Os prazos variam conforme disponibilidade e quantidade. Trabalhamos com entregas ágeis, geralmente entre 3 a 7 dias úteis.',
  },
  {
    question: 'Posso visitar a loja para ver os produtos?',
    answer: 'Sim! Estamos abertos de segunda a sexta das 7:40 às 17:40 e sábados das 8:00 às 12:00.',
  },
  {
    question: 'Fazem projetos sob medida?',
    answer: 'Sim, trabalhamos com medidas personalizadas para atender perfeitamente seu projeto.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-offWhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">Tire suas dúvidas sobre nossos produtos e serviços</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-header"
              >
                <span className="text-lg font-semibold text-primary">{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`faq-icon ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`faq-content ${openIndex === index ? 'open' : ''}`}
              >
                <p className="text-primaryMedium leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
