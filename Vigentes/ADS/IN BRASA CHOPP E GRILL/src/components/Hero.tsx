import { Flame, Star, ChevronDown } from 'lucide-react';

const WHATSAPP = 'http://wa.me/556696123349';

const stats = [
  { value: '10+', label: 'Anos de Gastronomia' },
  { value: '4.4★', label: 'Avaliação Google' },
  { value: '17h', label: 'Abertura Diária' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-700 ease-out opacity-100 translate-y-0">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Flame className="lucide lucide-flame text-brand animate-pulse-slow" width={20} height={20} />
          <span className="section-subheading">Sinop - MT</span>
          <Flame className="lucide lucide-flame text-brand animate-pulse-slow" width={20} height={20} />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
          O Melhor <span className="text-gradient">Espetinho</span>
          <br />
          da Cidade
        </h1>
        <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Carnes selecionadas grelhadas na brasa, chopp gelado e drinks exclusivos. Um ambiente
          aconchegante para toda a família.
        </p>
        <div className="flex items-center justify-center gap-1 mb-10">
          <Star className="lucide lucide-star fill-brand text-brand" width={18} height={18} />
          <Star className="lucide lucide-star fill-brand text-brand" width={18} height={18} />
          <Star className="lucide lucide-star fill-brand text-brand" width={18} height={18} />
          <Star className="lucide lucide-star fill-brand text-brand" width={18} height={18} />
          <Star className="lucide lucide-star fill-brand/40 text-brand" width={18} height={18} />
          <span className="text-white/60 text-sm ml-2">4.4 no Google</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 w-full sm:w-auto justify-center"
          >
            Fazer Reserva pelo WhatsApp
          </a>
          <a
            href="#cardapio"
            className="btn-outline text-base px-8 py-4 w-full sm:w-auto justify-center"
          >
            Ver Cardápio
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-brand font-bold text-2xl font-display">{stat.value}</div>
              <div className="text-white/50 text-xs mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <a href="#sobre" aria-label="Rolar para baixo">
          <ChevronDown
            className="lucide lucide-chevron-down text-brand/70 hover:text-brand transition-colors"
            width={32}
            height={32}
          />
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
}
