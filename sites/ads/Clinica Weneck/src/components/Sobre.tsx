import { Award, Heart, Users, ArrowRight } from 'lucide-react';

export default function Sobre() {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#f1f5f8] relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#003870]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Imagem */}
          <div className="md:col-span-2">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#003870]/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Imagem principal */}
              <div className="relative">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2FUltima-atualizacao%2F1.jpeg&version_id=null"
                  alt="Dr. Marcus Werneck - Reabilitador Bucal"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Badge de credibilidade */}
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="md:col-span-3 space-y-5 sm:space-y-6">
            {/* Cabeçalho */}
            <div>
              <div className="inline-block mb-3">
                <span className="bg-[#003870]/10 text-[#003870] px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                  Conheça nosso gestor
                </span>
              </div>
              <h2 className="text-[#003870] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                Dr. Marcus Werneck
              </h2>
              <p className="text-[#858789] text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">
                Reabilitador Bucal
              </p>
            </div>

            {/* Descrição */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Com mais de três décadas de experiência, o Dr. Marcus Werneck é especialista em
              reabilitação bucal, com foco na reconstrução de arcadas dentais. Sua abordagem
              integra saúde, funcionalidade e estética, liderando uma equipe de especialistas 
              multidisciplinares nas principais especialidades odontológicas dedicando ao 
              restabelecimento e manutenção de uma saúde bucal perfeita.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Card Missão */}
              <div className="bg-white border-l-4 border-[#003870] p-4 sm:p-5 rounded-r-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-2">
                  <Heart className="text-[#003870] mt-1 flex-shrink-0" size={20} />
                  <p className="text-[#003870] font-semibold text-base sm:text-lg">Missão</p>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Restabelecer a saúde bucal com excelência técnica e acolhimento
                </p>
              </div>

              {/* Card Equipe */}
              <div className="bg-white border-l-4 border-cyan-500 p-4 sm:p-5 rounded-r-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-2">
                  <Users className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-cyan-600 font-semibold text-base sm:text-lg">Nossa Equipe</p>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Especialistas multidisciplinares nas principais especialidades odontológicas dedicando ao restabelecimento e manutenção de uma saúde bucal perfeita
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://wa.me/5581994073827?text=Olá! Gostaria de conhecer mais sobre os tratamentos com o Dr. Marcus Werneck."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#003870] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#004a8f] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                Agende uma Consulta
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
              <p className="text-[#858789] text-xs sm:text-sm mt-3">
                Atendimento personalizado com o Dr. Marcus Werneck
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}