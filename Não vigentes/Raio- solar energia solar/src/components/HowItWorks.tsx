import { MessageCircle, FileText, Hammer, TrendingDown, type LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  num: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    icon: MessageCircle,
    num: '01',
    title: 'Consulta Gratuita',
    desc: 'Entre em contato conosco pelo WhatsApp ou formulário. Nossa equipe fará um diagnóstico inicial do seu consumo energético sem custo algum.',
  },
  {
    icon: FileText,
    num: '02',
    title: 'Projeto Personalizado',
    desc: 'Elaboramos um projeto técnico sob medida para o seu imóvel, com cálculo do dimensionamento ideal e retorno do investimento estimado.',
  },
  {
    icon: Hammer,
    num: '03',
    title: 'Instalação Profissional',
    desc: 'Nossa equipe certificada realiza a instalação com total segurança, dentro do prazo acordado e com mínimo impacto no seu cotidiano.',
  },
  {
    icon: TrendingDown,
    num: '04',
    title: 'Economia Garantida',
    desc: 'Comece a gerar sua própria energia e veja a redução imediata na conta de luz. Acompanhe a produção em tempo real pelo seu smartphone.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-brand-blue overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-yellow font-semibold text-sm tracking-widest uppercase mb-3">
            Processo simplificado
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Como Funciona?</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Da consulta à economia, nosso processo é transparente, rápido e sem burocracia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent"></div>
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-brand-blue-light border-2 border-brand-yellow/30 flex items-center justify-center group-hover:border-brand-yellow group-hover:bg-brand-yellow/10 transition-all duration-300 relative z-10">
                    <Icon width={28} height={28} strokeWidth={1.5} className="text-brand-yellow" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-brand-yellow rounded-full flex items-center justify-center text-brand-blue text-xs font-bold z-20">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <a
            href="http://wa.me/5575988443984"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-yellow text-brand-blue font-bold px-8 py-4 rounded-full text-base hover:bg-brand-yellow-light shadow-xl hover:shadow-brand-yellow/25 hover:shadow-2xl transition-all duration-300"
          >
            Quero Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
}
