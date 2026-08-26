interface Service {
  faIcon: string;
  emoji: string;
  title: string;
  description: string;
  gradient: string;
  barGradient: string;
  overlay: string;
  delay: string;
}

const services: Service[] = [
  {
    faIcon: 'fa-solar-panel',
    emoji: '☀️',
    title: 'Geração Distribuída (GD)',
    description:
      'Sistemas de energia solar para residências e empresas, garantindo economia e sustentabilidade.',
    gradient: 'from-[#facc22] to-[#f88c00]',
    barGradient: 'from-[#facc22] to-[#f88c00]',
    overlay: 'bg-[#facc22]/10',
    delay: '400ms',
  },
  {
    faIcon: 'fa-bolt',
    emoji: '⚡',
    title: 'Engenharia Elétrica',
    description: 'Projetos elétricos completos com qualidade, segurança e eficiência energética.',
    gradient: 'from-[#f88c00] to-[#facc22]',
    barGradient: 'from-[#f88c00] to-[#facc22]',
    overlay: 'bg-[#f88c00]/10',
    delay: '500ms',
  },
  {
    faIcon: 'fa-building',
    emoji: '🏗️',
    title: 'Engenharia Civil',
    description: 'Soluções em engenharia civil integradas aos sistemas de energia renovável.',
    gradient: 'from-[#facc22] to-[#f88c00]',
    barGradient: 'from-[#facc22] to-[#f88c00]',
    overlay: 'bg-[#facc22]/10',
    delay: '600ms',
  },
  {
    faIcon: 'fa-tools',
    emoji: '🔧',
    title: 'Instalação Completa',
    description:
      'Instalação profissional de painéis solares e inversores com garantia de qualidade.',
    gradient: 'from-[#f88c00] to-[#facc22]',
    barGradient: 'from-[#f88c00] to-[#facc22]',
    overlay: 'bg-[#f88c00]/10',
    delay: '700ms',
  },
  {
    faIcon: 'fa-headset',
    emoji: '🎧',
    title: 'Suporte Técnico',
    description: 'Assistência técnica especializada e manutenção preventiva para seu sistema.',
    gradient: 'from-[#facc22] to-[#f88c00]',
    barGradient: 'from-[#facc22] to-[#f88c00]',
    overlay: 'bg-[#facc22]/10',
    delay: '800ms',
  },
  {
    faIcon: 'fa-certificate',
    emoji: '✓',
    title: 'Homologação',
    description: 'Cuidamos de toda documentação e homologação junto à concessionária.',
    gradient: 'from-[#f88c00] to-[#facc22]',
    barGradient: 'from-[#f88c00] to-[#facc22]',
    overlay: 'bg-[#f88c00]/10',
    delay: '900ms',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#facc22]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00108a]/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 transition-all duration-1000 opacity-0 scale-90">
            <span className="inline-flex items-center gap-2 bg-[#facc22]/10 text-[#00108a] px-6 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-[#facc22] rounded-full animate-pulse"></span>O que oferecemos
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00108a] mb-4 transition-all duration-1000 delay-100 opacity-0 translate-y-8">
            Nossos Serviços
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-[#facc22] via-[#f88c00] to-[#facc22] rounded-full transition-all duration-1000 delay-200 opacity-0 scale-x-0"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 opacity-0 translate-y-8">
            Soluções completas em energia solar e engenharia para seu projeto
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative transition-all duration-1000 opacity-0 translate-y-8"
              style={{ transitionDelay: s.delay }}
            >
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden h-full">
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${s.barGradient} transition-all duration-500 h-1`}
                ></div>
                <div
                  className={`absolute inset-0 ${s.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#facc22]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="mb-6 relative">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      <i className={`fas ${s.faIcon} text-3xl text-white`}></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xl transform group-hover:scale-110 transition-transform duration-300">
                      {s.emoji}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#00108a] mb-4 group-hover:text-[#001570] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{s.description}</p>
                  <button className="inline-flex items-center gap-2 text-[#00108a] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Saiba mais
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${s.barGradient} transform origin-left transition-transform duration-700 scale-x-0`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center transition-all duration-1000 delay-1000 opacity-0 translate-y-8">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#facc22] to-[#f88c00] rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-600 font-medium">Precisa de ajuda?</p>
                <p className="text-xl font-bold text-[#00108a]">Fale com nossos especialistas</p>
              </div>
            </div>
            <a
              href="#contato"
              className="bg-gradient-to-r from-[#facc22] to-[#f88c00] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex-shrink-0"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
