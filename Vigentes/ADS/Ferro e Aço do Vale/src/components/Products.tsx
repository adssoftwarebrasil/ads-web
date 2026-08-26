import type { ReactNode } from 'react';

interface Product {
  title: string;
  desc: string;
  icon: ReactNode;
}

const products: Product[] = [
  {
    title: 'Metalons',
    desc: 'Perfis tubulares quadrados e retangulares para estruturas, grades, portões e construções em geral.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 fill-brand-orange" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="32" height="6" rx="1"></rect>
        <rect x="4" y="20" width="32" height="6" rx="1"></rect>
        <rect x="4" y="30" width="32" height="6" rx="1"></rect>
      </svg>
    ),
  },
  {
    title: 'Perfil Enrijecido',
    desc: 'Chapas dobradas de alta resistência ideais para telhas, coberturas e estruturas industriais.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <polygon points="4,32 20,8 36,32" fill="none" stroke="#F48047" strokeWidth="3.5"></polygon>
        <polygon points="12,32 20,18 28,32" fill="#F48047" opacity="0.4"></polygon>
      </svg>
    ),
  },
  {
    title: 'Tubos Redondos',
    desc: 'Tubos circulares para aplicações estruturais, grades ornamentais e projetos de serralheria.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="12" r="8" fill="none" stroke="#F48047" strokeWidth="3.5"></circle>
        <ellipse cx="20" cy="28" rx="8" ry="3" fill="none" stroke="#F48047" strokeWidth="3.5"></ellipse>
        <line x1="12" y1="12" x2="12" y2="28" stroke="#F48047" strokeWidth="3.5"></line>
        <line x1="28" y1="12" x2="28" y2="28" stroke="#F48047" strokeWidth="3.5"></line>
      </svg>
    ),
  },
  {
    title: 'Cantoneiras',
    desc: 'Perfis em L para reforços, acabamentos e estruturas que exigem rigidez e durabilidade.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 34 L6 6 L10 6 L10 30 L34 30 L34 34 Z" fill="#F48047"></path>
      </svg>
    ),
  },
  {
    title: 'Perfil U (Calha)',
    desc: 'Perfis em formato U para calhas, trilhos, guias e aplicações estruturais diversas.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 8 L6 30 Q6 34 10 34 L30 34 Q34 34 34 30 L34 8 L30 8 L30 30 Q30 30 28 30 L12 30 Q10 30 10 28 L10 8 Z"
          fill="#F48047"
        ></path>
      </svg>
    ),
  },
  {
    title: 'E muito mais',
    desc: 'Amplo estoque com outros perfis metálicos, chapas e materiais para serralheria em geral.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 fill-brand-orange" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="3"></circle>
        <circle cx="8" cy="20" r="3"></circle>
        <circle cx="32" cy="20" r="3"></circle>
        <rect x="3" y="8" width="34" height="4" rx="2"></rect>
        <rect x="3" y="28" width="34" height="4" rx="2"></rect>
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3 block">Catálogo</span>
          <h2 className="section-title text-white mb-4">Nossos Produtos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Tudo que sua serralheria precisa, em um só lugar. Estoque amplo e preços imbatíveis para projetos de todos os
            tamanhos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <div
              key={p.title}
              className="animate-on-scroll card-hover bg-zinc-900 border border-zinc-800 rounded-2xl p-6 group hover:border-brand-orange/40 hover:bg-zinc-900/80"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-orange/20 transition-colors duration-300">
                {p.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-orange transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-on-scroll">
          <a
            href="http://wa.me/556295226886?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base py-3.5 px-8"
          >
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
