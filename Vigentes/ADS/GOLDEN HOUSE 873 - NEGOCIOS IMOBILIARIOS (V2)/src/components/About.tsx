const stats = [
  { value: '4', label: 'Cidades de Atuação', highlight: false },
  { value: '5+', label: 'Serviços Especializados', highlight: false },
  { value: '100%', label: 'Segurança', highlight: true },
];

const features = [
  {
    title: 'Atendimento Personalizado',
    text: 'Cada cliente é único e merece soluções sob medida.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
  },
  {
    title: 'Máxima Segurança',
    text: 'Processos transparentes e análise jurídica rigorosa.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: 'Expertise Local',
    text: 'Conhecimento profundo do mercado de Salvador e região.',
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#cfa165]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cfa165]/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#cfa165]/20 to-[#cfa165]/10 text-[#cfa165] px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-widest border border-[#cfa165]/20 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#cfa165] rounded-full animate-pulse"></span>Nossa História
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2 relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#cfa165] to-[#cfa165]/50 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Equipe Golden House 873 - Liderança Feminina"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#cfa165]/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-2 border-[#cfa165]/20 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#cfa165] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#cfa165]">100%</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">Gestão Feminina</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  Expertise Feminina em
                </span>
                <br />
                <span className="text-[#cfa165]">Transações Imobiliárias</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl">
                A <span className="font-bold text-[#cfa165]">Golden House 873 Negócios Imobiliários</span> nasceu com o propósito de elevar o padrão de experiência no mercado imobiliário, unindo estratégia, técnica e atendimento verdadeiramente personalizado.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Somos uma empresa de inteligência e negócios imobiliários que atua com visão consultiva, segurança jurídica e profundidade analítica em cada etapa da jornada do cliente. Do primeiro contato ao desfecho da negociação, cada solução é construída com precisão, estratégia e total transparência.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Atendemos em todo o Brasil, oferecendo suporte completo para compra, venda, locação, regularização e tomada de decisão patrimonial. Nossa reputação é fruto de relações sólidas, resultados consistentes e um compromisso inegociável com confiança e responsabilidade.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Na Golden House 873, sua tranquilidade não é apenas prioridade, é parte do nosso padrão de excelência.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
              {stats.map((stat) =>
                stat.highlight ? (
                  <div
                    key={stat.label}
                    className="col-span-2 md:col-span-1 group relative bg-gradient-to-br from-[#cfa165] to-[#b8925a] rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 rounded-full"></div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/90 uppercase tracking-wide font-medium">{stat.label}</div>
                  </div>
                ) : (
                  <div
                    key={stat.label}
                    className="group relative bg-gradient-to-br from-[#cfa165]/10 to-white border border-[#cfa165]/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute top-3 right-3 w-8 h-8 bg-[#cfa165]/10 rounded-full"></div>
                    <div className="text-3xl md:text-4xl font-bold text-[#cfa165] mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">{stat.label}</div>
                  </div>
                )
              )}
            </div>
            <div className="pt-6">
              <a
                href="https://wa.me/557193469993?text=Olá! Gostaria de conhecer mais sobre a Golden House 873."
                className="inline-flex items-center gap-3 bg-[#cfa165] hover:bg-[#b8925a] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                Conheça Nossa Equipe
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4 items-start group">
                <div className="w-12 h-12 bg-[#cfa165]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#cfa165] transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#cfa165] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
