import { Stethoscope, ShoppingBag, Package, Sparkles, LucideIcon } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

interface Service {
  title: string;
  description: string;
  image: string;
  Icon: LucideIcon;
}

const services: Service[] = [
  {
    title: 'Consulta Veterinária',
    description: 'Assessoria para a saúde do seu pet com nossos profissionais.',
    image: 'https://storage.lucasmendes.dev/site-sp/petshowe%2FConsulta%20Veterina%CC%81ria.jpeg',
    Icon: Stethoscope,
  },
  {
    title: 'Acessórios para Pets',
    description: 'Variedade de acessórios que seu animal vai adorar.',
    image: 'https://storage.lucasmendes.dev/site-sp/petshowe%2FAcesso%CC%81rios%20para%20Pets.jpg',
    Icon: ShoppingBag,
  },
  {
    title: 'Produtos Veterinários',
    description: 'Medicamentos e itens de alta qualidade para a saúde do seu pet.',
    image: 'https://storage.lucasmendes.dev/site-sp/petshowe%2FProdutos%20Veterina%CC%81rios.jpg',
    Icon: Package,
  },
  {
    title: 'Embelezamento de Pets',
    description: 'Serviços de estética com estilo e carinho.',
    image: 'https://storage.lucasmendes.dev/site-sp/petshowe%2FEmbelezamento%20de%20Pets.jpg',
    Icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#09b588] uppercase tracking-wide mb-4">
            Nossos Serviços
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Descubra nossos serviços especializados para o seu pet
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Na Pet Show Estética Animal, oferecemos uma gama completa de serviços em estética animal,
            incluindo banho, tosa, embelezamento, além de uma seleção de produtos e medicamentos
            veterinários para o melhor cuidado do seu amigo de quatro patas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const { Icon } = service;
            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-[#09b588] p-3 rounded-full">
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button
                    onClick={() => scrollToSection('contato')}
                    className="text-[#09b588] font-semibold hover:text-gray-900 transition-colors duration-300"
                  >
                    Fale Conosco →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
