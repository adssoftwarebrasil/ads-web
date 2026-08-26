import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative py-24 bg-gradient-to-b from-white to-[rgb(251,203,185)]/10 overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgb(218,185,165)]/30 to-transparent"></div>
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[rgb(218,185,165)]/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[rgb(235,208,217)]/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(218,185,165)]/10 text-[rgb(218,185,165)] font-semibold text-sm mb-6 border border-[rgb(218,185,165)]/20">
              <span className="w-2 h-2 rounded-full bg-[rgb(218,185,165)] animate-pulse"></span>
              Depoimentos
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
              O Carinho de Quem <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(218,185,165)] to-[rgb(198,165,145)]">
                Confia em Nós
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Veja o que as famílias dizem sobre a experiência de cuidado com a Dra. Mariana.
            </p>
          </div>
          <div className="relative animate-fade-in-up">
            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-[rgb(218,185,165)]/10 border border-[rgb(218,185,165)]/20 relative overflow-hidden">
              <Quote
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                className="lucide lucide-quote absolute top-4 right-8 text-[rgb(218,185,165)]/10 rotate-180"
              />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex gap-1 mb-8 text-[rgb(218,185,165)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="lucide lucide-star "
                    />
                  ))}
                </div>
                <div className="min-h-[180px] flex items-center justify-center">
                  <p className="text-xl md:text-3xl text-gray-700 leading-relaxed font-light italic">
                    "Estou muito satisfeita com o atendimento. A Dra. Mariana se preocupa
                    genuinamente com a saúde do meu filho e isso é maravilhoso!"
                  </p>
                </div>
                <div className="w-16 h-1 bg-[rgb(218,185,165)] rounded-full my-8"></div>
                <h4 className="text-xl font-bold text-gray-800">Ana Clara</h4>
                <p className="text-sm text-gray-500 mt-1">Mãe/Pai de Paciente</p>
              </div>
            </div>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white p-4 rounded-full shadow-lg text-gray-600 hover:text-[rgb(218,185,165)] hover:scale-110 transition-all duration-300 border border-gray-100 hidden md:flex"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="lucide lucide-chevron-left "
              />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white p-4 rounded-full shadow-lg text-gray-600 hover:text-[rgb(218,185,165)] hover:scale-110 transition-all duration-300 border border-gray-100 hidden md:flex"
              aria-label="Próximo depoimento"
            >
              <ChevronRight
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="lucide lucide-chevron-right "
              />
            </button>
            <div className="flex justify-center gap-3 mt-10">
              <button
                className="h-2 rounded-full transition-all duration-300 bg-[rgb(218,185,165)]/30 w-2 hover:bg-[rgb(218,185,165)]/60"
                aria-label="Ir para depoimento 1"
              ></button>
              <button
                className="h-2 rounded-full transition-all duration-300 bg-[rgb(218,185,165)] w-8"
                aria-label="Ir para depoimento 2"
              ></button>
              <button
                className="h-2 rounded-full transition-all duration-300 bg-[rgb(218,185,165)]/30 w-2 hover:bg-[rgb(218,185,165)]/60"
                aria-label="Ir para depoimento 3"
              ></button>
              <button
                className="h-2 rounded-full transition-all duration-300 bg-[rgb(218,185,165)]/30 w-2 hover:bg-[rgb(218,185,165)]/60"
                aria-label="Ir para depoimento 4"
              ></button>
            </div>
            <div className="flex justify-between items-center mt-8 md:hidden px-4">
              <button className="bg-white p-3 rounded-full shadow-md text-gray-600">
                <ChevronLeft
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="lucide lucide-chevron-left "
                />
              </button>
              <button className="bg-white p-3 rounded-full shadow-md text-gray-600">
                <ChevronRight
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="lucide lucide-chevron-right "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
