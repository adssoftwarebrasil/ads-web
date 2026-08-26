import { MapPin, Phone, ArrowRight } from 'lucide-react';

const BRAND = 'rgb(172, 0, 0)';

const stats = [
  { value: '8+', line1: 'Anos de', line2: 'Experiência' },
  { value: '5', line1: 'Estados de', line2: 'Atuação' },
  { value: '6', line1: 'Áreas', line2: 'Especializadas' },
];

export default function Hero() {
  const scrollToAreas = () => {
    document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://brazaoadvocacia.com/wp-content/uploads/2024/06/Banner-Site-2.png"
          alt="Escritório Brazão Advocacia"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto h-full flex items-center">
          <div className="max-w-3xl w-full">
            <div className="mb-4 sm:mb-6 animate-fade-in">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/brazao/objects/download?preview=true&prefix=logoadv.webp&version_id=null"
                alt="Brazão Advocacia e Consultoria"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border-2 shadow-xl mb-4 sm:mb-6 animate-fade-in-delay"
              style={{ borderColor: BRAND }}
            >
              <div
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: BRAND }}
              ></div>
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                Desde 2016 • Experiência Comprovada
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6 animate-fade-in-delay-2">
              Advocacia
              <br />
              <span style={{ color: BRAND }}>Especializada</span>
              <br />
              <span className="text-white">Protegendo Seus Direitos</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed mb-6 sm:mb-8 animate-fade-in-delay-3 font-light">
              Atendimento <strong className="font-bold text-white">personalizado</strong> e
              <strong className="font-bold text-white"> humanizado</strong> em Direito Militar,
              Previdenciário, Civil, Saúde e Consumidor.
            </p>
            <div className="flex items-center gap-3 text-white mb-6 sm:mb-8 animate-fade-in-delay-3">
              <MapPin
                width={18}
                height={18}
                className="lucide lucide-map-pin flex-shrink-0"
                style={{ color: BRAND }}
              />
              <span className="text-sm sm:text-base md:text-lg font-semibold">
                Belém/PA e todo o Brasil
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5591993424086"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 sm:gap-3 shadow-xl hover:shadow-2xl overflow-hidden"
                style={{ backgroundColor: BRAND }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Phone
                  width={20}
                  height={20}
                  className="lucide lucide-phone group-hover:rotate-12 transition-transform relative z-10"
                />
                <span className="relative z-10">Fale com Especialista</span>
                <ArrowRight
                  width={18}
                  height={18}
                  className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform relative z-10"
                />
              </a>
              <button
                onClick={scrollToAreas}
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center gap-2 sm:gap-3 bg-white hover:scale-105"
                style={{ border: `2px solid ${BRAND}`, color: BRAND }}
              >
                <span>Nossas Áreas de Atuação</span>
                <ArrowRight
                  width={18}
                  height={18}
                  className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
            <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6 animate-fade-in-delay-5">
              {stats.map((s) => (
                <div key={s.value} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/10 border border-white/20">
                    <span className="text-lg sm:text-xl font-black text-white">{s.value}</span>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-300 font-semibold">{s.line1}</div>
                    <div className="text-sm sm:text-base text-white font-bold">{s.line2}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/70 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
