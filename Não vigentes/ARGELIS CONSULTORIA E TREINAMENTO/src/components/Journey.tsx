import { Search, FileText, Settings, TrendingUp, Trophy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
  delay: number;
  mobileDelay: number;
}

const steps: Step[] = [
  { icon: Search, title: 'Diagnóstico Gratuito', desc: 'Análise profunda e sem custo do cenário atual do seu negócio.', delay: 0, mobileDelay: 0 },
  { icon: FileText, title: 'Proposta Personalizada', desc: 'Desenvolvimento de uma estratégia sob medida para suas dores.', delay: 200, mobileDelay: 150 },
  { icon: Settings, title: 'Implantação Prática', desc: 'Execução das melhorias com acompanhamento próximo da equipe.', delay: 400, mobileDelay: 300 },
  { icon: TrendingUp, title: 'Monitoramento', desc: 'Análise constante de indicadores (KPIs) para garantir a evolução.', delay: 600, mobileDelay: 450 },
  { icon: Trophy, title: 'Resultados Reais', desc: 'Consolidação do crescimento e sustentabilidade financeira.', delay: 800, mobileDelay: 600 },
];

export default function Journey() {
  return (
    <section className="py-24 bg-gradient-to-br from-[rgb(30,60,140)] via-[rgb(40,100,180)] to-[rgb(30,60,140)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(62,215,252)]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-blue-200 text-sm font-semibold tracking-wider mb-4 border border-white/10 backdrop-blur-sm">
            PASSO A PASSO
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Jornada da Transformação</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Um processo estruturado, transparente e focado em resultados para levar sua empresa ao próximo nível.
          </p>
        </div>
        {/* Desktop */}
        <div className="hidden lg:block relative">
          <div className="absolute top-12 left-0 w-full h-1 bg-white/10 rounded-full">
            <div className="h-full bg-gradient-to-r from-white/50 to-white transition-all duration-[2000ms] ease-out rounded-full w-full"></div>
          </div>
          <div className="grid grid-cols-5 gap-4 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="flex flex-col items-center group cursor-default transition-all duration-700 opacity-100 translate-y-0"
                  style={{ transitionDelay: `${step.delay}ms` }}
                >
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white group-hover:text-[rgb(64,102,215)] transition-all duration-300 relative z-10">
                      <Icon
                        width={36}
                        height={36}
                        className="text-white group-hover:text-[rgb(64,102,215)] transition-colors duration-300"
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[rgb(62,215,252)] border-2 border-[rgb(30,60,140)] flex items-center justify-center text-[rgb(30,60,140)] font-bold text-sm shadow-md z-20 group-hover:-translate-y-1 transition-transform">
                      {i + 1}
                    </div>
                  </div>
                  <div className="text-center px-2">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[rgb(62,215,252)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-blue-100 leading-relaxed opacity-90 group-hover:opacity-100">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Mobile */}
        <div className="lg:hidden relative pl-4">
          <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-white/10 rounded-full"></div>
          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative flex items-start gap-6 transition-all duration-700 opacity-100 translate-x-0"
                  style={{ transitionDelay: `${step.mobileDelay}ms` }}
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[rgb(64,102,215)] to-[rgb(62,215,252)] border-4 border-[rgb(30,60,140)] flex items-center justify-center shadow-lg">
                      <Icon width={24} height={24} className="text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-1 bg-white text-[rgb(64,102,215)] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-[rgb(62,215,252)]">
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-sm active:scale-95 transition-transform">
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
