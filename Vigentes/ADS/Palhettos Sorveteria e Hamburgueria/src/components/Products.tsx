import { IceCream, Beef, Coffee, Pizza } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const WHATSAPP = 'http://wa.me/556299822672';
const IMG = 'https://storage.lucasmendes.dev/site-sp/palhetos%20sorveteria%20e%20hamburgueria%20%2Fimg%2F';

interface Category {
  icon: LucideIcon;
  title: string;
  desc: string;
  gradient: string;
}

const categories: Category[] = [
  { icon: IceCream, title: 'Sorvetes Artesanais', desc: 'Cremosos, frescos e com sabores únicos', gradient: 'from-blue-500/20 to-cyan-500/20' },
  { icon: Beef, title: 'Hambúrgueres Gourmet', desc: 'Suculentos, artesanais e irresistíveis', gradient: 'from-red-500/20 to-orange-500/20' },
  { icon: Coffee, title: 'Açaí & Cupuaçu', desc: 'Naturais e cheios de energia', gradient: 'from-purple-500/20 to-pink-500/20' },
  { icon: Pizza, title: 'Pizza & Batata', desc: 'Porções quentinhas e deliciosas', gradient: 'from-yellow-500/20 to-orange-500/20' },
];

interface Product {
  img: string;
  alt: string;
  badge: string;
  title: string;
  desc: string;
}

const products: Product[] = [
  { img: `${IMG}hamburguer-batatas-fritas.webp`, alt: 'Hambúrguer Artesanal', badge: 'Mais Pedido', title: 'Hambúrguer Artesanal', desc: 'Suculento, com batatas fritas crocantes' },
  { img: `${IMG}sorvete-frutas-casquinha.webp`, alt: 'Sorvetes Premium', badge: 'Especialidade', title: 'Sorvetes Premium', desc: 'Casquinha crocante com frutas frescas' },
  { img: `${IMG}acai-leite-condensado.webp`, alt: 'Açaí Completo', badge: 'Favorito', title: 'Açaí Completo', desc: 'Com leite condensado e acompanhamentos' },
  { img: `${IMG}batata-cheddar-bacon.webp`, alt: 'Batata Premium', badge: 'Delícia', title: 'Batata Premium', desc: 'Cheddar cremoso e bacon crocante' },
  { img: `${IMG}hamburguer-duplo-batata-frita.webp`, alt: 'Combo Duplo', badge: 'Top', title: 'Combo Duplo', desc: 'Hambúrguer duplo com batatas' },
  { img: `${IMG}sorvete-amarelo-cremoso.webp`, alt: 'Sorvete Cremoso', badge: 'Cremoso', title: 'Sorvete Cremoso', desc: 'Textura aveludada e sabor intenso' },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(255,204,26)]/10 border border-[rgb(255,204,26)] px-4 py-2 rounded-full mb-6">
            <span className="text-[rgb(255,204,26)] font-semibold text-sm">NOSSOS PRODUTOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(35,31,32)] mb-6">
            Sabores que Encantam
            <span className="text-[rgb(255,204,26)] block mt-2">em Cada Mordida</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa variedade de produtos artesanais, feitos diariamente com ingredientes selecionados e muito amor. Qualidade gourmet a preços acessíveis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className={`bg-gradient-to-br ${c.gradient} backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300`}
              >
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon size={32} className="text-[rgb(35,31,32)]" />
                </div>
                <h3 className="text-2xl font-bold text-[rgb(35,31,32)] mb-3">{c.title}</h3>
                <p className="text-gray-700">{c.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[rgb(255,204,26)] text-[rgb(35,31,32)] px-4 py-2 rounded-full text-sm font-bold shadow-lg">{p.badge}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(35,31,32)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[rgb(35,31,32)] mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[rgb(255,204,26)] font-semibold hover:text-yellow-600 transition-colors"
                >
                  Pedir Agora →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
