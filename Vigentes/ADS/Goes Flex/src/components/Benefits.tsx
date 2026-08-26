import { Zap, Activity, Waves, ArrowRight, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  num: string;
  icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const benefits: Benefit[] = [
  {
    num: '01',
    icon: Zap,
    iconClass: 'lucide lucide-zap',
    title: 'Magnetismo & Bioenergia',
    text: 'Tecnologia avançada que simula o campo magnético da Terra, estimulando a circulação sanguínea e renovando a energia celular durante o sono profundo.',
  },
  {
    num: '02',
    icon: Activity,
    iconClass: 'lucide lucide-activity',
    title: 'Correção Postural',
    text: 'Espuma de densidade progressiva inteligente. Ela cede nos ombros e quadril, mas sustenta a lombar, mantendo sua coluna alinhada a noite toda.',
  },
  {
    num: '03',
    icon: Waves,
    iconClass: 'lucide lucide-waves',
    title: 'Massagem Vibroterápica',
    text: 'Sistema integrado com controle remoto. Escolha entre diferentes modos de massagem para relaxar os músculos tensos após um dia cansativo.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative bg-slate-50 py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[rgb(26,91,178)] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[rgb(240,53,41)] rounded-full blur-3xl opacity-5"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-[rgb(26,91,178)] font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
            Tecnologia do Sono
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Por que escolher um <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(26,91,178)] to-blue-400">
              Colchão Terapêutico?
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Não é apenas espuma. É um equipamento de saúde projetado por especialistas para combater dores crônicas e
            insônia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.num}
                className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <span className="absolute top-4 right-6 text-6xl font-black text-slate-50 group-hover:text-slate-100 transition-colors select-none z-0">
                  {b.num}
                </span>
                <div className="relative z-10 mb-6 w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-[rgb(26,91,178)] transition-colors duration-300 flex items-center justify-center">
                  <Icon
                    className={`${b.iconClass} text-[rgb(26,91,178)] group-hover:text-white transition-colors duration-300`}
                    width={32}
                    height={32}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="relative z-10 flex-grow">
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3 group-hover:text-[rgb(26,91,178)] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{b.text}</p>
                </div>
                <div className="relative z-10 mt-6 pt-6 border-t border-slate-100 flex items-center text-[rgb(26,91,178)] font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="mr-2">Saber mais</span>
                  <ArrowRight className="lucide lucide-arrow-right" width={16} height={16} />
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[rgb(240,53,41)] group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-3 text-slate-500 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border-2 border-white"
                >
                  <Check className="lucide lucide-check text-green-600" width={14} height={14} />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">
              Mais de <strong className="text-slate-800">5.000 clientes</strong> dormindo melhor em Sergipe.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
