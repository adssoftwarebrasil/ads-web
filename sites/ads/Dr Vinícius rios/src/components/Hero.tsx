import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';

const WHATSAPP =
  'https://api.whatsapp.com/send?phone=5562999220030&text=Olá, gostaria de agendar uma consulta';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[92svh] flex flex-col justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden pt-20 pb-10 md:pt-0 md:pb-0"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] opacity-50"></div>
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full relative z-10 h-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center h-full">
          <div className="flex flex-col justify-center">
            <div className="mb-4 md:mb-6">
              <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4">
                <CheckCircle2 size={12} />
                Ortopedista Especialista
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                Cuide da sua <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Coluna Vertebral
                </span>
              </h1>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl opacity-90">
              Dr. Vinícius Rios oferece tratamento humanizado e técnicas avançadas para eliminar
              dores e devolver sua qualidade de vida em Goiânia.
            </p>
            <div className="md:hidden w-full mb-6">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent z-10"></div>
                <img
                  src="https://storage.lucasmendes.dev/site-sp/drviniciusortopedista%2FExperie%CC%82ncia%20Reconhecida.jpg"
                  alt="Dr. Vinícius Rios"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-900/30 active:scale-[0.98]"
              >
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                Agendar Consulta
              </a>
              <a
                href="#sobre"
                className="flex items-center justify-center gap-2 bg-gray-800/50 hover:bg-gray-800 text-gray-200 border border-gray-700 hover:border-gray-600 px-6 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Saiba Mais
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="hidden md:block relative h-full max-h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800/50 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/drviniciusortopedista%2FExperie%CC%82ncia%20Reconhecida.jpg"
                alt="Dr. Vinícius Rios Desktop"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
