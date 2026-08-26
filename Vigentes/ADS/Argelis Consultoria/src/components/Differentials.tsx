import { Award, Headphones, DollarSign, BarChart3, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Diff {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const diffs: Diff[] = [
  {
    icon: Award,
    title: 'Excelência Técnica',
    desc: 'Profissionais com mestrado e vasta experiência prática de mercado, garantindo embasamento teórico e prático.',
  },
  {
    icon: Headphones,
    title: 'Atendimento Personalizado',
    desc: 'Fugimos de receitas prontas. Cada empresa recebe um diagnóstico e uma solução desenhada especificamente para ela.',
  },
  {
    icon: DollarSign,
    title: 'ROI Garantido',
    desc: 'Foco total em custo-benefício. Nossa consultoria é estruturada para se pagar através dos resultados gerados.',
  },
  {
    icon: BarChart3,
    title: 'Gestão à Vista',
    desc: 'Implementamos painéis de indicadores (dashboards) para que você acompanhe a evolução em tempo real.',
  },
  {
    icon: Calendar,
    title: 'Flexibilidade Total',
    desc: 'Atuamos de forma híbrida, presencial ou 100% online, nos adaptando à rotina e cultura da sua empresa.',
  },
  {
    icon: MapPin,
    title: 'DNA Regional',
    desc: '13 anos de atuação sólida em Ribeirão Preto e região, conhecendo as particularidades do mercado local.',
  },
];

export default function Differentials() {
  return (
    <section id="differentials" className="py-24 bg-gray-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(rgb(64, 102, 215) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-gray-100">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[rgb(64,102,215)] text-xs font-bold uppercase tracking-wider mb-6">
                Por que a Argelis?
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Diferenciais que impulsionam o seu{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)]">
                  crescimento
                </span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Não somos apenas consultores, somos parceiros estratégicos do seu negócio. Unimos conhecimento acadêmico
                com a vivência "pé no chão" do dia a dia empresarial.
              </p>
              <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
                <div className="text-5xl font-bold text-[rgb(64,102,215)]">13+</div>
                <div className="text-sm font-medium text-gray-500">
                  Anos transformando
                  <br />
                  empresas na região
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-6">
              {diffs.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.title}
                    className="group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[rgb(62,215,252)]/30 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(64,102,215)] to-[rgb(62,215,252)] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                          <Icon width={24} height={24} className="text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[rgb(64,102,215)] transition-colors">
                          {d.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500 bg-blue-50/50 p-4 rounded-lg border border-blue-100/50">
              <CheckCircle2 width={16} height={16} className="text-[rgb(64,102,215)]" />
              <span>Metodologia validada em mais de 100 projetos.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
