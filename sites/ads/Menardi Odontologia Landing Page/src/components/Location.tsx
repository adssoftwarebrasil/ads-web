import { MapPin, Clock, Navigation, Phone } from 'lucide-react';

const hours = [
  { day: 'Segunda a Sexta', time: '08:30 - 18:30' },
  { day: 'Sábado', time: '08:30 - 13:30' },
  { day: 'Domingo', time: 'Fechado' },
];

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Visite Nossa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Clínica
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Estamos localizados em Ourinhos-SP, prontos para cuidar do seu sorriso
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-3 rounded-xl">
                  <MapPin size={28} className="lucide lucide-map-pin text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Endereço</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Av. Domingos Carmelingo Caló, 2668
                    <br />
                    Vila São José
                    <br />
                    Ourinhos - SP
                    <br />
                    CEP: 19905-136
                  </p>
                  <a
                    href="https://www.google.com/maps/dir//Av.+Domingos+Carmelingo+Cal%C3%B3,+2668+-+Vila+Sao+Jose,+Ourinhos+-+SP,+19905-136"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-teal-600 hover:text-teal-700 font-semibold transition-colors group"
                  >
                    <Navigation
                      size={18}
                      className="lucide lucide-navigation group-hover:translate-x-1 transition-transform"
                    />
                    Como chegar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-3 rounded-xl">
                  <Clock size={28} className="lucide lucide-clock text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Horário de Atendimento</h3>
                  <div className="space-y-3">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0"
                      >
                        <span className="text-slate-700 font-medium">{h.day}</span>
                        <span className="text-slate-900 font-semibold">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-2xl shadow-lg text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone size={28} className="lucide lucide-phone text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Emergências 24h</h3>
                  <a href="tel:+5514996933360" className="text-2xl font-bold hover:underline">
                    (14) 99693-3360
                  </a>
                  <p className="text-white/90 mt-2 text-sm">
                    Atendimento de urgência mediante contato prévio
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6797649194746!2d-49.8837422746868!3d-22.99880047919036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c0183e8754e31b%3A0x755312b1794459ad!2sCl%C3%ADnica%20Menardi%20Odontologia%20%7C%20Dentista%20%7C%20Dr.%20Luciano%20Menardi!5e0!3m2!1spt-PT!2sbr!4v1761875104201!5m2!1spt-PT!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Clínica Menardi Odontologia"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
