import { WHATSAPP_URL } from '../constants';

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: 'Argamassa para Piso',
    description:
      'Argamassa de alta aderência, ideal para a instalação de pisos em áreas internas e externas. Garante a fixação perfeita das peças.',
    image:
      'https://storage.lucasmendes.dev/site-sp/boamassa%2FArgamassa%20para%20Piso.jpg',
  },
  {
    title: 'Argamassa para Revestimento',
    description:
      'Produto especialmente formulado para revestir paredes e tetos com alto acabamento e durabilidade.',
    image:
      'https://storage.lucasmendes.dev/site-sp/boamassa%2FArgamassa%20para%20Revestimento.jpg',
  },
  {
    title: 'Gesso',
    description:
      'Gesso de alta qualidade para acabamentos internos, proporcionando superfícies lisas e prontas para pintura.',
    image: 'https://storage.lucasmendes.dev/site-sp/boamassa%2FGesso.jpg',
  },
  {
    title: 'Cola de Cerâmica',
    description:
      'Cola de cerâmica de alta performance para assentamento de revestimentos cerâmicos em diversos ambientes.',
    image:
      'https://storage.lucasmendes.dev/site-sp/boamassa%2FCola%20de%20Cera%CC%82mica.webp',
  },
  {
    title: 'Rejunte',
    description:
      'Rejuntes com excelente acabamento e resistência, disponíveis em diversas cores para complementar seu projeto.',
    image: 'https://storage.lucasmendes.dev/site-sp/boamassa%2FRejunte.jpg',
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3" style={{ color: 'rgb(0, 0, 0)' }}>
          {service.title}
        </h3>
        <p
          className="text-sm lg:text-base leading-relaxed mb-5"
          style={{ color: 'rgb(80, 80, 80)' }}
        >
          {service.description}
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-md"
          style={{ backgroundColor: 'rgb(255, 220, 2)', color: 'rgb(0, 0, 0)' }}
        >
          Fale Conosco
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="animate-on-scroll">
      <section
        id="servicos"
        className="py-16 lg:py-24"
        style={{ backgroundColor: 'rgb(250, 250, 250)' }}
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="text-center mb-12 lg:mb-16">
            <span
              className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'rgb(255, 220, 2)', color: 'rgb(0, 0, 0)' }}
            >
              Nossos serviços
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: 'rgb(0, 0, 0)' }}
            >
              Explore Nossos Serviços
            </h2>
            <p
              className="text-base lg:text-lg max-w-[800px] mx-auto"
              style={{ color: 'rgb(51, 51, 51)' }}
            >
              Na Boa Massa, disponibilizamos uma linha completa de produtos para
              sua construção, com entrega em João Pessoa sem taxas extras.
            </p>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {services.slice(0, 3).map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[800px] w-full">
              {services.slice(3).map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
          <div className="text-center mt-12 lg:mt-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              style={{ backgroundColor: 'rgb(0, 0, 0)', color: 'rgb(255, 220, 2)' }}
            >
              Enviar WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
