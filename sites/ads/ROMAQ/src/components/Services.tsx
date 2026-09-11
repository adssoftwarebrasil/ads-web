import { Truck, Package, Settings, Circle, Wrench, Move, LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
  Icon: LucideIcon;
  iconClass: string;
}

const services: Service[] = [
  {
    title: 'Locação de Empilhadeiras',
    description:
      'Equipamentos em perfeito estado de operação e segurança, com manutenção garantida durante todo o período de locação.',
    image: 'https://storage.lucasmendes.dev/site-sp/romaq%2Fimg2%2Fempilhadeira-verde-oficina.webp',
    Icon: Truck,
    iconClass: 'lucide lucide-truck text-[rgb(66,66,66)]',
  },
  {
    title: 'Venda de Empilhadeiras',
    description:
      'Empilhadeiras novas e seminovas de diversas capacidades e modelos para atender sua necessidade específica.',
    image: 'https://storage.lucasmendes.dev/site-sp/romaq%2Fimg2%2Fempilhadeiras-transportadas-caminhao.webp',
    Icon: Package,
    iconClass: 'lucide lucide-package text-[rgb(66,66,66)]',
  },
  {
    title: 'Peças Originais',
    description:
      'Amplo estoque de peças originais e alternativas para manter seu equipamento sempre operacional.',
    image: 'https://storage.lucasmendes.dev/site-sp/romaq%2Fimg2%2Fsuporte-metalico-duplo.webp',
    Icon: Settings,
    iconClass: 'lucide lucide-settings text-[rgb(66,66,66)]',
  },
  {
    title: 'Pneus Industriais',
    description:
      'Representante autorizado Trelleborg. Pneus de alta qualidade e durabilidade para empilhadeiras e equipamentos industriais.',
    image: 'https://storage.lucasmendes.dev/site-sp/romaq%2Fimg2%2Fpneus-empilhados-paletes.webp',
    Icon: Circle,
    iconClass: 'lucide lucide-circle text-[rgb(66,66,66)]',
  },
  {
    title: 'Manutenção Especializada',
    description:
      'Equipe técnica qualificada para manutenção preventiva e corretiva com agilidade e qualidade.',
    image: 'https://storage.lucasmendes.dev/site-sp/romaq%2Fimg2%2Fempilhadeira-carrega-caixa.webp',
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench text-[rgb(66,66,66)]',
  },
  {
    title: 'Transpaletes',
    description:
      'Paleteiras manuais e elétricas para otimizar a movimentação de cargas em seu armazém ou indústria.',
    image: 'https://storage.lucasmendes.dev/site-sp/romaq%2Fimg2%2Fsuporte-metalico-duplo.webp',
    Icon: Move,
    iconClass: 'lucide lucide-move text-[rgb(66,66,66)]',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(66,66,66)] mb-4">O Que Oferecemos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para todas as suas necessidades em movimentação de cargas e equipamentos industriais
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const { Icon } = service;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(66,66,66)]/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-[rgb(240,186,25)] p-3 rounded-lg">
                      <Icon className={service.iconClass} width={28} height={28} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[rgb(66,66,66)] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
