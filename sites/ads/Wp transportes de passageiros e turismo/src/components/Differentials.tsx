import { Shield, Clock, Award, Users, MapPin, DollarSign, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differentials: Differential[] = [
  {
    icon: Shield,
    title: 'Segurança Certificada',
    description: 'Manutenção preventiva rigorosa e motoristas com treinamento especializado',
  },
  {
    icon: Clock,
    title: 'Disponibilidade Total',
    description: 'Atendimento 24 horas para emergências e solicitações urgentes',
  },
  {
    icon: Award,
    title: 'Frota Moderna',
    description: 'Veículos novos e bem equipados para máximo conforto dos passageiros',
  },
  {
    icon: Users,
    title: 'Equipe Qualificada',
    description: 'Motoristas experientes e equipe de atendimento sempre pronta para ajudar',
  },
  {
    icon: MapPin,
    title: 'Cobertura Estadual',
    description: 'Atendemos todo o estado de Sergipe com pontualidade',
  },
  {
    icon: DollarSign,
    title: 'Preço Justo',
    description: 'Orçamentos transparentes sem custos ocultos',
  },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="py-24 bg-gradient-to-br from-[rgb(36,31,33)] to-[rgb(51,51,51)]"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-last lg:order-first">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[rgb(245,131,31)]/20 aspect-[4/5] max-h-[700px] mx-auto">
              <img
                src="https://storage.lucasmendes.dev/site-sp/wp%20transportes/img/onibus-plataforma-embarque.webp"
                alt="WP Transportes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[rgb(245,131,31)]/10 rounded-full blur-3xl -z-10"></div>
          </div>
          <div className="text-white space-y-8">
            <div>
              <span className="inline-block bg-[rgb(245,131,31)]/20 text-[rgb(245,131,31)] px-4 py-2 rounded-full text-sm font-medium mb-4">
                Por que escolher a WP?
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Excelência em Transporte desde 2022
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Fundada em 2022, a WP Transportes tem sua sede em Aracaju e atua em todo o estado de
                Sergipe. Nosso compromisso é oferecer serviços de transporte de passageiros com os
                mais altos padrões de qualidade, segurança e conforto.
              </p>
            </div>
            <div className="space-y-6">
              {differentials.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start space-x-4 group"
                    style={{ animation: `0.6s ease-out ${index * 0.1}s 1 normal both running fadeInUp` }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-[rgb(245,131,31)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href="https://wa.me/557981183939?text=Olá! Gostaria de fazer um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-[rgb(245,131,31)] hover:bg-[rgb(220,110,20)] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-[rgb(245,131,31)]/30"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">Faça seu Orçamento Agora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
