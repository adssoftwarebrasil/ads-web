import { Truck, Search, Package, Users, Settings, ShoppingCart, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  img: string;
  alt: string;
  imgObject: string;
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
}

const base = 'https://storage.lucasmendes.dev/site-sp/hidrau%20turbo%2Fimg%2F';

const services: Service[] = [
  {
    img: base + 'servicos-para-veiculos-pesados.webp',
    alt: 'Veículos Pesados',
    imgObject: 'object-center',
    Icon: Truck,
    iconClass: 'lucide lucide-truck ',
    title: 'Veículos Pesados',
    desc: 'Especialistas em manutenção de turbinas e sistemas de direção para linha pesada e caminhões.',
  },
  {
    img: base + 'diagnostico-completo.webp',
    alt: 'Diagnóstico Completo',
    imgObject: 'object-center',
    Icon: Search,
    iconClass: 'lucide lucide-search ',
    title: 'Diagnóstico Completo',
    desc: 'Análise técnica precisa para identificar falhas e propor as soluções mais econômicas e eficazes.',
  },
  {
    img: base + 'turbo.webp',
    alt: 'Venda de Turbos Novos',
    imgObject: 'object-center',
    Icon: Package,
    iconClass: 'lucide lucide-package ',
    title: 'Venda de Turbos Novos',
    desc: 'Catálogo completo de turbocompressores novos com garantia e diversas aplicações veiculares.',
  },
  {
    img: base + 'mao-de-obra-qualificada.webp',
    alt: 'Mão de Obra Qualificada',
    imgObject: 'object-center',
    Icon: Users,
    iconClass: 'lucide lucide-users ',
    title: 'Mão de Obra Qualificada',
    desc: 'Equipe técnica certificada para realizar manutenções preventivas e corretivas de alto padrão.',
  },
  {
    img: base + 'recuperacao-de-turbina.webp',
    alt: 'Recuperação de Turbinas',
    imgObject: 'object-center',
    Icon: Settings,
    iconClass: 'lucide lucide-settings ',
    title: 'Recuperação de Turbinas',
    desc: 'Restauração completa de turbinas utilizando peças originais para garantir performance de nova.',
  },
  {
    img: base + 'vendas-de-pecas-bosch.webp',
    alt: 'Peças Bosch',
    imgObject: 'object-top',
    Icon: ShoppingCart,
    iconClass: 'lucide lucide-shopping-cart ',
    title: 'Peças Bosch',
    desc: 'Distribuidor autorizado de peças originais Bosch para sistemas de direção hidráulica.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-gray-50 py-20 sm:py-28 px-4 sm:px-6 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-md bg-blue-100 text-primary-blue text-sm font-bold uppercase tracking-wider mb-4">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-900 leading-tight mb-4">
            Soluções Automotivas Completas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Combinamos tecnologia de ponta e peças originais para entregar o melhor serviço para seu
            veículo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="relative w-full aspect-square overflow-hidden bg-gray-200">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  className={`w-full h-full object-cover ${s.imgObject} transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary-blue border border-white transition-transform duration-300 group-hover:-translate-y-1">
                  <s.Icon size={22} className={s.iconClass} />
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
                  {s.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed mb-6 flex-grow">{s.desc}</p>
                <div className="mt-auto">
                  <button className="w-full group/btn bg-gray-50 hover:bg-accent-red text-gray-900 hover:text-white border border-gray-200 hover:border-accent-red text-sm font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300">
                    SAIBA MAIS
                    <ArrowRight
                      size={18}
                      className="lucide lucide-arrow-right transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
