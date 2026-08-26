import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const WA = 'http://wa.me/556198770047';
const STORAGE =
  'https://storage.lucasmendes.dev/site-sp/cia%20solda%20e%20ferramentas/M%C3%A1quinas%20de%20Solda%20Vendas/';

const categories = [
  { label: 'Máquinas de Solda', count: 10 },
  { label: 'Locação de Máquinas', count: 24 },
  { label: 'Consumíveis', count: 21 },
  { label: 'Peças e Acessórios', count: 9 },
  { label: 'EPIs para Solda', count: 7 },
  { label: 'Ferramentas Elétricas', count: 12 },
];

interface Product {
  name: string;
  brand: string;
  image: string;
}

const products: Product[] = [
  { name: 'Balmer EASY 120', brand: 'Balmer', image: STORAGE + 'Balmer/Balmer%20EASY%20120.jpg' },
  {
    name: 'Balmer EASY Flex MIG 160 DV',
    brand: 'Balmer',
    image: STORAGE + 'Balmer/Balmer%20EASY%20Flex%20MIG%20160%20DV%20-%202Roletes.jpg',
  },
  {
    name: 'Balmer INVERSORA JOY 133 DV',
    brand: 'Balmer',
    image: STORAGE + 'Balmer/Balmer%20INVERSORA%20JOY%20133%20DV.png',
  },
  {
    name: 'Balmer Vulcano Inverter 160 S',
    brand: 'Balmer',
    image: STORAGE + 'Balmer/Balmer%20Vulcano%20Inverter%20160%20S.jpg',
  },
  {
    name: 'Inversora ULTRAMIG 400',
    brand: 'Galzer',
    image: STORAGE + 'Galzer/Inversora%20de%20Solda%20ULTRAMIG%20400.webp',
  },
  {
    name: 'Inversora ULTRAMIG 500 X',
    brand: 'Galzer',
    image: STORAGE + 'Galzer/Inversora%20de%20Solda%20ULTRAMIG%20500%20X.webp',
  },
  {
    name: 'EASY MIG 160',
    brand: 'Galzer',
    image: STORAGE + 'Galzer/Maquina%20de%20Solda%20EASY%20MIG%20160.webp',
  },
  {
    name: 'EASY MIG 200',
    brand: 'Galzer',
    image: STORAGE + 'Galzer/M%C3%A1quina%20de%20Solda%20EASY%20MIG%20200.webp',
  },
  { name: 'Ultra MIG 300', brand: 'Galzer', image: STORAGE + 'Galzer/Ultra%20MIG%20300.webp' },
  {
    name: 'Ultra Mig 500 Galzer',
    brand: 'Galzer',
    image: STORAGE + 'Galzer/Ultra%20Mig%20500%20Galzer.webp',
  },
];

function productHref(name: string) {
  return `${WA}?text=${encodeURIComponent(
    `Olá! Tenho interesse no produto: ${name}. Poderia me informar disponibilidade e preço?`
  )}`;
}

export default function Catalogo() {
  const [active, setActive] = useState(0);

  return (
    <section id="catalogo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Catálogo Completo
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark">Nossos Produtos</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Linha completa de equipamentos para soldagem, ferramentas e EPIs das melhores marcas do
            mercado.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              className={
                i === active
                  ? 'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 bg-brand-orange text-white shadow-lg shadow-brand-orange/25'
                  : 'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 bg-white text-gray-600 border border-gray-200 hover:border-brand-orange/40 hover:text-brand-orange'
              }
            >
              {cat.label}
              <span className={i === active ? 'ml-1.5 text-xs text-white/70' : 'ml-1.5 text-xs text-gray-400'}>
                ({cat.count})
              </span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <a
              key={product.name}
              href={productHref(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/8 transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <MessageCircle className="lucide lucide-message-circle" width={12} height={12} />
                    Consultar
                  </div>
                </div>
                <span className="absolute top-2 left-2 bg-brand-dark/70 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                  {product.brand}
                </span>
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm font-semibold text-brand-dark leading-tight line-clamp-2">
                  {product.name}
                </p>
                <div className="mt-2 flex items-center gap-1 text-brand-orange text-xs font-medium">
                  <WhatsAppIcon className="w-3 h-3 fill-current shrink-0" />
                  Pedir orçamento
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Não encontrou o que procura? Temos muito mais em estoque!
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/30"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            Consultar Estoque Completo
          </a>
        </div>
      </div>
    </section>
  );
}
