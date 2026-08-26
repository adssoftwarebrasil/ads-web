import { Clock, Phone, MapPin, Mail } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../constants';

interface City {
  name: string;
  state: string;
  highlight: boolean;
}

const cities: City[] = [
  { name: 'Valparaíso de Goiás', state: 'GO', highlight: true },
  { name: 'Cidade Ocidental', state: 'GO', highlight: true },
  { name: 'Novo Gama', state: 'GO', highlight: true },
  { name: 'Santa Maria', state: 'DF', highlight: true },
  { name: 'Gama', state: 'DF', highlight: true },
  { name: 'Brasília e DF', state: 'DF', highlight: false },
  { name: 'Luziânia', state: 'GO', highlight: false },
  { name: 'Entorno do DF', state: 'GO/DF', highlight: false },
];

export default function Coverage() {
  return (
    <section id="atendimento" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              Área de cobertura
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 mb-6 leading-tight">
              Atendemos no DF e região do entorno
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Nosso raio de atendimento cobre até 30km ao redor de nossa base, incluindo as
              principais cidades do Entorno do DF com agilidade e pontualidade.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-0.5">Horário de Atendimento</p>
                  <p className="text-gray-500 text-sm">
                    Segunda a Sexta: 08h às 12h e 14h às 18h
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-0.5">WhatsApp / Telefone</p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-secondary text-sm font-semibold hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-0.5">Endereço</p>
                  <p className="text-gray-500 text-sm">Rua 115 QD 176 LT 17</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-0.5">E-mail</p>
                  <a
                    href="mailto:btuarcondicionadof@gmail.com"
                    className="text-gray-500 text-sm hover:text-secondary transition-colors"
                  >
                    btuarcondicionadof@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin size={18} className="text-secondary" />
              Cidades atendidas
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className={
                    city.highlight
                      ? 'flex items-center gap-3 rounded-xl px-4 py-3 border transition-all bg-primary text-white border-primary shadow-md'
                      : 'flex items-center gap-3 rounded-xl px-4 py-3 border transition-all bg-white text-gray-700 border-gray-100 shadow-sm'
                  }
                >
                  <MapPin
                    size={14}
                    className={city.highlight ? 'text-secondary-light' : 'text-secondary'}
                  />
                  <div>
                    <p className="font-semibold text-sm leading-tight">{city.name}</p>
                    <p className={city.highlight ? 'text-xs text-white/70' : 'text-xs text-gray-400'}>
                      {city.state}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4">
              * Cidades em destaque são foco principal de atendimento. Demais regiões dentro do raio
              de 30km também são atendidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
