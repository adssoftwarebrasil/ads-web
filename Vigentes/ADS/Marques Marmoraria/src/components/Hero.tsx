import { MessageCircle, Star, ArrowDown } from 'lucide-react';

const thumbs = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/cozinha-marmore-preto-ilha-pia-azulejos_1200x1600.webp',
    label: 'Cozinhas',
    active: true,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/pia-granito-cinza-torneira-metais-moderna_780x500.webp',
    label: 'Bancadas',
    active: false,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/balcao-marmore-branco-instalado-area-externa_1200x1600.webp',
    label: 'Área Externa',
    active: false,
  },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-stone-950">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 lg:hidden"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/ilha-granito-branco-luz-led-docol_1600x1197.webp")',
        }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 transition-all duration-700 ease-in-out hidden lg:block"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/cozinha-marmore-preto-ilha-pia-azulejos_1200x1600.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold-300"></div>
            <span className="section-subtitle">Aparecida de Goiânia &amp; Região</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            Pedras que<br />
            <span className="text-gold-300 italic">transformam</span>
            <br />
            ambientes
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
            Mármores, granitos, quartzos e pedras naturais nacionais e importadas. Do corte à instalação — obras de arte para o seu lar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="https://wa.me/5562992861117?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base"
            >
              <MessageCircle className="lucide lucide-message-circle" width={18} height={18} />
              Solicitar Orçamento
            </a>
            <a href="#galeria" className="btn-outline-gold text-base">
              Ver Galeria
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="lucide lucide-star text-gold-300 fill-gold-300"
                  width={16}
                  height={16}
                />
              ))}
            </div>
            <span className="text-white/60 text-sm">Marmoraria mais bem avaliada da região</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#servicos"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-gold-300 transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Explorar</span>
          <ArrowDown className="lucide lucide-arrow-down animate-bounce" width={18} height={18} />
        </a>
      </div>
      <div className="absolute right-0 top-0 bottom-0 hidden lg:flex flex-col justify-center pr-8 gap-5 z-10">
        {thumbs.map((thumb) => (
          <div
            key={thumb.label}
            className={`relative group overflow-hidden w-28 h-20 cursor-pointer rounded-sm border-2 transition-all ${
              thumb.active ? 'border-gold-300 scale-105' : 'border-transparent hover:border-gold-300'
            }`}
          >
            <img
              src={thumb.src}
              alt={thumb.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 transition-colors ${
                thumb.active ? 'bg-transparent' : 'bg-stone-950/50 group-hover:bg-stone-950/20'
              }`}
            ></div>
            <span className="absolute bottom-1.5 left-0 right-0 text-center text-white text-xs font-medium drop-shadow-md">
              {thumb.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
