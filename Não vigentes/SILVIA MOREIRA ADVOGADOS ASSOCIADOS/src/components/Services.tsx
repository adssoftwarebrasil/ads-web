import { Landmark, Shield, Heart, Briefcase, FileText, Scale, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    Icon: Landmark,
    title: 'Direito Administrativo',
    desc: 'Defesa de servidores públicos em processos administrativos, revisão de atos e assessoria em licitações.',
  },
  {
    Icon: Shield,
    title: 'Direito Público',
    desc: 'Atuação especializada em demandas contra o poder público, com foco nos servidores estaduais e federais do Amapá.',
  },
  {
    Icon: Heart,
    title: 'Direito Previdenciário',
    desc: 'Concessão e revisão de benefícios previdenciários, aposentadorias, pensões e planejamento previdenciário.',
  },
  {
    Icon: Briefcase,
    title: 'Direito Trabalhista',
    desc: 'Assessoria completa em relações de trabalho, rescisões, verbas indenizatórias e ações trabalhistas.',
  },
  {
    Icon: FileText,
    title: 'Direito Civil',
    desc: 'Atuação em contratos, responsabilidade civil, direito de família e demandas cíveis em geral.',
  },
  {
    Icon: Scale,
    title: 'Advocacia Preventiva',
    desc: 'Consultoria jurídica estratégica para prevenir litígios e garantir segurança nas suas decisões.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] gold-gradient"></div>
            <span className="text-brand-gold-dark text-sm font-semibold tracking-[0.15em] uppercase">
              Áreas de Atuação
            </span>
            <div className="w-10 h-[2px] gold-gradient"></div>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Expertise Jurídica em <span className="text-brand-red">Diversas Áreas</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Oferecemos um serviço especializado e abrangente para atender às mais diversas necessidades
            jurídicas dos nossos clientes.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map(({ Icon, title, desc }, i) => (
            <div key={title} className="animate-fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="group h-full bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                <a
                  href="http://wa.me/559691327966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-red font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
