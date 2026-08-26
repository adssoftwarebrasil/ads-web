import { useState } from 'react';
import { ChefHat, ShoppingCart, Star, Clock } from 'lucide-react';

const STORAGE = 'https://storage.lucasmendes.dev/site-sp/';
const WHATSAPP = 'https://wa.me/5534996450016';

type Category = 'salgadas' | 'especiais' | 'doces' | 'combos';

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  category: Category;
}

const PRODUCTS: Product[] = [
  { name: 'Muçarela', description: 'Molho especial de tomate, muçarela, azeitonas e orégano', price: 'R$ 46,00', image: STORAGE + 'kissai%2Fimg%2FMuc%CC%A7arela.jpeg', category: 'salgadas' },
  { name: 'Pizza Calabresa', description: 'Calabresa especial com cebola e azeitonas', price: 'R$ 46,00', image: STORAGE + 'kissai%2Fpizza%20calabresa.webp', badge: 'Popular', category: 'salgadas' },
  { name: 'Pizza Marguerita', description: 'Muçarela, molho especial, tomate fatiado, manjericão, azeitonas e orégano', price: 'R$ 56,00', image: STORAGE + 'kissai%2FPizza%20Marguerita.webp', badge: 'Clássica', category: 'salgadas' },
  { name: 'Pizza Napolitana', description: 'Molho especial de tomates, muçarela, presunto, cebola, tomates, parmesão, azeitonas e orégano', price: 'R$ 46,00', image: STORAGE + 'kissai%2Fimg%2FPizza%20Napolitana.jpeg', category: 'salgadas' },
  { name: 'Vegetariana', description: 'Molho especial, muçarela, pimentão, tomates, milho, cebola, azeitonas, ervilhas, orégano', price: 'R$ 46,00', image: STORAGE + 'kissai%2Fimg%2FVegetariana.jpeg', category: 'salgadas' },
  { name: 'Pizza 2 Queijos', description: 'Molho especial, muçarela e catupiry, azeitona e orégano', price: 'R$ 56,00', image: STORAGE + 'kissai%2Fimg%2FPizza%202%20Queijos.jpeg', category: 'salgadas' },
  { name: 'Pizza 4 Queijos', description: 'Molho especial, muçarela, catupiry, parmesão, provolone e orégano', price: 'R$ 58,00', image: STORAGE + 'kissai%2Fimg%2FPizza%204%20Queijos.jpeg', badge: 'Premium', category: 'salgadas' },
  { name: 'Frango ao Catupiry', description: 'Molho especial de tomate, frango desfiado, catupiry, azeitonas, muçarela, orégano', price: 'R$ 56,00', image: STORAGE + 'kissai%2Fimg%2FPizza%20Frango%20ao%20Catupiry.jpeg', badge: 'Popular', category: 'salgadas' },
  { name: 'Calabresa e Catupiry', description: 'Molho especial, mussarela, calabresa, catupiry, cebola, azeitonas e orégano', price: 'R$ 56,00', image: STORAGE + 'kissai%2Fimg%2FCalabresa%20e%20Catupiry.jpeg', category: 'salgadas' },
  { name: 'Pizza Portuguesa', description: 'Molho especial, muçarela, presunto, tomate, ovos cozido, pimentão, cebola, milho, azeitonas e orégano', price: 'R$ 56,00', image: STORAGE + 'kissai%2Fimg%2FPizza%20Portuguesa%20R56%2C00.jpeg', category: 'salgadas' },
  { name: 'À Moda do Chef', description: 'Molho especial, muçarela, presunto, calabresa, tomate, cebola, milho, requeijão, azeitonas e orégano', price: 'R$ 56,00', image: STORAGE + 'kissai%2Fimg%2FPizza%20a%20Moda%20do%20Chef.jpeg', badge: 'Chef', category: 'especiais' },
  { name: 'PizzaTreslla', description: 'Molho de tomate, mussarela, filé de frango, tomate, pimentão, cebola, milho, bacon, catupiry, azeitona, orégano', price: 'R$ 74,00', image: STORAGE + 'kissai%2Fimg%2FPizzaTreslla.jpeg', badge: 'Premium', category: 'especiais' },
  { name: 'À Moda da Casa', description: 'Molho especial, mussarela, presunto, filé de frango, milho, calabresa, cebola, requeijão, pimentão, ovos, azeitonas e tomates, orégano', price: 'R$ 80,00', image: STORAGE + 'kissai%2Fimg%2Fa%20Moda%20da%20Casa.jpeg', badge: 'Premium', category: 'especiais' },
  { name: 'Pizza Kissai', description: 'Deliciosas pizzas artesanais com ingredientes frescos e molho caseiro, feitas com muito amor e dedicação', price: 'R$ 56,00', image: STORAGE + 'kissai%2Fimg%2Fpizza%20Kissai%2056%2C00.jpeg', badge: 'Exclusiva', category: 'especiais' },
  { name: 'Especial Presunto e Bacon', description: 'Molho especial de tomate, mussarela, presunto, ovos, milho, bacon, azeitonas e orégano', price: 'R$ 56,00', image: STORAGE + 'kissai%2Fimg%2FEspecial%20Presunto%20e%20Bacon.jpeg', category: 'especiais' },
  { name: 'Calabresa Paulista Sem Muçarela', description: 'Molho de tomate, calabresa defumada, pouca cebola, alho frito, tomate, azeitona, orégano (Intolerantes à Lactose)', price: 'R$ 46,00', image: STORAGE + 'kissai%2Fimg%2FPizza%20Calabresa%20Paulista%20Sem%20Mussarela%28Intolerantes%20a%CC%80%20Lactose%2946%2C00.jpeg', badge: 'Sem Lactose', category: 'especiais' },
  { name: 'Pizza Doce', description: 'Sobremesa perfeita para finalizar sua refeição', price: 'R$ 40,00', image: STORAGE + 'kissai%2FPizza%20Doce.webp', category: 'doces' },
  { name: 'Pizza Doce Brigadeiro', description: 'Chocolate ao leite com granulado irresistível', price: 'R$ 45,00', image: STORAGE + 'kissai%2FPizza%20Doce%20brigadeiro.webp', badge: 'Popular', category: 'doces' },
  { name: 'Brigadeiro', description: 'Chocolate ao leite com granulado', price: 'R$ 45,00', image: STORAGE + 'kissai%2Fimg%2FBrigadeiro.jpeg', category: 'doces' },
  { name: 'Banana Nevada', description: 'Banana, muçarela, merengue, canela, açúcar', price: 'R$ 45,00', image: STORAGE + 'kissai%2Fimg%2FBanana%20Nevada.jpeg', badge: 'Popular', category: 'doces' },
  { name: 'Banana com Açúcar e Canela', description: 'Banana, açúcar, canela, mussarela e leite condensado', price: 'R$ 40,00', image: STORAGE + 'kissai%2Fimg%2FBanana%20com%20Ac%CC%A7u%CC%81car%20e%20Canela.jpeg', category: 'doces' },
  { name: 'Chocolate Duo', description: 'Chocolate ao leite e chocolate branco', price: 'R$ 45,00', image: STORAGE + 'kissai%2Fimg%2FChocolate%20Duo.jpeg', category: 'doces' },
  { name: 'Chocolate com Banana', description: 'Chocolate, banana e leite condensado', price: 'R$ 45,00', image: STORAGE + 'kissai%2Fimg%2FChocolate%20com%20Banana.jpeg', category: 'doces' },
  { name: 'Dueto', description: 'Chocolate preto ao leite, chocolate branco e morango', price: 'R$ 45,00', image: STORAGE + 'kissai%2Fimg%2FDueto.jpeg', category: 'doces' },
  { name: 'Tik Tak', description: 'Sabor especial da casa', price: 'R$ 45,00', image: STORAGE + 'kissai%2Fimg%2FTik%20tak.jpeg', category: 'doces' },
  { name: 'Combo Calabresa + Pizza Doce', description: '1 Pizza Calabresa 8P + 1 Pizza Doce P', price: 'R$ 74,00', image: STORAGE + 'kissai%2Fimg%2FPizza%20Calabresa%208%20P%20%2BPizza%20doce%20P%20PROMOC%CC%A7A%CC%83O.jpeg', badge: 'Promoção', category: 'combos' },
  { name: 'Combo 1', description: '1 Pizza de Calabresa e Catupiry G + 1 pizza de chocolate 25cm', price: 'R$ 86,00', image: STORAGE + 'kissai%2Fimg%2Fcombo1.jpeg', badge: 'Combo', category: 'combos' },
  { name: 'Combo 2', description: '1 Pizza Frango/Catupiry 8P + 1 de Banana Nevada G 35cm + Mineiro 1,5L', price: 'R$ 100,00', image: STORAGE + 'kissai%2Fimg%2Fcombo2.jpeg', badge: 'Combo', category: 'combos' },
];

