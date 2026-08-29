import { Award, Truck, Package, MessageCircle, Phone } from 'lucide-react';

const advantages = [
  {
    number: '01',
    title: 'Experiência Reconhecida',
    description: 'Atuamos no mercado há mais de 40 anos.',
    image: 'https://storage.lucasmendes.dev/site-sp/motosilv/Experie%CC%82ncia%20Reconhecida.jpg',
    Icon: Award,
  },
  {
    number: '02',
    title: 'Frota Própria de Entrega',
    description: 'Agilidade e segurança nas suas entregas.',
    image: 'https://storage.lucasmendes.dev/site-sp/motosilv/Frota%20Pro%CC%81pria%20de%20Entrega.jpg',
    Icon: Truck,
  },
  {
    number: '03',
    title: 'Variedade de Produtos',
    description: 'Catálogo completo para todas as suas necessidades.',
    image: 'https://storage.lucasmendes.dev/site-sp/motosilv/Variedade%20de%20Produtos.jpg',
    Icon: Package,
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Vantagens</h2>
          <div className="w-24 h-1 bg-[#FFE600] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Motivos para escolher a MotoSilva. Descubra as vantagens de trabalhar conosco e faça a
            escolha certa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map(({ number, title, description, image, Icon }) => (
            <div
              key={number}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-[#FFE600] rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                </div>
                <div className="absolute top-6 right-6 text-[#FFE600]/30 text-6xl font-bold">
                  {number}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/551937138008"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#FFE600] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FFE600]/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>(19) 3713-8008</span>
          </a>
          <span className="mx-4 text-gray-400">ou</span>
          <a
            href="tel:1937137007"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-black/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span>(19) 3713-7007</span>
          </a>
        </div>
      </div>
    </section>
  );
}
