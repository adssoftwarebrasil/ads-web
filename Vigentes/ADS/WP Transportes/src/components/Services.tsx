import { Briefcase, Mountain, GraduationCap, Bus, Users, MapPinned, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Briefcase,
    title: 'Fretamento Empresarial',
    description:
      'Transporte seguro e pontual para funcionários com frota completa e motoristas qualificados.',
    features: ['Horários personalizados', 'Motoristas profissionais', 'Frota moderna e segura'],
  },
  {
    icon: Mountain,
    title: 'Viagens e Turismo',
    description:
      'Excursões, passeios e viagens interestaduais com todo conforto que você merece.',
    features: ['Roteiros personalizados', 'Ônibus com ar-condicionado', 'Seguro viagem incluso'],
  },
  {
    icon: GraduationCap,
    title: 'Transporte Escolar',
    description:
      'Segurança e tranquilidade no transporte de estudantes com acompanhamento total.',
    features: ['Monitores qualificados', 'Rotas otimizadas', 'Segurança certificada'],
  },
  {
    icon: Bus,
    title: 'Aluguel de Ônibus',
    description: 'Locação de veículos para eventos, festas, casamentos e ocasiões especiais.',
    features: ['Frota variada', 'Preços competitivos', 'Atendimento 24h'],
  },
  {
    icon: Users,
    title: 'Receptivos',
    description: 'Transfer e receptivo para grupos, convenções e eventos corporativos.',
    features: ['Equipe bilíngue', 'Pontualidade garantida', 'Atendimento VIP'],
  },
  {
    icon: MapPinned,
    title: 'Translados',
    description: 'Transporte aeroporto, rodoviária e hotéis com conforto e segurança.',
    features: ['Serviço porta a porta', 'Acompanhamento em tempo real', 'Preço fixo sem surpresas'],
  },
];

const saibaMaisLink =
  'https://wa.me/557981183939?text=Olá! Gostaria de saber mais sobre o serviço de transporte.';

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[rgb(245,245,245)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[rgb(245,131,31)]/10 text-[rgb(245,131,31)] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(36,31,33)] mb-4">
            Soluções Completas em Transporte
          </h2>
          <p className="text-lg text-[rgb(51,51,51)] max-w-2xl mx-auto">
            Atendendo todo o estado de Sergipe com qualidade e pontualidade
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-[rgb(245,131,31)]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[rgb(245,131,31)]/20 transition-colors">
                  <Icon className="w-8 h-8 text-[rgb(245,131,31)]" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(36,31,33)] mb-3">{service.title}</h3>
                <p className="text-[rgb(51,51,51)]/80 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-[rgb(51,51,51)]"
                    >
                      <Check className="w-4 h-4 text-[rgb(34,197,94)] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={saibaMaisLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center border-2 border-[rgb(245,131,31)] text-[rgb(245,131,31)] hover:bg-[rgb(245,131,31)] hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Saiba Mais
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
