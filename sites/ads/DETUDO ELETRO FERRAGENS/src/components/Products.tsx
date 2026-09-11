import { WhatsAppIcon } from '../constants';

interface Product {
  title: string;
  description: string;
  image: string;
  whatsapp: string;
}

const products: Product[] = [
  {
    title: 'Tubos e Conexões',
    description: 'Soluções em tubulações para seu projeto.',
    image:
      'https://storage.lucasmendes.dev/site-sp/detudo%2FTubos%20e%20Conexo%CC%83es.webp',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5565998064793&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20Tubos%20e%20Conex%C3%B5es',
  },
  {
    title: 'Ferramentas',
    description: 'Ferramentas manuais e elétricas para diversas aplicações.',
    image: 'https://storage.lucasmendes.dev/site-sp/detudo%2FFerramentas.webp',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5565998064793&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20Ferramentas',
  },
  {
    title: 'Iluminação',
    description: 'Solucões em iluminação para todos os ambientes.',
    image:
      'https://storage.lucasmendes.dev/site-sp/detudo%2FIluminac%CC%A7a%CC%83o.webp',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5565998064793&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20Ilumina%C3%A7%C3%A3o',
  },
  {
    title: 'Tintas',
    description: 'Tintas de diversas cores e acabamentos.',
    image: 'https://storage.lucasmendes.dev/site-sp/detudo%2FTintas.webp',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5565998064793&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20Tintas',
  },
  {
    title: 'Hidráulica',
    description: 'Produtos para sistemas hidráulicos.',
    image:
      'https://storage.lucasmendes.dev/site-sp/detudo%2FHidra%CC%81ulica.webp',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5565998064793&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20Hidr%C3%A1ulica',
  },
];

export default function Products() {
  return (
    <section id="servicos" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(34,34,34)] mb-4">
            Nossos Produtos e Serviços
          </h2>
          <p className="text-base sm:text-lg text-[rgb(34,34,34)] max-w-3xl mx-auto">
            Na Detudo Eletro Ferragens, oferecemos tudo que você precisa para sua construção e
            reforma, com um atendimento atencioso e uma vasta gama de opções.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl opacity-100 translate-y-0"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="bg-white p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-[rgb(34,34,34)]">
                  {product.title}
                </h3>
                <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-gray-600 min-h-[40px]">
                  {product.description}
                </p>
                <a
                  href={product.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[rgb(246,239,3)] text-[rgb(34,34,34)] px-4 sm:px-6 py-2.5 rounded-lg font-bold text-sm sm:text-base text-center hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <WhatsAppIcon />
                  COMPRAR
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
