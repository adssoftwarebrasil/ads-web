import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../data';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 md:py-12"
      style={{
        background:
          'linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(224, 231, 255) 50%, rgb(219, 234, 254) 100%)',
      }}
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight mb-4 md:mb-6">
              Brindes que <br />
              <span className="text-[#000EFF]">Marcam.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-8 max-w-md">
              Confira nossas ofertas no banner e peça seu orçamento agora.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[#000EFF] hover:bg-[#0008CC] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight
                width={22}
                height={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/bscomerc%2Fhero.png"
                alt="Banner Brindes"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </section>
  );
}
