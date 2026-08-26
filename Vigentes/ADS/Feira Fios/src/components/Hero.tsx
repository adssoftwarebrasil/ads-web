import { CheckCircle, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fmotor-eletrico-azul.webp')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-gradient-to-r from-[#01904B] to-[#0379CB] px-4 py-2 rounded-full text-sm font-semibold">
              15 Anos de Excelência
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Especialistas em
              <span className="block mt-2 bg-gradient-to-r from-[#01904B] to-[#0379CB] bg-clip-text text-transparent">
                Motores Elétricos
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Manutenção preventiva e corretiva, rebobinagem e soluções personalizadas para motores e bombas elétricas com garantia de qualidade.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#01904B] flex-shrink-0" />
                <span className="text-lg">Oficina Autorizada Mercosul</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#01904B] flex-shrink-0" />
                <span className="text-lg">Equipe Altamente Capacitada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#01904B] flex-shrink-0" />
                <span className="text-lg">Atendimento Rápido e Eficiente</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/5575991231578?text=Olá! Preciso de manutenção em motor elétrico."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#01904B] to-[#0379CB] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Fale Conosco
              </a>
              <a
                href="tel:+557536263728"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                (75) 3626-3728
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#01904B] to-[#0379CB] rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <img
                src="https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fmotor-azul-industrial.webp"
                alt="Motor Elétrico Industrial"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-[#01904B]">15+</div>
                  <div className="text-sm text-gray-300 mt-1">Anos</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-[#0379CB]">100%</div>
                  <div className="text-sm text-gray-300 mt-1">Qualidade</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-[#01904B]">5★</div>
                  <div className="text-sm text-gray-300 mt-1">Avaliação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
