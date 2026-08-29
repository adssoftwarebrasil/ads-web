import { Award, MessageCircle, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center pt-16 pb-8 md:min-h-screen md:pt-20 md:pb-0 overflow-hidden"
      style={{
        backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/retocars%2Fretocars-fachada-oficina-fachada-melhorada.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#fafe05]/10 border border-[#fafe05] px-3 py-1.5 md:px-4 md:py-2 rounded-full">
              <Award className="text-[#fafe05]" size={16} />
              <Award className="text-[#fafe05] hidden md:block" size={20} />
              <span className="text-[#fafe05] font-semibold text-sm md:text-base">Desde 2021</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
              Lanternagem e Pintura Automotiva de{' '}
              <span className="text-[#fafe05]">Alta Qualidade</span> em Brasília
            </h1>

            {/* Subtítulo */}
            <p className="text-sm md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Devolvemos a beleza original do seu veículo com precisão, tecnologia e garantia.
              Atendimento especializado há mais de 3 anos em Vicente Pires.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <a 
                href="https://wa.me/5561982160800?text=Olá! Vim pelo site e gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#fafe05] text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-lg hover:bg-[#fafe05]/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle size={18} className="md:hidden" />
                <MessageCircle size={24} className="hidden md:block" />
                Solicitar Orçamento
              </a>
              <button
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 md:gap-3 border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Ver Nossos Serviços
              </button>
            </div>

            {/* Trust Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-6 pt-3 md:pt-8">
              <div className="flex items-center gap-2 md:gap-3 text-white">
                <div className="bg-[#fafe05]/20 p-2 md:p-3 rounded-lg">
                  <ShieldCheck className="text-[#fafe05] md:hidden" size={18} />
                  <ShieldCheck className="text-[#fafe05] hidden md:block" size={24} />
                </div>
                <span className="font-semibold text-xs md:text-base">Garantia de Qualidade</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-white">
                <div className="bg-[#fafe05]/20 p-2 md:p-3 rounded-lg">
                  <Clock className="text-[#fafe05] md:hidden" size={18} />
                  <Clock className="text-[#fafe05] hidden md:block" size={24} />
                </div>
                <span className="font-semibold text-xs md:text-base">Seg a Sex 07h-18h</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-white">
                <div className="bg-[#fafe05]/20 p-2 md:p-3 rounded-lg">
                  <MapPin className="text-[#fafe05] md:hidden" size={18} />
                  <MapPin className="text-[#fafe05] hidden md:block" size={24} />
                </div>
                <span className="font-semibold text-xs md:text-base">Vicente Pires - DF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}