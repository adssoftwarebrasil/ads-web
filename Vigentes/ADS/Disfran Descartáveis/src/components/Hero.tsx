import { useEffect, useState } from 'react';
import { Sparkles, TrendingUp, ChevronRight, ChevronLeft } from 'lucide-react';

interface Slide {
  badge: string;
  title: string;
  subtitle: string;
  bar: string;
  glow: string;
  image: string;
  number: string;
  name: string;
  variety: string;
}

const slides: Slide[] = [
  {
    badge: 'Mais Vendido',
    title: 'Alumínio',
    subtitle: 'Assadeiras e bandejas de alta qualidade para seu negócio',
    bar: 'from-orange-500 to-red-600',
    glow: 'from-orange-500 to-red-600',
    image:
      'https://storage.lucasmendes.dev/site-sp/disfran/Categoria%20ALUMINIO/Assadeira%20Aluminio%20Baixela.jpg',
    number: '#1',
    name: 'Alumínio',
    variety: '+28 itens',
  },
  {
    badge: 'Novidade',
    title: 'Embalagens',
    subtitle: 'Soluções práticas e versáteis para todos os tipos de produtos',
    bar: 'from-blue-500 to-indigo-600',
    glow: 'from-blue-500 to-indigo-600',
    image:
      'https://storage.lucasmendes.dev/site-sp/disfran/Embalagens%20Pla%CC%81sticas/Colomba%20G-34.png',
    number: '#2',
    name: 'Embalagens Plásticas',
    variety: '+42 itens',
  },
  {
    badge: 'Essencial',
    title: 'Limpeza',
    subtitle: 'Linha completa de produtos de higiene e limpeza profissional',
    bar: 'from-green-500 to-emerald-600',
    glow: 'from-green-500 to-emerald-600',
    image:
      'https://storage.lucasmendes.dev/site-sp/disfran/Higiene%20e%20Limpeza/A%CC%81lcool%2070_%20Gel.webp',
    number: '#3',
    name: 'Higiene e Limpeza',
    variety: '+42 itens',
  },
  {
    badge: 'Sustentável',
    title: 'Ecológico',
    subtitle: 'Produtos sustentáveis e biodegradáveis para um futuro melhor',
    bar: 'from-teal-500 to-cyan-600',
    glow: 'from-teal-500 to-cyan-600',
    image:
      'https://storage.lucasmendes.dev/site-sp/disfran/Papel%20e%20Ecolo%CC%81gico/Copo%20Papel.webp',
    number: '#4',
    name: 'Papel e Ecológico',
    variety: '+35 itens',
  },
  {
    badge: 'Popular',
    title: 'Delivery',
    subtitle: 'Embalagens ideais e resistentes para entregas perfeitas',
    bar: 'from-purple-500 to-pink-600',
    glow: 'from-purple-500 to-pink-600',
    image:
      'https://storage.lucasmendes.dev/site-sp/disfran/Delivery/Kraft%20Mix.webp',
    number: '#5',
    name: 'Delivery',
    variety: '+27 itens',
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setActive((p) => (p + 1) % slides.length);

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[rgb(255,243,229)] via-white to-[rgb(255,243,229)]"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-96 w-96 animate-pulse rounded-full bg-[rgb(153,21,16)] blur-3xl"></div>
        <div
          className="absolute bottom-0 right-0 h-96 w-96 animate-pulse rounded-full bg-[rgb(2,74,169)] blur-3xl"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute left-1/2 top-1/2 h-96 w-96 animate-pulse rounded-full bg-purple-400 blur-3xl"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgb(153, 21, 16) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text panel */}
          <div className="relative z-10 space-y-8">
            {slides.map((slide, i) => (
              <div
                key={slide.title}
                className={`transition-all duration-700 ease-out ${
                  i === active
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute -translate-x-20 pointer-events-none'
                }`}
              >
                <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 shadow-xl border-2 border-[rgb(153,21,16)]/10">
                  <Sparkles className="lucide lucide-sparkles text-[rgb(153,21,16)]" width={18} height={18} />
                  <span className="text-sm font-bold bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] bg-clip-text text-transparent">
                    {slide.badge}
                  </span>
                </div>
                <h1 className="mb-4 text-7xl font-black leading-[0.95] md:text-8xl lg:text-9xl">
                  <span className="bg-gradient-to-r from-[rgb(153,21,16)] via-[rgb(2,74,169)] to-[rgb(153,21,16)] bg-clip-text text-transparent animate-gradient">
                    {slide.title}
                  </span>
                </h1>
                <div className="mb-6 flex items-center gap-3">
                  <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${slide.bar}`}></div>
                  <TrendingUp className="lucide lucide-trending-up text-[rgb(2,74,169)]" width={24} height={24} />
                </div>
                <p className="mb-10 text-xl leading-relaxed text-gray-700 md:text-2xl font-medium max-w-xl">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(153,21,16,0.5)]">
                    <span className="relative z-10 flex items-center gap-3">
                      Ver Produtos
                      <ChevronRight className="lucide lucide-chevron-right transition-transform group-hover:translate-x-2" width={24} height={24} strokeWidth={3} />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(2,74,169)] to-[rgb(153,21,16)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </button>
                  <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-6 py-3 shadow-lg">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                    <span className="text-sm font-semibold text-gray-700">Estoque Disponível</span>
                  </div>
                </div>
              </div>
            ))}
            {/* Dots */}
            <div className="mt-12 flex items-center gap-3">
              {slides.map((slide, i) => (
                <button
                  key={slide.title}
                  onClick={() => setActive(i)}
                  className="group relative overflow-hidden rounded-full transition-all duration-500"
                  aria-label={`Ir para slide ${i + 1}`}
                >
                  {i === active ? (
                    <>
                      <div className="transition-all duration-500 h-3 w-16 bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] shadow-lg"></div>
                      <div className="absolute inset-0 animate-pulse bg-white/30 rounded-full"></div>
                    </>
                  ) : (
                    <div className="transition-all duration-500 h-3 w-3 bg-gray-300 group-hover:bg-gray-400 group-hover:w-10"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* Image panel */}
          <div className="relative">
            {slides.map((slide, i) => (
              <div
                key={slide.title}
                className={`transition-all duration-1000 ease-out ${
                  i === active
                    ? 'opacity-100 scale-100 rotate-0'
                    : 'opacity-0 scale-90 rotate-6 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="relative">
                  <div className={`absolute -inset-8 rounded-[4rem] bg-gradient-to-br ${slide.glow} opacity-20 blur-3xl animate-pulse`}></div>
                  <div className="relative overflow-hidden rounded-[3rem] bg-white p-8 shadow-2xl border-4 border-white/50">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 aspect-video overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                      {[1, 2, 3, 4].map((n) => (
                        <div
                          key={n}
                          className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg"
                          style={{
                            animation: `0.6s ease-out ${0.1 + n * 0.1}s 1 normal both running fadeIn`,
                          }}
                        >
                          <img
                            src={slide.image}
                            alt={`${slide.title} ${n}`}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="absolute -top-4 -right-4 rounded-2xl bg-gradient-to-br from-[rgb(153,21,16)] to-[rgb(2,74,169)] px-6 py-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <p className="text-sm font-bold text-white/80">{slide.number}</p>
                      <p className="text-2xl font-black text-white">{slide.name}</p>
                    </div>
                    <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-6 py-4 shadow-2xl border-2 border-[rgb(153,21,16)]/10">
                      <p className="text-sm font-semibold text-gray-600">Variedade</p>
                      <p className="text-3xl font-black bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] bg-clip-text text-transparent">
                        {slide.variety}
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute -top-6 left-1/4 h-24 w-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-30 blur-2xl animate-bounce"
                    style={{ animationDuration: '3s' }}
                  ></div>
                  <div
                    className="absolute -bottom-6 right-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 blur-2xl animate-bounce"
                    style={{ animationDuration: '4s', animationDelay: '0.5s' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 z-30 -translate-y-1/2 rounded-2xl bg-white/95 p-5 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] border-2 border-gray-100"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="lucide lucide-chevron-left text-[rgb(153,21,16)]" width={32} height={32} strokeWidth={3} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 z-30 -translate-y-1/2 rounded-2xl bg-white/95 p-5 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] border-2 border-gray-100"
        aria-label="Próximo slide"
      >
        <ChevronRight className="lucide lucide-chevron-right text-[rgb(153,21,16)]" width={32} height={32} strokeWidth={3} />
      </button>
    </section>
  );
}
