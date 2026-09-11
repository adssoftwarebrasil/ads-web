import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      aria-label="Introdução"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-8">
          <div className="text-3xl font-bold tracking-tight text-blue-400">VEACCI</div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Proposta de Parceria Digital para <span className="text-blue-400">Ellas Business Solution</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl">
          Detalhamos abaixo a estratégia e o investimento para escalar seus resultados online.
        </p>
        <a
          href="#solucao"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          aria-label="Navegar para resumo da proposta"
        >
          Ver Resumo da Proposta
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
