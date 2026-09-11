import {
  Cog,
  CircleDot,
  Settings,
  Droplet,
  Circle,
  Zap,
  Wind,
  Gauge,
} from 'lucide-react';

const products = [
  {
    Icon: Cog,
    iconClass: 'lucide lucide-cog text-white',
    title: 'Motor',
    text: 'Peças e componentes para motores diesel de todas as marcas, garantindo performance e durabilidade.',
  },
  {
    Icon: CircleDot,
    iconClass: 'lucide lucide-circle-dot text-white',
    title: 'Freios',
    text: 'Sistema completo de freios, pastilhas, discos e componentes para máxima segurança.',
  },
  {
    Icon: Settings,
    iconClass: 'lucide lucide-settings text-white',
    title: 'Suspensão',
    text: 'Molas, amortecedores, buchas e todo sistema de suspensão para conforto e estabilidade.',
  },
  {
    Icon: Droplet,
    iconClass: 'lucide lucide-droplet text-white',
    title: 'Óleos e Filtros',
    text: 'Lubrificantes de alta qualidade e filtros originais para manutenção preventiva.',
  },
  {
    Icon: Circle,
    iconClass: 'lucide lucide-circle text-white',
    title: 'Diferencial',
    text: 'Peças para transmissão e diferencial, mantendo a força do seu caminhão.',
  },
  {
    Icon: Zap,
    iconClass: 'lucide lucide-zap text-white',
    title: 'Sistema Elétrico',
    text: 'Lanternas, lâmpadas, sensores e toda parte elétrica para iluminação e segurança.',
  },
  {
    Icon: Wind,
    iconClass: 'lucide lucide-wind text-white',
    title: 'Escapamentos',
    text: 'Sistemas de escape completos e componentes para eficiência e conformidade.',
  },
  {
    Icon: Gauge,
    iconClass: 'lucide lucide-gauge text-white',
    title: 'Válvulas',
    text: 'Válvulas e componentes pneumáticos para sistemas de ar comprimido.',
  },
];

const stats = [
  { value: '1000+', label: 'Itens em Estoque' },
  { value: '34+', label: 'Anos de Mercado' },
  { value: '100%', label: 'Compromisso' },
];

export default function Products() {
  return (
    <section
      id="produtos"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[rgb(237,23,21)] font-semibold text-sm uppercase tracking-wider">
              Nossos Produtos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções Completas para{' '}
            <span className="text-[rgb(237,23,21)]">Caminhões</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estoque abrangente com peças a pronta entrega para caminhões, vans e
            linha diesel de todas as marcas. Qualidade garantida e atendimento
            especializado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((p) => (
            <div
              key={p.title}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[rgb(237,23,21)] transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-[rgb(237,23,21)] to-red-700 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <p.Icon className={p.iconClass} width={28} height={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[rgb(237,23,21)] transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(237,23,21)] to-red-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Peças a Pronta Entrega em Medianeira e Região
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Nosso compromisso é minimizar o tempo do seu caminhão parado. Com
              estoque completo e entrega ágil, garantimos que você volte para a
              estrada rapidamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/30"
                >
                  <div className="text-3xl font-bold">{s.value}</div>
                  <div className="text-sm text-white/90">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
