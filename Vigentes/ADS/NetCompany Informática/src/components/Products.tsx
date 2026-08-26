import { ShoppingCart } from 'lucide-react';

const categories = [
  {
    title: 'Computadores Desktop',
    description: 'Montagem personalizada para uso comercial e linha Gamer. Componentes de qualidade e melhor custo-benefício.',
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Mais vendido',
  },
  {
    title: 'Notebooks',
    description: 'Diversas marcas e configurações para atender desde o usuário básico até o profissional mais exigente.',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
  },
  {
    title: 'Periféricos e Acessórios',
    description: 'Teclados, mouses, headsets, webcams, cabos e adaptadores. Tudo para o seu setup completo.',
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
  },
  {
    title: 'Linha Gamer',
    description: 'Produtos gamer de alto desempenho: teclados mecânicos, mouses de precisão, headsets e cadeiras.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Novidade',
  },
  {
    title: 'Suprimentos e Toners',
    description: 'Cartuchos originais e compatíveis, toners e refil para EcoTank de todas as marcas.',
    image: 'https://storage.lucasmendes.dev/site-sp/netcompany%20informatica/produtos%20e%20servicos/Suprimentos%20e%20Toners.webp',
    badge: null,
  },
  {
    title: 'Redes e Conectividade',
    description: 'Roteadores, repetidores, switches, cabos de rede e todos os equipamentos para sua conectividade.',
    image: 'https://storage.lucasmendes.dev/site-sp/netcompany%20informatica/produtos%20e%20servicos/Redes%20e%20Conectividade.webp',
    badge: null,
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#F58842] font-semibold text-sm uppercase tracking-widest">
            Nossa Loja
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0D1B2A]">
            Produtos e Equipamentos
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Temos uma ampla variedade de produtos de informática com os melhores preços da região.
            Peças, acessórios, suprimentos e muito mais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 cursor-pointer"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/40 to-transparent" />

              {cat.badge && (
                <span className="absolute top-4 left-4 bg-[#F58842] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {cat.badge}
                </span>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg mb-1">{cat.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.description}
                </p>
                <a
                  href="http://wa.me/559491941919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F58842] hover:bg-[#e07432] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                >
                  <ShoppingCart size={14} />
                  Consultar Preço
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
