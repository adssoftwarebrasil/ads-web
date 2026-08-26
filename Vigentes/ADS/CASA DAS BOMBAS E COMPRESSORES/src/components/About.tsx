import { Award, Calendar, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-red-50/30 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2.5 rounded-full shadow-lg">
            <Award width={18} height={18} className="lucide lucide-award " />
            <span className="font-semibold text-sm uppercase tracking-wide">Referência em Manaus</span>
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#C41D1D] mb-4">Nossa História</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(255,163,1)] to-amber-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/casadasbombasecompressores%2FNOSSA%20HISTO%CC%81RIA.webp"
                  alt="Nossa História"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                  <div className="grid grid-cols-2 gap-6 text-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Fundada em{' '}
                <span className="inline-flex items-center gap-1.5 text-[rgb(255,163,1)] font-bold">
                  <Calendar width={18} height={18} className="lucide lucide-calendar inline" />
                  27 de dezembro de 2002
                </span>
                , a <strong className="text-gray-900">Casa das Bombas e Compressores</strong> nasceu com o objetivo de
                atender o mercado de Manaus com soluções completas em bombas d'água e compressores de ar.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Consolidamos nossa posição como{' '}
                <strong className="text-[#C41D1D]">referência em assistência técnica autorizada</strong> pelas
                principais marcas do mercado, com uma equipe altamente qualificada.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-5 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(255,163,1)] to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Users width={22} height={22} className="lucide lucide-users text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Equipe Qualificada</h3>
                    <p className="text-sm text-gray-600">Profissionais especializados</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 p-5 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C41D1D] to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <TrendingUp width={22} height={22} className="lucide lucide-trending-up text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Tradição e Inovação</h3>
                    <p className="text-sm text-gray-600">Compromisso com qualidade</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(255,163,1)] to-amber-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Conheça Nossos Serviços
                <TrendingUp width={20} height={20} className="lucide lucide-trending-up " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
