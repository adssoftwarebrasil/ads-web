import type { ReactNode } from 'react';

interface Benefit {
  title: string;
  text: string;
  icon: ReactNode;
}

const stroke = { fill: 'none', stroke: 'var(--color-green-700)', strokeWidth: 2 } as const;

const benefits: Benefit[] = [
  {
    title: 'Pontualidade no percurso',
    text: 'Viagens planejadas para levar você ao destino com agilidade, organização e segurança.',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Motoristas treinados e registrados',
    text: 'Equipe preparada para transportar passageiros com responsabilidade em cada trecho.',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Frota conservada e higienizada',
    text: 'Veículos próprios, confortáveis e cuidados para uma experiência mais tranquila.',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
        <path d="M4 11V8a4 4 0 014-4h12M20 11V8" />
        <rect x="2" y="11" width="16" height="10" rx="2" />
        <circle cx="6" cy="21" r="2" />
        <circle cx="14" cy="21" r="2" />
        <path d="M18 5h4v6h-4z" />
      </svg>
    ),
  },
  {
    title: 'Encomendas com atendimento direto',
    text: 'Envie objetos, volumes e cargas pelas rotas atendidas pela Fabbitur.',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Atendimento online 24h',
    text: 'Fale com a equipe pelo WhatsApp para consultar rotas, horários e encomendas.',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 lg:py-20 bg-[var(--color-green-100)]" aria-labelledby="benefits-heading">
      <div className="container-site">
        <div className="text-center mb-12">
          <h2 id="benefits-heading" className="section-title">
            Por que viajar com a Fabbitur?
          </h2>
          <p className="section-subtitle mx-auto">
            Mais de 30 anos de experiência em transporte interestadual com qualidade e responsabilidade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-green-100)] flex items-center justify-center mx-auto mb-4">
                {b.icon}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {b.title}
              </h3>
              <p className="text-sm text-[var(--color-text-600)] leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
