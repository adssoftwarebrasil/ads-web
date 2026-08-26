import { Box, Package, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Category {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
  delay: string;
}

const categories: Category[] = [
  { icon: Package, iconClass: 'lucide lucide-package', title: 'Alumínio', desc: 'Assadeiras, bandejas e utensílios', delay: '0s' },
  { icon: Package, iconClass: 'lucide lucide-package', title: 'Confeitaria', desc: 'Cake boards, formas e acessórios', delay: '0.1s' },
  { icon: Package, iconClass: 'lucide lucide-package', title: 'Delivery', desc: 'Embalagens e acessórios para delivery', delay: '0.2s' },
  { icon: Package, iconClass: 'lucide lucide-package', title: 'Embalagens Plásticas', desc: 'Potes, doces e embalagens diversas', delay: '0.3s' },
  { icon: Package, iconClass: 'lucide lucide-package', title: 'Festa', desc: 'Copos, pratos e acessórios para festas', delay: '0.4s' },
  { icon: Sparkles, iconClass: 'lucide lucide-sparkles', title: 'Higiene e Limpeza', desc: 'Produtos de limpeza e higiene', delay: '0.5s' },
  { icon: Package, iconClass: 'lucide lucide-package', title: 'Isopor', desc: 'Bandejas, marmitex e embalagens', delay: '0.6s' },
  { icon: Package, iconClass: 'lucide lucide-package', title: 'Papel e Ecológico', desc: 'Produtos sustentáveis e biodegradáveis', delay: '0.7s' },
  { icon: Package, iconClass: 'lucide lucide-package', title: 'Plástico', desc: 'Sacolas, filmes e embalagens plásticas', delay: '0.8s' },
];

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[rgb(153,21,16)] blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[rgb(2,74,169)] blur-3xl"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] px-5 py-2 shadow-lg">
            <Box className="lucide lucide-box text-white" width={18} height={18} />
            <span className="text-sm font-bold text-white">Variedade completa</span>
          </div>
          <h2 className="mb-4 text-4xl font-black text-[rgb(153,21,16)] md:text-5xl">Nossas Categorias</h2>
          <div className="mx-auto mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)]"></div>
          <p className="text-lg text-gray-700">Explore nossa linha completa de produtos</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                style={{
                  animation: `0.5s ease-out ${c.delay} 1 normal both running fadeInUp`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(153,21,16)]/5 to-[rgb(2,74,169)]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="relative p-8 text-center">
                  <div className="relative mx-auto mb-6 inline-flex">
                    <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(153,21,16)] to-[rgb(2,74,169)] shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className={`${c.iconClass} text-white`} width={56} height={56} />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-white opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"></div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[rgb(153,21,16)] transition-colors duration-300 group-hover:text-[rgb(2,74,169)]">
                    {c.title}
                  </h3>
                  <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] opacity-0 transition-all duration-500 group-hover:w-20 group-hover:opacity-100"></div>
                  <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    {c.desc}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 transition-all duration-500 group-hover:border-[rgb(153,21,16)]/30 group-hover:opacity-100"></div>
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
