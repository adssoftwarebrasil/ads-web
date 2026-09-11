import { Zap, ShieldCheck, Truck, BadgeCheck, Wrench, HeartHandshake, LucideIcon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface Differential {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const DIFFERENTIALS: Differential[] = [
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap text-[#fcc209]',
    title: 'Atendimento Expresso',
    description: 'Agilidade no atendimento para você não ficar na mão. Rápido diagnóstico e troca imediata.',
  },
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-[#fcc209]',
    title: 'Garantia de Fábrica',
    description: 'Todas as baterias vendidas possuem garantia oficial do fabricante. Compre com segurança.',
  },
  {
    icon: Truck,
    iconClass: 'lucide lucide-truck text-[#fcc209]',
    title: 'Entrega em Lins e Região',
    description: 'Atendemos Lins-SP, Guaiçara-SP e cidades da região. Comodidade para você.',
  },
  {
    icon: BadgeCheck,
    iconClass: 'lucide lucide-badge-check text-[#fcc209]',
    title: 'Produtos 100% Originais',
    description: 'Trabalhamos somente com marcas homologadas e produtos originais de alta procedência.',
  },
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench text-[#fcc209]',
    title: 'Instalação na Hora',
    description: 'Técnicos especializados realizam a troca da bateria com rapidez e sem complicação.',
  },
  {
    icon: HeartHandshake,
    iconClass: 'lucide lucide-heart-handshake text-[#fcc209]',
    title: 'Preço Justo e Transparente',
    description: 'Orçamento honesto, sem surpresas. Melhor custo-benefício da região.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#fcc209] text-sm font-semibold tracking-widest uppercase mb-3">
            Por que nos escolher?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Mais do que uma loja, <span className="text-[#b31115]">um parceiro</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Na Scorpion Xpress, cada cliente é atendido com excelência. Confira o que nos diferencia
            da concorrência.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIALS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white/5 border border-white/10 hover:border-[#fcc209]/40 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:bg-white/8 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#fcc209]/10 group-hover:bg-[#fcc209]/20 flex items-center justify-center transition-colors">
                  <Icon size={24} className={item.iconClass} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#b31115] to-[#8a0d10] p-8 sm:p-12">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#fcc209]/20 to-transparent"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl sm:text-3xl font-black mb-2">
                Bateria descarregada agora?
              </h3>
              <p className="text-white/80 text-base">
                Entre em contato e resolvemos o seu problema hoje mesmo!
              </p>
            </div>
            <a
              href="https://wa.me/5514996487352?text=Preciso%20de%20socorro%2C%20minha%20bateria%20descarregou!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 bg-[#fcc209] hover:bg-[#e6b008] text-black font-black text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
            >
              <WhatsAppIcon size={20} fill="currentColor" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
