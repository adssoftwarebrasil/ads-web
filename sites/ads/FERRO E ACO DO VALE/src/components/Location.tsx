import { MapPin, Phone, Clock } from 'lucide-react';

const schedule = [
  { day: 'Segunda-feira', hours: '07:30 – 18:00' },
  { day: 'Terça-feira', hours: '07:30 – 18:00' },
  { day: 'Quarta-feira', hours: '07:30 – 18:00' },
  { day: 'Quinta-feira', hours: '07:30 – 18:00' },
  { day: 'Sexta-feira', hours: '07:30 – 18:00' },
  { day: 'Sábado', hours: '07:30 – 12:00' },
];

export default function Location() {
  return (
    <section id="localizacao" className="py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3 block">
            Onde Estamos
          </span>
          <h2 className="section-title text-white mb-4">Localização e Horários</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Venha nos visitar ou entre em contato. Estamos prontos para atender você.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="animate-on-scroll bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="lucide lucide-map-pin w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">Endereço</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    R. 17 de Março, Quadra 03 – Lote 11A
                    <br />
                    St. Estrela Dalva, Goiânia – GO
                    <br />
                    CEP: 74475-130
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="lucide lucide-phone w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-0.5">Telefone</h3>
                  <a href="tel:+556295226886" className="text-brand-orange hover:underline text-sm font-medium">
                    (62) 9 9522-6886
                  </a>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="lucide lucide-clock w-5 h-5 text-brand-orange" />
                </div>
                <h3 className="text-white font-bold text-base">Horário de Funcionamento</h3>
              </div>
              <div className="space-y-2">
                {schedule.map((s) => (
                  <div
                    key={s.day}
                    className="flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-colors hover:bg-zinc-800"
                  >
                    <span className="font-medium text-gray-300">{s.day}</span>
                    <span className="font-semibold text-gray-400">{s.hours}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-colors bg-brand-orange/10 border border-brand-orange/30">
                  <span className="font-medium text-brand-orange">
                    Domingo
                    <span className="ml-2 text-xs bg-brand-orange text-white px-1.5 py-0.5 rounded font-semibold">
                      Hoje
                    </span>
                  </span>
                  <span className="text-red-500 font-medium text-xs uppercase tracking-wide">Fechado</span>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-on-scroll h-full">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl h-full min-h-[420px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.5726291308906!2d-49.327829624852676!3d-16.598006084160765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e8b4b1e4bc189%3A0x29135c63b3f5854b!2sFERRO%20E%20ACO%20DO%20VALE!5e0!3m2!1spt-BR!2sbr!4v1776711617007!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Ferro e Aço do Vale"
                style={{ border: '0px', minHeight: '420px', filter: 'invert(90%) hue-rotate(180deg)' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
