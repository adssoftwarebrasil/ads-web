import { MapPin, Clock, Navigation } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface InfoCard {
  icon: LucideIcon;
  label: string;
  title: string;
  sub: string;
}

const cards: InfoCard[] = [
  {
    icon: MapPin,
    label: 'Endereço',
    title: 'R. Otávio Pereira Lima, 1042',
    sub: 'Res. Delta, Sinop-MT, 78555-160',
  },
  {
    icon: Clock,
    label: 'Horário de Funcionamento',
    title: 'Todos os dias',
    sub: 'Das 7:00h às 22:00h',
  },
  {
    icon: Navigation,
    label: 'Área de Cobertura',
    title: 'Toda Sinop-MT',
    sub: 'Entrega em qualquer bairro',
  },
];

export default function Location() {
  return (
    <section className="py-20 md:py-28 bg-brand-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 section-observe">
          <p className="section-subtitle">Localização</p>
          <h2 className="section-title mb-4">
            Fácil de encontrar,
            <br />
            <span className="text-brand-secondary">perto de você</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Localizada no Residencial Delta, próxima à Av. André Maggi e à Faculdade FASIPE. Venha
            nos visitar ou faça seu pedido pelo WhatsApp.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8 section-observe">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100"
              >
                <div className="bg-brand-light/15 text-brand-secondary p-2.5 rounded-xl flex-shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    {card.label}
                  </p>
                  <p className="text-brand-dark font-semibold text-sm">{card.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{card.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="section-observe rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-80 md:h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.890110915562!2d-55.52532232494212!3d-11.842965188378205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe958b076ed105%3A0xc548d2ce0594df51!2sDELTA%20G%C3%81S!5e0!3m2!1spt-BR!2sbr!4v1771856875873!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Delta Gás no Google Maps"
            style={{ border: '0px' }}
          ></iframe>
        </div>
        <div className="mt-6 text-center section-observe">
          <a
            href="https://maps.google.com/?q=DELTA+GÁS+Sinop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-dark font-medium text-sm transition-colors"
          >
            <Navigation size={16} />
            Abrir no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
