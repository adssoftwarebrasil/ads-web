import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Baterias Automotivas',
    text: 'Baterias de alta durabilidade e performance para sua moto rodar sempre',
    image:
      'https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fprodutos%2Fprodutos-baterias.webp',
    link: 'https://wa.me/559591772210?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Baterias%20Automotivas.',
  },
  {
    title: 'Carenagens',
    text: 'Carenagens originais e compatíveis para renovar o visual da sua moto',
    image:
      'https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fprodutos%2Fprodutos-carenagem.webp',
    link: 'https://wa.me/559591772210?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Carenagens.',
  },
  {
    title: 'Correntes e Transmissão',
    text: 'Kits de transmissão completos com garantia de qualidade e resistência',
    image:
      'https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fprodutos%2Fprodutos-correte.webp',
    link: 'https://wa.me/559591772210?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Correntes%20e%20Transmiss%C3%A3o.',
  },
  {
    title: 'Faróis e Iluminação',
    text: 'Sistema de iluminação LED e convencional para maior segurança',
    image:
      'https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fprodutos%2Fprodutos-farois.webp',
    link: 'https://wa.me/559591772210?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Far%C3%B3is%20e%20Ilumina%C3%A7%C3%A3o.',
  },
  {
    title: 'Filtros de Ar',
    text: 'Filtros de ar esportivos e originais para melhor performance do motor',
    image:
      'https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fprodutos%2Fprodutos-filtro-de-ar.webp',
    link: 'https://wa.me/559591772210?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Filtros%20de%20Ar.',
  },
  {
    title: 'Manoplas e Guidão',
    text: 'Acessórios para guidão que trazem conforto e estilo ao pilotar',
    image:
      'https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fprodutos%2Fprodutos-manoplas.webp',
    link: 'https://wa.me/559591772210?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Manoplas%20e%20Guid%C3%A3o.',
  },
  {
    title: 'Pneus Premium',
    text: 'Pneus das melhores marcas para aderência e segurança em qualquer pista',
    image:
      'https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fprodutos%2Fprodutos-pneus.webp',
    link: 'https://wa.me/559591772210?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Pneus%20Premium.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="bg-gray-50 py-20 md:py-28 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#F97316] text-sm font-bold uppercase tracking-wider">PRODUTOS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020202] mt-3 mb-4 leading-tight">
            Peças de Alta Performance para Sua Moto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Do básico ao profissional, temos tudo que sua moto precisa
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-102 transition-all duration-300 overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#020202] mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">{p.text}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#F97316] hover:text-[#DC2626] font-medium text-sm transition-colors group/link"
                >
                  <span>Ver Detalhes</span>
                  <ArrowRight className="lucide lucide-arrow-right w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-gray-600 mb-4">Não encontrou o que procura?</p>
          <a
            href="https://wa.me/559591772210?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#F97316] to-[#DC2626] text-white font-semibold text-base uppercase rounded-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] hover:scale-105 transition-all duration-200"
          >
            FALE COM NOSSO ESPECIALISTA
          </a>
        </div>
      </div>
    </section>
  );
}
