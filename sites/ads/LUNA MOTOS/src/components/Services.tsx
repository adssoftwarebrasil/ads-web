import { Wrench, Settings, Droplet, Zap, Disc, Paintbrush } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
  popular?: boolean;
};

const services: Service[] = [
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench w-7 h-7 text-white',
    title: 'Revisão Completa',
    text: 'Inspeção detalhada de todos os sistemas da sua moto, incluindo freios, suspensão, motor e elétrica. Prevenção é economia.',
    popular: true,
  },
  {
    icon: Settings,
    iconClass: 'lucide lucide-settings w-7 h-7 text-white',
    title: 'Serviço de Motor',
    text: 'Diagnóstico preciso e reparos especializados. Atendemos motores de baixa e alta cilindrada com peças de qualidade.',
  },
  {
    icon: Droplet,
    iconClass: 'lucide lucide-droplet w-7 h-7 text-white',
    title: 'Troca de Óleo e Filtros',
    text: 'Óleo lubrificante premium e filtros originais. Agende agora e garanta a longevidade do seu motor.',
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap w-7 h-7 text-white',
    title: 'Elétrica e Injeção',
    text: 'Problemas elétricos? Diagnosticamos e reparamos sistemas de injeção eletrônica, bateria, alternador e mais.',
  },
  {
    icon: Disc,
    iconClass: 'lucide lucide-disc w-7 h-7 text-white',
    title: 'Freios e Suspensão',
    text: 'Segurança em primeiro lugar. Manutenção preventiva e corretiva de sistemas de frenagem e amortecimento.',
  },
  {
    icon: Paintbrush,
    iconClass: 'lucide lucide-paintbrush w-7 h-7 text-white',
    title: 'Customização',
    text: 'Deixe sua moto com a sua cara. Instalação de acessórios, peças custom e modificações personalizadas.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#F97316] text-sm font-bold uppercase tracking-wider">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020202] mt-3 mb-4 leading-tight">
            Mecânica Especializada com Garantia de Qualidade
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Equipe técnica experiente pronta para cuidar da sua moto
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-gray-50 border-l-4 border-[#F97316] rounded-lg p-6 hover:bg-white hover:shadow-lg transition-all duration-300 relative"
              >
                {s.popular && (
                  <span className="absolute top-4 right-4 bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Mais Popular
                  </span>
                )}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#F97316] flex items-center justify-center">
                    <Icon className={s.iconClass} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#020202] mb-2">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/559591772210?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#F97316] to-[#DC2626] text-white font-semibold text-base uppercase rounded-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] hover:scale-105 transition-all duration-200"
          >
            AGENDAR SERVIÇO AGORA
          </a>
        </div>
      </div>
    </section>
  );
}
