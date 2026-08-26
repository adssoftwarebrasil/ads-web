import {
  Network,
  HardHat,
  Sun,
  Zap,
  ClipboardList,
  Wrench,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { WHATSAPP_URL } from '../lib/scroll';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Network,
    title: 'Projetos de Rede Elétrica',
    description:
      'Elaboração completa de projetos de redes de distribuição de energia em alta e baixa tensão, com conformidade técnica e normativa.',
  },
  {
    icon: HardHat,
    title: 'Construção de Redes',
    description:
      'Execução de obras de construção e manutenção de redes de distribuição elétrica, com equipe habilitada e equipamentos modernos.',
  },
  {
    icon: Sun,
    title: 'Energia Solar',
    description:
      'Projetos e instalação de sistemas fotovoltaicos para residências, comércios, indústrias e propriedades rurais. Economia garantida.',
  },
  {
    icon: Zap,
    title: 'Alta e Baixa Tensão',
    description:
      'Serviços especializados em sistemas de alta e baixa tensão para obras residenciais, comerciais, industriais e rurais.',
  },
  {
    icon: ClipboardList,
    title: 'Consultoria Especializada',
    description:
      'Orientação técnica e consultoria em demandas do setor elétrico, apoiando decisões estratégicas com segurança e precisão.',
  },
  {
    icon: Wrench,
    title: 'Inspeção, Manutenção e Laudo Técnico',
    description:
      'Acompanhamento técnico completo antes, durante e após a obra, com equipe de supervisão dedicada à excelência e emissão de laudos detalhados sobre o serviço prestado.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-brand-darkgray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="transition-all duration-700 opacity-100 translate-y-0">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-red/15 border border-brand-red/30 text-brand-red text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              O que fazemos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-white">
              Soluções completas em{' '}
              <span className="text-brand-red">Engenharia Elétrica</span>
            </h2>
            <p className="mt-4 text-brand-white/60 text-lg max-w-2xl mx-auto">
              Do projeto à execução, entregamos qualidade técnica com segurança e
              pontualidade em toda a região Norte do Mato Grosso.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const featured = index === 0;
              return (
                <div
                  key={service.title}
                  className={`group relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 cursor-default ${
                    featured
                      ? 'bg-brand-red border-brand-red text-white'
                      : 'bg-brand-dark/60 border-white/10 hover:border-brand-red/40 hover:bg-brand-dark/80'
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                      featured
                        ? 'bg-white/20'
                        : 'bg-brand-red/15 group-hover:bg-brand-red/25 transition-colors'
                    }`}
                  >
                    <Icon size={26} className={featured ? 'text-white' : 'text-brand-red'} />
                  </div>
                  <h3
                    className={`text-lg font-bold mb-3 ${
                      featured ? 'text-white' : 'text-brand-white'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      featured ? 'text-white/80' : 'text-brand-white/60'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-2xl hover:shadow-brand-red/40 hover:-translate-y-0.5"
            >
              Solicitar um Orçamento Grátis
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
