import { ChefHat, Sparkles, ArrowRight } from 'lucide-react';

interface MenuItem {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  badge?: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'Combinado Himitsu 60 + Sushi',
    category: 'Combinados',
    description:
      'Nosso combinado premium com 60 peças de alta qualidade e sushis especiais',
    image:
      'https://storage.lucasmendes.dev/site-sp/himitsu%2FCombinado%20Himitsu%2060%20%2B%20Sushi.webp',
    link: 'https://www.himitsu.com.br/produto/combinado-himitsu-60-sushi',
    badge: 'Mais Vendido',
  },
  {
    title: 'Poké Salmão Himitsu',
    category: 'Pokés',
    description:
      'Bowl completo com salmão fresco, arroz, vegetais e molho especial',
    image:
      'https://storage.lucasmendes.dev/site-sp/himitsu%2FPoke%20Himitsu%20Salma%CC%83o%20Himitsu.webp',
    link: 'https://www.himitsu.com.br/produto/poke-himitsu-salmao-himitsu',
    badge: 'Destaque',
  },
  {
    title: 'Poké Camarão',
    category: 'Pokés',
    description:
      'Bowl refrescante com camarão grelhado e ingredientes selecionados',
    image:
      'https://storage.lucasmendes.dev/site-sp/himitsu%2FPoke%20Himitsu%20Camara%CC%83o.webp',
    link: 'https://www.himitsu.com.br/produto/poke-himitsu-camarao',
  },
  {
    title: 'Hot Filadélfia',
    category: 'Hot Rolls',
    description:
      'Hot roll com cream cheese, salmão e cobertura especial - 8 unidades',
    image:
      'https://storage.lucasmendes.dev/site-sp/himitsu%2FHot%20filade%CC%81lphia%20-%208%20und.webp',
    link: 'https://www.himitsu.com.br/produto/hot-filadelphia-8-und',
  },
  {
    title: 'Temaki Salmão com Cream Cheese',
    category: 'Temakis',
    description: 'Temaki tradicional com salmão fresco e cream cheese cremoso',
    image:
      'https://storage.lucasmendes.dev/site-sp/himitsu%2FTemaki%20salma%CC%83o%20com%20cream%20cheese.webp',
    link: 'https://www.himitsu.com.br/produto/temaki-salmao-com-cream-cheese',
  },
  {
    title: 'Japa Dog Himitsu',
    category: 'Especiais',
    description: 'Nossa criação contemporânea que une tradição e inovação',
    image: 'https://storage.lucasmendes.dev/site-sp/himitsu%2FJapa%20Dog%20Himitsu.webp',
    link: 'https://www.himitsu.com.br/produto/japa-dog-himitsu',
    badge: 'Exclusivo',
  },
  {
    title: 'Gunkan Maracujá',
    category: 'Gunkans',
    description: 'Sushi especial com toque tropical único - 4 unidades',
    image:
      'https://storage.lucasmendes.dev/site-sp/himitsu%2FGunkan%20Maracuja%CC%81-%204%20und.webp',
    link: 'https://www.himitsu.com.br/produto/gunkan-maracuja-4-und',
  },
  {
    title: 'Uramaki Terrine',
    category: 'Uramakis',
    description: 'Uramaki diferenciado com sabores marcantes - 4 unidades',
    image:
      'https://storage.lucasmendes.dev/site-sp/himitsu%2FUramaki%20Terrine%20-%204%20und.webp',
    link: 'https://www.himitsu.com.br/produto/uramaki-terrine-4-und',
  },
  {
    title: 'Gunkan Salmão Morango',
    category: 'Gunkans',
    description:
      'Shari (arroz de sushi) envolto de uma lâmina de salmão recheado com cream cheese e morango - 4 unidades',
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=himitsu%2FGunkan%20Salma%CC%83o%20Morango%20-%204%20und1.webp&version_id=null',
    link: 'https://www.himitsu.com.br/produto/gunkan-salmao-morango-4-und',
    badge: 'Novo',
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative bg-gradient-to-b from-white via-[#F8F8F8] to-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#E02023]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#E02023]/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block animate-float mb-6">
            <div className="bg-gradient-to-br from-[#E02023] to-[#c01a1e] p-4 rounded-2xl shadow-xl">
              <ChefHat className="lucide lucide-chef-hat w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
          </div>
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="gradient-text">Nosso Cardápio</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Pratos que celebram sabor e cultura japonesa
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[#E02023] to-transparent rounded-full"></div>
            <Sparkles className="lucide lucide-sparkles w-5 h-5 text-[#E02023]" />
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[#E02023] to-transparent rounded-full"></div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="menu-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative"
            >
              {item.badge && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-[#E02023] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <Sparkles className="lucide lucide-sparkles w-3 h-3" />
                    {item.badge}
                  </div>
                </div>
              )}
              <div className="relative aspect-square overflow-hidden card-shine bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 scale-100 brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 opacity-0"></div>
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-black">{item.category}</span>
                </div>
              </div>
              <div className="p-6 md:p-7 relative">
                <h3 className="font-bold text-xl md:text-2xl text-black mb-3 leading-tight group-hover:text-[#E02023] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-5 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#E02023] font-bold hover:gap-4 transition-all duration-300 group/link"
                >
                  <span className="relative">
                    Pedir agora
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E02023] group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight className="lucide lucide-arrow-right w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E02023]/20 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 md:mt-20">
          <a
            href="https://www.himitsu.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E02023] to-[#c01a1e] text-white px-8 md:px-10 py-4 md:py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-base md:text-lg group"
          >
            <ChefHat className="lucide lucide-chef-hat w-6 h-6 group-hover:rotate-12 transition-transform" />
            Ver Cardápio Completo
            <ArrowRight className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
          <p className="text-gray-600 mt-6 text-sm md:text-base">
            Disponível para delivery e retirada no local
          </p>
        </div>
      </div>
    </section>
  );
}
