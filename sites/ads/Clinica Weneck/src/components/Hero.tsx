import { Award, Users, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-16 md:pt-20 bg-[#003870] relative overflow-hidden">
      {/* Padrão de fundo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-18 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Conteúdo Esquerdo */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 animate-fadeInUp">
            <p className="text-[#f1f5f8] text-sm sm:text-base md:text-lg font-medium">
              Há mais de 30 anos cuidando da saúde bucal, restaurando e criando novos sorrisos
            </p>
            
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Transforme seu sorriso com excelência e tecnologia de ponta
            </h1>
            
            <p className="text-[#f1f5f8]/90 text-sm sm:text-base md:text-lg leading-relaxed">
              Equipe com 15 especialistas liderados pelo Dr. Marcus Werneck, reabilitador bucal
              referência em Recife. Tecnologia avançada e atendimento humanizado para devolver sua
              saúde bucal e autoestima.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3 sm:pt-4">
              <a 
                href="https://wa.me/5581994073827?text=Olá! Gostaria de agendar uma avaliação na Clínica Werneck."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#003870] px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#f1f5f8] transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center active:scale-95"
              >
                Agende sua Avaliação
              </a>
              
              <a 
                href="https://wa.me/5581994073827"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-[#003870] transition-all duration-300 text-center active:scale-95"
              >
                Fale no WhatsApp
              </a>
            </div>

            {/* Informação sobre Convênios */}
            <p className="text-[#f1f5f8]/80 text-xs sm:text-sm font-medium italic">
              * Não atendemos convênios e planos de saúde
            </p>

            {/* Trust Icons */}
            <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-4 sm:pt-6">
              <div className="flex flex-col items-center text-center group">
                <div className="bg-white/10 p-2 sm:p-2.5 rounded-full mb-1.5 sm:mb-2 group-hover:bg-white/20 transition-colors duration-300">
                  <Award className="text-white" size={24} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white">30+ anos</p>
                <p className="text-[10px] sm:text-xs text-[#f1f5f8]/70 mt-0.5">de experiência</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="bg-white/10 p-2 sm:p-2.5 rounded-full mb-1.5 sm:mb-2 group-hover:bg-white/20 transition-colors duration-300">
                  <Users className="text-white" size={24} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white">15 especialistas</p>
                <p className="text-[10px] sm:text-xs text-[#f1f5f8]/70 mt-0.5">qualificados</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="bg-white/10 p-2 sm:p-2.5 rounded-full mb-1.5 sm:mb-2 group-hover:bg-white/20 transition-colors duration-300">
                  <Zap className="text-white" size={24} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white">Tecnologia</p>
                <p className="text-[10px] sm:text-xs text-[#f1f5f8]/70 mt-0.5">de ponta</p>
              </div>
            </div>
          </div>

          {/* Imagem Direita */}
          <div className="animate-fadeIn mt-6 md:mt-0">
            <div className="relative group max-w-lg mx-auto md:max-w-none">
              <div className="absolute -inset-3 bg-gradient-to-r from-white/20 to-[#f1f5f8]/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-white/30 to-transparent rounded-xl"></div>
              <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/clinicawerneck%2Ffoto-dentista.jpg"
                  alt="Dr. Marcus Werneck - Clínica Werneck"
                  className="rounded-xl shadow-2xl w-full h-full object-cover relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003870]/30 via-transparent to-transparent rounded-xl z-20"></div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white text-[#003870] px-4 py-2 rounded-lg shadow-xl z-30 animate-fadeInUp">
                <p className="font-bold text-base">30+ Anos</p>
                <p className="text-xs text-[#858789]">de Excelência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}