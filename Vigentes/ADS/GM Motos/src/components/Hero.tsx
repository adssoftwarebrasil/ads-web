import { ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';

const features = [
  { icon: ShieldCheck, iconClass: 'lucide-shield-check', title: 'Procedência', sub: 'Motos revisadas' },
  { icon: Zap, iconClass: 'lucide-zap', title: 'Aprovação rápida', sub: 'Sem burocracia' },
  { icon: Star, iconClass: 'lucide-star', title: 'Avaliação 4.4', sub: 'Clientes satisfeitos' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-16 lg:pt-40"
    >
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/gm-motos/img/fachada-com-varias-motos-na-frente-hero-background.webp"
          alt="Fachada GM Motos"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(233,1,16,0.15),transparent_50%)]"></div>
      </div>
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-brand-red/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-white/90">
              Referência em Rondonópolis desde 2017
            </span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white mb-6 animate-fade-up">
            A sua próxima{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-brand-red">
                moto
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9 Q 100 -2 198 9"
                  stroke="rgb(233,1,16)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                ></path>
              </svg>
            </span>
            <br />
            está aqui.
          </h1>
          <p
            className="text-base sm:text-lg text-white/80 max-w-2xl mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Compra, venda, troca e financiamento de motos com procedência, avaliação justa e
            aprovação rápida. <span className="text-white font-semibold">Sem burocracia.</span>{' '}
            Realize seu sonho com quem entende do assunto.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="https://wa.me/5566999980270?text=Ol%C3%A1%20GM%20Motos!%20Gostaria%20de%20ver%20as%20motos%20dispon%C3%ADveis."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-[0_10px_30px_rgba(233,1,16,0.4)] hover:shadow-[0_15px_40px_rgba(233,1,16,0.7)] hover:scale-105"
            >
              Ver motos disponíveis
              <ArrowRight
                className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                width={20}
                height={20}
              />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold text-base transition-all"
            >
              Nossos serviços
            </a>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-red/50 transition-all group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-red/20 flex items-center justify-center group-hover:bg-brand-red group-hover:scale-110 transition-all">
                    <Icon
                      className={`lucide ${f.iconClass} text-brand-red group-hover:text-white`}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{f.title}</p>
                    <p className="text-xs text-white/60">{f.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
          Role para descobrir
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}
