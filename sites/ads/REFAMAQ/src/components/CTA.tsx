import { ChevronRight, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2d6e] via-[#243b8e] to-[#466fc5]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Pronto para Maximizar a
          <span className="block text-yellow-300">Produtividade do seu Maquinário?</span>
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Entre em contato agora e receba um orçamento personalizado. Atendemos Mato Grosso, Pará, Amazonas e Goiás.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="http://wa.me/5566984028763?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-xl hover:-translate-y-0.5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar Orçamento
          </a>
          <a
            href="tel:6635158120"
            className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200"
          >
            <Phone size={18} />
            (66) 3515-8120
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
