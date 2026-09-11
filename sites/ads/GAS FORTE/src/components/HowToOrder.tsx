import { MessageCircle, CheckCircle, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  Icon: LucideIcon;
  iconClass: string;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    Icon: MessageCircle,
    iconClass: 'lucide lucide-message-circle',
    number: '01',
    title: 'Entre em Contato',
    description:
      'Mande uma mensagem pelo WhatsApp ou ligue para nós. Informe seu endereço e o tamanho do botijão que precisa.',
  },
  {
    Icon: CheckCircle,
    iconClass: 'lucide lucide-check-circle',
    number: '02',
    title: 'Confirme seu Pedido',
    description:
      'Nosso atendimento confirma rapidamente a disponibilidade e o valor. Simples, direto e sem burocracia.',
  },
  {
    Icon: Truck,
    iconClass: 'lucide lucide-truck',
    number: '03',
    title: 'Receba em Casa',
    description: 'Seu gás chega na porta com segurança e rapidez. Pague como preferir: PIX, cartão ou dinheiro.',
  },
];

export default function HowToOrder() {
  return (
    <section id="como-pedir" className="section-padding bg-brand-dark relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgb(249, 163, 62), transparent)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Simples assim</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 mb-4">
            Como pedir seu gás <span className="text-gradient">em 3 passos</span>
          </h2>
          <p className="text-brand-light/60 max-w-xl mx-auto">
            Chega de complicação. Com a Gás Forte, pedir seu botijão é rápido, fácil e sem sair de casa.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center group">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-orange to-brand-red flex items-center justify-center shadow-2xl shadow-brand-orange/30 group-hover:scale-105 transition-transform duration-300">
                      <step.Icon width={36} height={36} className={`${step.iconClass} text-white`} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-dark border-2 border-brand-orange text-brand-orange text-xs font-black flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-brand-light/55 text-sm leading-relaxed max-w-xs">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <div className="w-px h-10 bg-gradient-to-b from-brand-orange/50 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 text-center">
          <a
            href="http://wa.me/556282381515"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-10 py-4 rounded-full shadow-2xl shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-green-500/50"
          >
            <MessageCircle width={22} height={22} className="lucide lucide-message-circle" />
            Fazer Meu Pedido Agora
          </a>
          <p className="text-brand-light/40 text-xs mt-4">
            Atendimento pelo WhatsApp e telefone · (62) 3573-8001 / (62) 3573-1000
          </p>
        </div>
      </div>
    </section>
  );
}
