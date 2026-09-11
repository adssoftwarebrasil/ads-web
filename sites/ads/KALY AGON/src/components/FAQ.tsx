import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quais tipos de uniformes vocês produzem?',
      answer: 'Produzimos uniformes em geral, camisas sociais, polos, camisetes femininas, jalecos, calças jeans e de brim, além de modelos personalizados conforme a necessidade da sua empresa.',
    },
    {
      question: 'Posso personalizar os uniformes com a logo da minha empresa?',
      answer: 'Sim! Oferecemos bordado e silk screen para aplicação da sua marca, garantindo identidade visual e profissionalismo.',
    },
    {
      question: 'Qual é o pedido mínimo?',
      answer: 'O pedido mínimo varia conforme o tipo de peça e a personalização desejada. Entre em contato para avaliarmos juntos a melhor solução para sua empresa.',
    },
    {
      question: 'Vocês fazem uniformes sob medida?',
      answer: 'Trabalhamos com tamanhos padronizados e também com ajustes específicos para atender ao perfil da sua equipe, garantindo conforto e caimento adequado.',
    },
    {
      question: 'Qual o prazo de entrega?',
      answer: 'O prazo depende da quantidade de peças e do tipo de personalização escolhida. Normalmente, os prazos variam entre 20 a 40 dias após a aprovação do pedido.',
    },
    {
      question: 'Quais tecidos são utilizados?',
      answer: 'Utilizamos tecidos de alta qualidade como brim, oxford, poliéster, algodão e jeans, sempre priorizando resistência, conforto e durabilidade.',
    },
    {
      question: 'Vocês atendem empresas de quais segmentos?',
      answer: 'Atendemos diversos setores: corporativo, industrial, hospitalar, eventos, segurança, logística e muito mais.',
    },
    {
      question: 'Há garantia nos uniformes?',
      answer: 'Sim. Garantimos a qualidade de costura, tecido e personalização. Caso identifique algum defeito de fabricação, realizamos a troca conforme nossa política de garantia.',
    },
    {
      question: 'Como faço um orçamento?',
      answer: 'Basta entrar em contato informando a quantidade de peças, o tipo de uniforme e a personalização desejada. Nossa equipe retornará rapidamente com um orçamento detalhado.',
    },
  ];

  return (
    <section id="faq" className="relative bg-gradient-to-br from-white via-[#f8f8f8] to-[#DCDCDC] py-16 lg:py-24 overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#D7B46A] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#012E60] opacity-5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D7B46A] to-[#c19e56] rounded-2xl mb-6 shadow-lg">
            <HelpCircle size={32} className="text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E60] mb-4">
            Perguntas Frequentes
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos uniformes e serviços
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
                openIndex === index ? 'border-[#D7B46A]' : 'border-transparent'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-start gap-4 p-6 text-left hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-br from-[#D7B46A] to-[#c19e56] shadow-md' 
                      : 'bg-gray-100 group-hover:bg-gray-200'
                  }`}>
                    <span className={`text-sm font-bold ${
                      openIndex === index ? 'text-white' : 'text-[#012E60]'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <span className={`font-semibold text-base sm:text-lg transition-colors duration-300 ${
                    openIndex === index ? 'text-[#D7B46A]' : 'text-[#012E60]'
                  }`}>
                    {faq.question}
                  </span>
                </div>

                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-[#D7B46A]/10 rotate-180' 
                    : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <ChevronDown
                    size={20}
                    className={`transition-colors duration-300 ${
                      openIndex === index ? 'text-[#D7B46A]' : 'text-[#012E60]'
                    }`}
                  />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-12 pr-12">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D7B46A]/30 to-transparent mb-4" />
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#012E60] to-[#024080] rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-3">
            Ainda tem dúvidas?
          </h3>
          <p className="text-white/90 mb-6">
            Nossa equipe está pronta para ajudar você
          </p>
          <button
            onClick={() => window.open('https://wa.me/5561996122686?text=Olá!%20Tenho%20algumas%20dúvidas%20sobre%20os%20uniformes.', '_blank')}
            className="inline-flex items-center gap-2 bg-[#D7B46A] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#c19e56] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;