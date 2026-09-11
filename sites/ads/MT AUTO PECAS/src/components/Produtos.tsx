import {
  Package,
  Droplet,
  Disc,
  Battery,
  Wind,
  Activity,
  Settings,
  Wrench,
  ShieldAlert,
  Car,
  Bike,
  Truck,
  Bus,
  type LucideIcon,
} from 'lucide-react';

interface Produto {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

const produtos: Produto[] = [
  {
    icon: Package,
    title: 'Peças Automotivas',
    description: 'Amplo estoque de peças originais e de reposição para diversas marcas.',
    tags: ['Motor', 'Elétrica', 'Lataria'],
    image: 'https://storage.lucasmendes.dev/site-sp/mt%20autopecas/img/carros.webp',
  },
  {
    icon: Droplet,
    title: 'Troca de Óleo',
    description: 'As melhores marcas de óleos lubrificantes para seu veiculo, linha leve ou pesada.',
    tags: ['Motor', 'Filtros', 'Revisão'],
    image: 'https://storage.lucasmendes.dev/site-sp/mt%20autopecas/img/oleos-lubrificante.webp',
  },
  {
    icon: Disc,
    title: 'Rodas',
    description: 'Rodas liga leve e ferro, linha leve e pesada.\nObs: Não fazemos reforma e personalização.',
    tags: ['Aros', 'Design', 'Reforma'],
    image: 'https://storage.lucasmendes.dev/site-sp/mt%20autopecas/img/rodas.webp',
  },
  {
    icon: Battery,
    title: 'Baterias',
    description: 'Venda, diagnóstico e instalação de baterias automotivas com garantia.',
    tags: ['Start-Stop', 'Motos', 'Carros'],
    image: 'https://storage.lucasmendes.dev/site-sp/mt%20autopecas/img/baterias.webp',
  },
  {
    icon: Wind,
    title: 'Escapamentos',
    description: 'Manutenção, reparo e instalação de sistemas de exaustão e silenciosos.',
    tags: ['Silenciosos', 'Catalisadores', 'Esportivos'],
    image: 'https://storage.lucasmendes.dev/site-sp/mt%20autopecas/img/escapamentos.webp',
  },
  {
    icon: Activity,
    title: 'Alinhamento 3D',
    description: 'Tecnologia de ponta para garantir a geometria perfeita do veículo.',
    tags: ['Precisão', 'Segurança', 'Desempenho'],
  },
  {
    icon: Settings,
    title: 'Balanceamento',
    description: 'Evite vibrações no volante e o desgaste prematuro dos pneus.',
    tags: ['Rodas', 'Conforto', 'Estabilidade'],
  },
  {
    icon: Wrench,
    title: 'Cambagem',
    description: 'Ajuste do ângulo de inclinação das rodas para estabilidade ideal.',
    tags: ['Suspensão', 'Geometria', 'Ajuste'],
  },
  {
    icon: ShieldAlert,
    title: 'Freios',
    description: 'Manutenção completa com troca de pastilhas, discos e fluidos.',
    tags: ['Pastilhas', 'Discos', 'ABS'],
  },
  {
    icon: Car,
    title: 'Suspensão',
    description: 'Revisão e troca de amortecedores, molas e componentes da suspensão.',
    tags: ['Amortecedores', 'Molas', 'Buchas'],
  },
];

const veiculos: { icon: LucideIcon; label: string }[] = [
  { icon: Bike, label: 'Motos' },
  { icon: Car, label: 'Carros' },
  { icon: Car, label: 'Pick-ups' },
  { icon: Truck, label: 'Caminhões' },
  { icon: Bus, label: 'Ônibus' },
  { icon: Truck, label: 'Carretas' },
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossas <span className="text-[rgb(4,152,134)]">Soluções Automotivas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Produtos de qualidade e serviços especializados em um só lugar
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
            {produtos.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  {p.image && (
                    <div className="relative h-40 xl:h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}
                  <div className={`p-6 flex-1 flex flex-col ${p.image ? '' : 'pt-8'}`}>
                    <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                      <div className="w-12 h-12 bg-[rgb(4,152,134)]/10 rounded-xl flex items-center justify-center group-hover:bg-[rgb(4,152,134)] transition-colors">
                        <Icon size={24} className="text-[rgb(4,152,134)] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2">{p.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1 line-clamp-3 whitespace-pre-line">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[rgb(4,152,134)]/10 text-[rgb(4,152,134)] rounded-md text-xs font-medium whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-gradient-to-br from-[rgb(4,152,134)] to-[rgb(3,122,107)] rounded-3xl p-8 md:p-12 text-white shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Atendemos Todos os Tipos de Veículos</h3>
              <p className="text-white/90 text-lg">
                Equipe qualificada e estrutura preparada para qualquer necessidade automotiva
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {veiculos.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all cursor-default"
                  >
                    <Icon size={32} className="text-white" />
                    <span className="font-semibold text-sm text-center">{v.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <a
                href="https://wa.me/559191706760?text=Olá! Gostaria de cotar uma peça ou agendar um serviço."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[rgb(4,152,134)] px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
