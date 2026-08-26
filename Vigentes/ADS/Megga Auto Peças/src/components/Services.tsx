import { Truck, Bus, Car, Wrench, Package, ShoppingCart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  title: string;
  text: string;
  tags: string[];
}

const services: Service[] = [
  {
    Icon: Truck,
    title: 'Peças para Caminhões',
    text: 'Amplo estoque de peças originais e similares para todas as marcas de caminhões',
    tags: ['Mercedes', 'Scania', 'Volvo', 'Volkswagen', 'Ford', 'Iveco'],
  },
  {
    Icon: Bus,
    title: 'Peças para Ônibus',
    text: 'Componentes especializados para ônibus urbanos, rodoviários e micro-ônibus',
    tags: ['Mercedes', 'Volkswagen', 'Scania', 'Volvo', 'Agrale', 'Volare'],
  },
  {
    Icon: Car,
    title: 'Peças para Picapes e Vans',
    text: 'Soluções completas para picapes, vans e veículos utilitários',
    tags: ['Toyota', 'Mitsubishi', 'Ford', 'Chevrolet', 'Nissan', 'RAM'],
  },
  {
    Icon: Wrench,
    title: 'Peças para Máquinas',
    text: 'Componentes para máquinas pesadas e equipamentos industriais',
    tags: ['Caterpillar', 'Komatsu', 'JCB', 'Case', 'New Holland', 'Hyundai'],
  },
  {
    Icon: Package,
    title: 'Distribuição Atacado',
    text: 'Preços especiais para oficinas e revendedores com grande volume',
    tags: ['Parcerias', 'Exclusivas', 'Com Marcas', 'Líderes', 'Do Mercado', 'Nacional'],
  },
  {
    Icon: ShoppingCart,
    title: 'Varejo Especializado',
    text: 'Atendimento personalizado no balcão com equipe técnica qualificada',
    tags: ['Atendimento', 'Consultivo', 'Entrega', 'Expressa', 'Garantia', 'Total'],
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[rgb(216,32,38)]/10 text-[rgb(216,32,38)] rounded-full text-sm font-semibold">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(28,58,122)] mb-6">
            Soluções Completas em Auto Peças
          </h2>
          <p className="text-lg text-gray-700">
            Distribuidor oficial das principais marcas do mercado. Variedade,
            qualidade e os melhores preços da região.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map(({ Icon, title, text, tags }) => (
            <div
              key={title}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[rgb(216,32,38)] to-[rgb(196,22,28)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[rgb(28,58,122)] mb-3">{title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{text}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-[rgb(28,58,122)]/10 text-[rgb(28,58,122)] rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://storage.lucasmendes.dev/site-sp/megga%20auto%20pecas/img/loja-autopecas-balcao-interno.webp"
            alt="Loja Megga Auto Peças"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(28,58,122)]/90 to-[rgb(26,21,92)]/80 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Distribuidor Autorizado das Melhores Marcas
              </h3>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                ZF, Eaton, Meritor, Mahle, Cinpal, Cofap, Wabco, Sachs, Bosch e mais
                de 100 marcas parceiras
              </p>
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-[rgb(216,32,38)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(196,22,28)] transition-all duration-300 font-bold text-lg shadow-xl hover:scale-105"
              >
                Consulte Disponibilidade
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
