import { Coffee, MapPin, Car, Wifi, Clock } from 'lucide-react';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const features = [
  { icon: MapPin, label: 'Localização Central em Dourados', color: '#435A4A', delay: '0s' },
  { icon: Car, label: 'Estacionamento Privativo', color: '#C8AF82', delay: '0.1s' },
  { icon: Wifi, label: 'Wi-Fi Gratuito', color: '#435A4A', delay: '0.2s' },
  { icon: Clock, label: 'Atendimento 24h', color: '#C8AF82', delay: '0.3s' },
];

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#E8DCC8] ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-[#C8AF82] font-semibold text-sm md:text-base uppercase tracking-widest mb-3 px-4 py-1.5 bg-white/60 rounded-full">
              Conheça Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
              Bem-vindo ao <span className="text-[#435A4A]">Royal Hotel</span>
            </h2>
            <p className="text-lg md:text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Tradição em Hospedagem desde 2020
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-6 bg-gradient-to-br from-[#435A4A]/20 to-[#C8AF82]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/royal%20hotel%2Fquemsomos.jpg"
                  alt="Royal Hotel - Recepção"
                  className="relative rounded-2xl shadow-2xl w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 left-6 flex gap-3 sm:gap-4"></div>
            </div>
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="space-y-5 text-[#2C2C2C]/80 text-base md:text-lg leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#435A4A] first-letter:mr-2 first-letter:float-left">
                  Nosso hotel está em funcionamento há cinco anos e temos como tradição ofertar
                  hospedagens para todos os públicos. Quartos confortáveis, do econômico ao Premium,
                  para atender empresas, famílias e viajantes.
                </p>
                <div className="bg-white/80 border-l-4 border-[#C8AF82] p-5 rounded-r-lg shadow-sm">
                  <p className="font-medium text-[#435A4A] flex items-center gap-2">
                    <Coffee className="w-5 h-5" width={24} height={24} />
                    Destaque para nosso café colonial apreciado por todos os hóspedes
                  </p>
                </div>
                <p>
                  Estamos localizados no coração de Dourados, oferecendo fácil acesso aos principais
                  pontos da cidade com todo o conforto que você merece.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.label}
                      className="group/item flex items-center gap-3 sm:gap-4 bg-white p-4 md:p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#C8AF82]/20"
                      style={{ animation: `0.5s ease-out ${f.delay} 1 normal both running fadeIn` }}
                    >
                      <div className="bg-opacity-10 p-2.5 md:p-3 rounded-lg group-hover/item:scale-110 transition-transform" style={{ color: f.color }}>
                        <Icon width={22} height={22} style={{ color: f.color }} />
                      </div>
                      <span className="text-[#2C2C2C] font-medium text-sm md:text-base">
                        {f.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollTo('quartos')}
                  className="flex-1 bg-[#435A4A] hover:bg-[#2D3A2F] text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Ver Nossos Quartos
                </button>
                <button
                  onClick={() => scrollTo('contato')}
                  className="flex-1 border-2 border-[#435A4A] text-[#435A4A] hover:bg-[#435A4A] hover:text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-300"
                >
                  Entre em Contato
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
