import { MessageSquare, FileSearch, CheckSquare, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const steps: { Icon: LucideIcon; iconClass: string; num: string; number: string; title: string; description: string }[] = [
  {
    Icon: MessageSquare,
    iconClass: 'lucide lucide-message-square text-white',
    num: '1',
    number: '01',
    title: 'Entre em Contato',
    description: 'Envie uma mensagem pelo WhatsApp, formulário ou telefone. Nosso time responde rapidamente.',
  },
  {
    Icon: FileSearch,
    iconClass: 'lucide lucide-file-search text-white',
    num: '2',
    number: '02',
    title: 'Análise Personalizada',
    description:
      'Avaliamos o seu perfil e fazemos cotações nas melhores seguradoras para encontrar a melhor cobertura.',
  },
  {
    Icon: CheckSquare,
    iconClass: 'lucide lucide-check-square text-white',
    num: '3',
    number: '03',
    title: 'Escolha o Melhor Plano',
    description:
      'Apresentamos as opções de forma clara e transparente. Você decide qual se encaixa melhor no seu bolso.',
  },
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-white',
    num: '4',
    number: '04',
    title: 'Protegido!',
    description:
      'Emitimos a apólice e você fica protegido. Estamos ao seu lado sempre que precisar acionar o seguro.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-widest">Processo Simples</span>
          <h2 className="section-title mt-2">Como Funciona</h2>
          <p className="section-subtitle">Contratar seu seguro com a DN Seguros é rápido, fácil e sem burocracia.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-blue/20 via-brand-blue/40 to-brand-blue/20"></div>
          {steps.map((step) => {
            const { Icon } = step;
            return (
              <div
                key={step.number}
                className="step-card relative bg-white border border-gray-100 rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-brand-blue rounded-2xl mb-5 group-hover:bg-brand-red transition-colors duration-300 shadow-md">
                  <Icon size={26} className={step.iconClass} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-red group-hover:bg-brand-blue rounded-full flex items-center justify-center text-white text-xs font-bold transition-colors duration-300">
                    {step.num}
                  </div>
                </div>
                <span className="text-gray-200 font-black text-5xl absolute top-4 right-5 select-none">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-brand-blue mb-3 group-hover:text-brand-red transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <a
            href="http://wa.me/5584991089072"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-base px-10 py-4 rounded-xl"
          >
            Começar Agora pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
