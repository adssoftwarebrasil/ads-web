import { ShieldCheck, ArrowRight } from 'lucide-react';

const highlights = ['Orçamento 100% Gratuito', 'Sem Compromisso', 'Resposta Rápida', 'Atendimento Personalizado'];

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-brand overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)' }}
        ></div>
        <div
          className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)' }}
        ></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center">
            <ShieldCheck className="lucide lucide-shield-check h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
          Sua propriedade merece a melhor proteção
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Não espere acontecer algo para se proteger. Entre em contato agora e receba um orçamento gratuito e sem
          compromisso. Atendimento em Pará de Minas e região.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/553799961702?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento%20gratuito."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-dark font-bold rounded-xl text-lg transition-all duration-300 hover:bg-neutral-100 hover:-translate-y-0.5 shadow-xl group"
          >
            Solicitar Orçamento Gratuito
            <ArrowRight className="lucide lucide-arrow-right h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+5537999961702"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl text-lg transition-all duration-300 hover:bg-white/10"
          >
            (37) 99996-1702
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
              {h}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