const FILTERS: { key: 'todas' | Category; emoji: string; label: string }[] = [
  { key: 'todas', emoji: '🍕', label: 'Todas' },
  { key: 'salgadas', emoji: '🧀', label: 'Salgadas' },
  { key: 'especiais', emoji: '⭐', label: 'Especiais' },
  { key: 'doces', emoji: '🍫', label: 'Doces' },
  { key: 'combos', emoji: '🎁', label: 'Combos' },
];

export default function Menu() {
  const [active, setActive] = useState<'todas' | Category>('todas');

  const filtered =
    active === 'todas'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-[rgb(235,185,3)]/10 px-4 py-2 rounded-full mb-4">
            <ChefHat size={20} className="text-[rgb(150,1,0)]" />
            <span className="text-[rgb(150,1,0)] font-semibold text-sm">
              Cardápio Completo
            </span>
          </div>
          <h2 className="text-[rgb(150,1,0)] text-4xl md:text-5xl font-bold mb-4">
            Nossas Pizzas Artesanais
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Feitas com ingredientes frescos e muito carinho. Escolha sua favorita
            e faça seu pedido!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActive(filter.key)}
              className={
                'px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ' +
                (active === filter.key
                  ? 'bg-[rgb(150,1,0)] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg')
              }
            >
              <span className="text-xl">{filter.emoji}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.name}
              className="animate-on-scroll bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 group flex flex-col"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-[rgb(235,185,3)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    {product.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(150,1,0)]/95 via-[rgb(150,1,0)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    <ShoppingCart size={32} className="text-[rgb(235,185,3)]" />
                  </div>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-[rgb(150,1,0)] text-lg font-bold mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-[rgb(150,1,0)] text-xl font-bold">
                      {product.price}
                    </span>
                  </div>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgb(235,185,3)] hover:bg-[rgb(235,185,3)]/90 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 text-gray-600 bg-white px-6 py-3 rounded-full shadow-md">
            <Clock size={18} className="text-[rgb(150,1,0)]" />
            <span className="text-sm">
              Entrega rápida • Ingredientes frescos • Massa artesanal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
