import { RotateCcw, Activity, Settings, Zap, Wrench, Shield, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_LINK, WhatsAppIcon } from '../lib/whatsapp';

interface Service {
  image: string;
  alt: string;
  badge?: string;
  Icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Alinhamento e Balanceamento',
    badge: 'Mais Procurado',
    Icon: RotateCcw,
    title: 'Alinhamento e Balanceamento',
    description:
      'Garanta estabilidade, segurança e menor desgaste dos pneus com nosso serviço preciso de alinhamento e balanceamento computadorizado.',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/ams%20auto%20mecanica%20sinop/img/suspens%C3%A3o.webp',
    alt: 'Suspensão Completa',
    Icon: Activity,
    title: 'Suspensão Completa',
    description:
      'Diagnóstico e reparo completo de amortecedores, molas, buchas e todos os componentes do sistema de suspensão do seu veículo.',
  },
  {
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Motor, Câmbio e Diferencial',
    Icon: Settings,
    title: 'Motor, Câmbio e Diferencial',
    description:
      'Revisão, retífica e reparo de motor, câmbio manual e automático e diferencial. Restauramos a performance original do seu carro.',
  },
  {
    image: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Injeção Eletrônica',
    Icon: Zap,
    title: 'Injeção Eletrônica',
    description:
      'Diagnóstico computadorizado e reparo do sistema de injeção eletrônica. Solucionamos falhas, aumentamos a eficiência e economizamos combustível.',
  },
  {
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Troca de Óleo e Filtros',
    badge: 'Rápido',
    Icon: Wrench,
    title: 'Troca de Óleo e Filtros',
    description:
      'Troca de óleo com produtos de qualidade certificada e revisão dos filtros de ar, óleo e combustível. Preservamos o motor por mais tempo.',
  },
  {
    image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Revisão Preventiva',
    badge: 'Recomendado',
    Icon: Shield,
    title: 'Revisão Preventiva',
    description:
      'Revisão completa do veículo com checklist detalhado. Identifique problemas antes que eles apareçam e evite gastos desnecessários.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            O que fazemos
          </span>
          <h2 className="section-title mb-4">
            Serviços Especializados
            <br />
            <span className="text-brand-blue">para o Seu Veículo</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Da manutenção preventiva ao reparo especializado, temos a solução certa com a qualidade que o seu carro
            merece.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const { Icon } = service;
            return (
              <div key={service.title} className="service-card card group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent"></div>
                  {service.badge && (
                    <span className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 text-white bg-brand-blue/80 rounded-xl p-2">
                    <Icon size={28} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-dark-light text-sm leading-relaxed mb-4">{service.description}</p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand-red font-semibold text-sm hover:gap-2 transition-all duration-200"
                  >
                    Solicitar Orçamento <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-14 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 text-base"
          >
            <WhatsAppIcon size={20} />
            Solicite um Orçamento Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
