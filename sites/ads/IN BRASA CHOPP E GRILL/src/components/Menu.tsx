import { useState } from 'react';
import { Flame, UtensilsCrossed, CupSoda, Beer, Cake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { whatsappLink } from '../config';

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface Product {
  name: string;
  description: string;
  image: string;
  badge?: string;
}

const categories: Category[] = [
  { id: 'espetos', label: 'Espetos', icon: Flame },
  { id: 'porcoes', label: 'Porções', icon: UtensilsCrossed },
  { id: 'drinks', label: 'Drinks', icon: CupSoda },
  { id: 'cervejas', label: 'Cervejas', icon: Beer },
  { id: 'sobremesas', label: 'Sobremesas', icon: Cake },
];

const productsByCategory: Record<string, Product[]> = {
  espetos: [
    {
      name: 'Espeto de Picanha',
      description: 'Picanha com a capa de gordura na medida certa, assada na brasa',
      image: '/img/espeto-de-picanha.jpeg',
      badge: 'Mais Pedido',
    },
    {
      name: 'Espeto de Carne na Brasa',
      description: 'Corte nobre inteiro no espeto, selado por fora e suculento por dentro',
      image: '/img/espeto-de-carne-na-brasa.jpeg',
    },
    {
      name: 'Medalhão de Frango',
      description: 'Frango envolto em bacon, grelhado lentamente até ficar macio',
      image: '/img/medalhao-de-frango.jpeg',
    },
    {
      name: 'Espeto de Frango com Bacon',
      description: 'Cubos de frango temperados e enrolados no bacon crocante',
      image: '/img/espeto-de-frango-com-bacon.jpeg',
    },
    {
      name: 'Trio de Espetos',
      description: 'Três espetos da casa no suporte para dividir na mesa',
      image: '/img/trio-de-espetos.jpeg',
      badge: 'Especial',
    },
  ],
  porcoes: [
    {
      name: 'Combo Família In Brasa',
      description: 'Espetos, arroz, farofa, vinagrete e acompanhamentos para a mesa toda',
      image: '/img/combo-familia-inbrasa.jpeg',
      badge: 'Mais Pedido',
    },
    {
      name: 'Combo de Acompanhamentos',
      description: 'Arroz, farofa, vinagrete, maionese e saladas para completar seu espeto',
      image: '/img/combo-de-acompanhamentos.jpeg',
    },
    {
      name: 'Costelinha ao Barbecue',
      description: 'Costelinha glaceada no molho barbecue da casa com batata rústica',
      image: '/img/costelinha-bbq-batata-rustica.jpeg',
    },
    {
      name: 'Torresmo Crocante',
      description: 'Torresmo pururucado com cebola roxa e limão',
      image: '/img/torresmo-crocante-cebola-roxa.jpeg',
    },
    {
      name: 'Bolinho de Carne Seca com Queijo Coalho',
      description: 'Crocante por fora, carne seca e queijo coalho por dentro',
      image: '/img/bolinho-carne-seca-queijo-coalho.jpeg',
    },
    {
      name: 'Bolinho de Costela',
      description: 'Bolinho crocante recheado com costela desfiada',
      image: '/img/bolinho-de-costela.jpeg',
    },
    {
      name: 'Pastelzinho de Brisket',
      description: 'Pastel crocante recheado com brisket defumado na casa',
      image: '/img/pastelzinho-de-brisket.jpeg',
    },
    {
      name: 'Medalhão de Queijo Coalho com Goiabada',
      description: 'Queijo coalho grelhado com goiabada — o doce e salgado da casa',
      image: '/img/medalhao-queijo-coalho-goiabada.jpeg',
      badge: 'Especial',
    },
    {
      name: 'Batata Frita com Brisket',
      description: 'Batata frita coberta com brisket desfiado, queijo e cebolinha',
      image: '/img/batata-frita-com-brisket.jpeg',
    },
    {
      name: 'Batata Frita',
      description: 'Porção generosa de batata frita sequinha e bem dourada',
      image: '/img/batata-frita.jpeg',
    },
    {
      name: 'Panela de Carne com Pão de Alho',
      description: 'Carne na panela com pimentão, cebola roxa e pimenta biquinho',
      image: '/img/panela-de-carne-pao-de-alho.jpeg',
    },
    {
      name: 'Carne com Jiló',
      description: 'Carne salteada com jiló, cebola roxa e pimenta biquinho',
      image: '/img/carne-com-jilo.jpeg',
    },
  ],
  drinks: [
    {
      name: 'Caipirinha de Limão',
      description: 'A clássica da casa, preparada na hora com limão fresco',
      image: '/img/caipirinha-de-limao.jpeg',
      badge: 'Mais Pedido',
    },
    {
      name: 'Caipirinha de Maracujá',
      description: 'Maracujá natural, doce na medida e bem gelada',
      image: '/img/caipirinha-de-maracuja.jpeg',
    },
    {
      name: 'Caipirosca de Kiwi',
      description: 'Kiwi fresco macerado com vodka e muito gelo',
      image: '/img/caipirosca-de-kiwi.jpeg',
    },
    {
      name: 'Gin Tropical',
      description: 'Gin com maracujá, flor comestível e especiarias da casa',
      image: '/img/gin-tropical.jpeg',
      badge: 'Especial',
    },
    {
      name: 'Coquetel Tropical',
      description: 'Frutas tropicais batidas com maracujá, hortelã e laranja',
      image: '/img/coquetel-tropical.jpeg',
    },
    {
      name: 'Negroni',
      description: 'Gin, vermute e bitter na medida certa',
      image: '/img/negroni.jpeg',
    },
    {
      name: 'Aperol Spritz',
      description: 'Aperol, espumante e água com gás, servido bem gelado',
      image: '/img/aperol-spritz.jpeg',
    },
    {
      name: 'Drink com Torresmo',
      description: 'Coquetel cítrico finalizado com torresmo crocante e hortelã',
      image: '/img/drink-com-torresmo.jpeg',
    },
  ],
  cervejas: [
    {
      name: 'Chopp Gelado',
      description: 'Chopp tirado na hora, com colarinho na medida e caneca congelada',
      image: '/img/chopp-gelado.jpeg',
      badge: 'Mais Pedido',
    },
    {
      name: 'Cervejas Geladas',
      description: 'Heineken, Brahma, Corona e mais rótulos sempre no gelo',
      image: '/img/cervejas-geladas.jpeg',
    },
    {
      name: 'Stella Artois Pure Gold',
      description: 'Stella Artois Pure Gold, puro malte, menos calorias e sem glúten',
      image: '/img/stella-artois-pure-gold.jpeg',
    },
    {
      name: 'Corona Extra',
      description: 'Corona Extra long neck, leve e refrescante',
      image: '/img/corona-extra.jpeg',
    },
    {
      name: 'Brahma Chopp',
      description: 'Brahma Chopp garrafa, servida estupidamente gelada',
      image: '/img/brahma-chopp.jpeg',
    },
  ],
  sobremesas: [
  ],
};

const availableCategories = categories.filter(
  (cat) => (productsByCategory[cat.id] ?? []).length > 0
);

export default function Menu() {
  const [active, setActive] = useState(availableCategories[0].id);
  const products = productsByCategory[active] ?? [];

  return (
    <section id="cardapio" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/3 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="section-subheading animate-reveal">Nosso Cardápio</p>
          <h2 className="section-heading mt-3 animate-reveal">
            Sabores que <span className="text-gradient">Conquistam</span>
          </h2>
          <div className="divider mx-auto mt-6 animate-reveal"></div>
          <p className="text-white/60 mt-4 max-w-xl mx-auto animate-reveal">
            Do espeto artesanal ao drink exclusivo — cada prato é preparado com técnica, paixão e os
            melhores ingredientes.
          </p>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start lg:justify-center animate-reveal">
          {availableCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? 'bg-brand text-black shadow-lg shadow-brand/30'
                    : 'bg-surface-lighter text-white/60 hover:text-white hover:bg-surface-lighter border border-white/10'
                }`}
              >
                <Icon className="lucide" width={15} height={15} />
                {cat.label}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="animate-reveal card-dark group hover:border-brand/30 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-brand text-black text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white text-base mb-1.5">{product.name}</h3>
                <p className="text-white/50 text-xs leading-relaxed mb-4">{product.description}</p>
                <a
                  href={whatsappLink(`Olá! Quero pedir: ${product.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-white/50 hover:text-brand transition-colors"
                >
                  Pedir →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-reveal">
          <p className="text-white/40 text-sm mb-4">
            Cardápio completo disponível no estabelecimento
          </p>
          <a
            href={whatsappLink('Olá! Gostaria de ver o cardápio completo do In Brasa.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            Ver Cardápio Completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
