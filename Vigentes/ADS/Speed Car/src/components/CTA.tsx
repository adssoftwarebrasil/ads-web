import WhatsAppIcon from './WhatsAppIcon';
import Reveal from './Reveal';

export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-speedcar-red"></span>
            <span className="text-speedcar-red text-xs font-bold tracking-[0.2em] uppercase">
              Agende agora
            </span>
            <span className="h-[2px] w-8 bg-speedcar-red"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Seu Carro Merece o<br />
            <span className="text-speedcar-red">Melhor Cuidado</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Não espere o problema aparecer. Agende sua revisão preventiva e mantenha seu veículo
            sempre em dia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://wa.me/5566984369336"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-speedcar-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-sm font-bold tracking-wide uppercase transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-900/30 inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#contato"
              className="border-2 border-white/25 hover:border-white/60 text-white px-8 py-4 rounded-lg text-sm font-bold tracking-wide uppercase transition-all hover:bg-white/10 inline-flex items-center justify-center"
            >
              Enviar Mensagem
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
