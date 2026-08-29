import { Zap, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const benefits: { icon: LucideIcon; label: string }[] = [
  { icon: Zap, label: 'Baixo consumo de energia' },
  { icon: CheckCircle, label: 'Fácil instalação' },
  { icon: CheckCircle, label: 'Manutenção simples' },
  { icon: CheckCircle, label: 'Durabilidade comprovada' },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 opacity-100 translate-y-0">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/ms%20climatizadores%2Fimg%2Fvoce-ja-conhece-nossa-linha-de-produtos.jpg"
              alt="Climatizadores Rotoplast"
              className="rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/20 w-full h-auto"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Climatizadores Rotoplast
              </span>{' '}
              de Alta Performance
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Descubra nossa linha completa de climatizadores Rotoplast, projetados para oferecer
              máxima eficiência energética e conforto térmico. Tecnologia avançada com design robusto.
            </p>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon width={18} height={18} className="text-gray-900" />
                    </div>
                    <span className="text-gray-200">{benefit.label}</span>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              className="rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 bg-[rgb(255,200,1)] text-gray-900 hover:bg-yellow-400 shadow-lg hover:shadow-yellow-500/50 hover:scale-105 active:scale-95 px-8 py-4 text-lg "
            >
              Ver Linha Completa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
