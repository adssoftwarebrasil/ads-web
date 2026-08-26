import { useState } from 'react';
import {
  Coffee,
  Thermometer,
  Droplet,
  Shirt,
  Pen,
  Gift,
  Key,
  Home,
  Trophy,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { openWhatsApp } from '../lib/whatsapp';

interface Category {
  Icon: LucideIcon;
  label: string;
  count: number;
}

const categories: Category[] = [
  { Icon: Coffee, label: 'Canecas', count: 6 },
  { Icon: Thermometer, label: 'Copos Térmicos', count: 5 },
  { Icon: Droplet, label: 'Garrafas', count: 5 },
  { Icon: Shirt, label: 'Têxtil', count: 10 },
  { Icon: Pen, label: 'Papelaria', count: 13 },
  { Icon: Gift, label: 'Kits e Presentes', count: 6 },
  { Icon: Key, label: 'Acessórios', count: 6 },
  { Icon: Home, label: 'Casa e Decoração', count: 5 },
  { Icon: Trophy, label: 'Troféus', count: 1 },
  { Icon: Sparkles, label: 'Serviços Especiais', count: 3 },
];

const products = [
  { src: 'https://storage.lucasmendes.dev/site-sp/so-copias%2Fso%20copias%2FCanecas.jpeg', title: 'Canecas Personalizadas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/so-copias%2Fimg-so-copias%2Fcanecas-personalizadas-coloridas.webp', title: 'Canecas Coloridas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/so-copias%2Fimg-so-copias%2Fcanecas-coloridas-games.webp', title: 'Canecas Games' },
  { src: 'https://storage.lucasmendes.dev/site-sp/so-copias%2Fimg-so-copias%2Fcaneca-dia-pais.webp', title: 'Canecas Comemorativas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/so-copias%2Fimg-so-copias%2Fcaneca-melhor-pai.webp', title: 'Caneca Melhor Pai' },
  { src: 'https://storage.lucasmendes.dev/site-sp/so-copias%2Fimg-so-copias%2Fcaneca-personalizada-sobreposicao.webp', title: 'Canecas Especiais' },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços e <span className="text-blue-800">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Do brinde corporativo ao presente especial: tudo personalizado com qualidade e
            criatividade
          </p>
        </div>
        <div className="mb-12">
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => {
              const isActive = active === i;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActive(i)}
                  className={`group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 border-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-800 to-blue-600 border-blue-800 text-white shadow-lg scale-105'
                      : 'bg-white border-gray-200 text-gray-700 shadow-sm hover:border-blue-300 hover:bg-blue-50 hover:scale-105'
                  }`}
                >
                  <cat.Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  <span>{cat.label}</span>
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                      isActive ? 'bg-white text-blue-800' : 'bg-orange-500 text-white'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActive(i)}
                    className={`relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl font-medium text-sm transition-all duration-300 border-2 min-h-[100px] ${
                      isActive
                        ? 'bg-gradient-to-br from-blue-800 to-blue-600 border-blue-800 text-white shadow-lg scale-105'
                        : 'bg-white border-gray-200 text-gray-700 shadow-sm active:scale-95'
                    }`}
                  >
                    <cat.Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                    <span className="text-center leading-tight">{cat.label}</span>
                    <span
                      className={`absolute top-2 right-2 inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                        isActive ? 'bg-white text-blue-800' : 'bg-orange-500 text-white'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div
          id="services-grid"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-300 opacity-100 scale-100"
        >
          {products.map((product, i) => (
            <div
              key={product.title}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${i * 30}ms` }}
            >
              <img
                src={product.src}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <h3 className="text-white font-semibold text-center text-sm md:text-base">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => openWhatsApp()}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
}
