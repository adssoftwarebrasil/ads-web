import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface Product {
  category: string;
  name: string;
  desc: string;
  img: string;
}

const products: Product[] = [
  { category: 'Purificadores', name: 'Everest Baby', desc: 'Sem armazenamento e refrigeração. Ideal para pequenos espaços.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt%2FPurificador%20Everest%20Baby.png' },
  { category: 'Purificadores', name: 'Everest Fit', desc: 'O mais compacto com compressor do Brasil. Água gelada real.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt%2FPurificador%20Everest%20Fit.png' },
  { category: 'Purificadores', name: 'Everest Slim', desc: 'Econômico com alta capacidade de refrigeração.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt%2FPurificador%20Everest%20Slim.png' },
  { category: 'Purificadores', name: 'Everest Star', desc: 'Dupla filtração. Garante água livre de partículas e cloro.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt%2FPurificador%20Everest%20Star.png' },
  { category: 'Bebedouros', name: 'Knox 25 Litros', desc: 'Ideal para indústrias, escolas e refeitórios.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt%2FBebedouro%20de%20Coluna%20Industrial%20Knox%2025%20Litros.png' },
  { category: 'Bebedouros', name: 'Knox 50 Litros', desc: 'Projetado para locais com alto fluxo de pessoas.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt%2FBebedouro%20de%20Coluna%20Industrial%20Knox%2050%20Litros-1.png' },
  { category: 'Bebedouros', name: 'Knox 100 Litros', desc: 'Resistência e alta capacidade para grandes ambientes.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt%2Febedouro%20de%20Coluna%20Industrial%20Knox%20100-1.png' },
  { category: 'Climatizadores', name: 'CLIM-20RT Compact', desc: 'Reduz a temperatura e aumenta a umidade do ar.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt%2FClimatizador%20CLIM-20RT%20Compact.png' },
  { category: 'Climatizadores', name: 'CLIM-35RT', desc: 'Equilíbrio térmico para ambientes médios.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt%2FClimatizador%20CLIM-35RT.png' },
  { category: 'Climatizadores', name: 'CLM-40RT', desc: 'Potência e eficiência para grandes áreas comerciais.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/CLM-40RT.jpg' },
  { category: 'Climatizadores', name: 'CLIM-65RT Plus', desc: 'Uso prolongado sem reabastecimento constante.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt%2FClimatizador%20CLIM-65RT%20Plus.png' },
  { category: 'Climatizadores', name: 'CLIM-70RT Plus', desc: 'Proteção contra poeira e mofo. Clima agradável.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt%2FClimatizador%20CLIM-70RT%20Plus.png' },
  { category: 'Refis e Filtros', name: 'Refil Soft 2x1', desc: 'Elemento filtrante original para purificadores Soft Everest.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/REFIL%20SOFT%202X1.jpg' },
  { category: 'Refis e Filtros', name: 'Refil IBBL C+3', desc: 'Máxima eficiência na redução de cloro e retenção de partículas.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/REFIL%20IBBL%20C+3.jpg' },
  { category: 'Refis e Filtros', name: 'Refil Consul', desc: 'Compatível com purificadores Consul, garantindo água pura.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/REFIL%20CONSUL.jpg' },
  { category: 'Refis e Filtros', name: 'Refil Colormaq', desc: 'Filtro de alta qualidade para purificadores Colormaq.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/REFIL%20COLORMAQ.jpg' },
  { category: 'Refis e Filtros', name: 'Refil Latina P355', desc: 'Desenvolvido para purificadores de água Latina.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/REFIL%20LATINA%20P355.jpg' },
  { category: 'Refis e Filtros', name: 'Refil Libell Flex', desc: 'Compatível com diversos modelos Libell.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/REFIL%20LIBELL%20FLEX.jpg' },
  { category: 'Refis e Filtros', name: 'Carbon Block 9"', desc: 'Filtro de carvão ativado para carcaças de 9 polegadas.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/REFIL%20CARBON%20BLOCK%209.jpg' },
  { category: 'Refis e Filtros', name: 'Carbon Block 7"', desc: 'Filtro de carvão ativado para carcaças de 7 polegadas.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/REFIL%20CARBON%20BLOCK%207.jpg' },
  { category: 'Refis e Filtros', name: 'Carbon Block 5"', desc: 'Filtro de carvão ativado compacto de 5 polegadas.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/CARBON%20BLOCK%205.jpg' },
  { category: 'Peças e Acessórios', name: 'Painel Frontal Soft Star', desc: 'Painel de reposição para modelo Soft Star (Antigo).', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/Painel%20Frontal%20Purificador%20Soft%20Star%20(Modelo%20Antigo).jpg' },
  { category: 'Peças e Acessórios', name: 'Reservatório Soft Star', desc: 'Cuba evaporadora original para purificador Soft Star.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home Filter/Reservatório (Evaporador) para Purificadores de água Soft Everest Fit.jpg' },
  { category: 'Peças e Acessórios', name: 'Reservatório Soft Fit', desc: 'Cuba evaporadora original para purificador Soft Fit.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/Reservato%CC%81rio%20(Evaporador)%20para%20purificadores%20de%20agua%20Soft%20Everest%20Star.jpg' },
  { category: 'Peças e Acessórios', name: 'Pingadeira Soft Everest', desc: 'Conjunto completo de pingadeira original.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home Filter/Conjunto pingadeira para purificador de água Soft Everest.jpg' },
  { category: 'Peças e Acessórios', name: 'Termostato Everest', desc: 'Peça para controle de temperatura da água.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/Termostato%20para%20Purificador%20da%20Everest.jpg' },
  { category: 'Peças e Acessórios', name: 'Mangueira Soft 3/8', desc: 'Metro de mangueira atóxica para instalação de purificadores.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/1%20Metro%20de%20Mangueira%20Soft%2038.jpg' },
  { category: 'Peças e Acessórios', name: 'Registro Para Everest', desc: 'Registro reforçado para entrada de água.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/Registro%20Para%20Purificadores%20de%20agua%20Everest.jpg' },
  { category: 'Peças e Acessórios', name: 'Cooler Soft Everest', desc: 'Ventilador para refrigeração do sistema Plus.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home%20Filter/Cooler%20(ventilador)%20Purificador%20de%20Agua%20Soft%20Everest%20Plus.jpg' },
  { category: 'Peças e Acessórios', name: 'Engate Rápido 1/4 x 3/8', desc: 'Conector para facilitação de instalação e manutenção.', img: 'https://storage.lucasmendes.dev/site-sp/homefilt/Home Filter/Conector Engate Rápido para Purificadores de Agua 14 X 38.jpg' },
];

const categories = ['Todos', 'Purificadores', 'Bebedouros', 'Climatizadores', 'Refis e Filtros', 'Peças e Acessórios'];

export default function Products() {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos' ? products : products.filter((p) => p.category === active);

  return (
    <section id="produtos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Nossa <span className="text-blue-600">Linha Completa</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Encontre desde purificadores de alta performance até peças originais para manutenção.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                active === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-square bg-slate-50 flex items-center justify-center p-8 group-hover:bg-blue-50/50 transition-colors">
                <div className="absolute top-4 left-4">
                  <span className="bg-white/80 backdrop-blur-sm text-[10px] font-black px-2 py-1 rounded-md text-slate-400 border border-slate-100">
                    {p.category.toUpperCase()}
                  </span>
                </div>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {p.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">{p.desc}</p>
                <a
                  href={`https://api.whatsapp.com/send?phone=556284455153&text=Gostaria de saber mais sobre o produto: ${p.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-all active:scale-95"
                >
                  <MessageCircle className="lucide lucide-message-circle" width={18} height={18} />
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
