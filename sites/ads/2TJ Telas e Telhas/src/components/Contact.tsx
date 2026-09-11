import { Clock, Calendar, MapPin } from 'lucide-react';
import { openWhatsApp } from './WhatsAppIcon';

interface Schedule {
  day: string;
  hours: string;
  valueClass: string;
  delay: string;
}

const schedule: Schedule[] = [
  {
    day: 'Segunda a Sexta',
    hours: '08:00 às 17:45',
    valueClass: 'text-[rgb(238,115,62)]',
    delay: '200ms',
  },
  {
    day: 'Sábado',
    hours: '08:00 às 13:00',
    valueClass: 'text-[rgb(238,115,62)]',
    delay: '300ms',
  },
  {
    day: 'Domingo',
    hours: 'FECHADO',
    valueClass: 'text-red-400',
    delay: '400ms',
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="transition-all duration-1000 transform opacity-100 translate-x-0">
            <div className="bg-gradient-to-br from-[rgb(42,38,43)] to-[rgb(60,55,58)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[rgb(238,115,62)] rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Clock
                    width={24}
                    height={24}
                    strokeWidth={2}
                    className="lucide lucide-clock text-white sm:w-8 sm:h-8"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Horários de Funcionamento
                </h2>
              </div>
              <div className="space-y-4">
                {schedule.map(({ day, hours, valueClass, delay }) => (
                  <div
                    key={day}
                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 opacity-100 translate-y-0"
                    style={{ transitionDelay: delay }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                      <div className="flex items-center gap-3">
                        <Calendar
                          width={20}
                          height={20}
                          strokeWidth={2}
                          className="lucide lucide-calendar text-[rgb(238,115,62)]"
                        />
                        <span className="font-semibold text-base sm:text-lg">
                          {day}
                        </span>
                      </div>
                      <span className={`font-bold text-base sm:text-lg ${valueClass}`}>
                        {hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[rgb(238,115,62)] rounded-xl">
                <p className="text-center font-semibold text-sm sm:text-base md:text-lg">
                  ⚡ Atendimento rápido e personalizado durante todo o horário
                  comercial
                </p>
              </div>
            </div>
          </div>
          <div
            className="transition-all duration-1000 transform opacity-100 translate-x-0"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-gradient-to-br from-[rgb(238,115,62)] to-orange-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl text-white h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <MapPin
                    width={24}
                    height={24}
                    strokeWidth={2}
                    className="lucide lucide-map-pin text-white sm:w-8 sm:h-8"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Área de Atendimento
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white border-opacity-30">
                  <div className="flex items-start gap-4">
                    <MapPin
                      width={24}
                      height={24}
                      strokeWidth={2}
                      className="lucide lucide-map-pin text-white flex-shrink-0 mt-1 sm:w-8 sm:h-8"
                    />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        Distrito Federal e Entorno
                      </h3>
                      <p className="text-white text-opacity-90 leading-relaxed text-base sm:text-lg">
                        Atendemos toda a região do DF e cidades do entorno com
                        agilidade e qualidade
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl sm:text-3xl font-bold mb-1">3+</div>
                    <div className="text-xs sm:text-sm text-white text-opacity-90">
                      Anos de Experiência
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl sm:text-3xl font-bold mb-1">
                      500+
                    </div>
                    <div className="text-xs sm:text-sm text-white text-opacity-90">
                      Clientes Satisfeitos
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-6 text-[rgb(42,38,43)]">
                  <h4 className="font-bold text-lg sm:text-xl mb-3 flex items-center gap-2">
                    <span>📍</span> Como nos encontrar
                  </h4>
                  <p className="leading-relaxed text-sm sm:text-base">
                    Entre em contato pelo WhatsApp para consultar disponibilidade
                    na sua região e receber informações sobre entrega.
                  </p>
                  <button
                    onClick={openWhatsApp}
                    className="mt-4 w-full bg-[rgb(238,115,62)] text-white py-3 rounded-lg font-semibold hover:bg-[rgb(218,95,42)] transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  >
                    Consultar Atendimento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
