import { WHATSAPP_URL, IMG, scrollToSection } from '../constants';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-start pt-24 lg:justify-center lg:pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={IMG.hero}
          alt="Dra. Mariana Boccanera Atendendo"
          className="w-full h-full object-cover object-center md:object-[75%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10 lg:via-white/80 lg:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent lg:hidden"></div>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[rgb(251,203,185)] rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-10 left-1/3 w-96 h-96 bg-[rgb(235,208,217)] rounded-full opacity-20 blur-3xl animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 lg:py-20">
        <div className="max-w-2xl">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md shadow-sm border border-[rgb(218,185,165)]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(218,185,165)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[rgb(218,185,165)]"></span>
              </span>
              <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">
                Consultas Presenciais e Online
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-800">
                Pediatria com <br />
                <span className="relative inline-block text-[rgb(198,165,145)]">
                  Cuidado e Amor
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-[rgb(251,203,185)] opacity-40"
                    viewBox="0 0 200 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.00025 6.99992C18.5002 9.74992 48.5002 9.74992 48.5002 9.74992C65.4002 9.74992 82.5002 9.74992 99.5002 9.74992C116.5002 9.74992 133.5002 9.74992 150.5002 9.74992C167.5002 9.74992 184.5002 9.74992 201.5002 6.99992C201.5002 6.99992 165.5002 0.749924 99.5002 0.749924C33.5002 0.749924 2.00025 6.99992 2.00025 6.99992Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </h1>
              <div className="pl-1 border-l-4 border-[rgb(218,185,165)]">
                <h2 className="pl-4 text-2xl lg:text-3xl font-medium text-gray-700">
                  Dra. Mariana Boccanera
                </h2>
                <p className="pl-4 text-lg text-[rgb(198,165,145)] italic">
                  Especialista em Desenvolvimento Infantil
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg font-light">
              Proporcionando um futuro saudável através de um atendimento humanizado, personalizado e
              acolhedor para o seu filho e toda a família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-[rgb(218,185,165)] text-white rounded-full font-medium text-center shadow-lg hover:shadow-[rgb(218,185,165)]/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Agendar Consulta
                </span>
              </a>
              <button
                onClick={() => scrollToSection('servicos')}
                className="px-8 py-4 bg-white border border-gray-200 text-gray-600 rounded-full font-medium hover:bg-gray-50 hover:border-[rgb(218,185,165)] hover:text-[rgb(218,185,165)] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Conheça os Serviços
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-8 max-w-md">
              <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm hover:bg-white/80 transition-colors duration-300">
                <p className="text-3xl font-bold text-[rgb(218,185,165)] mb-1">5.0</p>
                <p className="text-sm text-gray-600 font-medium">Avaliação dos Pais</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm hover:bg-white/80 transition-colors duration-300">
                <p className="text-3xl font-bold text-[rgb(218,185,165)] mb-1">+10</p>
                <p className="text-sm text-gray-600 font-medium">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
