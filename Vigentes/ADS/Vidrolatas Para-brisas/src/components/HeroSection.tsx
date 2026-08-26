import { ArrowRight, Award } from 'lucide-react';
import { useWhatsAppModal, whatsappLink } from '../context/WhatsAppModalContext';

const heroMessage = 'Olá! Gostaria de solicitar um orçamento para os serviços da Vidrolatas.';

export default function HeroSection() {
  const { openModal } = useWhatsAppModal();

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/vidrolatas%2Ffachada-loja-automoveis.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#012d78]/60 via-[#012d78]/40 to-[#012d78]/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Especialistas em Vidros Automotivos em Goiânia
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Troca de para-brisas, vidros de porta, reparo de trincas e insulfilm com qualidade e garantia desde 1992
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <a
              href={whatsappLink(heroMessage)}
              onClick={(e) => {
                e.preventDefault();
                openModal(heroMessage);
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#0298d2] text-white px-8 py-4 rounded-lg hover:bg-[#66c2e8] transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-[#012d78] transition-all duration-300 hover:scale-105 font-semibold text-lg"
            >
              Nossos Serviços
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white animate-fade-in">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Award className="text-[#0298d2]" size={24} />
              <span className="font-semibold">33 anos de experiência</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Award className="text-[#0298d2]" size={24} />
              <span className="font-semibold">Vidros originais e certificados</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}