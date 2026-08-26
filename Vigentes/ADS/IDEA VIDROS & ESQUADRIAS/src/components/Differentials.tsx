import { Ruler, BadgeCheck, Truck, Headphones, Clock, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differentials: Differential[] = [
  {
    icon: Ruler,
    title: 'Sob Medida',
    description: 'Todos os projetos são desenvolvidos sob medida para garantir o encaixe perfeito no seu espaço.',
  },
  {
    icon: BadgeCheck,
    title: 'Materiais de Qualidade',
    description:
      'Utilizamos apenas materiais certificados e de alta durabilidade para garantir a longevidade do seu investimento.',
  },
  {
    icon: Truck,
    title: 'Entrega e Instalação',
    description: 'Realizamos a entrega e instalação completa com equipe especializada e comprometida com o prazo.',
  },
  {
    icon: Headphones,
    title: 'Pós-venda Dedicado',
    description: 'Nosso relacionamento não termina na entrega. Estamos sempre disponíveis para garantir sua satisfação.',
  },
  {
    icon: Clock,
    title: 'Agilidade no Atendimento',
    description: 'Resposta rápida e orçamentos sem compromisso para que você não perca tempo na sua obra ou reforma.',
  },
  {
    icon: MapPin,
    title: 'Atendimento Regional',
    description: 'Atendemos Sorriso, Boa Esperança, Nova Ubiratã, Ipiranga do Norte, Sinop e toda a região.',
  },
];

export default function Differentials() {
  return (
    <section className="py-20 lg:py-28 bg-[#234E72] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#EACD68] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F60301] rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#EACD68] text-xs font-bold uppercase tracking-widest mb-3">Por Que Nos Escolher</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Nossos <span className="text-[#EACD68]">Diferenciais</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Mais do que produtos, entregamos soluções completas com o cuidado e a atenção que o seu projeto merece.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#EACD68]/30 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EACD68]/20 flex items-center justify-center mb-4 group-hover:bg-[#EACD68]/30 transition-colors">
                  <Icon width={22} height={22} className="text-[#EACD68]" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-14 bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Pronto para transformar seu espaço?</h3>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Entre em contato agora e receba um orçamento personalizado sem compromisso. Nossa equipe está pronta para atender você!
          </p>
          <a
            href="http://wa.me/556699856445?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20sem%20compromisso."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#EACD68] hover:bg-yellow-300 text-[#020202] font-extrabold text-base px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:scale-105"
          >
            <WhatsAppIcon width={22} height={22} />
            Solicitar Orçamento Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
