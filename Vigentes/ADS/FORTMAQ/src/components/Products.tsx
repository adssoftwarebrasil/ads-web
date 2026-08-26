import { ArrowRight, Drill, Wrench, HardHat, Zap, Hammer, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/559491009092';

type Product = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
  alt: string;
};

const products: Product[] = [
  {
    Icon: Drill,
    title: 'Ferramentas Elétricas',
    desc: 'Furadeiras, parafusadeiras, esmerilhadeiras, lixadeiras e muito mais.',
    img: 'https://images.pexels.com/photos/6474500/pexels-photo-6474500.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ferramentas Elétricas',
  },
  {
    Icon: Wrench,
    title: 'Ferramentas Manuais',
    desc: 'Chaves, alicates, martelos, serras e ferramentas de precisão.',
    img: 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ferramentas Manuais',
  },
  {
    Icon: HardHat,
    title: 'EPIs e Segurança',
    desc: 'Equipamentos de proteção individual para máxima segurança no trabalho.',
    img: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'EPIs e Segurança',
  },
  {
    Icon: Zap,
    title: 'Ferramentas Pneumáticas',
    desc: 'Compressores, pistolas de pintura e ferramentas pneumáticas profissionais.',
    img: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ferramentas Pneumáticas',
  },
  {
    Icon: Hammer,
    title: 'Construção Civil',
    desc: 'Ferramentas e equipamentos para construção e reforma.',
    img: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Construção Civil',
  },
  {
    Icon: Settings,
    title: 'Manutenção Industrial',
    desc: 'Equipamentos e ferramentas para manutenção e serviços industriais.',
    img: 'https://images.pexels.com/photos/3846511/pexels-photo-3846511.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Manutenção Industrial',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#AA1C1F] font-semibold text-sm uppercase tracking-wide">Nossos Produtos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1E55] mt-3 mb-6">
              Soluções Completas em <span className="text-[#AA1C1F]">Ferramentas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla variedade de produtos para atender profissionais e uso doméstico em diferentes setores
            </p>
            <div className="w-24 h-1 bg-[#AA1C1F] mx-auto mt-6"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(({ Icon, title, desc, img, alt }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={img}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E55]/95 via-[#0A1E55]/70 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="bg-[#AA1C1F] p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{title}</h3>
                  <p className="text-[#E6E6E4] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {desc}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-[#AA1C1F] bg-white px-4 py-2 rounded-full font-semibold w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#E6E6E4]"
                  >
                    <span>Consultar</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#0A1E55] to-[#0A1E55]/90 rounded-3xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Não encontrou o que procura?</h3>
              <p className="text-[#E6E6E4] text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato conosco! Temos uma ampla variedade de produtos e podemos ajudá-lo a encontrar exatamente
                o que você precisa.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#AA1C1F] text-white px-8 py-4 rounded-full hover:bg-[#8A1619] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 font-bold text-lg group"
              >
                <span>Fale com Nossos Especialistas</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
