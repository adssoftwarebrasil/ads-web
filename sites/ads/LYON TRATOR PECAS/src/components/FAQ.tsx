import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Vocês trabalham com todas as marcas de máquinas pesadas?',
      answer: 'Sim! Trabalhamos com peças para Caterpillar, Komatsu, Hyundai, XCMG, Case, Volvo, Doosan, JCB, Shantui, Sany, Cummins, Isuzu e outras marcas líderes do mercado.'
    },
    {
      question: 'Como funciona a entrega das peças?',
      answer: 'Realizamos entregas para todo o estado de Roraima e região Norte do Brasil. O prazo varia conforme a localidade e disponibilidade do produto em estoque. Entre em contato para consultar o prazo para sua região.'
    },
    {
      question: 'As peças têm garantia?',
      answer: 'Sim, todas as nossas peças possuem garantia conforme especificação do fabricante. Trabalhamos apenas com fornecedores certificados e peças de qualidade comprovada.'
    },
    {
      question: 'Atendem todo o Brasil?',
      answer: 'Nossa atuação principal é no Norte do Brasil, com unidades em Roraima e Pará. Para outras regiões, consulte-nos para verificar a possibilidade de atendimento.'
    },
    {
      question: 'Fazem orçamento sem compromisso?',
      answer: 'Sim! Você pode solicitar orçamento sem qualquer compromisso. Nossa equipe está pronta para atender e fornecer as melhores condições para sua necessidade.'
    },
    {
      question: 'Qual o prazo de entrega?',
      answer: 'O prazo varia conforme o produto e sua localização. Para peças em estoque em Boa Vista, a entrega pode ser no mesmo dia. Para outras regiões, consultamos o prazo no momento do orçamento.'
    },
    {
      question: 'Vocês oferecem suporte técnico?',
      answer: 'Sim! Nossa equipe possui conhecimento técnico para orientar sobre a escolha da peça correta para seu equipamento e fornecer informações sobre instalação.'
    },
    {
      question: 'Quais são as formas de pagamento?',
      answer: 'Aceitamos diversas formas de pagamento. Entre em contato com nossa equipe para conhecer todas as opções disponíveis e escolher a que melhor se adequa às suas necessidades.'
    }
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a18] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-lg">
            Tire suas dúvidas sobre nossos produtos e serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#1a1a18] pr-4">{faq.question}</span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fbba00] flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus size={16} className="text-[#1a1a18]" />
                  ) : (
                    <Plus size={16} className="text-[#1a1a18]" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
