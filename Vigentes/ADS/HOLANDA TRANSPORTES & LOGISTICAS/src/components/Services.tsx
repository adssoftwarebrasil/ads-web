import { Truck, Package, Warehouse, type LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  image: string;
  alt: string;
  title: string;
  description: string;
  cta: string;
  delay: number;
}

const services: Service[] = [
  {
    icon: Truck,
    image: 'https://storage.lucasmendes.dev/site-sp/holandatransportes%2Fcaminhao-conteiner-transporte.webp',
    alt: 'Transporte de Cargas Secas e Refrigeradas',
    title: 'Transporte de Cargas Secas e Refrigeradas',
    description:
      'Realizamos transporte seguro de cargas secas e refrigeradas para Manaus, Santa Helena (Venezuela) e Lethem (Guiana). Frota completa com caminhões, rodotrens e bitrens.',
    cta: 'Solicitar Transporte →',
    delay: 0,
  },
  {
    icon: Package,
    image: 'https://storage.lucasmendes.dev/site-sp/holandatransportes%2Fcontainer-refrigerado-empilhadeira.webp',
    alt: 'Venda e Aluguel de Containers',
    title: 'Venda e Aluguel de Containers',
    description:
      'Containers refrigerados de 20 e 40 pés disponíveis para venda ou aluguel. Soluções de armazenamento com controle térmico eficiente para suas mercadorias.',
    cta: 'Ver Containers →',
    delay: 150,
  },
  {
    icon: Warehouse,
    image: 'https://storage.lucasmendes.dev/site-sp/holandatransportes%2Farmazenamento-caixas-caminhao.webp',
    alt: 'Armazenagem Especializada',
    title: 'Armazenagem Especializada',
    description:
      'Armazenamento de cargas secas e refrigeradas em containers próprios. Solução ideal para empresas que precisam de espaço adicional para estoque.',
    cta: 'Consultar Armazenagem →',
    delay: 300,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block bg-holanda-green/10 text-holanda-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-holanda-gray mb-4">
            Nossos Serviços de Transporte e Logística
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas para sua empresa em Roraima e região
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-100 translate-y-0"
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="w-16 h-16 bg-holanda-green/10 rounded-xl flex items-center justify-center">
                  <service.icon size={32} className="text-holanda-green" />
                </div>
                <h3 className="text-xl font-bold text-holanda-gray">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <a
                  href="https://wa.me/5595991507264?text=Olá! Gostaria de mais informações sobre os serviços."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-holanda-green font-semibold hover:text-holanda-dark transition-colors"
                >
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
