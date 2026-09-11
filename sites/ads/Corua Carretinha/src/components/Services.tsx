import { Truck, ShoppingCart, Wrench, Package, Zap, Shield, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    icon: Truck,
    title: 'Aluguel de Carretinha',
    description:
      'Alugue carretinhas de qualidade por diária ou período. Ideal para transporte de motos, jet ski, quadriciclo, cavalos, materiais e muito mais.',
    image:
      'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Fjet-ski-rua-na-carretinha.webp',
  },
  {
    icon: ShoppingCart,
    title: 'Venda de Carretinha',
    description:
      'Carretinhas novas e seminovas com garantia. Diversos modelos e tamanhos para atender sua necessidade.',
    image:
      'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%20atualizadas%2Fcarretinha-loja-frente-2.webp',
  },
  {
    icon: Wrench,
    title: 'Manutenção',
    description:
      'Serviço completo de manutenção preventiva e corretiva. Equipe especializada para deixar sua carretinha sempre em perfeito estado.',
    image:
      'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Fcarretinha-trailer-inacabado-oficina.webp',
  },
  {
    icon: Package,
    title: 'Peças e Acessórios',
    description:
      'Amplo estoque de peças originais e acessórios. Cubo de roda, feixe de molas, ponta de eixo, munheca e tudo que você precisa.',
    image:
      'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Facessorios-carretinha-metalicos.webp',
  },
  {
    icon: Zap,
    title: 'Venda de Engate',
    description:
      'Engates de todos os modelos e marcas de veículos. Produtos homologados e de alta qualidade.',
    image:
      'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%20atualizadas%2Fengate.webp',
  },
  {
    icon: Shield,
    title: 'Instalação Elétrica',
    description:
      'Instalação profissional do sistema de iluminação completa. Garantia de funcionamento perfeito de luzes e sinalização.',
    image:
      'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%20atualizadas%2Finstalacao-eletrica.webp',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-[rgb(253,253,253)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(242,150,1)]/10 text-[rgb(242,150,1)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            O QUE FAZEMOS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(25,47,79)] mb-4">Nossos Serviços</h2>
          <p className="text-xl text-[rgb(25,47,79)]/70 max-w-3xl mx-auto">
            Soluções completas em carretinhas para atender todas as suas necessidades com qualidade e segurança
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(25,47,79)]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-[rgb(242,150,1)] p-3 rounded-xl">
                    <Icon className="w-6 h-6 text-[rgb(25,47,79)]" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[rgb(25,47,79)] mb-3">{service.title}</h3>
                  <p className="text-[rgb(25,47,79)]/70 leading-relaxed mb-6">{service.description}</p>
                  <a
                    href="https://wa.me/5571986462034"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[rgb(242,150,1)] font-semibold hover:gap-2 transition-all duration-300 text-lg"
                  >
                    Solicitar Orçamento
                    <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(25,47,79)] to-[rgb(25,47,79)]/90 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-[rgb(253,253,253)] mb-4">
            Precisa de um Serviço Personalizado?
          </h3>
          <p className="text-[rgb(253,253,253)]/80 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e nossa equipe especializada irá criar a solução perfeita para você
          </p>
          <a
            href="https://wa.me/5571986462034"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(242,150,1)] text-[rgb(25,47,79)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(242,150,1)]/90 transition-all duration-300 hover:scale-105"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
