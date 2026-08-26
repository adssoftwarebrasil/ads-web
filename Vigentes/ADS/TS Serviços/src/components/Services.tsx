import { Satellite, Truck, Car, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  image: string;
  alt: string;
  Icon: LucideIcon;
  iconGradient: string;
  buttonGradient: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  whatsapp: string;
  ring: boolean;
  badge: boolean;
  reverse: boolean;
}

const services: Service[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/ts%20tecnologia%2Fimg%2Frastreamento-veicular.webp',
    alt: 'Rastreamento Veicular',
    Icon: Satellite,
    iconGradient: 'from-[rgb(2,66,147)] to-[rgb(0,68,139)]',
    buttonGradient: 'from-[rgb(2,66,147)] to-[rgb(0,68,139)]',
    tag: 'Nosso Serviço Principal',
    title: 'Rastreamento Veicular',
    description:
      'Tecnologia avançada de monitoramento para proteger seu veículo e otimizar sua frota com eficiência total.',
    features: [
      'Rastreamento para carros, motos, caminhões e máquinas',
      'Gestão completa de frotas com mapa em tempo real',
      'Monitoramento 24h com alertas de segurança',
      'Controle logístico e relatórios detalhados',
      'Soluções personalizadas para cada necessidade',
    ],
    whatsapp:
      'https://wa.me/557598115869?text=Olá! Gostaria de saber mais sobre Rastreamento Veicular.',
    ring: true,
    badge: true,
    reverse: false,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/ts%20tecnologia%2Fimg%2Fguincho-24horas-postagem-com-texto-01.webp',
    alt: 'Reboque e Guincho 24h',
    Icon: Truck,
    iconGradient: 'from-[rgb(16,215,237)] to-[rgb(0,68,139)]',
    buttonGradient: 'from-[rgb(16,215,237)] to-[rgb(0,68,139)]',
    tag: 'Atendimento Emergencial',
    title: 'Reboque e Guincho 24h',
    description:
      'Suporte completo para qualquer emergência veicular, disponível 24 horas por dia, 7 dias por semana.',
    features: [
      'Resgate de veículos 24 horas',
      'Guincho para carros, motos e utilitários',
      'Atendimento em casos de acidente',
      'Transporte para oficinas e concessionárias',
      'Cobertura em Alagoinhas e toda região',
    ],
    whatsapp:
      'https://wa.me/557598115869?text=Olá! Gostaria de saber mais sobre Reboque e Guincho 24h.',
    ring: false,
    badge: false,
    reverse: true,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/ts%20tecnologia%2Fimg%2Fguincho-24horas-postagem-com-texto-02.webp',
    alt: 'Serviço de Táxi',
    Icon: Car,
    iconGradient: 'from-[rgb(0,68,139)] to-[rgb(2,66,147)]',
    buttonGradient: 'from-[rgb(0,68,139)] to-[rgb(2,66,147)]',
    tag: 'Transporte Confiável',
    title: 'Serviço de Táxi',
    description:
      'Deslocamento seguro, confortável e pontual para qualquer destino, dentro ou fora da cidade.',
    features: [
      'Atendimento rápido e pontual',
      'Motoristas experientes e atenciosos',
      'Veículos seguros e confortáveis',
      'Corridas urbanas e viagens intermunicipais',
      'Disponível para empresas e particulares',
    ],
    whatsapp:
      'https://wa.me/557598115869?text=Olá! Gostaria de saber mais sobre Serviço de Táxi.',
    ring: false,
    badge: false,
    reverse: false,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-[rgb(16,215,237)] font-semibold text-sm uppercase tracking-wider">
              Nossos Serviços
            </span>
            <div className="h-1 w-20 bg-[rgb(16,215,237)] mt-2 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(2,66,147)] mt-4 leading-tight">
            Soluções Completas para Sua Mobilidade
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Da segurança ao transporte, oferecemos tecnologia e atendimento de
            excelência para garantir sua tranquilidade
          </p>
        </div>
        <div className="space-y-12">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                service.ring ? 'ring-2 ring-[rgb(16,215,237)]' : ''
              }`}
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 ${
                  service.reverse ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    service.reverse ? 'lg:col-start-2' : ''
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover min-h-[400px] transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {service.badge && (
                    <div className="absolute top-6 right-6 bg-[rgb(16,215,237)] text-[rgb(2,66,147)] px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                      Destaque
                    </div>
                  )}
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconGradient} mb-6`}
                  >
                    <service.Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-[rgb(16,215,237)] font-semibold text-sm uppercase tracking-wider mb-2">
                    {service.tag}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[rgb(2,66,147)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-[rgb(16,215,237)] rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-[rgb(2,66,147)]" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center bg-gradient-to-r ${service.buttonGradient} text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
