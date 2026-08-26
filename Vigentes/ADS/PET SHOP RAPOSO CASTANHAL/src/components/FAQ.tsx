import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Quais são os horários de atendimento?',
    a: 'Atendemos de segunda a sábado das 08h às 20h, e aos domingos das 08h às 12h. Estamos sempre prontos para cuidar do seu pet!',
  },
  {
    q: 'É necessário agendar consulta veterinária?',
    a: 'Recomendamos o agendamento para garantir um atendimento mais rápido. Entre em contato pelo WhatsApp (91) 98522-0505 para marcar sua consulta.',
  },
  {
    q: 'Vocês trabalham com quais marcas de ração?',
    a: 'Trabalhamos com as melhores marcas Premium e Super Premium do mercado. Somos pioneiros em trazer produtos de alta qualidade para Castanhal, evitando que você precise se deslocar até a capital.',
  },
  {
    q: 'Vocês fazem delivery?',
    a: 'Entre em contato conosco pelo WhatsApp para consultar disponibilidade de entrega na sua região. Estamos sempre buscando facilitar o acesso aos nossos produtos e serviços.',
  },
  {
    q: 'Quais formas de pagamento são aceitas?',
    a: 'Aceitamos diversas formas de pagamento: dinheiro, cartão de débito, cartão de crédito e PIX. Entre em contato para mais informações.',
  },
  {
    q: 'Vocês atendem animais de grande porte?',
    a: 'Sim! Atendemos pets de todos os tamanhos. Nossa infraestrutura foi projetada para garantir segurança e conforto para todos os animais.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-lg text-gray-900 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-[rgb(253,118,22)] transition-transform duration-300 transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Não encontrou sua resposta?</p>
          <a
            href="https://wa.me/5591985220505"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(253,118,22)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[rgb(233,98,2)] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
