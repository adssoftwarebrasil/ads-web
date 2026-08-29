import { ChevronDown } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../lib/constants';

const HERO_IMAGE = "https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=fort-das-cestas%2FImagens-Loja%2FWhatsApp%20Image%202026-02-12%20at%2018.54.33%20(1).jpeg&version_id=null";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 110, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-70" />
        <div className="absolute inset-0 hero-pattern" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-0">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/30">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Pronta Entrega em Goiania
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in leading-[1.1]">
            Cestas
            <span className="block text-accent">Basicas</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-accent mt-2">
              De R$ 49,99 a R$ 499,00
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
            <button
              onClick={() => scrollToSection('cestas-basicas')}
              className="group inline-flex items-center justify-center gap-2 bg-accent text-primary-dark px-8 py-4 rounded-full hover:bg-accent-light transition-all duration-300 font-bold text-base shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            >
              Confira nossas Cestas
              <ChevronDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vim pelo site e gostaria de fazer um pedido.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/25 transition-all duration-300 font-semibold text-base border border-white/30"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 sm:gap-10 mt-12 animate-fade-in-delay-2">
            {[{ val: '6+', label: 'Anos' }, { val: '+100 mil', label: 'Familias' }, { val: '10+', label: 'Cestas' }].map((s, i) => (
              <div key={i} className="flex items-center gap-6 sm:gap-10">
                {i > 0 && <div className="w-px h-10 bg-white/20" />}
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{s.val}</div>
                  <div className="text-xs text-white/70 mt-1">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle hidden sm:block">
        <button onClick={() => scrollToSection('diferenciais')} className="text-white/60 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
