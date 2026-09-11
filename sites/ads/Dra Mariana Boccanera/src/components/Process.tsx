import { WHATSAPP_URL } from '../constants';

interface Step {
  number: number;
  image: string;
  delay: number;
}

const steps: Step[] = [
  {
    number: 1,
    image: 'https://storage.lucasmendes.dev/site-sp/dra%20mariana%2Fimg%2Fpor-que-contratar-05.webp',
    delay: 0,
  },
  {
    number: 2,
    image: 'https://storage.lucasmendes.dev/site-sp/dra%20mariana%2Fimg%2Fpor-que-contratar-02.webp',
    delay: 150,
  },
  {
    number: 3,
    image: 'https://storage.lucasmendes.dev/site-sp/dra%20mariana%2Fimg%2Fpor-que-contratar-03.webp',
    delay: 300,
  },
  {
    number: 4,
    image: 'https://storage.lucasmendes.dev/site-sp/dra%20mariana%2Fimg%2Fpor-que-contratar-04.webp',
    delay: 450,
  },
  {
    number: 5,
    image: 'https://storage.lucasmendes.dev/site-sp/dra%20mariana%2Fimg%2Fpor-que-contratar-06.webp',
    delay: 600,
  },
  {
    number: 6,
    image: 'https://storage.lucasmendes.dev/site-sp/dra%20mariana%2Fimg%2Fpor-que-contratar-07.webp',
    delay: 750,
  },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-[rgb(251,203,185)]/5 to-white">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgb(218,185,165)]/30 to-transparent"></div>
      <div className="absolute top-40 left-0 w-96 h-96 bg-[rgb(218,185,165)]/10 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse-slow"></div>
      <div
        className="absolute bottom-40 right-0 w-96 h-96 bg-[rgb(235,208,217)]/10 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse-slow"
        style={{ animationDelay: '2s' }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(218,185,165)]/10 text-[rgb(218,185,165)] font-semibold text-sm mb-6 border border-[rgb(218,185,165)]/20">
              <span className="w-2 h-2 rounded-full bg-[rgb(218,185,165)] animate-pulse"></span>
              Acompanhamento Especializado
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
              Consulta Pediátrica de <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(218,185,165)] to-[rgb(198,165,145)]">
                Pré-Natal: Como Funciona?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Confira etapa por etapa como preparamos o melhor início de vida para o seu bebê.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgb(218,185,165)]/50 to-transparent transform -translate-x-1/2"></div>
            <div className="space-y-20 lg:space-y-32">
              {steps.map((step) => {
                const isEven = step.number % 2 === 0;
                return (
                  <div
                    key={step.number}
                    className="relative animate-fade-in-stagger"
                    style={{ animationDelay: `${step.delay}ms` }}
                  >
                    <div
                      className={`flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 items-center ${
                        isEven ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      <div
                        className={`relative group w-full max-w-lg mx-auto ${
                          isEven ? 'lg:ml-auto lg:mr-0 lg:col-start-2' : 'lg:mr-auto lg:ml-0'
                        }`}
                      >
                        <div className="relative">
                          <div className="absolute -inset-4 bg-gradient-to-tr from-[rgb(251,203,185)]/20 to-[rgb(235,208,217)]/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[rgb(218,185,165)]/10 border-4 border-white bg-white transform transition-transform duration-500 group-hover:scale-[1.01]">
                            <img
                              src={step.image}
                              alt={`Etapa ${step.number}`}
                              className="w-full h-auto"
                              loading="lazy"
                            />
                          </div>
                          <div className="lg:hidden absolute -top-4 -left-4 z-20">
                            <div className="w-12 h-12 rounded-full bg-white text-[rgb(218,185,165)] font-bold text-lg shadow-lg flex items-center justify-center border-2 border-[rgb(218,185,165)]/20">
                              {step.number}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl border border-[rgb(218,185,165)]/30 relative group cursor-default transition-transform hover:scale-110">
                          <div className="absolute inset-0 rounded-full bg-[rgb(218,185,165)]/10 group-hover:animate-ping opacity-30"></div>
                          <span className="text-2xl font-bold text-[rgb(198,165,145)]">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <div className={`hidden lg:block ${isEven ? 'lg:col-start-1' : 'lg:col-start-2'}`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center mt-32 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[rgb(218,185,165)] text-white rounded-full font-semibold text-lg shadow-xl shadow-[rgb(218,185,165)]/30 hover:shadow-2xl hover:shadow-[rgb(218,185,165)]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}
