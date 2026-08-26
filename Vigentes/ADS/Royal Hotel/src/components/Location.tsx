import { MapPin, Navigation, Plane, Phone, Mail, Clock } from 'lucide-react';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Location() {
  return (
    <section id="localizacao" className="py-16 md:py-24 bg-[#FAFAF8] ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-[#C8AF82] font-semibold text-sm md:text-base uppercase tracking-widest mb-3 px-4 py-1.5 bg-[#E8DCC8] rounded-full">
              Como Chegar
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
              Nossa <span className="text-[#435A4A]">Localização</span>
            </h2>
            <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              No coração de Dourados, com fácil acesso aos principais pontos da cidade
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-[#435A4A] to-[#2D3A2F] text-white p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8AF82]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#C8AF82] p-3 rounded-xl">
                      <MapPin width={28} height={28} className="text-[#2C2C2C]" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3">Nosso Endereço</h3>
                      <p className="text-base md:text-lg leading-relaxed text-white/90">
                        Rua Toshinobu Katayama, 576<br />
                        Jardim Caramuru<br />
                        Dourados - MS<br />
                        <span className="text-[#C8AF82] font-semibold">CEP: 79806-030</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="bg-[#E8DCC8] p-5 md:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#C8AF82]/30">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="bg-white p-2 rounded-lg">
                      <Navigation width={20} height={20} className="text-[#435A4A]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#2C2C2C] text-base md:text-lg">
                        Estádio Douradão
                      </h4>
                      <p className="text-sm text-[#2C2C2C]/70">Principal arena esportiva</p>
                    </div>
                  </div>
                  <p className="text-[#435A4A] font-semibold text-sm ml-11">📍 4,4 km</p>
                </div>
                <div className="bg-[#E8DCC8] p-5 md:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#C8AF82]/30">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="bg-white p-2 rounded-lg">
                      <Plane width={20} height={20} className="text-[#435A4A]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#2C2C2C] text-base md:text-lg">
                        Aeroporto de Dourados
                      </h4>
                      <p className="text-sm text-[#2C2C2C]/70">Conexões regionais</p>
                    </div>
                  </div>
                  <p className="text-[#435A4A] font-semibold text-sm ml-11">📍 14 km</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white border-2 border-[#E8DCC8] p-4 rounded-xl hover:border-[#C8AF82] transition-all duration-300 cursor-pointer hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#435A4A] p-2.5 rounded-lg">
                      <Phone width={20} height={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#2C2C2C]/60 font-medium uppercase tracking-wide">
                        WhatsApp
                      </p>
                      <p className="text-[#2C2C2C] font-semibold text-base">(67) 9236-5009</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-[#E8DCC8] p-4 rounded-xl hover:border-[#C8AF82] transition-all duration-300 cursor-pointer hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#435A4A] p-2.5 rounded-lg">
                      <Mail width={20} height={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#2C2C2C]/60 font-medium uppercase tracking-wide">
                        E-mail
                      </p>
                      <p className="text-[#2C2C2C] font-semibold text-base">
                        royalhoteldourados@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-[#E8DCC8] p-4 rounded-xl hover:border-[#C8AF82] transition-all duration-300 ">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#435A4A] p-2.5 rounded-lg">
                      <Clock width={20} height={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#2C2C2C]/60 font-medium uppercase tracking-wide">
                        Horário
                      </p>
                      <p className="text-[#2C2C2C] font-semibold text-base">Atendimento 24h</p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/Royal+Hotel/@-22.2263977,-54.80677452429553,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-[#435A4A] hover:bg-[#2D3A2F] text-white py-4 px-6 rounded-xl font-bold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <Navigation
                  width={22}
                  height={22}
                  className="group-hover:rotate-45 transition-transform duration-300"
                />
                Abrir no Google Maps
              </a>
            </div>
            <div className="lg:col-span-3 relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-[#435A4A]/20 to-[#C8AF82]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.3604760974313!2d-54.80677452429553!3d-22.2263977139103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9489a9d9c0667c31%3A0xca8306119014924d!2sRoyal%20Hotel!5e0!3m2!1spt-PT!2sbr!4v1762477974593!5m2!1spt-PT!2sbr"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Royal Hotel Dourados"
                  className="grayscale-[0.2] contrast-[1.1] saturate-[1.2]"
                  style={{ border: '0px' }}
                ></iframe>
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-xl flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#435A4A] rounded-full animate-pulse"></div>
                  <span className="font-bold text-[#2C2C2C] text-sm">Royal Hotel Dourados</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#E8DCC8] p-6 md:p-8 rounded-2xl">
              <div className="text-left sm:text-center flex-1">
                <p className="text-[#2C2C2C] text-base md:text-lg mb-2">
                  <strong className="text-[#435A4A]">Centro de Dourados</strong> - Acesso fácil e
                  rápido
                </p>
                <p className="text-[#2C2C2C]/70 text-sm md:text-base">
                  Próximo a restaurantes, comércio e pontos turísticos
                </p>
              </div>
              <button
                onClick={() => scrollTo('quartos')}
                className="bg-[#435A4A] hover:bg-[#2D3A2F] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Reserve Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
