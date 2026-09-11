import { MessageCircle } from 'lucide-react';

const services = [
  {
    title: 'Capacetes',
    description: 'Capacetes de segurança e qualidade.',
    image: 'https://storage.lucasmendes.dev/site-sp/motosilv/Capacetes.jpg',
  },
  {
    title: 'Câmara de Ar',
    description: 'Câmaras de ar para diversas motos.',
    image: 'https://storage.lucasmendes.dev/site-sp/motosilv/Ca%CC%82mara%20de%20Ar.webp',
  },
  {
    title: 'Velas',
    description: 'Velas de ignição compatíveis.',
    image: 'https://storage.lucasmendes.dev/site-sp/motosilv/Velas.webp',
  },
  {
    title: 'Pneus',
    description: 'Pneus de alta performance e segurança.',
    image: 'https://storage.lucasmendes.dev/site-sp/motosilv/Pneus.webp',
  },
  {
    title: 'Cilindros',
    description: 'Cilindros de diversas marcas e tamanhos.',
    image: 'https://storage.lucasmendes.dev/site-sp/motosilv/Cilindros.webp',
  },
  {
    title: 'Juntas',
    description: 'Juntas para motor e parte elétrica.',
    image: 'https://storage.lucasmendes.dev/site-sp/motosilv/Juntas.jpg',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-[#FFE600] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossos serviços e produtos. Na MotoSilva, oferecemos uma ampla gama de moto peças
            e acessórios para atender suas necessidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <a
                  href="https://wa.me/551937138008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-black font-semibold hover:text-[#FFE600] transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Fale Conosco</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
