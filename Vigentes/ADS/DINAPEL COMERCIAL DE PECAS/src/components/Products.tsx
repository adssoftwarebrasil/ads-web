import { Settings, Droplets, RotateCcw, Link2, Filter, Zap, Package, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Category = {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  items: string[];
  featured?: boolean;
};

const categories: Category[] = [
  {
    Icon: Settings,
    iconClass: 'lucide lucide-settings text-[#0131AC]',
    title: 'Peças Mecânicas',
    items: ['Engrenagens', 'Eixos', 'Carcaças', 'Cruzetas', 'Cardans', 'Rolamentos'],
  },
  {
    Icon: Droplets,
    iconClass: 'lucide lucide-droplets text-[#0131AC]',
    title: 'Sistema Hidráulico',
    items: ['Bombas hidráulicas', 'Cilindros', 'Mangueiras', 'Conexões', 'Válvulas'],
  },
  {
    Icon: RotateCcw,
    iconClass: 'lucide lucide-rotate-ccw text-[#0131AC]',
    title: 'Transmissão',
    items: ['Discos de embreagem', 'Platôs', 'Correias', 'Mancais', 'Assentos'],
    featured: true,
  },
  {
    Icon: Link2,
    iconClass: 'lucide lucide-link2 text-[#0131AC]',
    title: 'Fixação',
    items: ['Parafusos', 'Correntes', 'Abraçadeiras', 'Porcas', 'Arruelas'],
  },
  {
    Icon: Filter,
    iconClass: 'lucide lucide-filter text-[#0131AC]',
    title: 'Filtros',
    items: ['Filtro de ar', 'Filtro de combustível', 'Filtro de óleo', 'Filtro hidráulico'],
  },
  {
    Icon: Zap,
    iconClass: 'lucide lucide-zap text-[#0131AC]',
    title: 'Sistema Elétrico',
    items: ['Ignição', 'Lanternas', 'Faróis', 'Fusíveis', 'Reguladores'],
  },
  {
    Icon: Package,
    iconClass: 'lucide lucide-package text-[#0131AC]',
    title: 'Consumíveis',
    items: ['Graxa', 'Aditivos', 'Silicone', 'Limpa radiador', 'Lubrificantes'],
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#0131AC] font-semibold text-sm uppercase tracking-widest mb-3">
            Catálogo Completo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 section-line inline-block">
            Nossos Produtos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-6 text-base leading-relaxed">
            Trabalhamos com as principais marcas do mercado e mantemos um estoque amplo para atender
            qualquer necessidade do seu trator ou implemento agrícola.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map(({ Icon, iconClass, title, items, featured }) => (
            <div
              key={title}
              className={
                featured
                  ? 'card-hover rounded-2xl p-6 border bg-[#0131AC] border-[#0131AC] text-white shadow-xl shadow-blue-200'
                  : 'card-hover rounded-2xl p-6 border bg-white border-gray-100 text-gray-900 shadow-sm'
              }
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  featured ? 'bg-[#FCE500]' : 'bg-[#E6ECFA]'
                }`}
              >
                <Icon size={22} className={iconClass} />
              </div>
              <h3 className={`font-bold text-base mb-3 ${featured ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </h3>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-2 text-sm ${
                      featured ? 'text-white/80' : 'text-gray-500'
                    }`}
                  >
                    <ChevronRight
                      size={12}
                      className={`lucide lucide-chevron-right flex-shrink-0 ${
                        featured ? 'text-[#FCE500]' : 'text-[#0131AC]'
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="card-hover rounded-2xl p-6 yellow-gradient shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="font-black text-[#0131AC] text-lg mb-2">Não encontrou o que precisa?</h3>
              <p className="text-[#0131AC]/80 text-sm leading-relaxed">
                Fale com nossa equipe. Podemos encontrar a peça certa para o seu equipamento.
              </p>
            </div>
            <a
              href="http://wa.me/5595991424864"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-[#0131AC] text-white font-bold py-3 px-4 rounded-xl text-sm hover:bg-[#01165A] transition-colors"
            >
              Consultar agora
            </a>
          </div>
        </div>
        <div className="mt-14 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://storage.lucasmendes.dev/site-sp/dinapel/img/loja-autope-as-prateleiras-correntes-parafusos_383x465.webp"
            alt="Estoque Dinapel - Prateleiras organizadas com peças"
            className="w-full h-64 sm:h-80 object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
