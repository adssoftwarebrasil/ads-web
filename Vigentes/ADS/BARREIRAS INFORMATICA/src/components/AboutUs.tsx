import { Calendar, CheckCircle, Award, TrendingUp, Users, Store } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="sobre" className="relative bg-gradient-to-br from-white via-[#f8fafc] to-[#f0f9ff] py-12 lg:py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#145bcc]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#69bfd6]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center space-y-6 lg:space-y-0">
          
          {/* Content Column - First on Mobile */}
          <div className="space-y-4 lg:space-y-5 order-1">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#69bfd6]/10 to-[#69bfd6]/5 text-[#69bfd6] px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wider border border-[#69bfd6]/20">
              <Award size={12} className="lg:w-4 lg:h-4" />
              Nossa História
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.15]">
              Mais de <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#145bcc] to-[#0d4a99] bg-clip-text text-transparent">34 Anos</span>
                <svg className="absolute -bottom-1 left-0 w-full hidden lg:block" height="6" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="#145bcc" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span> Servindo o Oeste da Bahia
            </h2>

            {/* Paragraphs - Compact */}
            <div className="space-y-3">
              <p className="text-sm lg:text-[15px] leading-relaxed text-gray-600">
                <span className="font-semibold text-[#145bcc]">Fundada em 26 de outubro de 1990</span>, a Barreiras Informática é uma
                <span className="font-semibold text-gray-900"> revendedora especializada</span> em comercialização de produtos de tecnologia,
                papelaria e móveis. Somos <span className="font-semibold text-gray-900">referência regional em três categorias
                essenciais</span>: informática, papelaria e móveis de escritório.
              </p>

              <p className="text-sm lg:text-[15px] leading-relaxed text-gray-600">
                Como <span className="font-semibold text-[#145bcc]">revendedores autorizados de múltiplas marcas</span>, oferecemos equipamentos novos,
                componentes de hardware, periféricos e suprimentos. Construímos nossa reputação com base em
                <span className="font-semibold text-gray-900"> qualidade dos produtos, variedade de marcas e atendimento diferenciado</span>.
              </p>

              <div className="bg-gradient-to-r from-[#145bcc]/5 to-transparent p-3 lg:p-4 rounded-xl border-l-4 border-[#145bcc]">
                <p className="text-sm lg:text-[15px] leading-relaxed text-gray-700 font-medium">
                  Somos <span className="text-[#145bcc] font-bold">especialistas em vendas e revenda de tecnologia</span>, oferecendo consultoria
                  para empresas e consumidores escolherem os melhores equipamentos. Nossa missão é fornecer
                  produtos de qualidade com eficiência, variedade e o melhor custo-benefício do mercado.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-3 lg:p-4 rounded-xl">
                <p className="text-xs lg:text-sm leading-relaxed text-gray-700">
                  <span className="font-bold text-amber-700">Aviso:</span> Somos uma empresa independente de revenda de produtos de tecnologia.
                  Não somos afiliados, representantes oficiais nem oferecemos suporte técnico direto de fabricantes como Microsoft, Apple,
                  Dell, HP ou outras marcas. Comercializamos produtos originais de diversas marcas e oferecemos consultoria na escolha de equipamentos.
                </p>
              </div>
            </div>

            {/* Stats Grid - Compact */}
            <div className="grid grid-cols-3 gap-2.5 lg:gap-3">
              <div className="bg-white/80 backdrop-blur-sm p-3 lg:p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 group">
                <div className="flex items-center justify-center lg:justify-start mb-1.5">
                  <div className="bg-gradient-to-br from-[#145bcc] to-[#0d4a99] p-1.5 lg:p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <TrendingUp size={14} className="lg:w-5 lg:h-5 text-white" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-[#145bcc] to-[#0d4a99] bg-clip-text text-transparent leading-none mb-1">
                  34+
                </div>
                <div className="text-[10px] lg:text-xs text-gray-600 font-semibold">Anos de Mercado</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-3 lg:p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 group">
                <div className="flex items-center justify-center lg:justify-start mb-1.5">
                  <div className="bg-gradient-to-br from-[#f8cd21] to-[#d4a800] p-1.5 lg:p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <Award size={14} className="lg:w-5 lg:h-5 text-white" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-black text-[#f8cd21] leading-none mb-1">
                  3
                </div>
                <div className="text-[10px] lg:text-xs text-gray-600 font-semibold">Categorias</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-3 lg:p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 group">
                <div className="flex items-center justify-center lg:justify-start mb-1.5">
                  <div className="bg-gradient-to-br from-[#69bfd6] to-[#4a9fb8] p-1.5 lg:p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <Store size={14} className="lg:w-5 lg:h-5 text-white" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-black text-[#69bfd6] leading-none mb-1">
                  1990
                </div>
                <div className="text-[10px] lg:text-xs text-gray-600 font-semibold">Fundação</div>
              </div>
            </div>

            {/* Differentials List - Compact */}
            <div className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm p-3.5 lg:p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-2 mb-2.5 lg:mb-3">
                <div className="bg-gradient-to-br from-[#145bcc] to-[#0d4a99] p-1.5 lg:p-2 rounded-lg">
                  <Users size={16} className="lg:w-5 lg:h-5 text-white" />
                </div>
                <h3 className="text-sm lg:text-base font-black text-gray-900">Nossos Diferenciais</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <div className="bg-[#145bcc]/10 p-1 lg:p-1.5 rounded-lg flex-shrink-0">
                    <CheckCircle size={12} className="lg:w-4 lg:h-4 text-[#145bcc]" />
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-gray-900">
                    Qualidade Garantida
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-[#145bcc]/10 p-1 lg:p-1.5 rounded-lg flex-shrink-0">
                    <CheckCircle size={12} className="lg:w-4 lg:h-4 text-[#145bcc]" />
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-gray-900">
                    Atendimento Especializado
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-[#145bcc]/10 p-1 lg:p-1.5 rounded-lg flex-shrink-0">
                    <CheckCircle size={12} className="lg:w-4 lg:h-4 text-[#145bcc]" />
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-gray-900">
                    Grande Variedade
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-[#145bcc]/10 p-1 lg:p-1.5 rounded-lg flex-shrink-0">
                    <CheckCircle size={12} className="lg:w-4 lg:h-4 text-[#145bcc]" />
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-gray-900">
                    Localização Estratégica
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Images Column - Last on Mobile */}
          <div className="relative order-2">
            <div className="relative h-[280px] sm:h-[340px] lg:h-[450px]">
              {/* Main Image - Fachada */}
              <div className="relative h-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl group">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=barreirasinformatica%2Falteracoes%2Ffachada1.png&version_id=null"
                  alt="Fachada da Barreiras Informática"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Secondary Image - Interior (Bottom Right) */}
              <div className="absolute bottom-[-12px] right-[-12px] lg:bottom-[-20px] lg:right-[-20px] w-[38%] sm:w-[35%] aspect-square overflow-hidden rounded-xl lg:rounded-2xl border-3 lg:border-4 border-white shadow-2xl z-10 group">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Floja-informatica-equipamentos.webp"
                  alt="Interior da loja com equipamentos"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Floating Badge - Top Left */}
              <div className="absolute top-3 left-3 lg:top-5 lg:left-5 bg-gradient-to-r from-[#145bcc] to-[#0d4a99] text-white px-3 py-2 lg:px-4 lg:py-2.5 rounded-xl shadow-2xl z-20 backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-1 rounded-lg">
                    <Calendar size={14} className="lg:w-4 lg:h-4" />
                  </div>
                  <span className="font-bold text-xs lg:text-sm whitespace-nowrap">Fundada em 1990</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="hidden lg:block absolute -bottom-3 -left-3 w-24 h-24 bg-[#f8cd21]/20 rounded-full blur-2xl"></div>
              <div className="hidden lg:block absolute -top-3 -right-3 w-20 h-20 bg-[#69bfd6]/20 rounded-full blur-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}