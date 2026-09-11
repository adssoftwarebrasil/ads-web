import { CheckCircle, MessageCircle, Phone, MapPin } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL } from '../constants';

const bullets = [
  'Alívio já nas primeiras sessões',
  'Método Clix: Quiropraxia + Terapia Manual',
  'Tratamento humanizado e individualizado',
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/centropbdequiropraxia/Quiropraxia.jpg")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-cyan-brand/20 border border-cyan-brand/40 rounded-full px-4 py-1.5 mb-6"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 text-shadow">
              Ninguém merece <span className="text-cyan-brand">viver com dor</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6 max-w-lg">
              Tratamos a <strong className="text-white">causa real da sua dor</strong> — não apenas
              os sintomas. Método exclusivo desenvolvido ao longo de mais de 16 anos de experiência.
            </p>
            <div className="space-y-2.5 mb-8">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle
                    width={18}
                    height={18}
                    className="lucide lucide-check-circle text-cyan-brand shrink-0"
                  />
                  <span className="text-white/90 text-sm md:text-base">{b}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-7 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-xl text-base"
              >
                <MessageCircle
                  width={20}
                  height={20}
                  className="lucide lucide-message-circle "
                />
                Agendar Consulta
              </a>
              <a
                href={PHONE_TEL}
                className="flex items-center justify-center gap-2 border-2 border-white/40 hover:border-cyan-brand text-white hover:text-cyan-brand font-semibold px-7 py-4 rounded-full transition-all duration-200 text-base"
              >
                <Phone width={18} height={18} className="lucide lucide-phone " />
                Ligue Agora
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Phone
                  width={15}
                  height={15}
                  className="lucide lucide-phone text-cyan-brand shrink-0"
                />
                <span>(83) 3021-8790</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin
                  width={15}
                  height={15}
                  className="lucide lucide-map-pin text-cyan-brand shrink-0"
                />
                <span>Av. São Paulo, 843, João Pessoa - PB</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-end h-full pt-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-brand/10 rounded-3xl blur-xl"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/centropbdequiropraxia/Dr.-Jonatan-semfundo.png"
                alt="Dr. Jonas Guimarães - Quiropraxista"
                className="relative z-10 h-[480px] lg:h-[560px] w-auto object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <a
          href="#stats"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Saiba mais</span>
          <div className="w-0.5 h-8 bg-white/30 rounded-full animate-bounce"></div>
        </a>
      </div>
    </section>
  );
}
