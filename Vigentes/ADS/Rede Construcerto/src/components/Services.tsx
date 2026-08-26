import { Droplet, Zap, Wrench, Boxes, Grid3x3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Service {
  title: string;
  text: string;
  img: string;
  Icon: LucideIcon;
}

const services: Service[] = [
  {
    title: 'Hidráulica',
    text: 'Materiais hidráulicos de qualidade confiável.',
    img: 'https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2FHidra%CC%81ulica.jpg',
    Icon: Droplet,
  },
  {
    title: 'Elétrica',
    text: 'Materiais elétricos de primeira linha.',
    img: 'https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2FEle%CC%81trica.jpg',
    Icon: Zap,
  },
  {
    title: 'Ferragens',
    text: 'Ferragens de qualidade para diferentes aplicações.',
    img: 'https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2FFerragens.jpg',
    Icon: Wrench,
  },
  {
    title: 'Materiais Básicos',
    text: 'Tudo que você precisa para a sua construção.',
    img: 'https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2FMateriais%20Ba%CC%81sicos.jpg',
    Icon: Boxes,
  },
  {
    title: 'PISO/REVESTIMENTO',
    text: 'Revestimentos de alta qualidade para sua obra.',
    img: 'https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2FPISO%3AREVESTIMENTO.jpg',
    Icon: Grid3x3,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#e8221a] font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Conheça Nossos <span className="text-[#253579]">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma vasta gama de produtos e serviços para todas as suas
            necessidades de construção.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, text, img, Icon }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Icon size={32} className="text-white mb-2" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-6">{text}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#e8221a] font-semibold hover:text-[#c91d16] transition-colors duration-300"
                >
                  Fale Conosco →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#e8221a] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c91d16] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
