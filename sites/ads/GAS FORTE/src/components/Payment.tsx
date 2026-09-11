import { MessageCircle } from 'lucide-react';

const methods = [
  { emoji: '⚡', label: 'PIX', color: 'text-green-400' },
  { emoji: '💳', label: 'Cartão de Débito', color: 'text-blue-400' },
  { emoji: '💳', label: 'Cartão de Crédito', color: 'text-brand-amber' },
  { emoji: '💵', label: 'Dinheiro', color: 'text-green-300' },
];

export default function Payment() {
  return (
    <section className="bg-brand-dark py-12 md:py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/gas%20forte/img/mulher-pagando-gas-supergasbras-celular-pix_508x510.webp"
                alt="Pagamento fácil com PIX"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Flexibilidade total</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-3">
                Pague do jeito <span className="text-gradient">que preferir</span>
              </h3>
              <p className="text-brand-light/55 text-sm leading-relaxed max-w-xs">
                Sem complicação na hora de pagar. Aceitamos todos os meios de pagamento para sua comodidade.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {methods.map((method) => (
              <div
                key={method.label}
                className="bg-brand-navy border border-white/5 rounded-xl px-4 py-4 flex items-center gap-3"
              >
                <span className="text-2xl">{method.emoji}</span>
                <span className={`font-semibold text-sm ${method.color}`}>{method.label}</span>
              </div>
            ))}
            <a
              href="http://wa.me/556282381515"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 flex items-center justify-center gap-2 bg-brand-orange/10 hover:bg-brand-orange/20 border border-brand-orange/30 text-brand-orange font-semibold text-sm py-3 rounded-xl transition-all duration-200"
            >
              <MessageCircle width={16} height={16} className="lucide lucide-message-circle" />
              Fazer Pedido Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
