import { CheckCircle } from 'lucide-react';

interface ContainerCard {
  image: string;
  alt: string;
  title: string;
  features: string[];
  cta: string;
  href: string;
}

const containers: ContainerCard[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/holandatransportes%2Fcontainer-verde-transporte.webp',
    alt: 'Container Refrigerado 20 Pés',
    title: 'Container Refrigerado 20 Pés',
    features: [
      'Controle térmico eficiente',
      'Ideal para cargas médias',
      'Disponível para venda ou aluguel',
      'Energia para refrigeração inclusa',
    ],
    cta: 'Solicitar Orçamento 20 Pés',
    href: 'https://wa.me/5595991507264?text=Olá! Gostaria de um orçamento para container refrigerado de 20 pés.',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/holandatransportes%2Fcontainers-refrigerados-ceu.webp',
    alt: 'Container Refrigerado 40 Pés',
    title: 'Container Refrigerado 40 Pés',
    features: [
      'Grande capacidade de armazenamento',
      'Sistema de refrigeração avançado',
      'Venda e aluguel disponíveis',
      'Solução para grandes volumes',
    ],
    cta: 'Solicitar Orçamento 40 Pés',
    href: 'https://wa.me/5595991507264?text=Olá! Gostaria de um orçamento para container refrigerado de 40 pés.',
  },
];

export default function Containers() {
  return (
    <section id="containers" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block bg-holanda-green/10 text-holanda-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            Containers
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-holanda-gray mb-4">
            Containers de Alta Qualidade
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha o container ideal para seu negócio
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {containers.map((container) => (
            <div
              key={container.title}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-96 overflow-hidden bg-gray-100">
                <img
                  src={container.image}
                  alt={container.alt}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-holanda-gray">{container.title}</h3>
                <ul className="space-y-3">
                  {container.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle size={20} className="text-holanda-green flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={container.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-holanda-green text-white px-6 py-3 rounded-lg hover:bg-holanda-dark transition-all duration-300 font-medium"
                >
                  {container.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-holanda-green/10 border-2 border-holanda-green rounded-2xl p-8 text-center">
            <p className="text-holanda-gray text-lg font-semibold">
              Locação de contêiner refrigerado e Aluguel de energia para contêiner próprio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
