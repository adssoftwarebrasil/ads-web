import { CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const advantages = [
    'Não existe juros, apenas uma pequena taxa de administração mensal',
    'Sem limitador de idade para adesão ao consórcio',
    'Excelente opção de planejamento de aposentadoria',
    '100% parcelado, sem entrada, sem intermediárias, sem taxas bancárias',
    'Poder de compra à vista, com atualização do crédito antes da contemplação pelo INCC e INPC anual',
    'Prazos e parcelas muito mais flexíveis do que o financiamento',
    'Possibilidade de dar lances para aumentar suas chances de contemplação',
    'Sorteios todos os meses pela Loteria Federal'
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[rgb(87,168,45)]">
          Como Funciona o Consórcio
        </h2>
        <div className="w-24 h-1 bg-[rgb(253,192,20)] mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition group">
              <div className="h-48 overflow-hidden relative bg-gradient-to-br from-blue-50 to-blue-100">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/acs%2Fimg%2Fcalculandonacalculadora.png"
                  alt="Escolha seu Plano"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-[rgb(87,168,45)] to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Escolha seu Plano</h3>
                <p className="text-gray-600 text-sm">
                  Defina o valor do crédito que você precisa e o prazo que cabe no seu bolso
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition group">
              <div className="h-48 overflow-hidden relative bg-gradient-to-br from-yellow-50 to-yellow-100">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/acs%2Fimg%2Flendocontrato.png"
                  alt="Pague as Parcelas"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-[rgb(253,192,20)] to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Pague as Parcelas</h3>
                <p className="text-gray-600 text-sm">
                  Parcelas reduzidas até a contemplação, sem juros, sem taxa de adesão.

                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition group">
              <div className="h-48 overflow-hidden relative bg-gradient-to-br from-green-50 to-green-100">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/acs%2Fimg%2Fpais-e-filhos-sorridentes-de-perfil-completo.jpg"
                  alt="Seja Contemplado"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Contemplação</h3>
                <p className="text-gray-600 text-sm">
                  Por sorteio mensal da Loteria Federal ou por lance fixo, limitado ou livre.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition group">
              <div className="h-48 overflow-hidden relative bg-gradient-to-br from-purple-50 to-purple-100">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/acs%2Fimg%2Fentregandochavecarro.png"
                  alt="Receba seu Crédito"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Receba seu Crédito</h3>
                <p className="text-gray-600 text-sm">
                  Use a carta de crédito para realizar seu sonho com poder de compra à vista
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="h-64 overflow-hidden bg-gradient-to-br from-green-50 to-green-100">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/acs%2Fimg%2Fchavedocarropresente.png"
                  alt="Contemplação"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">O que é Contemplação?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Contemplação é o momento em que você recebe sua carta de crédito para utilizar. Existem duas formas de ser contemplado:
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[rgb(87,168,45)] mb-2">Por Sorteio</h4>
                  <p className="text-gray-700 text-sm">
                    Todos os meses são realizados sorteios pela Loteria Federal. Todos os consorciados com parcela   em dias participam automaticamente, sem custo adicional.

                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[rgb(253,192,20)] mb-2">Por Lance</h4>
                  <p className="text-gray-700 text-sm">
                    Você pode oferecer um lance (percentual do crédito) para antecipar sua contemplação. Quanto maior o lance, maiores as chances. É possível usar o FGTS (para imóveis) para oferta
                  </p>
                </div>
              </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="h-64 overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/acs%2Fimg%2Fentregandochavedacasa.png"
                  alt="Carta de Crédito"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Carta de Crédito</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Carta de Crédito é o documento que comprova seu direito de utilizar o valor do crédito contemplado. Com ela você pode:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-[rgb(87,168,45)] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Comprar imóveis ou veículos com poder de compra à vista</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[rgb(87,168,45)] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Negociar melhores preços e condições</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[rgb(87,168,45)] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Quitar financiamentos imobiliários</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[rgb(87,168,45)] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Realizar reformas ou construções</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[rgb(87,168,45)] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Venda de carta de crédito contemplada com lucro</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[rgb(87,168,45)] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Aposentadoria imobiliária</span>
                </li>
              </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[rgb(87,168,45)] to-green-600 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-white mb-8">Vantagens do Consórcio vs Financiamento Bancário</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-[rgb(253,192,20)] mr-3 mt-1 flex-shrink-0" size={24} />
                  <p className="text-white/95">{advantage}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
