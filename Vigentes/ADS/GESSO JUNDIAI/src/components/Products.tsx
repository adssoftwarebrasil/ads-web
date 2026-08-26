import { useState } from 'react';
import { MessageCircle } from './icons';

interface Product {
  name: string;
  category: string;
  image: string;
}

const categories = ['Todos', 'Placas', 'Perfis', 'Fitas & Fixação', 'Ferramentas', 'Complementos'];

const products: Product[] = [
  { name: 'Placa RF', category: 'Placas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Placa%20RF.webp' },
  { name: 'Placa RU', category: 'Placas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Placa%20RU.webp' },
  { name: 'Placa ST', category: 'Placas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Placa%20st.webp' },
  { name: 'Tela para Placas Cimentícia', category: 'Placas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Tela%20para%20placas%20Cimenticia.webp' },
  { name: 'Guia Drywall', category: 'Perfis', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Guia%20Drywall.webp' },
  { name: 'Montante Drywall', category: 'Perfis', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Montante%20Drywall.webp' },
  { name: 'Tábica', category: 'Perfis', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Tabica.webp' },
  { name: 'Cantoneira 14x30', category: 'Perfis', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Cantoneira%2014x30.webp' },
  { name: 'Portas Drywall', category: 'Perfis', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Portas%20Drywall.webp' },
  { name: 'Fita de Junta Drywall', category: 'Fitas & Fixação', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Fita%20de%20junta%20de%20Drywall.webp' },
  { name: 'Fita de Reforço de Canto', category: 'Fitas & Fixação', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Fita%20de%20reforc%CC%A7o%20de%20canto.webp' },
  { name: 'Fita para Reforço de Canto', category: 'Fitas & Fixação', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Fita%20para%20reforc%CC%A7o%20de%20canto.webp' },
  { name: 'Fita Telada Azul', category: 'Fitas & Fixação', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Fita%20telada%20azul.webp' },
  { name: 'Fita Telada Branca', category: 'Fitas & Fixação', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Fita%20telada%20branca.webp' },
  { name: 'Adesivo de Montagem', category: 'Fitas & Fixação', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Adesivo%20de%20montagem.webp' },
  { name: 'PU', category: 'Fitas & Fixação', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/PU.webp' },
  { name: 'Parafuso para Placa GN 25', category: 'Fitas & Fixação', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Parafuso%20para%20placa%20gn%2025.webp' },
  { name: 'Espátula de Aço', category: 'Ferramentas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Espa%CC%81tula%20de%20ac%CC%A7o.webp' },
  { name: 'Espátula Retangular', category: 'Ferramentas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Espa%CC%81tula%20retangular.webp' },
  { name: 'Serrote de Gesseiro', category: 'Ferramentas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Serrotes%20de%20gesseiro.webp' },
  { name: 'Estilete', category: 'Ferramentas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/ESTILETE.webp' },
  { name: 'Tesoura', category: 'Ferramentas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/TESOURA.webp' },
  { name: 'Trenas', category: 'Ferramentas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/TRENAS.webp' },
  { name: 'Nível', category: 'Ferramentas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/NIVEL.webp' },
  { name: 'Nível a Laser Linha Verde', category: 'Ferramentas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Ni%CC%81vel%20a%20laser%20linha%20verde.webp' },
  { name: 'Nível a Laser Linha Vermelha', category: 'Ferramentas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Ni%CC%81vel%20a%20laser%20linha%20vermelha.webp' },
  { name: 'Martelete de Impacto', category: 'Ferramentas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Marteletes%20impacto.webp' },
  { name: 'Brocas', category: 'Ferramentas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/BROCAS.webp' },
  { name: 'Bits', category: 'Ferramentas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Bits.webp' },
  { name: 'Botina de Segurança', category: 'Ferramentas', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Botina%20de%20seguranc%CC%A7a.webp' },
  { name: 'Massa Drywall', category: 'Complementos', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Massa%20Drywall.webp' },
  { name: 'F530', category: 'Complementos', image: 'https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/F530.webp' },
];

export default function Products() {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos' ? products : products.filter((p) => p.category === active);

  return (
    <section id="produtos" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#EE1E23] font-semibold text-sm uppercase tracking-widest mb-3">
            Nosso Catálogo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Produtos para Gesso e Drywall
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
            Tudo que você precisa para suas obras, com qualidade e preço justo.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={
                active === cat
                  ? 'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border bg-[#EE1E23] text-white border-[#EE1E23] shadow-md'
                  : 'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border bg-white text-gray-600 border-gray-200 hover:border-[#EE1E23] hover:text-[#EE1E23]'
              }
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((product) => (
            <a
              key={product.name}
              href={`https://wa.me/5511933943710?text=Olá! Tenho interesse em: ${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-[#EE1E23]/40 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-3 group-hover:scale-108 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-3 flex flex-col flex-1">
                <span className="text-xs font-medium text-gray-500 mb-1">{product.category}</span>
                <p className="text-gray-900 font-semibold text-sm leading-tight flex-1">{product.name}</p>
                <div className="mt-3 flex items-center gap-1 text-[#EE1E23] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <MessageCircle size={12} />
                  Consultar preço
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-14">
          <a
            href="https://wa.me/5511933943710"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#EE1E23] hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-200"
          >
            <MessageCircle size={22} />
            Solicitar Orçamento Completo
          </a>
        </div>
      </div>
    </section>
  );
}
