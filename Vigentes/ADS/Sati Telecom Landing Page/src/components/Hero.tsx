import { Cloud, MessageSquare, ArrowRight, Phone, Video } from 'lucide-react';
import { scrollToSection } from '../lib/nav';

const features = [
  { Icon: Phone, iconClass: 'lucide-phone', label: 'Ligações Ilimitadas' },
  { Icon: Cloud, iconClass: 'lucide-cloud', label: 'PABX em Nuvem' },
  { Icon: MessageSquare, iconClass: 'lucide-message-square', label: 'Chat Integrado' },
  { Icon: Video, iconClass: 'lucide-video', label: 'Videoconferência' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-24"
    >
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://storage.lucasmendes.dev/site-sp/sati%2Ffile.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#3d009e]/90 via-[#3d009e]/85 to-[#2d0075]/90"></div>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#bc0000] rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/30 shadow-lg hover:bg-white/20 transition-all duration-300">
          <Cloud className="lucide lucide-cloud w-5 h-5 text-white mr-2" />
          <span className="text-white text-sm font-semibold">Operadora Credenciada 3CX</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Simplifique e Dobre a Produtividade
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            com PABX em Nuvem
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-white mb-3 max-w-3xl mx-auto font-medium">
          40 anos de experiência conectando o sucesso da sua empresa
        </p>
        <p className="text-base sm:text-lg text-white/90 mb-12 font-light">
          ✓ Cobertura Nacional | ✓ Suporte Humanizado | ✓ Tecnologia de Ponta
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={() => scrollToSection('contact')}
            className="group bg-[#bc0000] text-white px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#9a0000] transition-all duration-300 shadow-2xl hover:shadow-[#bc0000]/50 hover:scale-105 w-full sm:w-auto relative overflow-hidden"
          >
            <span className="relative z-10">SOLICITE ORÇAMENTO GRÁTIS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#bc0000] to-[#d10000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="group bg-white/10 backdrop-blur-md text-white px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg border-2 border-white hover:bg-white hover:text-[#3d009e] transition-all duration-300 shadow-lg w-full sm:w-auto"
          >
            <span className="flex items-center justify-center">
              <MessageSquare className="lucide lucide-message-square w-5 h-5 mr-2" />
              FALE NO WHATSAPP
            </span>
          </button>
        </div>
        <button
          onClick={() => scrollToSection('services')}
          className="text-white/90 hover:text-white transition-all duration-300 inline-flex items-center group text-sm sm:text-base font-medium"
        >
          <span className="mr-2 border-b border-white/50 group-hover:border-white pb-1">
            Agilize sua Portabilidade
          </span>
          <ArrowRight className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </button>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((f) => (
            <div
              key={f.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <f.Icon
                className={`lucide ${f.iconClass} w-8 h-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform`}
              />
              <p className="text-white text-sm font-medium">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
