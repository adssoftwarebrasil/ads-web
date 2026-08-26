import { ShieldCheck, ArrowRight } from 'lucide-react';

const patternBg =
  "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

export default function CtaRegion() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-tropical-blue">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: patternBg }}></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <ShieldCheck className="lucide lucide-shield-check text-white" width={22} height={22} />
          <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">Atendemos toda a região</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
          Transforme Seus Espaços com
          <br className="hidden sm:block" />
          Proteção e Estilo
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
          Atendemos Primavera do Leste, Cuiabá, Rondonópolis, Tangará da Serra e toda a região de Mato Grosso. Entre em
          contato agora e receba um orçamento sem compromisso!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="http://wa.me/556684533788?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-tropical-blue hover:bg-tropical-navy hover:text-white font-bold px-10 py-4 rounded-full text-base shadow-lg transition-all duration-300 hover:scale-105"
          >
            Solicitar Orçamento Gratuito
            <ArrowRight className="lucide lucide-arrow-right" width={18} height={18} />
          </a>
          <a
            href="tel:+5566984533788"
            className="flex items-center gap-2 text-white border-2 border-white/50 hover:border-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
          >
            (66) 9 8453-3788
          </a>
        </div>
      </div>
    </section>
  );
}
