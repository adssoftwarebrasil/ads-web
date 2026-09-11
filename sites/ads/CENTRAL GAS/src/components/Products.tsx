import { CheckCircle, ShoppingCart } from 'lucide-react';

interface Product {
  badge: string;
  image: string;
  title: string;
  description: string;
  features: string[];
  href: string;
}

const products: Product[] = [
  {
    badge: 'Mais Vendido',
    image:
      'https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/botijao-gas-azul-central-gas-propaganda_1024x1024.webp',
    title: 'Botijão P13',
    description:
      'O clássico botijão de 13kg, ideal para uso doméstico. Lacrado de fábrica, com selo de segurança inviolável.',
    features: ['13kg de GLP', 'Lacrado e certificado', 'Entrega em todo o município', 'Troca rápida na sua porta'],
    href: 'http://wa.me/556696555500?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20Botij%C3%A3o%20P13%20(13kg).%20Poderia%20me%20informar%20o%20valor%20e%20prazo%20de%20entrega%3F',
  },
  {
    badge: 'Para Indústria',
    image: 'https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/gas-p-20.webp',
    title: 'Cilindro P20',
    description:
      'Desenvolvido exclusivamente para uso em empilhadeiras industriais. Garante alto desempenho, queima limpa e máxima segurança para sua frota.',
    features: ['20kg de GLP', 'Exclusivo para empilhadeiras', 'Alto rendimento', 'Queima limpa e segura'],
    href: 'http://wa.me/556696555500?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Cilindro%20P20%20(20kg)%20para%20empilhadeiras.%20Valor%20e%20prazo%20de%20entrega%3F',
  },
  {
    badge: 'Para Comércio',
    image:
      'https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/anuncio-cilindros-gas-azul-tamanhos-diferentes_1280x1280.webp',
    title: 'Cilindro P45',
    description:
      'Ideal para estabelecimentos comerciais e residências com maior consumo. Maior autonomia, mais economia.',
    features: ['45kg de GLP', 'Para comércios e indústrias', 'Alta durabilidade', 'Melhor custo-benefício'],
    href: 'http://wa.me/556696555500?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Cilindro%20P45%20(45kg).%20Valor%20e%20prazo%20de%20entrega%3F',
  },
  {
    badge: 'Combo Disponível',
    image:
      'https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/agua-purissima-mineral-20-litros-beneficios_738x876.webp',
    title: 'Água Mineral 20L',
    description: 'Água mineral de alta pureza, ideal para o consumo diário da sua família. Fresca, pura e saudável.',
    features: ['20 litros', 'Pureza certificada', 'Entrega junto ao gás', 'Garrafão retornável'],
    href: 'http://wa.me/556696555500?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20%C3%81gua%20Mineral%20de%2020%20litros.%20Qual%20o%20valor%20e%20prazo%20de%20entrega%3F',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Nossos Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
            Gás e Água de Qualidade
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Produtos certificados, entrega rápida e preço justo em toda Primavera do Leste — MT.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-3xl overflow-hidden shadow-md card-hover border border-primary-light/30 flex flex-col h-full"
            >
              <div className="relative bg-gradient-to-br from-surface to-primary-light/20 p-6 flex justify-center items-center min-h-52">
                <span className="absolute top-4 left-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {product.badge}
                </span>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-52 w-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-black text-primary mb-2">{product.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <CheckCircle size={16} className="lucide lucide-check-circle text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 text-sm w-full mt-auto"
                >
                  <ShoppingCart size={17} className="lucide lucide-shopping-cart " />
                  Pedir pelo WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-3xl overflow-hidden shadow-xl border border-primary-light/20 relative group">
          <img
            src="https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/anuncio-agua-purissima-e-gas-central_1024x1024.webp"
            alt="Combo Gás e Água Mineral - Central Gás"
            className="w-full object-cover max-h-96 object-center group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
