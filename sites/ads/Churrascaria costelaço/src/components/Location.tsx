import { MapPin, Navigation, Clock, Phone, Mail } from 'lucide-react';

interface Schedule {
  day: string;
  hours: string;
}

const schedules: Schedule[] = [
  { day: 'Segunda-feira', hours: '17:00 - 23:00' },
  { day: 'Terça-feira', hours: '17:00 - 23:00' },
  { day: 'Quarta-feira', hours: '17:00 - 23:00' },
  { day: 'Quinta-feira', hours: '17:00 - 23:00' },
  { day: 'Sexta-feira', hours: '17:00 - 23:00' },
  { day: 'Sábado', hours: '09:00 - 16:00, 17:00 - 23:00' },
  { day: 'Domingo e Feriados', hours: '09:00 - 16:00' },
];

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F7BC33] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F7BC33]"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Estamos te esperando
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#25262A] mb-4">
            Visite-nos em <span className="text-[#F7BC33]">Sinop</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Ambiente climatizado, área kids e o melhor churrasco de Mato Grosso.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="group bg-gray-50 rounded-[2rem] p-8 transition-all hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-[#F7BC33] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#F7BC33]/20">
                  <MapPin size={24} className="text-[#25262A]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#25262A] mb-1">
                    Localização
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Av. dos Ipês, 356 - Jardim Imperial
                    <br />
                    Sinop - MT
                    <br />
                    <span className="text-sm font-medium">CEP 78550-050</span>
                  </p>
                  <a
                    href="https://maps.app.goo.gl/vS6pT9X8z9Z9Z9Z9Z"
                    target="_blank"
                    className="inline-flex items-center gap-2 mt-4 text-[#F7BC33] font-bold text-sm hover:underline"
                  >
                    <Navigation size={16} /> COMO CHEGAR
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <div className="flex gap-5 mb-6">
                <div className="w-12 h-12 bg-[#25262A] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-[#F7BC33]" />
                </div>
                <h3 className="text-xl font-bold text-[#25262A] mt-2">
                  Horários
                </h3>
              </div>
              <div className="space-y-3">
                {schedules.map((s) => (
                  <div
                    key={s.day}
                    className="flex justify-between items-center text-sm md:text-base border-b border-gray-200/50 pb-2 last:border-0"
                  >
                    <span className="text-gray-500 font-medium">{s.day}</span>
                    <span className="text-[#25262A] font-bold">{s.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:5566996360441"
                className="flex items-center justify-center gap-3 bg-[#F7BC33] text-[#25262A] rounded-2xl py-4 font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <Phone size={20} /> Ligue Agora
              </a>
              <a
                href="mailto:tiagobastosmt@gmail.com"
                className="flex items-center justify-center gap-3 bg-[#25262A] text-white rounded-2xl py-4 font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-1 px-4"
              >
                <Mail size={20} /> <span className="truncate">E-mail</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 h-[400px] lg:h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-inner border-8 border-gray-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.353386616467!2d-55.5034606!3d-11.85419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9339399238e8869d%3A0xc47f0709f6b64175!2sAv.%20dos%20Ip%C3%AAs%2C%20356%20-%20Jardim%20Imperial%2C%20Sinop%20-%20MT!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Costelaço"
              className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              style={{ border: '0px', filter: 'grayscale(0.2) contrast(1.1)' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
