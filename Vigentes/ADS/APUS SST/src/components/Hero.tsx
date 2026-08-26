import { Shield, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(28, 9, 31, 0.9) 0%, rgba(78, 20, 104, 0.85) 100%), url("https://storage.lucasmendes.dev/site-sp/apus%2Fimg%2Fhero-background.JPG")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 opacity-5 mix-blend-overlay">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in py-12 lg:py-0">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10">
              <Shield size={20} className="lucide lucide-shield text-[rgb(253,144,41)]" />
              <span className="text-sm font-medium">Experiência comprovada</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              Mantenha Sua Empresa em Conformidade e Seus Colaboradores Protegidos
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-md max-w-xl">
              Soluções completas em Saúde e Segurança do Trabalho para empresas em Recife e região
              metropolitana. Atendimento ágil, documentação impecável e zero multas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://wa.me/558192487254"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[rgb(253,144,41)] text-white font-bold rounded-lg hover:bg-[rgb(233,124,21)] transition-all duration-200 hover:shadow-2xl hover:scale-105"
              >
                <span>Falar com Especialista</span>
                <ArrowRight size={20} className="lucide lucide-arrow-right " />
              </a>
              <button
                onClick={() => scrollToSection('servicos')}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/15 transition-all duration-200 border-2 border-white/30"
              >
                <span>Conhecer Serviços</span>
              </button>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center relative">
            <div
              className="absolute inset-0 bg-[rgb(253,144,41)] rounded-full blur-[100px] opacity-30 animate-pulse"
              style={{ transform: 'scale(0.9) translateY(20px)' }}
            ></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/apus%2Fimg%2Fhero-img.JPG"
              alt="Profissional de segurança do trabalho em campo"
              className="relative z-10 rounded-2xl shadow-2xl border border-white/10 object-cover max-h-[650px] w-auto hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
