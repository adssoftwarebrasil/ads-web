import { ShoppingCart } from 'lucide-react';

const products = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/carzone%20baterias/img/bateria-moura-m60gd-azul-amarelo-carzone_1200x1600.webp',
    alt: 'Bateria Moura M60GD',
    badge: 'Mais Vendida',
    badgeClass: 'bg-[#F7EE30] text-[#000E27]',
    brand: 'Moura',
    title: 'Bateria Moura M60GD',
    category: 'Carro / Start-Stop',
    href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Bateria%20Moura%20M60GD.%20Qual%20o%20valor%3F',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/carzone%20baterias/img/bateria-pioneiro-amarela-preta-embalada-loja_1200x1600.webp',
    alt: 'Bateria Pioneiro',
    badge: 'Top Custo-Benefício',
    badgeClass: 'bg-[#1003AD] text-white',
    brand: 'Pioneiro',
    title: 'Bateria Pioneiro',
    category: 'Carro / Utilitários',
    href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Bateria%20Pioneiro.%20Qual%20o%20valor%3F',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/carzone%20baterias/img/bateria-zeffa-z60d-carzone-em-exposicao_1200x1600.webp',
    alt: 'Bateria Zeffa Z60D',
    badge: 'Alta Durabilidade',
    badgeClass: 'bg-[#000E27] text-white',
    brand: 'Zeffa',
    title: 'Bateria Zeffa Z60D',
    category: 'Carro / Alta Durabilidade',
    href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Bateria%20Zeffa%20Z60D.%20Qual%20o%20valor%3F',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/carzone%20baterias/img/baterias-amarelas-pioneiro-mbr-carzone_1200x1600.webp',
    alt: 'Linha Pioneiro Premium',
    badge: 'Pronta Entrega',
    badgeClass: 'bg-green-500 text-white',
    brand: 'Pioneiro MBR',
    title: 'Linha Pioneiro Premium',
    category: 'Carro / Caminhão',
    href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Linha%20Pioneiro%20Premium.%20Qual%20o%20valor%3F',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 section-enter">
          <span className="inline-block text-[#1003AD] font-bold text-sm uppercase tracking-widest mb-3">
            Nosso Estoque
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#000E27] mb-4">
            Marcas que Garantem Confiança
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Trabalhamos com as principais marcas do mercado, garantindo qualidade, desempenho e durabilidade para o
            seu veículo.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, i) => (
            <div
              key={p.title}
              className="section-enter battery-card group bg-[#F6FBFC] rounded-2xl overflow-hidden border border-gray-100 card-hover"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-white aspect-[3/4]">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover battery-image"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-lg ${p.badgeClass}`}>
                  {p.badge}
                </span>
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#F7EE30] text-[#000E27] py-2.5 rounded-xl text-sm font-bold hover:bg-yellow-300 transition-colors"
                  >
                    <ShoppingCart className="lucide lucide-shopping-cart" width={15} height={15} />
                    Ver Preço
                  </a>
                </div>
              </div>
              <div className="p-4">
                <span className="text-[#1003AD] text-xs font-bold uppercase tracking-wider">{p.brand}</span>
                <h3 className="text-[#000E27] font-bold text-sm md:text-base mt-0.5 mb-1">{p.title}</h3>
                <p className="text-gray-400 text-xs">{p.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center section-enter">
          <p className="text-gray-500 mb-4">Não encontrou o modelo que procura?</p>
          <a
            href="http://wa.me/556593448962?text=Ol%C3%A1!%20Gostaria%20de%20verificar%20a%20disponibilidade%20de%20uma%20bateria%20espec%C3%ADfica."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#000E27] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1003AD] transition-colors duration-300"
          >
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
