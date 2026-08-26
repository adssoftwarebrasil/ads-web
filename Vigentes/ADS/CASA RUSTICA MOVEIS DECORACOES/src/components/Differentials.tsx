import { Clock, Sparkles, Palette, Award, Home, CheckCircle } from 'lucide-react';

export default function Differentials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[rgb(5,86,77)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[rgb(248,177,1)]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgb(184,11,41)]/3 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-[rgb(248,177,1)] font-semibold text-sm tracking-widest uppercase">Nossos Diferenciais</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(5,86,77)] mb-6">Conforto e Elegância</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-[rgb(248,177,1)]"></div>
            <div className="w-3 h-3 bg-[rgb(248,177,1)] rounded-full"></div>
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-[rgb(248,177,1)]"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nosso diferencial está na nossa madeira, uma <span className="font-semibold text-[rgb(5,86,77)]">madeira nobre</span>{' '}
            com acabamento fino capaz de deixar qualquer ambiente agradável e bonito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 - Móveis Atemporais */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[rgb(5,86,77)] to-[rgb(4,70,63)] rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[rgb(5,86,77)] to-[rgb(4,70,63)] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[rgb(248,177,1)] rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[rgb(5,86,77)] group-hover:text-[rgb(4,70,63)] transition-colors">Móveis Atemporais</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-[rgb(5,86,77)] to-transparent rounded-full"></div>
                <p className="text-gray-600 leading-relaxed">
                  Nossa madeira é uma madeira nobre com acabamento fino capaz de deixar qualquer ambiente agradável e
                  bonito. A Peroba Rosa é uma espécie de madeira utilizada no Brasil há muitos anos e extremamente
                  valorizada no exterior por apresentar uma qualidade superior e uma beleza única.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[rgb(5,86,77)]/10 text-[rgb(5,86,77)] rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Durabilidade
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[rgb(5,86,77)]/10 text-[rgb(5,86,77)] rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Qualidade
                  </span>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[rgb(5,86,77)]">
                  <circle cx="100" cy="0" r="80" fill="currentColor"></circle>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 - Móveis Personalizados */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[rgb(248,177,1)] to-[rgb(228,157,0)] rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[rgb(248,177,1)] to-[rgb(228,157,0)] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[rgb(5,86,77)] rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[rgb(5,86,77)] group-hover:text-[rgb(4,70,63)] transition-colors">Móveis Personalizados</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-[rgb(248,177,1)] to-transparent rounded-full"></div>
                <p className="text-gray-600 leading-relaxed">
                  Móveis sob medida, perfeito para deixar seu espaço mais confortável e elegante. Trabalhamos com a
                  criação de móveis de acordo com o seu gosto e com a necessidade do seu espaço.
                </p>
                <div className="bg-gradient-to-r from-[rgb(248,177,1)]/10 to-transparent border-l-4 border-[rgb(248,177,1)] p-4 rounded-r-lg">
                  <p className="text-sm text-gray-700 font-medium">
                    Fazemos sob medida: sofás, poltronas, mesas, cadeiras, cristaleiras, bancos e muito mais.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[rgb(248,177,1)]/10 text-[rgb(228,157,0)] rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Sob Medida
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[rgb(248,177,1)]/10 text-[rgb(228,157,0)] rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Exclusivo
                  </span>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[rgb(248,177,1)]">
                  <circle cx="100" cy="0" r="80" fill="currentColor"></circle>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3 - Itens de Decoração */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[rgb(184,11,41)] to-[rgb(150,9,33)] rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[rgb(184,11,41)] to-[rgb(150,9,33)] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[rgb(248,177,1)] rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[rgb(5,86,77)] group-hover:text-[rgb(4,70,63)] transition-colors">Itens de Decoração</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-[rgb(184,11,41)] to-transparent rounded-full"></div>
                <p className="text-gray-600 leading-relaxed">
                  Na Casa Rústica você encontra itens de decoração produzidos com Madeira de Demolição Peroba Rosa,
                  palha, ferragens e outros materiais.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-[rgb(184,11,41)] rounded-full"></div>
                    <span>Madeira de Demolição Peroba Rosa</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-[rgb(184,11,41)] rounded-full"></div>
                    <span>Palha natural</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-[rgb(184,11,41)] rounded-full"></div>
                    <span>Ferragens artesanais</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[rgb(184,11,41)]/10 text-[rgb(184,11,41)] rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Artesanal
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[rgb(184,11,41)]/10 text-[rgb(184,11,41)] rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Único
                  </span>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[rgb(184,11,41)]">
                  <circle cx="100" cy="0" r="80" fill="currentColor"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(5,86,77)] via-[rgb(4,70,63)] to-[rgb(5,86,77)] rounded-3xl"></div>
          <div className="relative bg-gradient-to-r from-[rgb(5,86,77)]/95 to-[rgb(4,70,63)]/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center border border-white/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-[rgb(248,177,1)]" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">Qualidade Garantida</h3>
            </div>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Todos os nossos móveis passam por um rigoroso controle de qualidade e são acompanhados de garantia.
              Investimento que dura gerações.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="w-5 h-5 text-[rgb(248,177,1)]" />
                <span className="text-white/90 text-sm">Garantia de qualidade</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="w-5 h-5 text-[rgb(248,177,1)]" />
                <span className="text-white/90 text-sm">Madeira certificada</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="w-5 h-5 text-[rgb(248,177,1)]" />
                <span className="text-white/90 text-sm">Acabamento premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
