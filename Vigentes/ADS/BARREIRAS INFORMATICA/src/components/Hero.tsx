import { ArrowRight, MapPin, Truck, Shield, Clock, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[85vh] lg:min-h-screen bg-gradient-to-br from-white via-[#f0f9ff] to-[#e8f4ff] pt-36 lg:pt-40 pb-12 lg:pb-28 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#145bcc]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#69bfd6]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#f8cd21]/5 to-[#fdef87]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Content First, Image Last */}
        <div className="lg:hidden space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fdef87] to-[#f8cd21] text-[#145bcc] pl-1.5 pr-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
            <span className="bg-white rounded-full p-1 flex-shrink-0">
              <Sparkles size={12} className="text-[#145bcc]" />
            </span>
            <span className="whitespace-nowrap">Desde 1990 · Mais de 34 anos</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-[1.1] tracking-tight">
            Sua Referência em{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#145bcc] via-[#1a6bd4] to-[#145bcc] bg-clip-text text-transparent">
                Informática
              </span>
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="#145bcc" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
              </svg>
            </span>
            ,{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#f8cd21] via-[#fbbf24] to-[#f8cd21] bg-clip-text text-transparent">
                Papelaria
              </span>
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="#f8cd21" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
              </svg>
            </span>{' '}
            e{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#e3130c] via-[#ef4444] to-[#e3130c] bg-clip-text text-transparent">
                Móveis
              </span>
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="#e3130c" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
              </svg>
            </span>{' '}
            <span className="block mt-1">no Oeste da Bahia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base text-gray-600 leading-relaxed">
            Venda de equipamentos, peças e suprimentos de tecnologia para empresas e consumidores.
            <span className="block mt-1 text-[#145bcc] font-semibold">
              Computadores, notebooks, periféricos, material escolar e móveis para escritório.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => scrollToSection('produtos')}
              className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-[#145bcc] to-[#0d4a99] text-white px-6 py-3 rounded-xl text-base font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative">Ver Produtos</span>
              <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('contato')}
              className="group flex items-center justify-center gap-2 bg-white border-2 border-[#145bcc] text-[#145bcc] px-6 py-3 rounded-xl text-base font-bold shadow-lg hover:shadow-xl hover:bg-[#145bcc] hover:text-white transition-all hover:scale-105"
            >
              <MapPin size={18} className="group-hover:scale-110 transition-transform" />
              <span>Visitar Loja</span>
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-[#69bfd6] to-[#4a9fb8] p-1.5 rounded-lg flex-shrink-0">
                <Truck size={16} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-gray-500 font-medium">Cobertura</div>
                <div className="text-xs font-bold text-gray-900 truncate">Região Oeste</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-[#f8cd21] to-[#d4a800] p-1.5 rounded-lg flex-shrink-0">
                <Shield size={16} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-gray-500 font-medium">Garantia</div>
                <div className="text-xs font-bold text-gray-900 truncate">Qualidade</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-[#145bcc] to-[#0d4a99] p-1.5 rounded-lg flex-shrink-0">
                <Clock size={16} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-gray-500 font-medium">Horário</div>
                <div className="text-[11px] font-bold text-gray-900 leading-tight">Seg-Sex<br/>8h-18:30h</div>
              </div>
            </div>
          </div>

          {/* Image - LAST on Mobile */}
          <div className="mt-6">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=barreirasinformatica%2Falteracoes%2FFachada2.png&version_id=null"
                  alt="Fachada da Loja Barreiras Informática"
                  className="w-full h-auto min-h-[280px] sm:min-h-[350px] object-cover"
                />
              </div>

              {/* Floating Card 1 - Top Left */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl animate-float border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-br from-[#145bcc] to-[#0d4a99] p-2 rounded-lg">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-black bg-gradient-to-r from-[#145bcc] to-[#0d4a99] bg-clip-text text-transparent">
                      A + de 35 anos
                    </div>
                    <div className="text-[10px] font-semibold text-gray-600">De Experiência</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 - Bottom Right */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl animate-float-delayed border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-br from-[#e3130c] to-[#b91c1c] p-2 rounded-lg">
                    <Star size={16} className="text-white" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-xl font-black bg-gradient-to-r from-[#e3130c] to-[#b91c1c] bg-clip-text text-transparent">
                      3 Categorias
                    </div>
                    <div className="text-[10px] font-semibold text-gray-600">Completas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Grid 2 Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-20 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fdef87] to-[#f8cd21] text-[#145bcc] pl-1.5 pr-4 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-shadow">
              <span className="bg-white rounded-full p-1.5">
                <Sparkles size={16} className="text-[#145bcc]" />
              </span>
              Desde 1990 · Mais de 34 anos
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl xl:text-[64px] font-black text-gray-900 leading-[1.1] tracking-tight">
              Sua Referência em{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#145bcc] via-[#1a6bd4] to-[#145bcc] bg-clip-text text-transparent">
                  Informática
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="#145bcc" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>
              ,{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#f8cd21] via-[#fbbf24] to-[#f8cd21] bg-clip-text text-transparent">
                  Papelaria
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="#f8cd21" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>{' '}
              e{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#e3130c] via-[#ef4444] to-[#e3130c] bg-clip-text text-transparent">
                  Móveis
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="#e3130c" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>{' '}
              <span className="block mt-2">no Oeste da Bahia</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Venda de equipamentos, peças e suprimentos de tecnologia para empresas e consumidores.
              <span className="block mt-2 text-[#145bcc] font-semibold">
                Computadores, notebooks, periféricos, material escolar e móveis para escritório.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('produtos')}
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#145bcc] to-[#0d4a99] text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative">Ver Produtos</span>
                <ArrowRight size={22} className="relative group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('contato')}
                className="group flex items-center justify-center gap-3 bg-white border-3 border-[#145bcc] text-[#145bcc] px-10 py-5 rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl hover:bg-[#145bcc] hover:text-white transition-all hover:scale-105"
              >
                <MapPin size={22} className="group-hover:scale-110 transition-transform" />
                <span>Visitar Loja</span>
              </button>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#69bfd6] to-[#4a9fb8] p-2.5 rounded-lg flex-shrink-0">
                  <Truck size={20} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-gray-500 font-medium">Cobertura</div>
                  <div className="text-sm font-bold text-gray-900 truncate">Região Oeste</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#f8cd21] to-[#d4a800] p-2.5 rounded-lg flex-shrink-0">
                  <Shield size={20} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-gray-500 font-medium">Garantia</div>
                  <div className="text-sm font-bold text-gray-900 truncate">Qualidade</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#145bcc] to-[#0d4a99] p-2.5 rounded-lg flex-shrink-0">
                  <Clock size={20} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-gray-500 font-medium">Horário</div>
                  <div className="text-sm font-bold text-gray-900">Seg-Sex 8-18h</div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#145bcc] to-[#0d4a99] flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                  <Star size={14} fill="currentColor" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f8cd21] to-[#d4a800] flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                  <Star size={14} fill="currentColor" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#e3130c] to-[#b91c1c] flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
              <span className="font-semibold text-gray-900">Confiança de milhares de clientes</span>
            </div>
          </div>

          {/* Image Column - Desktop */}
          <div className="relative">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=barreirasinformatica%2Falteracoes%2FFachada2.png&version_id=null"
                  alt="Fachada da Loja Barreiras Informática"
                  className="w-full h-auto min-h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl animate-float border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-[#145bcc] to-[#0d4a99] p-3 rounded-xl">
                    <Sparkles size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-black bg-gradient-to-r from-[#145bcc] to-[#0d4a99] bg-clip-text text-transparent">
                      A + de 35 anos
                    </div>
                    <div className="text-sm font-semibold text-gray-600">De Experiência</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl animate-float-delayed border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-[#e3130c] to-[#b91c1c] p-3 rounded-xl">
                    <Star size={24} className="text-white" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-3xl font-black bg-gradient-to-r from-[#e3130c] to-[#b91c1c] bg-clip-text text-transparent">
                      3 Categorias
                    </div>
                    <div className="text-sm font-semibold text-gray-600">Completas</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#f8cd21]/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#69bfd6]/20 rounded-full blur-2xl animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
}