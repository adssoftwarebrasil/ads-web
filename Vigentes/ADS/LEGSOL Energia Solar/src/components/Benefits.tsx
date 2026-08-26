import { TrendingDown, Leaf, Home, PiggyBank, Wrench, Shield, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const benefits: { icon: LucideIcon; iconClass: string; tag: string; title: string; text: string }[] = [
  {
    icon: TrendingDown,
    iconClass: 'lucide-trending-down',
    tag: '95%',
    title: 'Economia Imediata',
    text: 'Reduza drasticamente sua conta de luz logo no primeiro mês após a instalação.',
  },
  {
    icon: Leaf,
    iconClass: 'lucide-leaf',
    tag: 'Renovável',
    title: 'Energia 100% Limpa',
    text: 'Produza sua própria energia sem emitir poluentes, ajudando o meio ambiente.',
  },
  {
    icon: Home,
    iconClass: 'lucide-home',
    tag: '+30%',
    title: 'Valorização do Imóvel',
    text: 'Casas com sistema solar próprio são vendidas mais rápido e por valor maior.',
  },
  {
    icon: PiggyBank,
    iconClass: 'lucide-piggy-bank',
    tag: 'ROI Rápido',
    title: 'Retorno Garantido',
    text: 'O dinheiro investido volta para o seu bolso em forma de economia em 3 a 5 anos.',
  },
  {
    icon: Wrench,
    iconClass: 'lucide-wrench',
    tag: 'Sem Dor de Cabeça',
    title: 'Manutenção Mínima',
    text: 'Sistemas robustos que exigem apenas limpeza simples ocasional dos painéis.',
  },
  {
    icon: Shield,
    iconClass: 'lucide-shield',
    tag: '25 Anos',
    title: 'Garantia Estendida',
    text: 'Garantia de performance dos módulos fotovoltaicos assegurada pelos fabricantes.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[rgb(26,110,76)]/10 text-[rgb(26,110,76)] font-semibold text-sm uppercase tracking-wider">
            Por que investir?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[rgb(27,45,114)] mb-6 tracking-tight">
            Mais que Economia, um Investimento Inteligente
          </h2>
          <p className="text-lg text-gray-600">
            A energia solar é a única reforma que paga a si mesma. Descubra os benefícios que transformarão sua relação
            com a conta de luz.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group relative p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-[rgb(235,156,51)] hover:bg-white hover:shadow-2xl hover:shadow-[rgb(27,45,114)]/10 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-[rgb(26,110,76)] group-hover:border-transparent group-hover:scale-110 transition-all duration-300">
                  <Icon
                    className={`lucide ${b.iconClass} text-[rgb(26,110,76)] group-hover:text-white transition-colors duration-300`}
                    width={30}
                    height={30}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[rgb(235,156,51)] uppercase tracking-wider bg-[rgb(235,156,51)]/10 px-2 py-0.5 rounded">
                      {b.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[rgb(27,45,114)]">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{b.text}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 w-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <CheckCircle2 className="lucide lucide-check-circle2 text-[rgb(26,110,76)]" width={16} height={16} />
                  <span className="text-sm font-semibold text-[rgb(26,110,76)]">Vantagem Comprovada</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
