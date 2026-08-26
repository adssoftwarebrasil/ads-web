import { Trophy, Star, Heart, CheckCircle } from 'lucide-react';

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Por que escolher o Pet Raposo?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="bg-[rgb(253,118,22)]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Trophy size={32} strokeWidth={2.5} className="text-[rgb(253,118,22)]" />
            </div>
            <div className="text-5xl font-bold text-[rgb(253,118,22)] mb-2">0</div>
            <div className="text-2xl font-semibold text-gray-900 mb-3">Anos</div>
            <p className="text-gray-600 leading-relaxed">
              De tradição e confiança no mercado
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="bg-[rgb(6,168,232)]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Star size={32} strokeWidth={2.5} className="text-[rgb(6,168,232)]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Pioneiros</h3>
            <p className="text-gray-600 leading-relaxed">
              Primeiros a trazer produtos premium para Castanhal
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart size={32} strokeWidth={2.5} className="text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Atendimento</h3>
            <p className="text-gray-600 leading-relaxed">
              Humanizado e personalizado para cada pet
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={32} strokeWidth={2.5} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Infraestrutura</h3>
            <p className="text-gray-600 leading-relaxed">
              De ponta com ambiente acolhedor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
