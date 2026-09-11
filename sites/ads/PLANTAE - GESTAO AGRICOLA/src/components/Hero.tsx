import { CheckCircle2, ArrowRight } from 'lucide-react';

const highlights = [
  'Software 100% online',
  'Suporte de alto nível',
  'Treinamentos ilimitados',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen h-[100dvh] flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgb(18, 81, 114) 0%, rgb(10, 119, 145) 60%, rgb(18, 81, 114) 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgb(87, 191, 191) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgb(168, 201, 74) 0%, transparent 40%)',
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255, 255, 255, 0.3) 60px, rgba(255, 255, 255, 0.3) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255, 255, 255, 0.3) 60px, rgba(255, 255, 255, 0.3) 61px)',
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-24 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-plantae-green animate-pulse"></span>
              <span className="text-white/90 text-sm font-semibold tracking-widest uppercase">
                Gestão Agrícola
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-shadow">
              ELEVE A GESTÃO
              <span className="block text-plantae-green">DA SUA PROPRIEDADE</span>A OUTRO PATAMAR
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Solução completa e intuitiva para gestão agrícola. Controle total do seu campo, do
              escritório ao armazém, de qualquer lugar.
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    width={20}
                    height={20}
                    className="text-plantae-green flex-shrink-0"
                  />
                  <span className="text-white/90 text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5566992921858"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-plantae-green text-plantae-dark font-black px-8 py-4 rounded-full hover:bg-[#bcd95a] transition-all duration-200 hover:shadow-2xl hover:scale-105 text-base"
              >
                Solicitar Demonstração
                <ArrowRight width={20} height={20} />
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-200 text-base"
              >
                Conhecer Soluções
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-plantae-green/20 rounded-3xl blur-3xl scale-110"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/plantae/Plantae_Palma_da_mao.png"
                alt="Plantae App Mobile"
                className="relative z-10 max-w-sm xl:max-w-md w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs font-semibold tracking-widest uppercase">
          Role para baixo
        </span>
        <div className="w-0.5 h-8 bg-white/30 rounded-full"></div>
      </div>
    </section>
  );
}
