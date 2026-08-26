import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end pb-16 lg:pb-24 overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/kellysilva%2Fimg%2Fhero-1920x681.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(rgba(42, 69, 94, 0.05) 0%, rgba(42, 69, 94, 0.4) 100%)',
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
        <div className="text-center max-w-5xl mx-auto space-y-6 lg:space-y-8">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-off-white leading-tight drop-shadow-2xl">
            Direito Previdenciário <span className="text-gold-light">Humanizado</span> para Quem Mais Precisa
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="https://wa.me/5562999714722?text=Olá"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-whatsapp to-whatsapp-dark text-off-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold text-base lg:text-lg hover:from-whatsapp-dark hover:to-whatsapp transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-whatsapp/50 w-full sm:w-auto justify-center"
            >
              <WhatsAppIcon className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
              Agende sua Consulta
            </a>
            <a
              href="#areas"
              className="group inline-flex items-center gap-2 bg-off-white bg-opacity-10 backdrop-blur-sm border-2 border-off-white text-off-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold text-base lg:text-lg hover:bg-off-white hover:text-navy transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto justify-center"
            >
              Conheça os Serviços
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-gold-light rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold-light rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
