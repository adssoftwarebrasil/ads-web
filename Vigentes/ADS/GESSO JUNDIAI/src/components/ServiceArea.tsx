import { MapPin } from './icons';

const cities = [
  'Jundiaí',
  'Várzea Paulista',
  'Itupeva',
  'Jarinu',
  'Campo Limpo Paulista',
  'Cabreúva',
];

export default function ServiceArea() {
  return (
    <section id="atendimento" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#EE1E23] font-semibold text-sm uppercase tracking-widest mb-3">
            Área de Atendimento
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Atendemos Toda a Região
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
            Entregamos materiais de gesso e drywall nas seguintes cidades:
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {cities.map((city) => (
            <div
              key={city}
              className="group flex flex-col items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:bg-[#EE1E23] hover:border-[#EE1E23] transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-[#EE1E23]/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <MapPin size={20} className="text-[#EE1E23] group-hover:text-white transition-colors" />
              </div>
              <span className="text-gray-800 group-hover:text-white font-semibold text-sm text-center leading-tight transition-colors">
                {city}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gray-950 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              Sua cidade não está na lista?
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Entre em contato conosco e verifique a disponibilidade de entrega para o seu endereço.
            </p>
          </div>
          <a
            href="https://wa.me/5511933943710"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#EE1E23] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-sm"
          >
            Consultar Entrega
          </a>
        </div>
      </div>
    </section>
  );
}
