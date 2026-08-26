import { Check, MessageCircle } from 'lucide-react';

export default function Products() {
  const products = [
    {
      name: 'RECARREGÁVEIS',
      title: 'Ouça melhor com conforto e discrição.',
      subtitle: 'Para quem tem perda auditiva leve a profunda.',
      tagline: 'Mais clareza nas conversas, todos os dias.',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=AMPLIASOM%2FWhatsApp%20Image%202026-02-05%20at%2015.31.55.jpeg&version_id=null',
      features: [
        'Compatível com smartphones',
        'Resistente à água e poeira',
        'Bateria durável (24 horas)',
        'Carregador portátil incluso',
        'Áudio em alta definição',
        'Controle fácil pelo app'
      ],
      gradient: 'from-[#007E7A] to-[#007E7A]'
    },
    {
      name: 'Retroauricular',
      title: 'Potência e conforto para quem mais precisa.',
      subtitle: 'Ideal para perdas auditivas severas a profundas.',
      tagline: 'Tecnologia avançada para você ouvir com clareza.',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=AMPLIASOM%2FKA_Luxor_Premium_Charger_front_open%20(1)_11zon.jpg&version_id=null',
      features: [
        'Alta potência com som nítido',
        'Conectividade com smartphones',
        'Direcionalidade inteligente para focar nas vozes certas',
        'Resistente à água e poeira (uso seguro no dia a dia)'
      ],
      gradient: 'from-[#ED0180] to-[#ED0180]'
    }
  ];

  return (
    <section id="venda" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Conheça alguns de nossos produtos
          </h2>
        </div>

        <div className="space-y-24"> {/* Aumentado o espaço entre produtos */}
          {products.map((product, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative rounded-3xl shadow-2xl w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
                  /> {/* Aumentado o zoom da imagem no hover */}
                </div>
              </div>

              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <span className={`inline-block px-6 py-2 bg-gradient-to-r ${product.gradient} text-white text-base font-bold rounded-full mb-6 shadow-md`}>
                    {product.name}
                  </span>
                  <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-xl lg:text-2xl text-[#007E7A] font-medium mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-lg text-gray-600 italic">
                    {product.tagline}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Características:</h4>
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center mt-1`}>
                        <Check className="w-5 h-5 text-white shadow-sm" />
                      </div>
                      <span className="text-lg lg:text-xl text-gray-700 font-medium leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <a
                    href="https://wa.me/5561994174249?text=Olá! Gostaria de saber mais sobre os aparelhos auditivos."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r ${product.gradient} text-white text-xl font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    <span>Quero saber mais</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Acessórios Ampliada */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-12 border border-gray-200 shadow-inner">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Equipamentos e Acessórios
            </h3>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Além dos aparelhos auditivos, oferecemos carregadores e acessórios originais fundamentais para garantir o bom funcionamento, a qualidade do som e a durabilidade dos seus aparelhos auditivos no dia a dia.
            </p>

            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-2xl p-10 shadow-xl text-center transform hover:scale-105 transition-transform">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=AMPLIASOM%2FRX_BiCore_Slim%20RIC%20Travel%20Chargers_Open_800x800%20transparent%20background%20(1)%20(1)%201.png&version_id=null"
                  alt="Carregador de aparelhos auditivos"
                  className="w-48 h-auto object-contain mb-8 mx-auto"
                /> {/* Imagem do carregador aumentada de w-24 para w-48 */}
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Carregadores Portáteis</h4>
                <p className="text-lg text-gray-600">Alta tecnologia e praticidade para manter seus aparelhos carregados em qualquer lugar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}