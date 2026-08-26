import { Star } from 'lucide-react';

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Depoimentos</h2>
          <p className="text-xl text-gray-600">O que nossos clientes dizem sobre nós</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
              "Voltarei sempre! É a melhor loja para quem ama hipismo. Senti que realmente me
              entenderam e me ajudaram a escolher."
            </p>
            <p className="text-lg font-semibold text-gray-900 text-center">Ana Couto</p>
            <div className="flex justify-center gap-2 mt-8">
              <button className="w-3 h-3 rounded-full transition-all duration-300 bg-gray-300"></button>
              <button className="w-3 h-3 rounded-full transition-all duration-300 bg-[rgb(0,123,0)] w-8"></button>
              <button className="w-3 h-3 rounded-full transition-all duration-300 bg-gray-300"></button>
              <button className="w-3 h-3 rounded-full transition-all duration-300 bg-gray-300"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
