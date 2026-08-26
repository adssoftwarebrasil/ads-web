import { Award, Clock, Users, ThumbsUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { Icon: Clock, value: '+15', label: 'Anos de Mercado' },
  { Icon: Users, value: 'Milhares', label: 'de Clientes Atendidos' },
  { Icon: Award, value: '100%', label: 'Comprometimento' },
  { Icon: ThumbsUp, value: '5★', label: 'Satisfação Garantida' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/ams%20auto%20mecanica%20sinop/img/about.webp"
                alt="Equipe AMS Auto Mecânica"
                className="w-full h-80 lg:h-[480px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-5xl font-extrabold">15+</p>
                <p className="text-sm font-medium text-blue-200 mt-1">anos de experiência</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-brand-red text-white p-4 rounded-xl shadow-lg hidden md:block">
                <Award size={28} />
              </div>
            </div>
          </div>
          <div>
            <div>
              <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
                Nossa História
              </span>
              <h2 className="section-title mb-6">
                Experiência e Confiança <span className="text-brand-blue">Desde 2008</span>
              </h2>
            </div>
            <div className="space-y-4 text-brand-dark-light leading-relaxed">
              <p>
                A <strong className="text-brand-dark">AMS Auto Mecânica Sinop</strong> nasceu com um propósito claro:
                oferecer serviços automotivos de qualidade, com honestidade e comprometimento com cada cliente. Desde
                2008, somos referência em mecânica na cidade e região.
              </p>
              <p>
                Nossa equipe é composta por profissionais altamente capacitados, que aliam conhecimento técnico com
                atenção personalizada. Utilizamos equipamentos modernos de diagnóstico e peças de qualidade comprovada
                para garantir resultados duradouros.
              </p>
              <p>
                Atendemos Sinop – MT e toda a região, com soluções completas que vão da manutenção preventiva até
                reparos especializados em motor, câmbio, suspensão, injeção eletrônica e muito mais.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat) => {
                const { Icon } = stat;
                return (
                  <div key={stat.label} className="flex items-start gap-3 bg-brand-gray rounded-xl p-4">
                    <div className="text-brand-blue mt-0.5 shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-xl font-extrabold text-brand-dark">{stat.value}</p>
                      <p className="text-xs text-brand-dark-light font-medium">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
