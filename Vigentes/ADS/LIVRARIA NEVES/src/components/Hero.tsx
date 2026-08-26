import { BookOpen, ChevronRight, MapPin, Clock } from 'lucide-react';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(60,100,139)] via-[rgb(80,120,159)] to-[rgb(60,100,139)] opacity-95"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(157,119,0)] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fadeIn">
              <BookOpen size={20} className="text-[rgb(157,119,0)]" />
              <span className="text-sm font-medium">Sua Livraria Evangélica de Confiança</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slideUp">
              Publicações Evangélicas de Qualidade Para Toda a Família
            </h1>
            <p
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-slideUp"
              style={{ animationDelay: '0.1s' }}
            >
              Descubra uma seleção completa de Bíblias de estudo, livros teológicos, materiais para escola dominical e muito mais. Atendendo Camaçari e região com excelência.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 mb-8 animate-slideUp"
              style={{ animationDelay: '0.2s' }}
            >
              <a
                href="https://wa.me/557136277599?text=Olá! Gostaria de conhecer os produtos da Livraria Neves."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[rgb(157,119,0)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(137,99,0)] transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group"
              >
                Fale Conosco Agora
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => scrollTo('produtos')}
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border-2 border-white/30"
              >
                Ver Produtos
              </button>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slideUp"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <MapPin size={24} className="text-[rgb(157,119,0)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Localização</h3>
                  <p className="text-sm text-white/80">
                    Tv. Getúlio Vargas, 10<br />Alto da Cruz, Camaçari - BA
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <Clock size={24} className="text-[rgb(157,119,0)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Horário</h3>
                  <p className="text-sm text-white/80">
                    Seg-Sex: 08:30-17:30<br />Sáb: 08:30-12:30
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:pl-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                    <img
                      src="https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/biblia-estudo-capa_6_11zon.webp"
                      alt="Bíblia de Estudo"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                    <img
                      src="https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/biblia-aplicacao-pessoal_1_11zon.webp"
                      alt="Bíblia de Aplicação Pessoal"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                    <img
                      src="https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/biblia-letra-gigante_10_11zon.webp"
                      alt="Bíblia Letra Gigante"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                    <img
                      src="https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/capa-biblia-infantil_18_11zon.webp"
                      alt="Bíblia Infantil"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-[rgb(157,119,0)] rounded-full filter blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
