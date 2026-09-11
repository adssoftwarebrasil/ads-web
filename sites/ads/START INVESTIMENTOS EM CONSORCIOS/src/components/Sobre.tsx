import type { ReactNode } from 'react';

const svgProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const cards: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
      </svg>
    ),
    title: '8+ Anos de Experiência',
    text: 'Atuando em Dourados-MS com excelência e confiança',
  },
  {
    icon: (
      <svg {...svgProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: 'Especialistas em Consórcios',
    text: 'Conhecimento profundo em cartas de crédito',
  },
  {
    icon: (
      <svg {...svgProps}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: 'Atendimento Personalizado',
    text: 'Atendemos todos os públicos em todos os valores',
  },
  {
    icon: (
      <svg {...svgProps}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
    title: 'Realização de Sonhos',
    text: 'Nossa missão é ajudar você a conquistar seus objetivos',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a START Consórcios
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                A START CORRETORA DE CONSÓRCIOS atua há mais de 8 anos no segmento na cidade de
                Dourados-MS.
              </p>
              <p>
                Somos especialistas em cartas de créditos e atendemos todos os públicos em todos os
                valores.
              </p>
              <p className="text-[#E7251C] font-semibold">
                Nosso diferencial é a meia parcela até a contemplação, assim facilitamos a compra de
                imóveis para quem quer programar sair do aluguel, a troca de veículo, entre outros.
              </p>
              <p className="text-xl font-semibold text-gray-900 pt-4">
                Nossa missão é atender e ajudar a realizar sonhos.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://wa.me/5567996552408"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#E7251C] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c41f18] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Fale com um Especialista
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((c) => (
              <div
                key={c.title}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-[#E7251C] rounded-xl flex items-center justify-center mb-4 text-white">
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
