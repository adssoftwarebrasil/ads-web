import { ArrowRight, Award, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(66,66,152)] via-[rgb(113,147,204)] to-[rgb(66,66,152)] opacity-95"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(252,205,59)] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(254,238,171)] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-[rgb(252,205,59)] text-[rgb(66,66,152)] px-6 py-2 rounded-full text-sm font-bold tracking-wide">
                Referência em São Carlos desde 1976
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Transforme Seu<span className="block text-[rgb(252,205,59)]">Ambiente</span>com Estilo
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 leading-relaxed">
              Pisos laminados, vinílicos, carpetes e muito mais. Qualidade profissional com atendimento personalizado para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/5516991541924"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-[rgb(252,205,59)] text-[rgb(66,66,152)] px-8 py-4 rounded-full text-lg font-bold hover:bg-[rgb(254,238,171)] transition-all duration-300 shadow-2xl hover:shadow-[rgb(252,205,59)]/50 hover:scale-105"
              >
                Solicitar Orçamento
                <ArrowRight size={24} className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+5516991541924"
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
              >
                (16) 99154-1924
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="flex items-start gap-3">
                <Award size={24} className="lucide lucide-award text-[rgb(252,205,59)] flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold">+50</div>
                  <div className="text-sm text-gray-200">Anos no Mercado</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={24} className="lucide lucide-clock text-[rgb(252,205,59)] flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold">Seg-Sáb</div>
                  <div className="text-sm text-gray-200">Atendimento</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={24} className="lucide lucide-map-pin text-[rgb(252,205,59)] flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-gray-200">Cidades</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:block hidden">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Fsala-estar-moderna.webp"
                alt="Ambiente moderno com pisos de qualidade"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(66,66,152)]/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="bg-[rgb(252,205,59)] rounded-full p-4">
                  <Award size={32} className="lucide lucide-award text-[rgb(66,66,152)]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[rgb(66,66,152)]">Excelência</div>
                  <div className="text-gray-600">Qualidade Garantida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
