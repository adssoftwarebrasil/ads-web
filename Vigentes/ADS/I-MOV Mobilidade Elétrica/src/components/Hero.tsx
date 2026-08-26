import { useEffect, useState } from 'react';
import { Zap, ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  { src: 'https://storage.lucasmendes.dev/site-sp/i-move%2FONN%20N1%20100W%20-%20AZUL%20CE%CC%81U.webp', alt: 'Bike 1' },
  { src: 'https://storage.lucasmendes.dev/site-sp/i-move%2FCRUISER%20500W.webp', alt: 'Bike 2' },
  { src: 'https://storage.lucasmendes.dev/site-sp/i-move%2FX12%20-%201000W.webp', alt: 'Bike 3' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#e0fd2c]/10">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
      </div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#e0fd2c]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#035772]/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] animate-slide-up">
                ESTÁ PRONTO
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035772] to-[#e0fd2c]">
                  PARA O FUTURO?
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[#035772] animate-slide-up-delayed">
                Encontre a liberdade que você procura
              </p>
            </div>
            <div className="relative animate-slide-up-delayed-2">
              <div className="absolute inset-0 bg-[#e0fd2c] rounded-2xl blur-xl opacity-60 animate-pulse-slow"></div>
              <div className="relative bg-gradient-to-r from-[#e0fd2c] to-[#c5e024] p-1 rounded-2xl shadow-2xl">
                <div className="bg-black text-white px-6 py-3 rounded-xl">
                  <div className="flex items-center justify-center gap-2 font-black text-sm sm:text-base">
                    <Zap width={20} height={20} className="animate-bounce" />
                    <span className="animate-pulse-text">NÃO PRECISA DE CNH</span>
                    <Zap width={20} height={20} className="animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 animate-slide-up-delayed-3">
              <button
                onClick={() => scrollTo('produtos')}
                className="group relative bg-[#e0fd2c] text-black px-8 py-3.5 rounded-full font-bold text-base overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  VER PRODUTOS
                  <ChevronRight width={20} height={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#035772] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold gap-2">
                  VER PRODUTOS
                  <ChevronRight width={20} height={20} />
                </span>
              </button>
              <button
                onClick={() => scrollTo('test-ride')}
                className="group relative border-2 border-[#035772] text-[#035772] px-8 py-3.5 rounded-full font-bold text-base hover:text-white transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">AGENDAR TEST RIDE</span>
                <div className="absolute inset-0 bg-[#035772] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
          <div className="relative animate-fade-in-right">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#e0fd2c]/30 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#035772]/20 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    current === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-2.5 rounded-full shadow-xl transition-all hover:scale-110 group"
              >
                <ChevronLeft width={22} height={22} className="text-[#035772] group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-2.5 rounded-full shadow-xl transition-all hover:scale-110 group"
              >
                <ChevronRight width={22} height={22} className="text-[#035772] group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === i ? 'w-8 bg-[#e0fd2c]' : 'w-2 bg-gray-400 hover:bg-gray-600'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-2.5 shadow-xl border-2 border-[#e0fd2c] animate-bounce-slow">
              <p className="text-xs font-bold text-[#035772]">🇧🇷 Produção Nacional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
