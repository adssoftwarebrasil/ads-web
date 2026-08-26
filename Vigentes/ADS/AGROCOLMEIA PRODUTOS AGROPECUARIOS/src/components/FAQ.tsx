import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'O que é o PTA (Portfólio Técnico Agrocolméia)?',
      answer:
        'O PTA é nosso programa integrado de soluções técnicas e agronômicas. Reúne tecnologia avançada, análises detalhadas de solo e plantas, recomendações personalizadas e acompanhamento especializado para maximizar a produtividade e rentabilidade de cada hectare. É um portfólio completo de conhecimento aplicado ao campo.',
    },
    {
      question: 'O que é o Plante Conosco?',
      answer:
        'O Plante Conosco é mais do que um programa comercial. É uma parceria estratégica que une tecnologia de ponta e relacionamento próximo. Oferecemos condições especiais, suporte técnico dedicado e acompanhamento em todas as fases do plantio para garantir que sua safra alcance o máximo potencial produtivo.',
    },
    {
      question: 'A Agrocolméia vende defensivos agrícolas?',
      answer:
        'Não, a Agrocolméia não comercializa defensivos agrícolas. Nosso foco está em distribuição de sementes premium (soja, milho, sorgo e brachiaria), biológicos, inoculantes, adjuvantes e especialidades técnicas, além de serviços agronômicos como análises de solo, análises foliares, análises biológicas e consultoria técnica especializada.',
    },
    {
      question: 'Como funciona o atendimento técnico?',
      answer:
        'Nosso atendimento técnico é personalizado e contínuo. Contamos com uma equipe altamente qualificada que acompanha o produtor desde a análise inicial do solo até a colheita, oferecendo recomendações técnicas, suporte agronômico e ajustes de manejo conforme necessário. O relacionamento próximo e o acompanhamento constante fazem parte do nosso diferencial.',
    },
    {
      question: 'A empresa atende quais regiões?',
      answer:
        'A Agrocolméia atua estrategicamente em toda a região da Grande Dourados, Mato Grosso do Sul, oferecendo suporte técnico, distribuição de insumos e serviços agronômicos especializados. Nosso escritório está localizado na Av. Marcelino Pires, 6575, Vila São Francisco, Dourados-MS.',
    },
    {
      question: 'Como faço para solicitar um orçamento?',
      answer:
        'É muito simples! Entre em contato conosco através do WhatsApp (67) 99956-4186 ou (67) 99672-7353, pelo telefone (67) 3428-5034, ou envie um e-mail para contato@agrocolmeia.com.br. Nossa equipe responderá rapidamente com uma proposta personalizada para suas necessidades.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[#fdaf2a] font-bold text-sm uppercase tracking-wider bg-[#fdaf2a]/10 px-4 py-2 rounded-full inline-block mb-4">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12441f] mb-6 leading-tight">
            Suas Dúvidas, Respondidas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A Agrocolméia acredita que informação clara e técnica é o primeiro passo para uma parceria de sucesso. Por isso, reunimos as perguntas mais frequentes sobre nossos serviços, programas e formas de atendimento.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 lg:px-8 py-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    <HelpCircle className="w-6 h-6 text-[#fdaf2a]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-[#12441f] pr-8">{faq.question}</h3>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#12441f]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 lg:px-8 pb-6 animate-fadeIn">
                  <div className="pl-10 pr-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-[#12441f] to-[#1a5f2e] rounded-2xl p-8 lg:p-12 shadow-xl">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Ainda tem dúvidas?</h3>
          <p className="text-white/90 text-lg mb-6">
            Nossa equipe está pronta para ajudar você com qualquer questão sobre nossos serviços e programas.
          </p>
          <a
            href="https://wa.me/5567999564186"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 bg-[#fdaf2a] text-[#12441f] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e89d1e] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <span>Fale Conosco Agora</span>
          </a>
        </div>
      </div>
    </section>
  );
}
