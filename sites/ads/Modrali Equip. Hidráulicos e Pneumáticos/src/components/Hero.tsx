import { Phone, ChevronRight } from 'lucide-react';

const STORE_URL = 'https://www.lojamodrali.com.br';
const WHATSAPP_NUMBER = '5519997536768';
const WHATSAPP_MESSAGE = 'Olá! Vim através da landing page e gostaria de mais informações.';

export function Hero() {
  return (
    <section id="inicio" className="relative w-full pt-20">
      {/* 1. Seção Principal (Fachada/Hero) agora no topo */}
      <div
        className="relative w-full min-h-[100vh] flex items-center justify-start overflow-hidden bg-[#00476F]"
        style={{
          backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/lojamodrali/heeero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay para leitura */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Soluções Hidráulicas de{' '}
              <span className="text-[#FF8337]">Alta Qualidade</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
              Desde 1994 oferecendo equipamentos hidráulicos e pneumáticos de
              excelência para transporte, indústria, agricultura e mineração.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#FF8337] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e67430] transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Ver Produtos <ChevronRight className="ml-2" size={22} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[#00476F] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <Phone className="mr-2" size={22} /> Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}