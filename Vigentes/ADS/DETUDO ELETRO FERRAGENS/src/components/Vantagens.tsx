import { Headset, CreditCard, Award, DollarSign, LucideIcon } from 'lucide-react';
import { WHATSAPP_DEFAULT } from '../constants';

interface Vantagem {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const vantagens: Vantagem[] = [
  {
    Icon: Headset,
    title: 'Atendimento Especializado',
    description:
      'Nossa equipe está pronta para oferecer o melhor atendimento personalizado para suas necessidades.',
  },
  {
    Icon: CreditCard,
    title: 'Facilidade de Pagamento',
    description:
      'Aceitamos diversas formas de pagamento para sua comodidade e facilidade.',
  },
  {
    Icon: Award,
    title: 'Qualidade Garantida',
    description: 'Todos os nossos produtos passam por rigorosos testes de qualidade.',
  },
  {
    Icon: DollarSign,
    title: 'Preços Competitivos',
    description: 'Oferecemos o melhor custo-benefício do mercado.',
  },
];

export default function Vantagens() {
  return (
    <section id="vantagens" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(34,34,34)] mb-4">
            VANTAGENS
          </h2>
          <h3 className="text-xl sm:text-2xl text-[rgb(246,239,3)] font-semibold mb-4">
            Vantagens de Comprar Conosco
          </h3>
          <p className="text-base sm:text-lg text-[rgb(34,34,34)]">
            Escolher a Detudo Eletro Ferragens traz diversos benefícios para suas compras.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
          {vantagens.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 opacity-100 translate-x-0"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(246,239,3)] p-3 md:p-4 rounded-full hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                  <Icon
                    size={28}
                    className="text-[rgb(34,34,34)] sm:w-8 sm:h-8"
                  />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[rgb(34,34,34)] mb-2">
                    {title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(246,239,3)] text-[rgb(34,34,34)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
