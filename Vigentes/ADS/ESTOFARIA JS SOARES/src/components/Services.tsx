import { Truck, Armchair, Car, Layers, Wind, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Service {
  title: string;
  description: string;
  image: string;
  Icon: LucideIcon;
  iconName: string;
}

const services: Service[] = [
  {
    title: 'Cabine de Caminhão',
    description:
      'Reforma completa da cabine com materiais premium: cama, capa do painel, bancos, cortinas e maleiro.',
    image:
      'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-caminhao-marrom-luxuoso-estilo-quarto_768x1024.webp',
    Icon: Truck,
    iconName: 'truck',
  },
  {
    title: 'Capa de Banco',
    description:
      'Capas personalizadas em couro e tecido para caminhões e carros, com acabamento profissional e durabilidade.',
    image:
      'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/bancos-carro-couro-marrom-logo-volkswagen_720x1280.webp',
    Icon: Armchair,
    iconName: 'armchair',
  },
  {
    title: 'Estofaria para Carros',
    description:
      'Renovação completa do interior do seu veículo: bancos, painéis e revestimentos em couro e courvin.',
    image:
      'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-carro-branco-bancos-vermelhos-couro_960x1280.webp',
    Icon: Car,
    iconName: 'car',
  },
  {
    title: 'Tapetes e Cortinas',
    description:
      'Tapetes sob medida e cortinas personalizadas para dar mais estilo e privacidade à cabine do caminhão.',
    image:
      'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-caminhao-cortinas-azuis-bancos-pretos_960x1280.webp',
    Icon: Layers,
    iconName: 'layers',
  },
  {
    title: 'Capa de Volante',
    description:
      'Proteção e renovação do painel com capas personalizadas, garantindo elegância e durabilidade.',
    image:
      'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/volante-scania-marrom-painel-motos-ao-fundo_1200x1600.webp',
    Icon: Wind,
    iconName: 'wind',
  },
  {
    title: 'Limpeza Interna',
    description:
      'Higienização e limpeza profunda do interior do caminhão, deixando tudo como novo.',
    image:
      'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-carro-cinza-moedas-chave-inglesa_960x1280.webp',
    Icon: Sparkles,
    iconName: 'sparkles',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Do caminhão ao carro de passeio, transformamos interiores com
            materiais de alta qualidade e acabamento impecável.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-brand-red p-2.5 rounded-xl">
                  <service.Icon
                    width={20}
                    height={20}
                    className={`lucide lucide-${service.iconName} text-white`}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-full inline-block transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
