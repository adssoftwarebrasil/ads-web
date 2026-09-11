import { ArrowRight, Wrench, Truck, ShieldCheck } from 'lucide-react';

const cards = [
  { icon: Wrench, title: 'Linha Leve e Pesada', desc: 'Nacionais e importadas', offset: '' },
  { icon: Truck, title: 'Logística Ágil', desc: 'Entregas para todo nordeste', offset: 'translate-y-6' },
  { icon: ShieldCheck, title: 'Qualidade Garantida', desc: 'Marcas de confiança', offset: '' },
  { icon: Wrench, title: 'Atendimento Técnico', desc: 'Vendedores capacitados', offset: 'translate-y-6' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/s-silva-distribuidora/img/fachada-hero.webp"
          alt="Peças automotivas S. Silva"
          className="w-full h-full object-cover brightness-110"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              <span className="text-xs md:text-sm font-semibold tracking-wider uppercase">Desde 1995 em Feira de Santana</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 animate-fade-up">
              A distribuidora
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">que move o nordeste.</span>
            </h1>
            <p
              className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed animate-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              Mais de <strong className="text-white">40.000 itens</strong> em estoque, peças nacionais e importadas para veículos leves e pesados. Atendemos oficinas, revendas e consumidores finais com agilidade e confiança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up" style={{ animationDelay: '220ms' }}>
              <a
                href="https://wa.me/5575981960232?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20pe%C3%A7as%20na%20S.%20Silva%20Distribuidora."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-brand-red hover:bg-brand-wine text-white font-bold text-base shadow-xl shadow-brand-red/30 hover:shadow-brand-wine/40 transition-all hover:-translate-y-0.5"
              >
                Consultar Peças
                <ArrowRight className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white font-bold text-base transition-all"
              >
                Ver Catálogo
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-xl animate-fade-up" style={{ animationDelay: '320ms' }}>
              <div className="border-l-2 border-brand-red pl-3 md:pl-4">
                <p className="font-display text-3xl md:text-4xl font-extrabold text-white">25+</p>
                <p className="text-xs md:text-sm text-white/70 font-medium">Anos de mercado</p>
              </div>
              <div className="border-l-2 border-brand-red pl-3 md:pl-4">
                <p className="font-display text-3xl md:text-4xl font-extrabold text-white">40k</p>
                <p className="text-xs md:text-sm text-white/70 font-medium">Itens em estoque</p>
              </div>
              <div className="border-l-2 border-brand-red pl-3 md:pl-4">
                <p className="font-display text-3xl md:text-4xl font-extrabold text-white">60+</p>
                <p className="text-xs md:text-sm text-white/70 font-medium">Colaboradores</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative animate-fade-up" style={{ animationDelay: '400ms' }}>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl bg-brand-red/20 blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl bg-brand-blue/30 blur-2xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                {cards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={i}
                      className={`p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/15 transition ${card.offset}`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-brand-red flex items-center justify-center mb-3">
                        <Icon className={`lucide lucide-${card.icon === Wrench ? 'wrench' : card.icon === Truck ? 'truck' : 'shield-check'} w-5 h-5 text-white`} />
                      </div>
                      <p className="font-bold text-sm mb-1">{card.title}</p>
                      <p className="text-xs text-white/70">{card.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="http://wa.me/5575981960232"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden"
        aria-hidden="true"
      ></a>
    </section>
  );
}
