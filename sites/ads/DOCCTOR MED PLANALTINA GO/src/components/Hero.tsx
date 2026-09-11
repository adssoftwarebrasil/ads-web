import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-32 md:pt-32 lg:pt-40 pb-12 md:pb-16 lg:pb-20"
      style={{
        background: 'linear-gradient(135deg, #2d4a3e 0%, #3d5e50 100%)',
      }}
    >
      <div className="container-custom w-full px-5 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Conteúdo Textual */}
          <div className="flex-1 text-white animate-fade-in-up w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6 leading-tight px-2 md:px-0">
              Cuide-se com Quem Entende do Assunto
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5 md:mb-6 opacity-90 px-2 md:px-0">
              Saúde Integral ao Seu Alcance em Planaltina-GO
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-8 opacity-85 max-w-2xl leading-relaxed px-2 md:px-0">
              Atendimento médico humanizado com tecnologia de ponta e preços acessíveis. Da pediatria à cardiologia, cuidamos de toda a sua família.
            </p>
            
            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 px-2 md:px-0">
              
                <a href="https://wa.me/5561982400076?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#f37f1a] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#d97015] transition-all duration-300 hover:scale-105 animate-pulse-soft shadow-lg"
              >
                <MessageCircle size={22} className="sm:w-6 sm:h-6" />
                Agende pelo WhatsApp
              </a>
              <button
                onClick={() => {
                  const element = document.querySelector('#especialidades');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-[#2d4a3e] transition-all duration-300"
              >
                Conheça Nossas Especialidades
              </button>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex-1 w-full lg:w-auto mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-4 md:mx-0">
              <div className="absolute inset-0 bg-[#f37f1a] opacity-20"></div>
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=docctormedplanaltina%2Fdocctormedplanaltina%2F2023-04-24.webp&version_id=null"
                alt="Fachada da Clínica Docctor Med"
                className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}