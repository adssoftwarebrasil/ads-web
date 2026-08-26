import { MapPin, CheckCircle2, Globe } from 'lucide-react';

const cities = [
  'Ribeirão Preto',
  'Sertãozinho',
  'Jaboticabal',
  'Araraquara',
  'São Carlos',
  'Franca',
  'Barretos',
  'Bebedouro',
  'Matão',
  'Taquaritinga',
  'Cravinhos',
  'Batatais',
];

export default function WhereWeWork() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(64,102,215)] to-[rgb(62,215,252)] rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <MapPin width={120} height={120} className="text-[rgb(64,102,215)] mx-auto mb-6" />
                    <div className="text-4xl font-bold text-gray-900 mb-2">Ribeirão Preto</div>
                    <div className="text-xl text-gray-600 mb-4">e Região</div>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)] text-white px-6 py-3 rounded-full font-semibold">
                      <MapPin width={20} height={20} />
                      15+ Cidades Atendidas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Onde Atuamos</h2>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin width={28} height={28} className="text-[rgb(64,102,215)]" />
                Atendimento Presencial em Ribeirão Preto e Região
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cities.map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <CheckCircle2 width={20} height={20} className="text-[rgb(62,215,252)] flex-shrink-0" />
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)] rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Globe width={28} height={28} />
                Consultoria Online para Todo Brasil
              </h3>
              <p className="text-lg text-white/90 mb-4">
                Atendemos empresas de todo o país através da nossa consultoria online, mantendo a mesma qualidade e
                proximidade do atendimento presencial.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">
                <CheckCircle2 width={20} height={20} />
                Deslocamento sem custo adicional na região
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
