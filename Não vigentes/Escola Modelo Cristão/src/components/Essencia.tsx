import { Target, Eye, Heart } from 'lucide-react';

const valores = [
  { label: 'Conduta Pessoal:', text: ' Caráter, dignidade e integridade' },
  { label: 'Relacionamento:', text: ' Respeito mútuo e honestidade' },
  { label: 'Profissional:', text: ' Competência e ética' },
  { label: 'Equipe:', text: ' Espírito de cooperação' },
  { label: 'Sociedade:', text: ' Participação na comunidade' },
];

export default function Essencia() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance" style={{ color: 'rgb(2, 73, 119)' }}>
            Nossa Essência
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'rgb(246, 174, 9)' }}></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'rgb(246, 174, 9)' }}>
                  <Target className="lucide lucide-target text-white w-6 h-6 md:w-7 md:h-7" width={24} height={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: 'rgb(2, 73, 119)' }}>Missão</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                "Promover um ensino acadêmico de qualidade que capacite o ser humano para exercer plenamente a cidadania num ambiente de fé cristã."
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'rgb(2, 73, 119)' }}>
                  <Eye className="lucide lucide-eye text-white w-6 h-6 md:w-7 md:h-7" width={24} height={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: 'rgb(2, 73, 119)' }}>Visão</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                "Ser reconhecida como uma instituição confessional batista, que busca aplicar os princípios da Palavra de Deus em todos os âmbitos da vida."
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'rgb(246, 174, 9)' }}>
                  <Heart className="lucide lucide-heart text-white w-6 h-6 md:w-7 md:h-7" width={24} height={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: 'rgb(2, 73, 119)' }}>Valores</h3>
              </div>
              <ul className="space-y-3">
                {valores.map((v) => (
                  <li key={v.label} className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: 'rgb(246, 174, 9)' }}></div>
                    <span className="text-sm md:text-base text-gray-700">
                      <strong className="text-gray-900">{v.label}</strong>{v.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <img src="https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fcoracao-quebra-cabeca-proverbio.jpg" alt="Coração com provérbio bíblico sobre educação" className="w-full h-[280px] md:h-[320px] lg:h-[360px] object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <img src="https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fovelha-pelucia-biblia.jpg" alt="Simbolo da fé cristã - ovelha com bíblia" className="w-full h-[280px] md:h-[320px] lg:h-[360px] object-cover" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#024977] to-[#035a93] rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-balance">Educação Fundamentada na Palavra de Deus</h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Cada valor, cada ensinamento e cada decisão em nossa escola é guiada pelos princípios eternos da Bíblia Sagrada
          </p>
        </div>
      </div>
    </section>
  );
}
