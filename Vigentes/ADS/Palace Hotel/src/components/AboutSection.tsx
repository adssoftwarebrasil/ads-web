import { Award, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                <span className="w-8 h-0.5 bg-blue-600"></span>
                Nossa Essência
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight">
                Mais do que uma estadia,<br />
                seu lar <span className="text-blue-600">longe de casa</span>.
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              O <strong className="text-blue-900">Palace Hotel</strong> é um dos mais tradicionais de Altamira, com estrutura totalmente renovada desde 2004. Apostamos na modernização, capacitação da equipe e hospitalidade genuína para oferecer a melhor experiência aos nossos hóspedes.
            </p>

            <div className="space-y-3">
              {[
                'Apartamentos climatizados e higienizados com TV a cabo',
                'Wi-Fi gratuito em todas as dependências',
                'Café da manhã, lavanderia e garagem exclusiva'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200 grid grid-cols-3 gap-8">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-blue-950">20</span>
                  <span className="text-blue-600 font-bold">+</span>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Anos de<br/>Tradição</p>
              </div>
              <div className="border-l border-gray-200 pl-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-blue-950">24</span>
                  <span className="text-blue-600 font-bold">h</span>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Serviço<br/>Disponível</p>
              </div>
              <div className="border-l border-gray-200 pl-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-blue-950">4.8</span>
                  <Star size={16} className="text-blue-600 fill-blue-600 ml-1" />
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Avaliação<br/>Média</p>
              </div>
            </div>

            <button
              onClick={() => window.open('https://wa.me/5593991462057?text=Olá! Gostaria de saber mais sobre o Palace Hotel.', '_blank')}
              className="group flex items-center gap-2 text-blue-900 font-bold hover:text-blue-600 transition-colors pt-4"
            >
              Fale Conosco
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="order-1 lg:order-2 relative h-[600px] hidden md:block">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-blue-50 rounded-tr-[4rem] -z-10"></div>

            <div className="absolute top-8 right-8 w-3/4 h-3/5 shadow-2xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 z-10">
              <img
                src="https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F8.jpg"
                alt="Quarto do Palace Hotel"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-12 left-0 w-3/5 h-2/5 shadow-2xl rounded-xl overflow-hidden border-8 border-white z-20 transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://storage.lucasmendes.dev/site-sp/palace-hotel%2FRecepcao%2F1.jpg"
                alt="Recepção do Palace Hotel"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-24 right-12 bg-white/90 backdrop-blur shadow-lg p-4 rounded-lg z-30 max-w-[150px]">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-blue-600 fill-blue-600" />
                ))}
              </div>
              <p className="text-xs text-gray-600 font-medium">"Melhor hotel de Altamira, excelente atendimento."</p>
            </div>
          </div>

          <div className="order-1 md:hidden space-y-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F1.jpg"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
              alt="Quarto do Palace Hotel"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
