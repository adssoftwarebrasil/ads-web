import { Phone, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/asmysegcorretora/hero.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#256C8F]/40"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center mt-20">
        <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wider uppercase">
          Especialistas em Proteção
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight text-balance">
          Seguros Personalizados <br className="hidden md:block" />
          do Barreiro para
          <span className="block text-[#FA0000] drop-shadow-sm">
            todo o Brasil
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          A confiança e o atendimento próximo que você conhece em BH, agora
          protegendo seu patrimônio em qualquer lugar do país.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://api.whatsapp.com/send?phone=553186610041&text=Ol%C3%A1%2C%20tudo%20bem%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center bg-[#FA0000] text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-red-600/40 hover:-translate-y-1 w-full sm:w-auto overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></span>
            Faça sua cotação agora
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-6 px-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-fit mx-auto">
          <a
            href="tel:+5531986610041"
            className="flex items-center gap-3 text-white hover:text-[#FA0000] transition-colors font-medium"
          >
            <div className="bg-[#FA0000] p-2 rounded-full">
              <Phone size={18} />
            </div>
            +55 (31) 98661-0041
          </a>
          <div className="hidden md:block w-px h-8 bg-white/20"></div>
          <a
            href="mailto:asmysegcorretora@yahoo.com.br"
            className="flex items-center gap-3 text-white hover:text-[#FA0000] transition-colors font-medium"
          >
            <div className="bg-[#256C8F] p-2 rounded-full">
              <Mail size={18} />
            </div>
            asmysegcorretora@yahoo.com.br
          </a>
        </div>
      </div>
    </section>
  );
}
