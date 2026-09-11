import { ArrowRight, Phone } from 'lucide-react';
import WhatsAppIcon, { openWhatsApp } from './WhatsAppIcon';

interface Perk {
  emoji: string;
  title: string;
  subtitle: string;
}

const perks: Perk[] = [
  { emoji: '⚡', title: 'Resposta Rápida', subtitle: 'Atendimento ágil' },
  { emoji: '💰', title: 'Orçamento Grátis', subtitle: 'Sem compromisso' },
  {
    emoji: '🎯',
    title: 'Atendimento Personalizado',
    subtitle: 'Focado em você',
  },
];

export default function CTA() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[rgb(238,115,62)] to-orange-600">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <div className="transition-all duration-1000 transform opacity-100 translate-y-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Pronto para iniciar
            <br />
            seu projeto?
          </h2>
          <p
            className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-10 max-w-2xl mx-auto transition-all duration-1000 transform opacity-100 translate-y-0"
            style={{ transitionDelay: '200ms' }}
          >
            Entre em contato e receba seu orçamento personalizado
          </p>
          <button
            onClick={openWhatsApp}
            className="group bg-white text-[rgb(238,115,62)] px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 flex items-center gap-3 mx-auto animate-pulse hover:animate-none opacity-100 translate-y-0"
            style={{ transitionDelay: '400ms' }}
          >
            <WhatsAppIcon width={28} height={28} />
            Falar no WhatsApp
            <ArrowRight
              width={24}
              height={24}
              strokeWidth={2}
              className="lucide lucide-arrow-right group-hover:translate-x-2 transition-transform duration-300"
            />
          </button>
          <div
            className="mt-8 flex items-center justify-center gap-2 text-white transition-all duration-1000 transform opacity-100 translate-y-0"
            style={{ transitionDelay: '600ms' }}
          >
            <Phone
              width={20}
              height={20}
              strokeWidth={2}
              className="lucide lucide-phone sm:w-6 sm:h-6"
            />
            <a
              href="tel:+5561965935529"
              className="text-xl sm:text-2xl font-bold hover:underline hover:scale-105 transition-transform duration-300"
            >
              (61) 96593-5529
            </a>
          </div>
          <div
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white transition-all duration-1000 transform opacity-100 translate-y-0"
            style={{ transitionDelay: '800ms' }}
          >
            {perks.map(({ emoji, title, subtitle }) => (
              <div
                key={title}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl font-bold mb-1">{emoji}</div>
                <div className="font-semibold">{title}</div>
                <div className="text-sm text-white text-opacity-90">
                  {subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
