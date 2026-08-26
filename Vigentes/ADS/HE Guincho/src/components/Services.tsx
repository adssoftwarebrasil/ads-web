import { Car, Truck, Bus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  delay: string;
}

const services: Service[] = [
  {
    Icon: Car,
    iconClass: 'lucide lucide-car text-[rgb(68,235,21)]',
    title: 'Veículos Leves',
    description: 'Remoção de carros de passeio com segurança e agilidade',
    delay: '0.3s',
  },
  {
    Icon: Truck,
    iconClass: 'lucide lucide-truck text-[rgb(68,235,21)]',
    title: 'Utilitários',
    description: 'Guincho especializado para SUVs e picapes',
    delay: '0.4s',
  },
  {
    Icon: Bus,
    iconClass: 'lucide lucide-bus text-[rgb(68,235,21)]',
    title: 'Semi Pesados',
    description: 'Capacidade para remoção de veículos maiores',
    delay: '0.5s',
  },
];

const features = [
  'Atendimento 24 horas',
  'Cobertura em Ituiutaba e região',
  'Equipe qualificada',
  'Equipamentos modernos',
  'Preço justo e transparente',
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 lg:py-28 px-4 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(10, 10, 10) 50%, rgb(0, 0, 0) 100%)',
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2
            className="text-white font-black text-4xl lg:text-6xl mb-6 animate-fadeInUp"
            style={{ letterSpacing: '0.02em' }}
          >
            NOSSOS SERVIÇOS
          </h2>
          <div
            className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[rgb(68,235,21)] to-transparent mx-auto rounded-full animate-scaleIn"
            style={{ animationDelay: '0.2s', boxShadow: 'rgba(68, 235, 21, 0.6) 0px 0px 20px' }}
          ></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const { Icon } = service;
            return (
              <div
                key={service.title}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-10 rounded-3xl border-2 border-gray-800 card-hover group relative overflow-hidden animate-scaleIn"
                style={{ animationDelay: service.delay, boxShadow: 'rgba(0, 0, 0, 0.5) 0px 10px 40px' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(68,235,21)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-[rgb(68,235,21)]/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                    <Icon
                      width={40}
                      height={40}
                      className={service.iconClass}
                      style={{ filter: 'drop-shadow(rgba(68, 235, 21, 0.5) 0px 0px 10px)' }}
                    />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-12 rounded-3xl max-w-4xl mx-auto border border-gray-800 animate-fadeInUp"
          style={{ animationDelay: '0.6s', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 20px 60px' }}
        >
          <h3 className="text-white text-3xl font-bold mb-8 text-center">
            Características em Destaque
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-4 group">
                <div
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[rgb(68,235,21)] to-[rgb(40,180,0)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ boxShadow: 'rgba(68, 235, 21, 0.3) 0px 0px 20px' }}
                >
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
