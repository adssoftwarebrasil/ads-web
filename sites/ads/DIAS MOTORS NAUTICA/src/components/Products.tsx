import { ChevronLeft, ChevronRight, ChevronDown, MessageCircle, Cog, Waves } from 'lucide-react';

interface Boat {
  name: string;
  image: string;
  alt: string;
  dots: number;
  aosDelay: number;
}

const BOATS: Boat[] = [
  { name: 'Apolus 500', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FBarcos%2FApolus%20500%2Fapolus%20500%201.jpg', alt: 'Apolus 500 - 1', dots: 3, aosDelay: 0 },
  { name: 'Apolus 550 Freestyle', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FBarcos%2FApolus%20550%20Freestyle%2FAPOLUS7.jpg', alt: 'Apolus 550 Freestyle - 1', dots: 2, aosDelay: 100 },
  { name: 'Apolus 600', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FBarcos%2FApolus%20600%2FWhatsAp.jpeg', alt: 'Apolus 600 - 1', dots: 3, aosDelay: 200 },
  { name: 'Apolus TR', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FBarcos%2FApolus%20TR%2FWhatsApp%20Ima.jpeg', alt: 'Apolus TR - 1', dots: 3, aosDelay: 300 },
  { name: 'Grand Apolus Extreme', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FBarcos%2FGrand%20Apolus%20Extreme%2FImag.jpg', alt: 'Grand Apolus Extreme - 1', dots: 3, aosDelay: 400 },
];

interface Motor {
  name: string;
  image: string;
  delay: string;
}

const MOTORS: Motor[] = [
  { name: '15HP', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FMotores%2F15HP%2FWhatsApp.png', delay: '0s' },
  { name: '30HP', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FMotores%2F30HP%2F20379.png', delay: '0.05s' },
  { name: '40 AWH-AMH', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FMotores%2F40AWH-AMH%2F40AWHS%202.png', delay: '0.1s' },
  { name: '40 AWS', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FMotores%2F40AWS%2F40aws.png', delay: '0.15s' },
  { name: 'F115', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FMotores%2FF115%2FVF115%202.png', delay: '0.2s' },
  { name: 'F150', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FMotores%2FF150%2FVF150%202.png', delay: '0.25s' },
  { name: 'F20', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FMotores%2FF20%2Ff20.png', delay: '0.3s' },
  { name: 'F200', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FMotores%2FF200%2FVF200.png', delay: '0.35s' },
  { name: 'F25', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FMotores%2FF25%2Ff25%202.png', delay: '0.4s' },
  { name: 'F250', image: 'https://storage.lucasmendes.dev/site-sp/diasmotors%2FMotores%2FF250%2FVF225.png', delay: '0.45s' },
];

function BoatCard({ boat }: { boat: Boat }) {
  return (
    <div
      className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={boat.aosDelay}
    >
      <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
        <img
          src={boat.image}
          alt={boat.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg text-gray-800 hover:bg-white hover:text-blue-600 transition-all active:scale-95 z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
          aria-label="Anterior"
        >
          <ChevronLeft className="lucide lucide-chevron-left" size={20} strokeWidth={2.5} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg text-gray-800 hover:bg-white hover:text-blue-600 transition-all active:scale-95 z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
          aria-label="Próximo"
        >
          <ChevronRight className="lucide lucide-chevron-right" size={20} strokeWidth={2.5} />
        </button>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
          {Array.from({ length: boat.dots }).map((_, i) => (
            <div
              key={i}
              className={
                i === 0
                  ? 'h-1.5 rounded-full transition-all duration-300 bg-white w-6'
                  : 'h-1.5 rounded-full transition-all duration-300 bg-white/50 w-1.5'
              }
            ></div>
          ))}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{boat.name}</h3>
        <p className="text-sm text-slate-500 mb-6 flex-grow">
          Ideal para pesca esportiva e lazer com a família.
        </p>
        <a
          href={`https://wa.me/5562982830047?text=Olá! Gostaria de um orçamento para o barco ${boat.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          <MessageCircle className="lucide lucide-message-circle" size={18} />
          Solicitar Orçamento
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Embarcações Levefort */}
        <div className="mb-24">
          <div className="text-center mb-16 transition-all duration-700 transform opacity-100 translate-y-0">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Nossa Frota
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Embarcações <span className="text-blue-600">Levefort</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tecnologia em alumínio naval para garantir durabilidade, leveza e
              alta performance na água.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {BOATS.slice(0, 3).map((boat) => (
              <BoatCard key={boat.name} boat={boat} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {BOATS.slice(3).map((boat) => (
              <BoatCard key={boat.name} boat={boat} />
            ))}
          </div>
        </div>

        {/* Motores Yamaha */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <Cog className="lucide lucide-cog text-blue-600" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Motores Yamaha
                </h2>
              </div>
              <p className="text-slate-600 max-w-xl">
                Potência confiável para sua navegação. Do portátil ao alta
                performance.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 mb-8">
            {MOTORS.map((motor) => (
              <a
                key={motor.name}
                href={`https://wa.me/5562982830047?text=Tenho interesse no Motor Yamaha ${motor.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
                style={{ animation: `0.5s ease-out ${motor.delay} 1 normal both running fadeIn` }}
              >
                <div className="w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative p-8 flex items-center justify-center border-b border-gray-100 overflow-hidden">
                  <img
                    src={motor.image}
                    alt={`Motor ${motor.name}`}
                    className="max-w-full max-h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500 relative z-10"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-center bg-white min-h-[80px] flex flex-col justify-center">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                    Yamaha
                  </span>
                  <h3 className="font-bold text-slate-800 text-base md:text-lg group-hover:text-blue-700 transition-colors leading-tight">
                    {motor.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Ver Mais Motores</span>
              <ChevronDown className="lucide lucide-chevron-down relative z-10 group-hover:translate-y-1 transition-transform duration-300" size={22} />
              <span className="relative z-10 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                +5
              </span>
            </button>
          </div>
        </div>

        {/* WaveRunner CTA */}
        <div>
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative transition-all duration-700 delay-300 transform opacity-100 translate-y-0">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/20">
                  <Waves className="lucide lucide-waves text-cyan-200" size={18} />
                  <span className="text-sm font-medium tracking-wide">
                    Linha WaveRunner
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Adrenalina Pura <br />
                  com Jet-Skis Yamaha
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-lg leading-relaxed">
                  Experimente a liberdade na água com a tecnologia e
                  confiabilidade que só a Yamaha oferece. Diversão garantida para
                  toda a família.
                </p>
                <a
                  href="https://wa.me/5562982830047?text=Gostaria de saber mais sobre os Jet-Skis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  Consultar Modelos
                  <ChevronRight className="lucide lucide-chevron-right" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
