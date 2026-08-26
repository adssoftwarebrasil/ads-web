import { useState } from 'react';
import { Library, BookOpen, GraduationCap, Baby, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Category {
  label: string;
  icon: LucideIcon;
}

interface Product {
  name: string;
  image: string;
  category: string;
}

const categories: Category[] = [
  { label: 'Todos', icon: Library },
  { label: 'Bíblias', icon: BookOpen },
  { label: 'Teologia', icon: GraduationCap },
  { label: 'Infantil', icon: Baby },
  { label: 'Escola Dominical', icon: Library },
  { label: 'Livros Gerais', icon: BookOpen },
];

const products: Product[] = [
  { name: 'Bíblia de Estudo', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/biblia-estudo-capa_6_11zon.webp', category: 'Bíblias' },
  { name: 'Bíblia de Aplicação Pessoal', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/biblia-aplicacao-pessoal_1_11zon.webp', category: 'Bíblias' },
  { name: 'Bíblia Letra Gigante', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/biblia-letra-gigante_10_11zon.webp', category: 'Bíblias' },
  { name: 'Bíblia de Estudo para Adolescentes', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/biblia-estudo-adolescentes_5_11zon.webp', category: 'Bíblias' },
  { name: 'Bíblia Sagrada Jumbo', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/biblia-sagrada-jumbo_17_11zon.webp', category: 'Bíblias' },
  { name: 'Bíblia com Harpa Pentecostal', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/biblia-harpa-pentecostal_9_11zon.webp', category: 'Bíblias' },
  { name: 'Dicionário de Termos Teológicos', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/livro-termos-teologicos_37_11zon.webp', category: 'Teologia' },
  { name: 'Declaração de Fé', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/declaracao-de-fe_20_11zon.webp', category: 'Teologia' },
  { name: 'As Catacumbas de Roma', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/livro-catacumbas-roma_25_11zon.webp', category: 'Livros Gerais' },
  { name: 'O Poder da Santificação', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/livro-poder-santificacao_33_11zon.webp', category: 'Teologia' },
  { name: 'Bíblia Infantil', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/capa-biblia-infantil_18_11zon.webp', category: 'Infantil' },
  { name: 'Dinâmicas e Criatividade', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/livro-dinamicas-criatividade_28_11zon.webp', category: 'Escola Dominical' },
  { name: 'A Princesinha', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/livro-princesinha-capa_34_11zon.webp', category: 'Infantil' },
  { name: 'Material para Adolescentes', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/capa-livro-adoloscente_19_11zon.webp', category: 'Escola Dominical' },
  { name: 'A Sabedoria da Mulher', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/livro-sabedoria-mulher_35_11zon.webp', category: 'Livros Gerais' },
  { name: 'Sonhos de Mulher', image: 'https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/livro-sonhos-mulher_36_11zon.webp', category: 'Livros Gerais' },
];

export default function Products() {
  const [active, setActive] = useState('Todos');

  const filtered =
    active === 'Todos' ? products : products.filter((p) => p.category === active);

  return (
    <section id="produtos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(60,100,139)] mb-4">Nossos Produtos</h2>
          <p className="text-lg text-gray-600">Uma vasta seleção de publicações evangélicas para fortalecer sua fé e conhecimento bíblico</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActive(cat.label)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[rgb(157,119,0)] text-white shadow-lg scale-105'
                    : 'bg-white text-[rgb(60,100,139)] hover:bg-gray-100 shadow'
                }`}
              >
                <Icon size={20} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filtered.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[rgb(60,100,139)] text-center group-hover:text-[rgb(157,119,0)] transition-colors line-clamp-2">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/557136277599?text=Olá! Gostaria de saber mais sobre os produtos disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[rgb(157,119,0)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(137,99,0)] transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group"
          >
            Consultar Disponibilidade
            <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
