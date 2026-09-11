import { FileSearch, BellRing, Handshake, CheckCircle2, type LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  iconClass: string;
  number: string;
  title: string;
  text: string;
  badge: string;
  delay: string;
}

const steps: Step[] = [
  {
    icon: FileSearch,
    iconClass: 'lucide lucide-file-search text-white',
    number: '1',
    title: 'Análise do Contrato',
    text: 'Realizamos a análise GRATUITA do seu contrato de financiamento para identificar juros abusivos, cobranças irregulares e cláusulas lesivas ao consumidor.',
    badge: 'Análise 100% Gratuita',
    delay: '0ms',
  },
  {
    icon: BellRing,
    iconClass: 'lucide lucide-bell-ring text-white',
    number: '2',
    title: 'Notificando os Credores',
    text: 'Notificamos formalmente os credores informando que você está sendo representado pela nossa equipe jurídica, e questionamos todas as taxas irregulares cobradas.',
    badge: 'Equipe Especializada',
    delay: '100ms',
  },
  {
    icon: Handshake,
    iconClass: 'lucide lucide-handshake text-white',
    number: '3',
    title: 'Negociação',
    text: 'Seus credores nos enviam uma proposta. Se não for a melhor, continuamos negociando até encontrar o valor justo. Nossa missão é que você pague apenas o preço correto.',
    badge: 'Sem Custo Antecipado',
    delay: '200ms',
  },
  {
    icon: CheckCircle2,
    iconClass: 'lucide lucide-check-circle2 text-white',
    number: '4',
    title: 'Regularização',
    text: 'Reduzimos o valor das suas parcelas e intermediamos a quitação da dívida com a financeira. Você se livra dos juros abusivos e volta a ter seu nome no azul!',
    badge: 'Nome Limpo Garantido',
    delay: '300ms',
  },
];

export default function ComoFunciona() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B2447]/10 rounded-full text-[#0B2447] text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>Processo Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2447] mb-4">
            Como <span className="text-amber-500">Funciona</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Um processo simples, transparente e eficaz para recuperar o controle das suas finanças.
          </p>
        </div>
        <div className="relative">
          <div
            className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent"
            style={{ top: '5rem' }}
          ></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative group" style={{ animationDelay: step.delay }}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-amber-200 h-full flex flex-col">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-[#0B2447] rounded-2xl flex items-center justify-center shadow-lg shadow-[#0B2447]/20 group-hover:bg-amber-500 transition-colors duration-300 mx-auto lg:mx-0">
                        <Icon className={step.iconClass} width={28} height={28} />
                      </div>
                      <div className="absolute -top-2 -right-2 lg:left-10 lg:right-auto w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-black border-2 border-white">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#0B2447] mb-3 text-center lg:text-left">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-1 text-center lg:text-left">
                      {step.text}
                    </p>
                    <div className="mt-5 pt-5 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full">
                        <CheckCircle2 className="lucide lucide-check-circle2" width={12} height={12} />
                        {step.badge}
                      </span>
                    </div>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="hidden sm:flex lg:hidden absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-amber-300">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0l8 8-8 8V0z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-[#0B2447] to-[#19376D] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Pronto para começar?</h3>
          <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
            A análise do seu contrato é gratuita e sem compromisso. Descubra o quanto você pode economizar.
          </p>
          <button
            onClick={() => scrollTo('simulacao')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold text-lg rounded-2xl shadow-xl shadow-amber-500/30 transition-all duration-200 hover:scale-105"
          >
            Fazer Análise Gratuita
          </button>
        </div>
      </div>
    </section>
  );
}
