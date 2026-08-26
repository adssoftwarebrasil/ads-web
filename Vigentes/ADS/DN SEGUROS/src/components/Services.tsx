import { Car, Heart, Home, Building2, Plane, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
  Icon: LucideIcon;
  iconClass: string;
  badge?: { label: string; className: string };
}

const topServices: Service[] = [
  {
    title: 'Seguro Automóvel',
    description:
      'Proteção completa para seu veículo contra colisão, roubo, furto, incêndio e danos de terceiros. Cobertura nacional com assistência 24h.',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
    Icon: Car,
    iconClass: 'lucide lucide-car text-white',
    badge: { label: 'Mais Contratado', className: 'bg-brand-red' },
  },
  {
    title: 'Seguro de Vida',
    description:
      'Tranquilidade para você e segurança financeira para sua família. Coberturas para morte, invalidez e doenças graves.',
    image: 'https://images.pexels.com/photos/1682497/pexels-photo-1682497.jpeg?auto=compress&cs=tinysrgb&w=800',
    Icon: Heart,
    iconClass: 'lucide lucide-heart text-white',
  },
  {
    title: 'Seguro Residencial',
    description:
      'Proteja sua casa contra incêndio, roubo, danos elétricos e muito mais. Assistência 24h para emergências no lar.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    Icon: Home,
    iconClass: 'lucide lucide-home text-white',
  },
];

const bottomServices: Service[] = [
  {
    title: 'Seguro Empresarial',
    description:
      'Solução completa para proteger seu negócio, patrimônio, equipamentos e responsabilidade civil empresarial.',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    Icon: Building2,
    iconClass: 'lucide lucide-building2 text-white',
    badge: { label: 'Para Empresas', className: 'bg-brand-blue' },
  },
  {
    title: 'Seguro Viagem',
    description:
      'Viaje com total tranquilidade. Cobertura médica, cancelamento de voo, extravio de bagagem e assistência em qualquer destino do mundo.',
    image: 'https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?auto=compress&cs=tinysrgb&w=800',
    Icon: Plane,
    iconClass: 'lucide lucide-plane text-white',
  },
];

function ServiceCard({ service }: { service: Service }) {
  const { Icon } = service;
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">
      {service.badge && (
        <div
          className={`absolute top-4 left-4 z-20 ${service.badge.className} text-white text-xs font-semibold px-3 py-1 rounded-full`}
        >
          {service.badge.label}
        </div>
      )}
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/30 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-2.5 inline-flex">
            <Icon size={22} className={service.iconClass} />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-red transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
        <div className="flex items-center gap-2 text-brand-red font-semibold text-sm group-hover:gap-3 transition-all duration-200">
          Solicitar Cotação <ArrowRight size={16} className="lucide lucide-arrow-right " />
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-widest">Nossos Produtos</span>
          <h2 className="section-title mt-2">Coberturas para cada momento da sua vida</h2>
          <p className="section-subtitle">
            Da proteção do seu carro à segurança da sua família — encontre o seguro ideal com as melhores
            condições do mercado.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topServices.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:px-24">
          {bottomServices.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
