import { Wrench, Flame, Search, Settings, Package } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5575999369036';

interface Service {
  Icon: LucideIcon;
  title: string;
  text: string;
  image: string;
}

const services: Service[] = [
  {
    Icon: Wrench,
    title: 'Manutenção Preventiva',
    text: 'Evite problemas futuros com serviço bem feito.',
    image:
      'https://storage.lucasmendes.dev/site-sp/ssescapamentoeperformance%2FManutenc%CC%A7a%CC%83o%20Preventiva.jpeg',
  },
  {
    Icon: Flame,
    title: 'Serviços de Soldagem',
    text: 'Soldagem perfeita para consertos duradouros.',
    image:
      'https://storage.lucasmendes.dev/site-sp/ssescapamentoeperformance%2FServic%CC%A7os%20de%20Soldagem.jpeg',
  },
  {
    Icon: Search,
    title: 'Inspeção Técnica',
    text: 'Verificamos a eficiência do sistema de escapamento.',
    image:
      'https://storage.lucasmendes.dev/site-sp/ssescapamentoeperformance%2FInspec%CC%A7a%CC%83o%20Te%CC%81cnica.jpeg',
  },
  {
    Icon: Settings,
    title: 'Ajustes de Suspensão',
    text: 'Realizamos ajustes pensando na segurança de seu veículo.',
    image:
      'https://storage.lucasmendes.dev/site-sp/ssescapamentoeperformance%2FAjustes%20de%20Suspensa%CC%83o.jpeg',
  },
  {
    Icon: Package,
    title: 'Troca de Peças',
    text: 'Substituição de peças danificadas com qualidade.',
    image:
      'https://storage.lucasmendes.dev/site-sp/ssescapamentoeperformance%2FTroca%20de%20Pec%CC%A7as.jpg',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-[rgb(254,0,0)]">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama de serviços automotivos, todos com um padrão de qualidade elevado e um
            atendimento excepcional.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ Icon, title, text, image }) => (
            <div
              key={title}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-[rgb(254,0,0)] p-3 rounded-xl">
                  <Icon size={28} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-6">{text}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[rgb(254,0,0)] font-semibold hover:text-[rgb(172,1,2)] transition-colors duration-200"
                >
                  Fale Conosco
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
