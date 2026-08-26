import { Star, Quote } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/5565981321662';
const MAPS_URL =
  'https://www.google.com/maps/place/RESTAURANTE+CHOPP%C3%83O+E+DELIVERY+%22Desde+1974%22';

const reviews = [
  {
    text: '"Visitei em um sábado à noite, lugar histórico da cidade, estrutura decorada bem bonita, e com um ótimo atendimento, atenciosos, bebida gelada e os pedidos vêm bem rápido. Gostei bastante do lugar."',
    name: 'Alessandro Ben',
    meta: 'Local Guide · 450 avaliações',
    when: '2 meses atrás',
    price: 'Jantar · R$ 40–60',
  },
  {
    text: '"O caldo e o escaldado é um dos melhores de Cuiabá. É um lugar antigo, bom atendimento. Bom pra curtir com família, amigos, depende de cada gosto."',
    name: 'Jaqueline Souza',
    meta: 'Local Guide · 50 avaliações',
    when: 'um mês atrás',
    price: 'R$ 60–80',
  },
  {
    text: '"Choperia bem tradicional. Chopp gelaaaaado, uma maravilha para se refrescar. Ótimas opções de tira gosto e excelente atendimento. As mesas na parte de fora são melhores, menos quente do que na parte interna. Banheiro limpo e com ar condicionado."',
    name: 'Luciana Costa',
    meta: 'Local Guide · 46 avaliações',
    when: 'um ano atrás',
    price: 'Outro · R$ 80–100',
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="w-24 h-1 bg-[rgb(71,136,84)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Avaliações reais de quem já experimentou a tradição e qualidade do CHOPPÃO
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute -top-4 -right-4 bg-[rgb(71,136,84)] rounded-full p-3">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">{r.text}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{r.name}</p>
                <p className="text-sm text-gray-600">{r.meta}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-500">{r.when}</p>
                  <p className="text-sm text-[rgb(71,136,84)] font-semibold">{r.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-yellow-400 px-6 py-3 rounded-full">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gray-900 fill-current" />
              ))}
            </div>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experiência Premiada pelos Clientes
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Mais de 50 anos servindo Cuiabá com excelência. Venha fazer parte da nossa história!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(71,136,84)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[rgb(61,126,74)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Reserve sua Mesa
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Ver Mais Avaliações
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
