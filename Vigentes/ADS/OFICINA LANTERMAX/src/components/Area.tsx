import { MapPin, Clock } from 'lucide-react';

const cities = [
  'Camaragibe',
  'Recife',
  'São Lourenço da Mata',
  'Paulista',
  'Paudalho',
  'Aldeia',
  'Caxangá',
  'Avenida Norte',
  'Vila da Fábrica',
  'Alberto Maia',
];

export default function Area() {
  return (
    <section id="area" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-[#c0392b] font-bold text-sm uppercase tracking-widest">
            Onde estamos
          </span>
          <h2 className="mt-2 text-3xl md:text-5xl font-black text-[#0d1f3c] leading-tight">
            Área de Atendimento
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Atendemos municípios em um raio de até 30km a partir de Camaragibe — PE.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-gray-100 min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5103.129665704644!2d-35.0046185!3d-8.018512600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1b4b41b16ded%3A0xe3ec3874549acb08!2sLANTERMAX-CAR!5e1!3m2!1spt-BR!2sbr!4v1771714881069!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização LanterMAX"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="lucide lucide-map-pin w-5 h-5 text-[#c0392b] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#0d1f3c] mb-1">Endereço</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Av. Márcia de Windsor, 23 - João Paulo II<br />
                    Camaragibe - PE, 54777-100
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-3 mb-4">
                <Clock className="lucide lucide-clock w-5 h-5 text-[#c0392b] mt-0.5 flex-shrink-0" />
                <h3 className="font-bold text-[#0d1f3c]">Horário de Funcionamento</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Segunda a Sexta</span>
                  <span className="text-sm font-bold text-[#0d1f3c]">07:00 – 18:00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Sábado</span>
                  <span className="text-sm font-bold text-[#0d1f3c]">07:00 – 17:00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Domingo</span>
                  <span className="text-sm font-bold text-[#c0392b]">Fechado</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0d1f3c] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="lucide lucide-map-pin w-5 h-5 text-[#f39c12]" />
                <h3 className="font-bold text-white">Cidades Atendidas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="bg-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full border border-white/10"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
