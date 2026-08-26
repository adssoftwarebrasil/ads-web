import type { ComponentType } from 'react';
import { Truck, Shield, Zap, MapPin, Wrench, Clock } from 'lucide-react';
import { ArrowRightGlyph, UnderlineSwoosh, WhatsAppGlyph, WHATSAPP_URL } from './icons';

type IconProps = { width?: number; height?: number; className?: string };

interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  Icon: ComponentType<IconProps>;
  iconClass: string;
}

const services: Service[] = [
  {
    number: '01',
    title: 'Serviço de Guincho Barato',
    description: 'Reboque eficiente com preços acessíveis e competitivos.',
    image: 'https://storage.lucasmendes.dev/site-sp/gabricioguincho%2FServic%CC%A7o%20de%20Guincho%20Barato.webp',
    alt: 'Serviço de Guincho Barato',
    Icon: Truck,
    iconClass: 'lucide lucide-truck w-6 h-6 text-[hsl(211,66%,41%)]',
  },
  {
    number: '02',
    title: 'Reboque Especializado',
    description: 'Equipamentos modernos e equipe treinada para reboque especializado.',
    image: 'https://storage.lucasmendes.dev/site-sp/gabricioguincho%2FReboque%20Especializado.webp',
    alt: 'Reboque Especializado',
    Icon: Shield,
    iconClass: 'lucide lucide-shield w-6 h-6 text-[hsl(211,66%,41%)]',
  },
  {
    number: '03',
    title: 'Reboque Imediato',
    description: 'Resposta rápida para situações de emergência com seu veículo.',
    image: 'https://storage.lucasmendes.dev/site-sp/gabricioguincho%2FReboque%20Imediato%20.webp',
    alt: 'Reboque Imediato',
    Icon: Zap,
    iconClass: 'lucide lucide-zap w-6 h-6 text-[hsl(211,66%,41%)]',
  },
  {
    number: '04',
    title: 'Transporte de Veículos',
    description: 'Transporte seguro e eficiente de veículos para qualquer destino.',
    image: 'https://storage.lucasmendes.dev/site-sp/gabricioguincho%2FTransporte%20de%20Vei%CC%81culos.webp',
    alt: 'Transporte de Veículos',
    Icon: MapPin,
    iconClass: 'lucide lucide-map-pin w-6 h-6 text-[hsl(211,66%,41%)]',
  },
  {
    number: '05',
    title: 'Socorro Mecânico',
    description: 'Assistência mecânica emergencial para resolver problemas no local.',
    image: 'https://storage.lucasmendes.dev/site-sp/gabricioguincho%2FSocorro%20Meca%CC%82nico.webp',
    alt: 'Socorro Mecânico',
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench w-6 h-6 text-[hsl(211,66%,41%)]',
  },
  {
    number: '06',
    title: 'Reboque 7h até 23h30',
    description: 'Disponibilidade total para atender emergências a qualquer hora.',
    image: 'https://storage.lucasmendes.dev/site-sp/gabricioguincho%2FReboque%2024%20Horas.webp',
    alt: 'Reboque 7h até 23h30',
    Icon: Clock,
    iconClass: 'lucide lucide-clock w-6 h-6 text-[hsl(211,66%,41%)]',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-[hsl(211,66%,98%)] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[hsl(211,66%,41%)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F97316] rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[hsl(211,66%,41%)] font-semibold text-sm md:text-base tracking-wider uppercase bg-[hsl(211,66%,95%)] px-6 py-2 rounded-full">
              Nossos serviços
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(211,66%,25%)] mb-4 leading-tight">
            Serviços de Reboque em{' '}
            <span className="text-[hsl(211,66%,41%)] relative">
              Franca
              <UnderlineSwoosh />
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Oferecemos serviços de reboque rápido e seguro em Franca e região.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((s) => (
            <div
              key={s.number}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[hsl(211,66%,41%)] via-[#F97316] to-[hsl(211,66%,41%)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(211,66%,25%)]/90 via-[hsl(211,66%,25%)]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <s.Icon width={24} height={24} className={s.iconClass} />
                </div>
                <div className="absolute bottom-4 left-4 bg-[#F97316] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {s.number}
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-[hsl(211,66%,25%)] mb-3 group-hover:text-[hsl(211,66%,41%)] transition-colors duration-300 leading-tight">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">{s.description}</p>
                <div className="flex items-center gap-2 text-[hsl(211,66%,41%)] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  <span>Solicitar serviço</span>
                  <ArrowRightGlyph className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[hsl(211,66%,41%)] to-[hsl(211,66%,35%)] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Precisa de Assistência Agora?</h3>
            <p className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco pelo WhatsApp e receba atendimento imediato
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#F97316] text-white px-8 md:px-10 py-4 md:py-5 rounded-full hover:bg-[#ea580c] hover:shadow-2xl hover:shadow-[#F97316]/50 transition-all duration-300 hover:scale-105 font-bold text-base md:text-lg group"
            >
              <WhatsAppGlyph className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Enviar WhatsApp Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
