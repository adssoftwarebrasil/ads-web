import { Users, Package, Ship, type LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/scroll';

interface Service {
  icon: LucideIcon;
  color: string;
  image: string;
  alt: string;
  title: string;
  text: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Users,
    color: 'rgb(6, 172, 50)',
    image:
      'https://storage.lucasmendes.dev/site-sp/coimbra%20navegacoes%2Fimg%2Fbarco-verde-rio.webp',
    alt: 'Transporte de Passageiros',
    title: 'Transporte de Passageiros',
    text: 'Conforto e segurança para sua viagem pelo Rio Madeira. Atendemos Manaus, Nova Olinda do Norte, Borba, Novo Aripuanã e Manicoré com pontualidade e profissionalismo.',
    features: [
      'Cabines confortáveis',
      'Alimentação inclusa',
      'Equipe treinada',
      'Horários regulares',
    ],
  },
  {
    icon: Package,
    color: 'rgb(253, 133, 17)',
    image:
      'https://storage.lucasmendes.dev/site-sp/coimbra%20navegacoes%2Fimg%2Fbarco-rio-agua.webp',
    alt: 'Transporte de Encomendas',
    title: 'Transporte de Encomendas',
    text: 'Envie suas mercadorias com agilidade e rastreamento completo. Conectamos você às principais comunidades ribeirinhas com rapidez e cuidado.',
    features: [
      'Rastreamento online',
      'Seguro incluso',
      'Entrega rápida',
      'Manuseio cuidadoso',
    ],
  },
  {
    icon: Ship,
    color: 'rgb(41, 41, 41)',
    image:
      'https://storage.lucasmendes.dev/site-sp/coimbra%20navegacoes%2Fimg%2Fbalsa-branca-rio.webp',
    alt: 'Transporte de Cargas',
    title: 'Transporte de Cargas',
    text: 'Capacidade para 1.800 toneladas semanais. Solução robusta para escoamento da produção regional e abastecimento das comunidades amazônicas.',
    features: [
      'Grande capacidade',
      'Logística integrada',
      'Carga segura',
      'Preços competitivos',
    ],
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(41,41,41)] mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-[rgb(253,133,17)] mx-auto mb-6"></div>
          <p className="text-xl text-[rgb(160,180,187)] max-w-3xl mx-auto">
            Conectando o Rio Madeira com confiança, segurança e eficiência
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div
                    className="absolute top-6 right-6 p-4 rounded-xl shadow-lg"
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[rgb(41,41,41)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[rgb(160,180,187)] leading-relaxed mb-6">
                    {service.text}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-3"
                      >
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: service.color }}
                        ></div>
                        <span className="text-sm text-[rgb(41,41,41)]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full text-center py-3 rounded-lg font-semibold transition-all hover:brightness-110"
                    style={{ backgroundColor: service.color, color: 'white' }}
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
