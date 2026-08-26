import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data';

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossos Clientes</h2>
          <p className="text-xl text-gray-600">Veja o que nossos clientes dizem sobre nós</p>
          <div className="w-24 h-1 bg-[#000EFF] mx-auto rounded-full mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative"
            >
              <Quote width={48} height={48} className="absolute top-6 right-6 text-[#000EFF]/10" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={20}
                    height={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">{t.text}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-bold text-gray-900">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
