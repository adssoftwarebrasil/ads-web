import { MessageCircle, ShoppingCart, Banknote } from 'lucide-react';

const vendedores = [
  {
    name: 'Erik',
    phone: '(66) 9 9661-9448',
    href: 'https://wa.me/5566996619448?text=Ol%C3%A1%20Erik%2C%20vim%20pelo%20site%20da%20GM%20Motos.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  },
];

export default function Vendedores() {
  return (
    <section
      id="vendedores"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-brand-red mb-4">
            Fale direto com nossa equipe
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-5">
            Nossos <span className="text-brand-red">Vendedores</span>
          </h2>
          <p className="text-white/70 text-lg">
            Atendimento ágil pelo WhatsApp. Clique no vendedor e converse sem compromisso.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 gap-6 mb-16 ${
            vendedores.length > 1 ? 'md:grid-cols-2' : 'max-w-xl mx-auto'
          }`}
        >
          {vendedores.map((v) => (
            <a
              key={v.name}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-5 p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-red/60 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-red/15 border border-brand-red/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red group-hover:border-brand-red transition-colors">
                <MessageCircle
                  className="lucide lucide-message-circle text-brand-red group-hover:text-white transition-colors"
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">
                  Vendedor
                </p>
                <p className="text-white text-2xl font-black leading-tight mb-1">{v.name}</p>
                <p className="text-white/80 font-mono text-sm">{v.phone}</p>
              </div>
              <div className="hidden sm:flex shrink-0 items-center gap-1 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-bold">
                WhatsApp
              </div>
            </a>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-red via-red-700 to-red-900 p-8 sm:p-12">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-black/30 rounded-full blur-3xl"></div>
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-4">
                <ShoppingCart className="lucide lucide-shopping-cart" width={14} height={14} /> Compra
                de motos
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
                Quer vender sua moto? Nós compramos.
              </h3>
              <p className="text-white/90 text-base sm:text-lg max-w-xl">
                Avaliamos sua moto na hora e pagamos à vista. Fale agora com{' '}
                <strong>Geraley Neto</strong>.
              </p>
            </div>
            <a
              href="https://wa.me/5566999980270?text=Ol%C3%A1%20Geraley%20Neto%2C%20quero%20vender%20minha%20moto.%20Vim%20pelo%20site%20da%20GM%20Motos."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white text-brand-red font-black text-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 shadow-2xl whitespace-nowrap"
            >
              <Banknote className="lucide lucide-banknote" width={24} height={24} />
              <div className="text-left">
                <div className="text-xs uppercase tracking-widest opacity-70 -mb-0.5">
                  Falar com Geraley Neto
                </div>
                <div>(66) 9 9998-0270</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
