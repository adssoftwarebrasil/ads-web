import { useEffect, useState } from 'react';
import { Flame, Droplets, Beef, LucideIcon } from 'lucide-react';

interface Product {
  icon: LucideIcon;
  lucideName: string;
  iconColor: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  dotColor: string;
  ctaColor: string;
  images: { src: string; alt: string }[];
  reverse: boolean;
}

const products: Product[] = [
  {
    icon: Flame,
    lucideName: 'lucide lucide-flame',
    iconColor: 'rgb(228, 29, 32)',
    title: 'Gás GLP',
    subtitle: 'P13, P20 e P45',
    description:
      'Botijões de gás de qualidade superior da Nacional Gás. Ideal para residências, comércios e indústrias. Gás que dura mais e com entrega rápida.',
    features: ['Revenda Autorizada', 'Entrega Rápida', 'Qualidade Garantida', 'Melhor Preço'],
    dotColor: 'rgb(228, 29, 32)',
    ctaColor: 'rgb(228, 29, 32)',
    images: [
      {
        src: 'https://storage.lucasmendes.dev/site-sp/deposito%20de%20gas%20moura%2Fatualizadas%2Fgas-p13.webp',
        alt: 'Gás GLP - Imagem 1',
      },
      {
        src: 'https://storage.lucasmendes.dev/site-sp/deposito%20de%20gas%20moura%2Fatualizadas%2Fgas-p20.webp',
        alt: 'Gás GLP - Imagem 2',
      },
      {
        src: 'https://storage.lucasmendes.dev/site-sp/deposito%20de%20gas%20moura%2Fatualizadas%2Fgas-p45.webp',
        alt: 'Gás GLP - Imagem 3',
      },
    ],
    reverse: false,
  },
  {
    icon: Droplets,
    lucideName: 'lucide lucide-droplets',
    iconColor: 'rgb(28, 59, 126)',
    title: 'Água Mineral',
    subtitle: 'Copos, Garrafas e Galões',
    description:
      'Trabalhamos com a linha completa da Iza: copos de 200ml, garrafas de 500ml e 1,5L, além de galões de 5L. Nos galões de 20L, oferecemos as marcas Pura, Salute, Iza e Nativa.',
    features: ['Marcas Premium', 'Galões Higienizados', 'Entrega no Prazo', 'Água Pura'],
    dotColor: 'rgb(28, 59, 126)',
    ctaColor: 'rgb(28, 59, 126)',
    images: [
      {
        src: 'https://storage.lucasmendes.dev/site-sp/deposito%20de%20gas%20moura%2Fimg%2Fgaloes-agua-empilhados-estoque.webp',
        alt: 'Água Mineral - Imagem 1',
      },
    ],
    reverse: true,
  },
  {
    icon: Beef,
    lucideName: 'lucide lucide-beef',
    iconColor: 'rgb(228, 29, 32)',
    title: 'Carvão para Churrasco',
    subtitle: '2,5kg e 13kg',
    description:
      'Carvão de qualidade superior que acende rápido e mantém a brasa por mais tempo. Perfeito para aquele churrasco especial com família e amigos.',
    features: ['Alta Qualidade', 'Brasa Duradoura', 'Tamanhos Variados', 'Pronto Uso'],
    dotColor: 'rgb(228, 29, 32)',
    ctaColor: 'rgb(228, 29, 32)',
    images: [
      {
        src: 'https://storage.lucasmendes.dev/site-sp/deposito%20de%20gas%20moura%2Fimg%2Fsacos-carvao-expostos.webp',
        alt: 'Carvão para Churrasco - Imagem 1',
      },
      {
        src: 'https://storage.lucasmendes.dev/site-sp/deposito%20de%20gas%20moura%2Fatualizadas%2Fcarvao.webp',
        alt: 'Carvão para Churrasco - Imagem 2',
      },
    ],
    reverse: false,
  },
];

function ProductBlock({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const Icon = product.icon;
  const count = product.images.length;

  useEffect(() => {
    if (count <= 1) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 4000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
        product.reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className={product.reverse ? 'md:order-2' : ''}>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(228,29,32)] to-[rgb(28,59,126)] rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
          <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {product.images.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                  i === active ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={product.reverse ? 'md:order-1' : ''}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 rounded-2xl">
            <Icon
              className={product.lucideName}
              width={40}
              height={40}
              style={{ color: product.iconColor }}
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[rgb(28,59,126)]">{product.title}</h3>
            <p className="text-lg text-[rgb(228,29,32)] font-semibold">{product.subtitle}</p>
          </div>
        </div>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">{product.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {product.features.map((feat) => (
            <div key={feat} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: product.dotColor }}
              ></div>
              <span className="text-sm font-medium text-gray-700">{feat}</span>
            </div>
          ))}
        </div>
        <a
          href="http://wa.me/5562982672012?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-full font-bold text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{ backgroundColor: product.ctaColor }}
        >
          Solicitar Orçamento
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(28,59,126)] mb-4">
            Nossos Produtos
          </h2>
          <div className="w-24 h-1 bg-[rgb(228,29,32)] mx-auto mb-6"></div>
          <p className="text-lg text-[rgb(162,173,190)] max-w-3xl mx-auto">
            Soluções completas para sua residência, comércio ou indústria
          </p>
        </div>
        <div className="space-y-24">
          {products.map((p) => (
            <ProductBlock key={p.title} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
