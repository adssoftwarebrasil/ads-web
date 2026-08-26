import { useEffect, useRef } from 'react';

const PRODUCTS = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/chaveiro%20glicerio/img/chave-carro-preta-botoes-gastos-fundo-branco_1080x1080.webp',
    alt: 'Reparo de Chave Automotiva',
    title: 'Reparo de Chaves',
    tag: 'Mais Pedido',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/chaveiro%20glicerio/img/chave-carro-preta-botoes-prata-close-up_1080x1080.webp',
    alt: 'Chave Automotiva Canivete',
    title: 'Chave Canivete',
    tag: 'Premium',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/chaveiro%20glicerio/img/chave-ford-preta-com-anel-metalico_836x836.webp',
    alt: 'Chave Ford com Anel Metálico',
    title: 'Chave Ford',
    tag: 'Especialidade',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/chaveiro%20glicerio/img/chaves-chevrolet-pretas-em-fundo-branco_1080x1080.webp',
    alt: 'Chaves Chevrolet',
    title: 'Chave Chevrolet',
    tag: 'Especialidade',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/chaveiro%20glicerio/img/chave-carro-preta-botoes-prata-fundo-branco_918x918.webp',
    alt: 'Cópia de Chave Automotiva',
    title: 'Cópia de Chave',
    tag: 'Rápido',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/chaveiro%20glicerio/img/mesa-superior-garfo-moto-kawasaki-com-chave_774x774.webp',
    alt: 'Chave Moto Kawasaki',
    title: 'Chave de Moto',
    tag: 'Especialidade',
  },
];

const TAG_COLORS: Record<string, string> = {
  'Mais Pedido': 'bg-brand-yellow text-brand-black',
  Premium: 'bg-white/10 text-white border border-white/20',
  Especialidade: 'bg-brand-gray-mid text-white/80 border border-white/10',
  Rápido: 'bg-green-500/20 text-green-400 border border-green-500/30',
};

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.section-animate');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-gray-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-animate text-center mb-14">
          <span className="inline-block text-brand-yellow text-sm font-semibold uppercase tracking-widest mb-3">
            Nossos Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-white mb-4">
            Chaves Automotivas
          </h2>
          <p className="text-brand-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Trabalhamos com todas as marcas e modelos. Cópia, reparo e programação
            com peças de alta qualidade e garantia de serviço.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.alt}
              className="section-animate group relative overflow-hidden rounded-2xl bg-brand-black border border-white/8 hover:border-brand-yellow/40 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.src}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 left-3">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${
                    TAG_COLORS[product.tag] || 'bg-brand-gray-mid text-white'
                  }`}
                >
                  {product.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-brand-white font-bold text-sm">{product.title}</p>
                <a
                  href={`http://wa.me/5519988923111?text=Olá!%20Tenho%20interesse%20em%20${encodeURIComponent(product.title)}.%20Podem%20me%20ajudar?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-yellow text-xs font-medium hover:underline"
                >
                  Solicitar serviço →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="section-animate text-center mt-12">
          <p className="text-brand-white/50 text-sm mb-4">
            Não encontrou sua chave? Entre em contato — atendemos todos os modelos.
          </p>
          <a
            href="http://wa.me/5519988923111?text=Olá!%20Preciso%20de%20uma%20chave%20específica."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-brand-yellow/50 text-brand-yellow hover:bg-brand-yellow hover:text-brand-black font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            Consultar disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
