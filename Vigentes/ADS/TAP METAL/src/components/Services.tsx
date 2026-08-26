import { Droplets, Beef, Sparkles, Wrench, Fuel, ArrowRight, LucideIcon } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5562985811343';

interface Service {
  title: string;
  desc: string;
  image: string;
  alt: string;
  icon: LucideIcon;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Reservatórios Metálicos',
    desc: 'Fabricação de caixas d\'água metálicas nos modelos Taça, Apoiado e Tubular, com capacidades variadas para atender desde residências até grandes indústrias.',
    image: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Freservatorio-metalico-azul.webp',
    alt: 'Reservatórios Metálicos',
    icon: Droplets,
    features: ['Modelo Taça', 'Modelo Apoiado', 'Modelo Tubular', 'Capacidades Personalizadas'],
  },
  {
    title: 'Bebedouros para Gado',
    desc: 'Bebedouros metálicos de alta durabilidade, projetados especialmente para pecuária, garantindo água limpa e fresca para seu rebanho.',
    image: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Fbebedouros-para-gado.webp',
    alt: 'Bebedouros para Gado',
    icon: Beef,
    features: ['Alta Durabilidade', 'Fácil Limpeza', 'Resistente à Corrosão', 'Vários Tamanhos'],
  },
  {
    title: 'Projetos Exclusivos',
    desc: 'Desenvolvemos projetos personalizados sob medida para atender necessidades específicas de cada cliente, com engenharia dedicada e soluções inovadoras.',
    image: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Fprojetos-exclusivos.webp',
    alt: 'Projetos Exclusivos',
    icon: Sparkles,
    features: ['Engenharia Dedicada', 'Soluções Customizadas', 'Design Exclusivo', 'Acompanhamento Técnico'],
  },
  {
    title: 'Recuperação e Reforma',
    desc: 'Serviços especializados de recuperação e reforma de reservatórios existentes, prolongando a vida útil e garantindo a segurança das estruturas.',
    image: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Fservi%C3%A7o-de-recupera%C3%A7%C3%A3o-e-reforma.webp',
    alt: 'Recuperação e Reforma',
    icon: Wrench,
    features: ['Inspeção Técnica', 'Pintura Especializada', 'Troca de Componentes', 'Garantia de Qualidade'],
  },
  {
    title: 'Tanques para Combustível',
    desc: 'Fabricação de tanques metálicos para armazenamento de combustível, atendendo todas as normas de segurança e regulamentação do setor.',
    image: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Ftanque-para-combust%C3%ADvel.webp',
    alt: 'Tanques para Combustível',
    icon: Fuel,
    features: ['Normas ABNT', 'Alta Segurança', 'Resistência Superior', 'Capacidades Variadas'],
  },
];

function Services() {
  return (
    <section
      id="servicos"
      className="py-20 lg:py-32 bg-gradient-to-b from-[rgba(9,9,35)] to-[rgba(12,12,45)] relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[rgba(12,132,227,0.2)] border border-[rgba(12,132,227,0.5)] rounded-full">
            <span className="text-[rgba(12,132,227)] font-semibold text-sm uppercase tracking-wide">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Soluções Completas em Metalurgia
          </h2>
          <p className="text-lg text-[rgba(198,198,207)] max-w-3xl mx-auto">
            Oferecemos uma ampla gama de produtos e serviços de alta qualidade para atender todas as suas
            necessidades em reservatórios e estruturas metálicas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-[rgba(198,198,207,0.1)] rounded-2xl overflow-hidden hover:border-[rgba(12,132,227,0.5)] transition-all duration-500 hover:shadow-2xl hover:shadow-[rgba(12,132,227,0.2)] hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,9,35,0.9)] to-transparent"></div>
                  <div className="absolute top-4 right-4 w-14 h-14 bg-[rgba(12,132,227)] rounded-full flex items-center justify-center shadow-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[rgba(12,132,227)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[rgba(198,198,207)] mb-4 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-sm text-[rgba(198,198,207)]"
                      >
                        <div className="w-1.5 h-1.5 bg-[rgba(12,132,227)] rounded-full"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[rgba(12,132,227)] hover:text-white font-semibold transition-colors duration-300 group/btn"
                  >
                    Solicitar Orçamento
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
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

export default Services;
