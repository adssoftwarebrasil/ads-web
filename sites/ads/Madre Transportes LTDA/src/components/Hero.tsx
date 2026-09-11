import { ArrowRight, ChevronDown, MapPin, Shield, Truck } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://storage.lucasmendes.dev/site-sp/madre%20transportes%20ltda/img/hero-background.webp')`,
        }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 bg-brand-blue-light/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-amber/20 border border-brand-amber/40 text-brand-amber text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm animate-fade-in">
            <Truck size={14} />
            Transporte Rodoviário de Cargas
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.1] text-shadow-lg mb-6">
            Transportamos{' '}
            <span className="text-brand-amber">para Todo</span>
            <br />o Brasil
          </h1>

          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-xl text-shadow">
            Mais de 20 anos de excelência em transporte rodoviário de cargas.
            Comprometimento, agilidade e os melhores preços do mercado — do interior de SP
            até qualquer canto do país.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="https://wa.me/5519981211908?text=Ol%C3%A1%21+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+de+frete."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 text-base"
            >
              Solicitar Cotação
              <ArrowRight size={18} />
            </a>
            <button
              onClick={() => scrollToSection('#sobre')}
              className="btn-secondary flex items-center justify-center gap-2 text-base"
            >
              Conheça a Madre
            </button>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: <Shield size={16} />, text: '20+ Anos de Experiência' },
              { icon: <Truck size={16} />, text: 'Frota Própria Moderna' },
              { icon: <MapPin size={16} />, text: 'Todo o Brasil' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/75 text-sm">
                <span className="text-brand-amber">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('#servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-brand-amber transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
