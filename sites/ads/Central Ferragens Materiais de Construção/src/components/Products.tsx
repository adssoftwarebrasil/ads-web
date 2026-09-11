import { Box, Shield, Zap, Wrench, Hammer, Warehouse, FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Product {
  Icon: LucideIcon;
  image: string;
  title: string;
  text: string;
}

const products: Product[] = [
  {
    Icon: Box,
    image: 'https://storage.lucasmendes.dev/site-sp/central%20ferragens/img/barras-aco-empilhadas.webp',
    title: 'Barras de Aço Laminadas e Cantoneiras',
    text: 'Barras de aço de alta resistência para estruturas e construções. Disponível em diversos diâmetros e comprimentos.',
  },
  {
    Icon: Shield,
    image: 'https://storage.lucasmendes.dev/site-sp/central%20ferragens/img/chapas-metalicas-variadas.webp',
    title: 'Chapas Metálicas',
    text: 'Chapas metálicas variadas para diferentes aplicações industriais e residenciais. Qualidade certificada.',
  },
  {
    Icon: Zap,
    image: 'https://storage.lucasmendes.dev/site-sp/central%20ferragens/img/tubos-de-aco.webp',
    title: 'Perfis Estruturais',
    text: 'Perfis estruturais, com seções transversais variadas (H, I, U, L, W, T, Tubos) usadas na construção civil e indústria para projetos estruturais, pontes e galpões.',
  },
  {
    Icon: Wrench,
    image: 'https://storage.lucasmendes.dev/site-sp/central%20ferragens/img/ferragem-construcao-estrutura.webp',
    title: 'Ferragem Armada Sob Medida',
    text: 'Proporcionamos eficiência e agilidade para sua obra, entregando ferragens armadas conforme a necessidade do cliente.',
  },
  {
    Icon: Hammer,
    image: 'https://storage.lucasmendes.dev/site-sp/central%20ferragens/img/vergalhoes.webp',
    title: 'Vergalhões',
    text: 'Barras de aço essenciais na construção civil para criar o concreto armado para atender a diversas necessidades estruturais, garantindo estabilidade e durabilidade.',
  },
  {
    Icon: Warehouse,
    image: 'https://storage.lucasmendes.dev/site-sp/central%20ferragens/img/telhas-metalicas.webp',
    title: 'Telhas Metálicas',
    text: 'Usadas em coberturas e fachadas residenciais, comerciais e industriais. Modelos simples e sanduíche (com isolamento), ideais para soluções modernas.',
  },
  {
    Icon: FileText,
    image: 'https://storage.lucasmendes.dev/site-sp/central%20ferragens/img/leitura-de-projetos.webp',
    title: 'Leitura de Projetos Estruturais',
    text: 'Aqui você conta com Engenheiro Civil a sua disposição para ajudar no seu projeto estrutural e garantir a melhor execução.',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[rgb(1,0,104)] text-sm font-semibold tracking-wide uppercase">Catálogo Completo</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[rgb(1,0,104)]">Nossos Produtos</h2>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Trabalhamos com as melhores marcas e fornecedores para garantir materiais de alta qualidade para sua obra.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {products.map((p) => (
            <div key={p.title} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-sm">
              <div className="h-60 overflow-hidden relative rounded-t-2xl">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(1,0,104)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="px-6 -mt-8 relative z-10">
                <div className="inline-flex items-center justify-center bg-yellow-400 p-3 rounded-xl shadow-lg group-hover:bg-[rgb(1,0,104)] transition-colors duration-300">
                  <p.Icon width={24} height={24} className="text-[rgb(1,0,104)] w-6 h-6 group-hover:text-yellow-400 transition-colors duration-300" />
                </div>
              </div>
              <div className="p-6 pt-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[rgb(1,0,104)] mb-3 leading-tight group-hover:text-yellow-600 transition-colors">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">{p.text}</p>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <a href="https://wa.me/553899492159" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-[rgb(1,0,104)] font-bold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Solicitar Orçamento</span>
                    <span className="bg-gray-100 p-2 rounded-full group-hover:bg-yellow-400 transition-colors text-sm">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden bg-[rgb(1,0,104)] rounded-3xl p-8 md:p-12 text-center shadow-2xl mx-auto max-w-5xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          </div>
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">Não encontrou o que procura?</h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">Temos uma linha completa de produtos além do catálogo online. Entre em contato e fale com nossos especialistas!</p>
            <div className="pt-2">
              <a href="https://wa.me/553899492159" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-yellow-400 text-[rgb(1,0,104)] px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-lg hover:shadow-yellow-400/20">Falar com Especialista<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
