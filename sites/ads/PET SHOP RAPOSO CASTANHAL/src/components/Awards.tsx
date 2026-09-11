import { Trophy, Award } from 'lucide-react';

export default function Awards() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Trophy size={20} />
            Reconhecimento
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossas Premiações
          </h2>
          <p className="text-xl text-gray-600">
            Orgulhosamente reconhecidos pela excelência em atendimento
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-yellow-200">
            <div className="flex items-center justify-center mb-6">
              <Award size={48} className="text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Prêmio Top de Marketing &amp; Desenvolvimento
            </h3>
            <div className="mb-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/pet-raposo%2FWhatsApp%20Image%202025-11-18%20at%2015.51.31.jpeg"
                alt="Prêmio Top de Marketing &amp; Desenvolvimento"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
              <p className="text-sm font-semibold text-gray-700 mb-2 text-center">
                Anos Premiados:
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                {['2020', '2021', '2023'].map((y) => (
                  <span
                    key={y}
                    className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-full font-bold text-sm"
                  >
                    {y}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-200">
            <div className="flex items-center justify-center mb-6">
              <Trophy size={48} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Prêmio Líder
            </h3>
            <div className="mb-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/pet-raposo%2FWhatsApp%20Image%202025-11-18%20at%2015.51.31%20(1)-Photoroom.png"
                alt="Prêmio Líder"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
              <p className="text-sm font-semibold text-gray-700 mb-2 text-center">
                Anos Premiados:
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                {['2024', '2025'].map((y) => (
                  <span
                    key={y}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm"
                  >
                    {y}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Esses prêmios refletem nosso compromisso com a excelência no
            atendimento, qualidade dos produtos e dedicação ao bem-estar dos pets
            de Castanhal.
          </p>
        </div>
      </div>
    </section>
  );
}
