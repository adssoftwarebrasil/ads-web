import { Calendar, Clock, CheckCircle } from 'lucide-react';

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#D7282A] font-bold text-sm uppercase tracking-wider">Por Que Contratar?</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00335F] mt-4 mb-6">
            Por Que Escolher a Guiauto?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Contamos com uma tradição de qualidade no mercado, assegurando a satisfação na prestação de nossos serviços.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#D7282A]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-[#D7282A]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00335F] mb-3">Experiência de 44 Anos</h3>
                <p className="text-gray-600 leading-relaxed">Atuamos com expertise no setor automotivo desde 1979.</p>
              </div>
            </div>
          </div>
          <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#D7282A]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-[#D7282A]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00335F] mb-3">Atendimento 24 Horas</h3>
                <p className="text-gray-600 leading-relaxed">Disponibilidade total para situações de emergência.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#D7282A] to-[#b82228] rounded-3xl p-8 text-white">
            <CheckCircle className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Oferecemos soluções completas para veículos automotores.</h3>
          </div>
          <div className="bg-gradient-to-br from-[#2BA2CC] to-[#1e8aa8] rounded-3xl p-8 text-white">
            <CheckCircle className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Nosso objetivo é garantir que o cliente saia satisfeito.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
