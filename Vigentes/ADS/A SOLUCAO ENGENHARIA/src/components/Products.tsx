import {
  AlertTriangle,
  Bell,
  DoorOpen,
  Flame,
  Lightbulb,
  Waves,
  Wind,
} from 'lucide-react';

const products = [
  {
    icon: Flame,
    title: 'Extintores de Incêndio',
    description:
      'Extintores novos e recarga certificada para todos os tipos de fogo (A, B, C e D).',
    image: '/produtos/extintores-de-incendio.webp',
  },
  {
    icon: AlertTriangle,
    title: 'Sinalização de Emergência',
    description:
      'Placas fotoluminescentes para saídas de emergência, rotas de fuga e equipamentos de segurança.',
    image: '/produtos/sinalizacao-de-emergencia.webp',
  },
  {
    icon: Lightbulb,
    title: 'Iluminação de Emergência',
    description:
      'Luminárias de emergência e balizamento para garantir visibilidade total em caso de queda de energia.',
    image: '/produtos/iluminacao-de-emergencia.webp',
  },
  {
    icon: Bell,
    title: 'Alarme de Incêndio',
    description:
      'Sistemas de alarme inteligentes com acionadores manuais e automáticos para detecção imediata.',
    image: '/produtos/alarme-de-emergencia.webp',
  },
  {
    icon: AlertTriangle,
    title: 'Detectores de Incêndio',
    description:
      'Detectores de fumaça, temperatura e gás para monitoramento contínuo e alarme precoce.',
    image: '/produtos/detector.webp',
  },
  {
    icon: Waves,
    title: 'Sistema de Hidrantes',
    description:
      'Bombas, mangueiras, abrigos e acessórios para sistemas de combate a incêndio por hidrante.',
    image: '/produtos/hydrantes.webp',
  },
  {
    icon: DoorOpen,
    title: 'Porta de Emergência',
    description:
      'Portas corta-fogo certificadas para garantir a segurança e a integridade em rotas de fuga.',
    image: '/produtos/porta-de-emergencia.webp',
  },
  {
    icon: Wind,
    title: 'Controle de Fumaça',
    description:
      'Sistemas de extração e controle de fumaça para ambientes fechados, galerias e subsolos.',
    image: '/produtos/controle-de-fumaca.webp',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#92AA40]/15 text-[#92AA40] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#090B4A] leading-tight mb-4">
            Equipamentos de <span className="text-[#92AA40]">Alta Qualidade</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            Trabalhamos com os melhores fabricantes do mercado para garantir
            equipamentos confiáveis e dentro das normas vigentes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090B4A]/50 to-transparent" />
                <div className="absolute top-3 right-3 w-9 h-9 bg-[#92AA40] rounded-lg flex items-center justify-center shadow">
                  <product.icon size={16} className="text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#090B4A] mb-1.5 text-sm leading-tight">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="http://wa.me/5579998705409?text=Olá! Gostaria de informações sobre os produtos da A Solução Engenharia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#090B4A] hover:bg-[#0d1260] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
          >
            Ver Todos os Produtos
          </a>
        </div>
      </div>
    </section>
  );
}
