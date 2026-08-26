import { openWhatsApp } from '../lib/whatsapp';

interface Product {
  title: string;
  description: string;
  image: string;
  delay: number;
}

const PRODUCTS: Product[] = [
  {
    title: 'Mix de Açaí',
    description: 'Combinação perfeita de sabores',
    image: 'https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fmix-de-acai.png',
    delay: 0,
  },
  {
    title: 'Creme de Cupuaçu Tasty',
    description: 'Autêntico sabor tropical',
    image: 'https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fcreme-de-cupuacu.png',
    delay: 200,
  },
  {
    title: 'Creme de Açaí Açaíto',
    description: 'Ideal para revenda com excelente custo',
    image: 'https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fcreme-de-acai.png',
    delay: 400,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 relative"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fnossos-servicos-background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Nossas Linhas de Produtos
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              style={{ transitionDelay: `${product.delay}ms`, opacity: 1, transform: 'translateY(0px)' }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <button
                  onClick={() => openWhatsApp(`Olá! Tenho interesse no produto ${product.title}.`)}
                  className="bg-[rgb(6,173,244)] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full"
                >
                  Fale Conosco
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
