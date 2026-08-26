import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const BANNER_URL =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=csamanaus%2Fcarrosel%2Fimage%2078.png&version_id=null';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[calc(100dvh-5rem)] mt-20 min-h-[600px] flex flex-col items-center justify-end pb-48 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={BANNER_URL}
          alt="Banner Principal"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-10 py-5 bg-secondary hover:bg-secondary/90 text-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(var(--secondary-rgb),0.6)]"
          >
            Agende seu Teste Gratuito
            <ArrowRight className="lucide lucide-arrow-right ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center px-10 py-5 bg-black/40 hover:bg-black/60 text-white text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-md border border-white/40 hover:border-white"
          >
            Conheça Nossos Serviços
          </a>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-20 pointer-events-none">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
