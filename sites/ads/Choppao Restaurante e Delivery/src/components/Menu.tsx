import { ChefHat, Pizza, Fish, Coffee, Camera } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/5565981321662';
const STORAGE = 'https://storage.lucasmendes.dev/site-sp/choppao%20restaurante';

const highlights = [
  {
    icon: ChefHat,
    img: `${STORAGE}%2Fimg%2Fcomida-brasileira-variada.webp`,
    alt: 'Comida Regional',
    title: 'Comida Regional',
    text: 'Sabores autênticos de Mato Grosso com pratos tradicionais que celebram a rica culinária da região',
  },
  {
    icon: Pizza,
    img: `${STORAGE}%2Fimg%2Fnuggets-frango-molho.webp`,
    alt: 'Porções & Petiscos',
    title: 'Porções & Petiscos',
    text: 'Deliciosas opções para compartilhar com amigos e família, perfeitas para acompanhar seu chopp gelado',
  },
  {
    icon: Fish,
    img: `${STORAGE}%2Fimg%2Fsopa-carne-cebolinha.webp`,
    alt: 'Peixaria Especial',
    title: 'Peixaria Especial',
    text: 'Peixes frescos preparados com técnicas tradicionais e temperos regionais exclusivos',
  },
  {
    icon: Coffee,
    img: `${STORAGE}%2Fimg%2Fsobremesa-chocolate-sorvete.webp`,
    alt: 'Sobremesas',
    title: 'Sobremesas',
    text: 'Doces irresistíveis para finalizar sua refeição com o melhor da confeitaria artesanal',
  },
];

const gallery = [
  'arroz-batata-frita',
  'batata-frita-carne',
  'caixa-batata-frita',
  'caneca-chopp-espuma',
  'caneca-vidro-chopp',
  'carne-batata-cebola',
  'carne-fritas-cebola',
  'frango-empanado-alface',
  'garcom-servindo-comida',
  'lasanha-arroz-batata',
  'lasanha-mesa-prato',
  'prato-comida-colorida',
];

export default function Menu() {
  return (
    <section id="cardapio" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Destaques do Cardápio</h2>
          <div className="w-24 h-1 bg-[rgb(71,136,84)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Da culinária regional aos sabores internacionais, uma experiência gastronômica completa
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={h.img}
                    alt={h.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="bg-[rgb(71,136,84)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{h.title}</h3>
                  <p className="text-white/90 leading-relaxed">{h.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-gradient-to-br from-[rgb(71,136,84)] to-[rgb(61,126,74)] rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Explore Nosso Cardápio Completo
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Descubra pratos para todos os gostos: culinária brasileira, internacional, pizzas,
            hambúrgueres, saladas e muito mais!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[rgb(71,136,84)] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Ver Cardápio Digital
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[rgb(71,136,84)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Fazer Pedido
            </a>
          </div>
        </div>
        <div className="mt-16 mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={`${STORAGE}%2Fimg%2Frestaurante-arco-colorido.webp`}
              alt="Interior do Restaurante CHOPPÃO"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="p-8 sm:p-12 max-w-2xl">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ambiente Acolhedor</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Desfrute de uma atmosfera única que combina tradição e conforto, perfeita para
                  refeições em família, encontros com amigos ou momentos especiais.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2 text-[rgb(71,136,84)]">
              <Camera className="w-6 h-6" />
              <span className="font-semibold uppercase tracking-wider">Momentos Choppão</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Nossa Galeria</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((name, i) => (
              <div
                key={name}
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={`${STORAGE}%2Fgaleria%2F${name}.webp`}
                  alt={`Galeria Choppão ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
