import { Sparkles } from 'lucide-react';

export default function BeforeAfter() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-reveal">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            Resultados Reais
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Antes e Depois
          </h2>
          <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Veja a diferenca que uma limpeza profissional faz no seu equipamento. Nosso servico devolve a eficiencia e a qualidade do ar que voce merece.
          </p>
        </div>
        <div className="scroll-reveal">
          <div className="relative max-w-lg mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 via-primary/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://storage.lucasmendes.dev/site-sp/climatec%2Far-condicionado-sujo-limpo.webp"
                alt="Antes e depois da limpeza"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-secondary" />
                  <span className="text-white font-semibold text-sm tracking-wide">
                    Limpeza Profissional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center scroll-reveal">
          <a
            href="#contato"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Solicitar Limpeza
          </a>
        </div>
      </div>
    </section>
  );
}
