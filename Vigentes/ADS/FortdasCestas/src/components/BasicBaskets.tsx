import { basicBaskets } from '../data/baskets';
import BasketCard from './BasketCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function BasicBaskets() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="cestas-basicas" className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-12 sm:mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Nossas Cestas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cestas Basicas Para o Ano Todo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Economia e qualidade para sua familia ou para ajudar quem precisa
          </p>
          <div className="mt-5 inline-flex items-start gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-5 py-3 rounded-xl text-sm max-w-2xl mx-auto">
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>As marcas descritas nos itens das cestas podem variar de acordo com a demanda e disponibilidade de estoque.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {basicBaskets.map((basket, index) => (
            <div key={index} className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${Math.min((index % 4) + 1, 4)}`}>
              <BasketCard basket={basket} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
