import {
  BarChart3,
  Building2,
  Scale,
  FileSearch,
  ShieldCheck,
  BadgeCheck,
  LucideIcon,
} from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    icon: BarChart3,
    title: 'Assessoria Contábil',
    description:
      'Gestão completa da contabilidade da sua empresa com relatórios claros e atualizados para uma tomada de decisão precisa.',
  },
  {
    icon: Building2,
    title: 'Abertura e Encerramento de Empresas',
    description:
      'Cuidamos de todo o processo burocrático de abertura, alteração societária e encerramento de empresas com agilidade.',
    popular: true,
  },
  {
    icon: Scale,
    title: 'Planejamento Tributário',
    description:
      'Estratégias legais para reduzir a carga tributária da sua empresa, aumentando a lucratividade de forma segura.',
  },
  {
    icon: FileSearch,
    title: 'Regularização Fiscal',
    description:
      'Resolução de pendências fiscais, parcelamentos e conformidade com todas as obrigações legais do seu negócio.',
  },
  {
    icon: ShieldCheck,
    title: 'Consultoria Contábil e Financeira',
    description:
      'Análise aprofundada dos seus números com orientações estratégicas para crescimento sustentável e sólido.',
  },
  {
    icon: BadgeCheck,
    title: 'Certificado Digital',
    description:
      'Emissão e renovação de certificados digitais e-CNPJ e e-CPF para empresas e profissionais com atendimento rápido.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="section-title mt-2">
            Soluções Contábeis <span className="text-gradient">Completas</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Da abertura da empresa ao planejamento estratégico — cuidamos de toda a parte contábil
            para você focar em fazer o negócio crescer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className={`relative h-full rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default ${
                    service.popular
                      ? 'bg-primary border-accent/30 shadow-lg shadow-accent/10'
                      : 'bg-white border-gray-100 shadow-sm hover:border-accent/20'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                      service.popular ? 'bg-accent/15' : 'bg-primary/5'
                    }`}
                  >
                    <Icon size={26} className={service.popular ? 'text-accent' : 'text-primary'} />
                  </div>
                  <h3
                    className={`text-lg font-bold mb-3 leading-tight ${
                      service.popular ? 'text-white' : 'text-primary'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      service.popular ? 'text-white/65' : 'text-gray-500'
                    }`}
                  >
                    {service.description}
                  </p>
                  <div
                    className={`mt-5 w-8 h-0.5 ${service.popular ? 'bg-accent' : 'bg-primary/20'}`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center animate-on-scroll" style={{ transitionDelay: '700ms' }}>
          <a
            href="http://wa.me/556596828492?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20FerrariCont."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold border-2 border-primary px-8 py-3.5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Solicitar Orçamento Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
