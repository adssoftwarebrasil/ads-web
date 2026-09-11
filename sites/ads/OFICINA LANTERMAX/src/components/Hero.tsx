import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=LANTERMAX%2Fhero2.png&version_id=null")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/90 via-[#0d1f3c]/70 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#c0392b]/20 border border-[#c0392b]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f39c12] animate-pulse"></span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
            Funilaria &amp; Pintura <span className="text-[#f39c12]">Automotiva</span> de Alta Qualidade
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Especialistas em reparação e manutenção automotiva em Camaragibe — PE. Credenciados pelas principais seguradoras do Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5581996457782"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#c0392b]/30"
            >
              <Phone className="lucide lucide-phone w-5 h-5" />
              Solicitar Orçamento
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[#f39c12] text-white hover:text-[#f39c12] font-bold px-8 py-4 rounded-full text-lg transition-all duration-300"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      ></a>
    </section>
  );
}
