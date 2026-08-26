import { Sparkles, Award, ChevronRight, TrendingUp } from 'lucide-react';

interface Product {
  image: string;
  alt: string;
  badge?: string;
  title: string;
  description: string;
  features: string[];
}

const PRODUCTS: Product[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rei-do-terno%2FWhatsApp%20Image%202025-10-27%20at%2015.22.33%20(1)_ultra.webp',
    alt: 'Corte Americano - Rei do Terno',
    badge: 'Premium',
    title: 'Corte Americano',
    description: 'Elegância completa para eventos especiais',
    features: ['Corte Italiano', 'Tecidos Nobres', 'Sob Medida'],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rei-do-terno%2FWhatsApp%20Image%202025-10-27%20at%2015.22.34_ultra.webp',
    alt: 'Italiano - Rei do Terno',
    badge: 'Destaque',
    title: 'Italiano',
    description: 'Conforto e sofisticação casual',
    features: ['Corte Italiano', 'Tecidos Nobres', 'Sob Medida'],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rei-do-terno%2FWhatsApp%20Image%202025-10-27%20at%2015.22.34%20(1)_ultra.webp',
    alt: 'Slim Fit - Rei do Terno',
    badge: 'Novidade',
    title: 'Slim Fit',
    description: 'O toque final do seu visual',
    features: ['Corte Italiano', 'Tecidos Nobres', 'Sob Medida'],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rei-do-terno%2FWhatsApp%20Image%202025-10-27%20at%2015.22.35_ultra.webp',
    alt: 'Super Slim Fit - Rei do Terno',
    title: 'Super Slim Fit',
    description: 'Versatilidade para o dia a dia',
    features: ['Corte Italiano', 'Tecidos Nobres', 'Sob Medida'],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rei-do-terno%2Fsapatos-sociais-pretos-modelo-1.webp',
    alt: 'Sapato Oxford Classic - Rei do Terno',
    badge: 'Couro',
    title: 'Sapato Oxford Classic',
    description: 'O par perfeito para o seu terno novo',
    features: ['Couro Legítimo', 'Solado Costurado', 'Conforto Premium'],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rei-do-terno%2Fsapatos-sociais-pretos-modelo-2.webp',
    alt: 'Social Derby Preto - Rei do Terno',
    title: 'Social Derby Preto',
    description: 'Acabamento impecável e brilho natural',
    features: ['Couro Legítimo', 'Palmilha Macia', 'Design Atemporal'],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rei-do-terno%2Fsapatos-sociais-pretos-modelo-3.webp',
    alt: 'Social Executive - Rei do Terno',
    badge: 'Oferta',
    title: 'Social Executive',
    description: 'Elegância e durabilidade para o dia a dia',
    features: ['Alta Durabilidade', 'Acabamento Verniz', 'Sola Antiderrapante'],
  },
  {
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2Falteracoes%2Falteracao.png&version_id=null',
    alt: 'Esporte fino no couro legítimo - Rei do Terno',
    title: 'Esporte fino no couro legítimo',
    description: 'Estilo moderno sem abrir mão do clássico',
    features: ['Couro Selecionado', 'Calce Fácil', 'Interior Respirável'],
  },
];

export default function Products() {
  return (
    <section
      id="produtos"
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-[#F5F5F5] to-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#417EAD] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B89E5E] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#417EAD]/10 rounded-full px-4 py-2 mb-2">
            <Sparkles size={16} className="text-[#B89E5E]" />
            <span className="text-sm font-semibold text-[#2D587A]">Coleção Exclusiva</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D587A]">
            Nossos <span className="text-[#417EAD]">Produtos</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B89E5E]"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Qualidade e estilo para cada ocasião
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B89E5E]"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product, idx) => (
            <div
              key={product.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {product.badge && (
                <div className="absolute top-4 left-4 z-20 bg-[#B89E5E] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Award size={12} />
                  {product.badge}
                </div>
              )}
              <div className="relative overflow-hidden h-72 bg-gradient-to-br from-[#417EAD]/5 to-[#B89E5E]/5">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D587A] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4 space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {product.features.map((feature, fIdx) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ transitionDelay: `${200 + fIdx * 100}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-[#B89E5E] rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#2D587A] mb-2 group-hover:text-[#417EAD] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>
                <a
                  href="https://wa.me/5517992369599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-2 text-[#B89E5E] font-bold hover:text-[#a08952] transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Consultar Disponibilidade
                    <ChevronRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B89E5E] group-hover/btn:w-full transition-all duration-300"></div>
                </a>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#417EAD]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 space-y-6">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg">
            <TrendingUp size={24} className="text-[#B89E5E]" />
            <p className="text-gray-700">
              <span className="font-bold text-[#2D587A]">Não encontrou o que procura?</span> Temos
              muito mais na loja!
            </p>
          </div>
          <a
            href="https://wa.me/5517992369599"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#417EAD] to-[#2D587A] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Sparkles size={20} />
            Visite Nossa Loja Física
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
