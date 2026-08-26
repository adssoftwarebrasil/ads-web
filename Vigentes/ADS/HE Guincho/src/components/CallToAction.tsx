import { Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <section
      className="relative py-28 px-4 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgb(68, 235, 21) 0%, rgb(50, 200, 10) 50%, rgb(40, 180, 0) 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="opacity-0">
          <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Phone
              width={64}
              height={64}
              className="lucide lucide-phone text-white"
              style={{ filter: 'drop-shadow(rgba(0, 0, 0, 0.3) 0px 4px 10px)' }}
            />
          </div>
        </div>
        <h2
          className="text-white font-black text-5xl lg:text-7xl mb-6 opacity-0"
          style={{
            animationDelay: '0.2s',
            letterSpacing: '0.02em',
            textShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 20px',
          }}
        >
          ATENDIMENTO 24 HORAS
        </h2>
        <p
          className="text-white text-2xl mb-10 font-medium opacity-0"
          style={{ animationDelay: '0.3s', textShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 10px' }}
        >
          Estamos prontos para te atender a qualquer hora
        </p>
        <a
          href="tel:+5534998796167"
          className="inline-block text-white font-black text-4xl lg:text-6xl mb-10 tracking-wider hover:scale-105 transition-all duration-300 opacity-0"
          style={{ animationDelay: '0.4s', textShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 15px' }}
        >
          (34) 99879-6167
        </a>
        <div className="opacity-0" style={{ animationDelay: '0.5s' }}>
          <a
            href="tel:+5534998796167"
            className="inline-block bg-white text-[rgb(68,235,21)] font-bold px-14 py-6 rounded-full text-xl button-hover shadow-2xl"
          >
            LIGAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
}
